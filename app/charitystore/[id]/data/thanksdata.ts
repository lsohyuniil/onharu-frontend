export interface ThanksCardProps {
  id: string;
  name: string;
  date: string;
  contents: string;
}

export const ThanksData: ThanksCardProps[] = Array.from({ length: 2 }, (_, i) => ({
  id: `${i}cards`,
  name: "코끼리땃쥐",
  date: "2025년 12월 31일",
  contents: "감사히 잘 먹고간요 해피 크리스마스 냠냠쩝쩝",
}));
