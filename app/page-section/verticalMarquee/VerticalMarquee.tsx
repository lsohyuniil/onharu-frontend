"use client";
import { Marquee } from "@/components/ui/marquee";
import { MarqueeCard } from "./MarqueeCard";

interface CardItemProps {
  id: string;
  storename: string;
  contents: string;
  date: string;
}

const CardItems: CardItemProps[] = [
  {
    id: "1",
    storename: "메가커피",
    contents: "사장님 매번 친절하게 대해주셔서 감사합니다. 나중에 돈많이벌어서 꼭 갚을게요",
    date: "2026.12.25",
  },
  {
    id: "23",
    storename: "메가커피",
    contents: "사장님 매번 친절하게 대해주셔서 감사합니다. 나중에 돈많이벌어서 꼭 갚을게요",
    date: "2026.12.25",
  },
  {
    id: "41",
    storename: "메가커피",
    contents: "사장님 매번 친절하게 대해주셔서 감사합니다. 나중에 돈많이벌어서 꼭 갚을게요",
    date: "2026.12.25",
  },
  {
    id: "1345",
    storename: "메가커피",
    contents: "사장님 매번 친절하게 대해주셔서 감사합니다. 나중에 돈많이벌어서 꼭 갚을게요",
    date: "2026.12.25",
  },
  {
    id: "136",
    storename: "메가커피",
    contents: "사장님 매번 친절하게 대해주셔서 감사합니다. 나중에 돈많이벌어서 꼭 갚을게요",
    date: "2026.12.25",
  },
  {
    id: "12454",
    storename: "메가커피",
    contents: "사장님 매번 친절하게 대해주셔서 감사합니다. 나중에 돈많이벌어서 꼭 갚을게요",
    date: "2026.12.25",
  },
  {
    id: "1234",
    storename: "메가커피",
    contents: "사장님 매번 친절하게 대해주셔서 감사합니다. 나중에 돈많이벌어서 꼭 갚을게요",
    date: "2026.12.25",
  },
];
const firstRow = CardItems.slice(0, CardItems.length / 2);
const secondRow = CardItems.slice(CardItems.length / 2);

export const VerticalMarquee = () => {
  return (
    <div className="relative flex h-82 w-full flex-row items-center justify-center overflow-hidden lg:h-[713px]">
      <Marquee pauseOnHover vertical className="flex-1 [--duration:20s]">
        {firstRow.map(item => (
          <MarqueeCard key={item.id} {...item} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="flex-1 [--duration:20s]">
        {secondRow.map(item => (
          <MarqueeCard key={item.id} {...item} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b"></div>
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t"></div>
    </div>
  );
};
