import { NearbyStore } from "@/app/nearby/type/type";
import { MarkerCustom } from "./markerCustom";

export function NearbyStoreMarker(
  map: kakao.maps.Map,
  stores: NearbyStore[] | null,
  markersRef: React.MutableRefObject<kakao.maps.Marker[]>
) {
  if (!stores) return;

  markersRef.current.forEach(marker => marker.setMap(null));
  markersRef.current = [];

  stores.forEach(store => {
    const position = new kakao.maps.LatLng(store.lat, store.lng);

    const CustomMarkers = MarkerCustom(store.category);
    const marker = new kakao.maps.Marker({
      map,
      position,
      image: CustomMarkers,
      title: store.name,
    });

    markersRef.current.push(marker);
  });
}
