import ChatList from "./components/ChatList";
import ChatListEmpty from "./components/ChatListEmpty";
import { chatListMock } from "./data/mockData";

export default function ChatPage() {
  const hasChats = chatListMock.length > 0;

  return (
    <div>
      {hasChats ? (
        <div className="mt-section-sm-top mb-section-sm-bottom md:mt-section-lg-top md:mb-section-lg-bottom wrapper min-h-screen">
          <ChatList name="코끼리땃쥐" chatList={chatListMock} />
        </div>
      ) : (
        <ChatListEmpty />
      )}
    </div>
  );
}
