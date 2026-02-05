"use client";

import { useState } from "react";
import { ChatItem } from "../types";
import { ChatListPanel } from "./ChatListPanel";
import { ChatRoomPanel } from "./ChatRoomPanel";

interface ChatListProps {
  name: string;
  chatList: ChatItem[];
}

export default function ChatList({ name, chatList }: ChatListProps) {
  const [selectedChat, setSelectedChat] = useState<ChatItem | null>(null);

  return (
    <div className="flex justify-center sm:justify-baseline sm:gap-7.5">
      <ChatListPanel
        name={name}
        chatList={chatList}
        selectedChat={selectedChat}
        onSelectChat={setSelectedChat}
      />

      <ChatRoomPanel selectedChat={selectedChat} onBack={() => setSelectedChat(null)} />
    </div>
  );
}
