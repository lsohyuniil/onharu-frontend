import { ThanksCardProps } from "../data/thanksdata";

export const ThanksCard = ({ card }: { card: ThanksCardProps[] }) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-5">
      {card.map(c => (
        <div key={c.id} className="rounded-md border border-gray-300 bg-gray-50 p-4 md:p-7.5">
          <p className="text-sm font-semibold md:text-base">{c.name}님의 따뜻한 감사 인사</p>
          <p className="text-xs text-gray-700 md:text-sm">{c.date}</p>
          <p className="mt-5 text-sm md:text-base">{c.contents}</p>
        </div>
      ))}
    </div>
  );
};
