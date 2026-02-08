import { loadMap } from "../loadmap";

export async function getAddress({
  mylocation,
}: {
  mylocation: { lat: number; lng: number };
}): Promise<string | null> {
  if (!mylocation || mylocation.lat === 0 || mylocation.lng === 0) {
    return null;
  }
  // SDK 로딩 보장
  await loadMap();

  return new Promise(resolve => {
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.coord2Address(mylocation.lng, mylocation.lat, (result, status) => {
      if (status === kakao.maps.services.Status.OK && result?.[0]) {
        const address = result[0].address;
        resolve(
          `${address.region_1depth_name} ${address.region_2depth_name} ${address.region_3depth_name}`
        );
      } else {
        resolve(null);
      }
    });
  });
}
