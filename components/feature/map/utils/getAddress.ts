export async function getAddress({
  mylocation,
}: {
  mylocation: { lat: number; lng: number };
}): Promise<string> {
  return new Promise(resolve => {
    if (!window.kakao || !window.kakao.maps) {
      resolve("");
      return;
    }
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.coord2Address(mylocation.lng, mylocation.lat, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        // 주소 정보 설정

        resolve(
          result[0].address.region_1depth_name +
            " " +
            result[0].address.region_2depth_name +
            " " +
            result[0].address.region_3depth_name
        );
      } else {
        resolve("");
      }
    });
  });
}
