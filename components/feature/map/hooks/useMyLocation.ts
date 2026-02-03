import { useRef, useState } from "react";

export const useMyLocation = () => {
  const OriginLocationRef = useRef({ lat: 0, lng: 0 });
  const [mylocation, SetMyLocation] = useState({ lat: 0, lng: 0 });

  const handleMyLocation = (lat: number, lng: number) => {
    SetMyLocation({
      lat: lat,
      lng: lng,
    });
  };

  return { OriginLocationRef, mylocation, handleMyLocation };
};
