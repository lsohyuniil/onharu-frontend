import { CategoryName } from "@/components/feature/category/data";
export interface CharityMain {
  id: string;
  storelink: string;
  images: [];
  name: string;
  introduction: string;
  categoryName: CategoryName;
  tags?: string[];
  openTime: string; //delete?
  closeTime: string; //delete?
  isOpen: boolean;
  hasSharing: boolean;
}
