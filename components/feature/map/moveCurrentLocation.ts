import { getCurrentPosition } from "./getCurrentPositin";

/**
 * 내 주변 페이지에서만 사용됩니다.
 * 현재 위치로 이동 버튼을 누르면 해당 함수가 호출됩니다.
 */

export async function moveToCurrentLocation(
  map: kakao.maps.Map,
  latitude: number,
  longitude: number
): Promise<void> {
  try {
    const latlng = new window.kakao.maps.LatLng(latitude, longitude);
    map.setCenter(latlng);

    const overlayContent = `
    <div class="relative w-[12px] h-[12px]">
      <span
        class="absolute inset-0 rounded-full bg-red-500 opacity-40
              animate-ping"
      ></span>
      <span
        class="absolute inset-0 rounded-full bg-red-500"
      ></span>
    </div>
  `;

    const myLocationOverlay = new kakao.maps.CustomOverlay({
      position: latlng,
      content: overlayContent,
      xAnchor: 0.5,
      yAnchor: 0.5,
    });

    myLocationOverlay.setMap(map);

    // useLocationStore.getState().setMarkers(myMarker);
  } catch (err) {
    // 실패해도 시 기본위치 유지
  }
}
