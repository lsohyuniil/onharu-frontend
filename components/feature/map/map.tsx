"use client";
import { useRef, useEffect, useState } from "react";
import { InitMap } from "./initMap";
import { getCurrentPosition } from "./getCurrentPositin";
import { moveToCurrentLocation } from "./moveCurrentLocation";
import { getStorePosition } from "./getStorePosition";
import { CategoryName } from "../category/data";
import { NearbyStore } from "@/app/nearby/type/type";
import { NearbyStoreMarker } from "./NearByStoreMarker";

interface BaseMapProps {
  address?: string | null;
  category?: CategoryName | null;
}

interface DetailMapProps extends BaseMapProps {
  type: "detail";
}

interface SearchMapProps extends BaseMapProps {
  type: "search";
  store: NearbyStore[];
  handleMyLocation: (lat: number, lng: number) => void;
}

type MapProps = DetailMapProps | SearchMapProps;

export const Map = (props: MapProps) => {
  const { type, address, category } = props;
  const mapRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<kakao.maps.Map | null>(null);
  const [mapReady, setMapReady] = useState<boolean>(false);
  const stores = type === "search" ? props.store : null;

  useEffect(() => {
    if (!mapRef.current) return;

    const mapload = async () => {
      if (!mapRef.current) return;
      const map = await InitMap(mapRef.current);
      locationRef.current = map;

      if (type === "detail") {
        if (!address || !category) return;
        await getStorePosition(map, address, category);
      } else if (type === "search") {
        const pos = await getCurrentPosition();
        const { latitude, longitude } = pos.coords;
        moveToCurrentLocation(map, latitude, longitude); //map center 순서보장을 위해
        props.handleMyLocation(latitude, longitude);

        NearbyStoreMarker(map, props.store);
      }

      //searchNearbyStores(map, '동물병원')
      setMapReady(true);
    };

    mapload();

    return () => {
      // //search 상태 초기화
      // useLocationStore.getState().setSearchState(false)
      // //전역 marker 비우기
      // useLocationStore.getState().clearMarkers()
      // //내 위치 버튼 위치값 초기화
      // useTransformStore.getState().setTransform(53)
    };
  }, []);

  useEffect(() => {
    console.log(stores);

    if (type !== "search") return;
    if (!locationRef.current) return;
    if (!props.store?.length) return;

    NearbyStoreMarker(locationRef.current, props.store);
  }, [type, stores]);

  return <div className="h-full w-full" ref={mapRef} />;
};
