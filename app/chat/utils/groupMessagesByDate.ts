import { ChatMessage } from "../types";

export type RenderableItem =
  | { type: "date"; date: string }
  | { type: "message"; data: ChatMessage };

export function buildRenderableMessages(messages: ChatMessage[]): RenderableItem[] {
  const result: RenderableItem[] = [];

  messages.forEach((msg, index) => {
    const prevDate = index > 0 ? messages[index - 1].date : null;

    // 날짜가 바뀌는 시점
    if (msg.date !== prevDate) {
      result.push({ type: "date", date: msg.date });
    }

    result.push({ type: "message", data: msg });
  });

  return result;
}
