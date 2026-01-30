import { NearbyStore } from "@/app/nearby/type/type";
import { MarkerCustom } from "./markerCustom";

export function NearbyStoreMarker(map: kakao.maps.Map, stores: NearbyStore[]) {
  const markers: kakao.maps.Marker[] = [];

  if (!stores) return;

  stores.forEach(store => {
    const position = new kakao.maps.LatLng(store.lat, store.lng);

    const CustomMarkers = MarkerCustom(store.category);

    const marker = new kakao.maps.Marker({
      map,
      position,
      title: store.name,
      image: CustomMarkers,
    });

    kakao.maps.event.addListener(marker, "click", () => {
      // 클릭 시 처리 (선택/팝업 등)
      console.log("clicked", store.name);
    });

    markers.push(marker);
  });

  return markers;
}
