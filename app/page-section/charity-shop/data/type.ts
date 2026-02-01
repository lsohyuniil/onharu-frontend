export interface CardProps {
  id: string;
  storelink: string;
  storename: string;
  storeIntroduce: string;
  category: string;
  tags?: string[];
  openTime: string;
  closeTime: string;
  hasSharing: boolean;
}
