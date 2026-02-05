import { ChatItem } from "../types";
import ChatRoom from "./ChatRoom";

interface Props {
  selectedChat: ChatItem | null;
  onBack: () => void;
}

export function ChatRoomPanel({ selectedChat, onBack }: Props) {
  return (
    <div className={`w-full ${selectedChat ? "block" : "hidden md:block"}`}>
      <ChatRoom chat={selectedChat} onBack={onBack} />
    </div>
  );
}
