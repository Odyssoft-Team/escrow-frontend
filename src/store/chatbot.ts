// import { create } from "zustand";

// interface ChatbotStore {
//   openChatbot: boolean;
//   setOpenChatbot: (openChatbot: boolean) => void;
//   openChatbotMobile: boolean;
//   setOpenChatbotMobile: (openChatbotMobile: boolean) => void;
// }

// export const useChatbotStore = create<ChatbotStore>((set) => ({
//   openChatbot: false,
//   setOpenChatbot: (openChatbot) => set({ openChatbot }),
//   openChatbotMobile: false,
//   setOpenChatbotMobile: (openChatbotMobile) => set({ openChatbotMobile }),
// }));

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ChatMessage } from "@/types/chatbot";

interface ChatbotStore {
  openChatbot: boolean;
  setOpenChatbot: (openChatbot: boolean) => void;

  openChatbotMobile: boolean;
  setOpenChatbotMobile: (openChatbotMobile: boolean) => void;

  messages: ChatMessage[];
  addMessage: (message: ChatMessage) => void;
  clearMessages: () => void;
}

export const useChatbotStore = create<ChatbotStore>()(
  persist(
    (set) => ({
      openChatbot: false,
      setOpenChatbot: (openChatbot) => set({ openChatbot }),

      openChatbotMobile: false,
      setOpenChatbotMobile: (openChatbotMobile) => set({ openChatbotMobile }),

      messages: [],
      addMessage: (message) =>
        set((state) => ({ messages: [...state.messages, message] })),
      clearMessages: () => set({ messages: [] }),
    }),
    {
      name: "chatbot-storage", // clave en localStorage
    }
  )
);
