export interface ChatItem {
  id: number;
  sender: string;
  message: string;
  time: string;
  readAt: boolean;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  senderType: "me" | "other";
  message: string;
  date: string;
  time: string;
}
