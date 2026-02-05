import { ChatItem } from "../types";
import { ChatListItem } from "./ChatListItem";

interface Props {
  name: string;
  chatList: ChatItem[];
  selectedChat: ChatItem | null;
  onSelectChat: (chat: ChatItem) => void;
}

export function ChatListPanel({ name, chatList, selectedChat, onSelectChat }: Props) {
  return (
    <div
      className={`wrapper md:border-border h-[calc(100vh-120px)] w-full overflow-y-auto md:max-w-133.75 md:rounded-[10px] md:border md:p-7.5 ${
        selectedChat ? "hidden md:block" : ""
      }`}
    >
      <h3 className="text-md mb-4.25 font-bold sm:mb-8.75 sm:text-2xl">
        <span className="block">{name}님의</span>
        <span className="block">대화방입니다 :{")"}</span>
      </h3>

      {chatList.map((chat, i) => (
        <ChatListItem
          key={i}
          chat={chat}
          isSelected={selectedChat === chat}
          onSelect={() => onSelectChat(chat)}
        />
      ))}
    </div>
  );
}
