// types/chat.ts
export type MessageOwner = "user" | "bot";

export interface ChatMessage {
  owner: MessageOwner;
  text: string;
}
