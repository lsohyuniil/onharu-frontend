import { useState } from "react";
import { getDistance } from "../map/utils/getDistance";
import { NearbyStore } from "@/app/nearby/type/type";

export const useFilterStore = ({
  mylocation,
  data,
}: {
  mylocation: { lat: number; lng: number };
  data: NearbyStore[];
}) => {
  const [storeData, setStoreData] = useState<NearbyStore[]>([]);

  const handleFilterStore = () => {
    const sorted = [...data].sort((a, b) => {
      const distA = getDistance(mylocation.lat, mylocation.lng, a.lat, a.lng);
      const distB = getDistance(mylocation.lat, mylocation.lng, b.lat, b.lng);
      return distA - distB;
    });

    setStoreData(sorted);
  };

  return { storeData, handleFilterStore };
};
