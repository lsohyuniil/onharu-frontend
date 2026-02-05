import { DateDivider } from "./DateDivider";
import { OtherMessage } from "./OtherMessage";
import { MyMessage } from "./MyMessage";
import { buildRenderableMessages } from "../utils/groupMessagesByDate";
import { formatDateLabel } from "@/utils/formatDateLabel";
import { ChatMessage } from "../types";

type MessageListProps = {
  messages: ChatMessage[];
};

export function MessageList({ messages }: MessageListProps) {
  const items = buildRenderableMessages(messages);

  return (
    <>
      {items.map((item, index) => {
        if (item.type === "date") {
          return <DateDivider key={`date-${index}`} date={formatDateLabel(item.date)} />;
        }

        const msg = item.data;

        return msg.senderType === "me" ? (
          <MyMessage key={msg.id} message={msg.message} time={msg.time} />
        ) : (
          <OtherMessage key={msg.id} message={msg.message} time={msg.time} />
        );
      })}
    </>
  );
}
