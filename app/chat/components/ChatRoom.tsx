"use client";

import { ChatItem } from "../types";
import { MessageList } from "./MessageList";
import { ChatRoomEmpty } from "./ChatRoomEmpty";
import { ChatHeader } from "./ChatHeader";
import { ChatInputArea } from "./ChatInputArea";
import { messages } from "../data/mockData";

interface ChatRoomProps {
  chat: ChatItem | null;
  onBack: () => void;
}

export default function ChatRoom({ chat, onBack }: ChatRoomProps) {
  if (!chat) return <ChatRoomEmpty />;

  return (
    <div className="border-border flex h-[calc(100vh-120px)] w-full flex-col justify-between rounded-[10px] border">
      <ChatHeader sender={chat.sender} onBack={onBack} />

      <div className="px-wrapper flex-1 overflow-y-auto sm:px-7.5">
        <MessageList messages={messages} />
      </div>

      <ChatInputArea />
    </div>
  );
}
