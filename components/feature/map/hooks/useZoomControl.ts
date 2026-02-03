import { useState, useEffect } from "react";

export const useZoomControl = (map: React.RefObject<kakao.maps.Map | null>) => {
  const [level, setLevel] = useState(5);

  useEffect(() => {
    if (!map.current) return;

    const Map = map.current;

    const zoomControl = new kakao.maps.ZoomControl();
    Map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    kakao.maps.event.addListener(Map, "zoom_changed", () => {
      Map.panTo(Map.getCenter());
      setLevel(Map.getLevel());
    });
  }, [map]);

  const handleZoomIn = () => {
    if (!map.current) return;
    map.current.setLevel(map.current.getLevel() - 1);
  };

  const handleZoomOut = () => {
    if (!map.current) return;
    map.current.setLevel(map.current.getLevel() + 1);
  };

  return { handleZoomIn, handleZoomOut };
};
