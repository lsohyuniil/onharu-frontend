import { ThanksCardProps } from "../data/thanksdata";

export const ThanksCard = ({ card }: { card: ThanksCardProps[] }) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:gap-5">
      {card.map(c => (
        <div key={c.id} className="rounded-md border border-gray-300 bg-gray-50 p-4 md:p-7.5">
          <p className="font-semibold">{c.name}님의 따뜻한 감사 인사</p>
          <p className="text-sm text-gray-700">{c.date}</p>
          <p className="mt-5">{c.contents}</p>
        </div>
      ))}
    </div>
  );
};
