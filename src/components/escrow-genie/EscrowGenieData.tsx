"use client";

import React, { useState, useRef, useEffect, FormEvent } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SendHorizonal, Trash2 } from "lucide-react";
import { MessageOwner } from "@/types/chatbot";
import { getBotResponse } from "@/services/getBotResponse";
import { useAuthStore } from "@/store/auth.store";
import { useChatbotStore } from "@/store/chatbot";

const USER_COLOR = "#cce5ff";
const BOT_COLOR = "#d4edda";

// Detecta *negrita* y devuelve un array de [texto, esNegrita]
function parseBold(text: string): React.ReactNode[] {
  const regex = /\*([^\*]+)\*/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(<strong key={match.index}>{match[1]}</strong>);
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts;
}

// Parser general para el mensaje del bot
function parseBotMessage(text: string): React.ReactNode {
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const elements: React.ReactNode[] = [];
  let listItems: string[] = [];

  lines.forEach((line, idx) => {
    // Detecta líneas de lista numerada
    if (/^\d+\.\s/.test(line)) {
      listItems.push(line.replace(/^\d+\.\s*/, ""));
    } else {
      // Si hay ítems acumulados, renderiza la lista
      if (listItems.length) {
        elements.push(
          <ol className="list-decimal ml-5 my-2" key={`ol-${idx}`}>
            {listItems.map((item, i) => (
              <li key={i}>{parseBold(item)}</li>
            ))}
          </ol>
        );
        listItems = [];
      }
      // Si la línea no está vacía, es un párrafo
      if (line) {
        elements.push(
          <p className="mb-2" key={`p-${idx}`}>
            {parseBold(line)}
          </p>
        );
      }
    }
  });

  // Si termina en lista
  if (listItems.length) {
    elements.push(
      <ol className="list-decimal ml-5 my-2" key={`ol-last`}>
        {listItems.map((item, i) => (
          <li key={i}>{parseBold(item)}</li>
        ))}
      </ol>
    );
  }

  return elements;
}

export default function EscrowGenieData() {
  return (
    <>
      <div className="flex flex-col items-start gap-2 w-full">
        <h1 className="font-bold text-primary text-[1.75rem] leading-[1] xl:text-4xl 2xl:text-5xl">
          Escrow Genie
        </h1>
      </div>
      <Chat />
    </>
  );
}

export function Chat() {
  const { messages, addMessage, clearMessages } = useChatbotStore();
  const [input, setInput] = useState<string>("");
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [loadingChat, setLoadingChat] = useState<boolean>(false);
  const { userLoggedIn } = useAuthStore();

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (msg: string) => {
    setLoadingChat(true);
    const response = await getBotResponse(String(userLoggedIn?.user_id), msg);

    console.log(response.data);

    if (!response.success) {
      addMessage({ owner: "bot", text: "I'm sorry, something went wrong" });
      setLoadingChat(false);
      return;
    } else {
      addMessage({ owner: "bot", text: response.data });
    }

    setLoadingChat(false);
  };

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    addMessage({ owner: "user", text: input });

    sendMessage(input);
    setInput("");
  };

  const getMessageStyle = (owner: MessageOwner): React.CSSProperties => ({
    background: owner === "user" ? USER_COLOR : BOT_COLOR,
    color: "#333",
    alignSelf: owner === "user" ? "flex-end" : "flex-start",
    borderRadius: 8,
    padding: "6px 12px",
    margin: "4px 0",
    maxWidth: "90%",
    wordBreak: "break-word",
  });

  const handleClear = () => {
    if (confirm("¿Seguro que quieres eliminar toda la conversación?")) {
      clearMessages();
    }
  };
  return (
    <div className="w-full max-w-[500px] h-[80dvh] flex flex-col border p-2 rounded-md">
      <div className="flex justify-between items-center mb-2 border-b">
        <h2 className="text-base font-semibold text-content">Conversation</h2>
        {messages.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="text-red-500 hover:text-red-700 hover:bg-red-50 text-xs"
          >
            <Trash2 className="size-3" />
            Delete conversation
          </Button>
        )}
      </div>
      <div className="flex-1 overflow-y-auto max-h-[80dvh] mb-2 pr-2 pb-2 flex flex-col">
        {messages.map((msg, idx) => (
          <div key={idx} style={getMessageStyle(msg.owner)} className="text-sm">
            {msg.owner === "bot" ? parseBotMessage(msg.text) : msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      {loadingChat && (
        <div className="flex gap-2 items-center">
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
          <span className="text-sm text-gray-500">Escribiendo...</span>
        </div>
      )}
      <form onSubmit={handleSend} className="flex gap-2">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
          className="flex-1"
        />
        <Button
          type="submit"
          className="bg-[#007bff] text-white hover:bg-[#0069d9] cursor-pointer"
        >
          <SendHorizonal />
        </Button>
      </form>
    </div>
  );
}
