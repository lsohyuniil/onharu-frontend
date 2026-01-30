import { getDistance } from "./getDistance";
import { NerabyStore } from "@/app/nearby/type/type";

export const sortByDistance = (myLat: number, myLng: number, stores: NerabyStore[]) => {
  return [...stores].sort((a, b) => {
    const distA = getDistance(myLat, myLng, a.lat, a.lng);
    const distB = getDistance(myLat, myLng, b.lat, b.lng);
    return distA - distB;
  });
};
