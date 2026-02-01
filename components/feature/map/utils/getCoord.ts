type Coord = { lat: number; lng: number } | null;

export async function getCoord(address: string): Promise<Coord> {
  return new Promise(resolve => {
    if (!address || !window.kakao?.maps) {
      resolve(null);
      return;
    }

    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(address, (results, status) => {
      if (status === kakao.maps.services.Status.OK && results.length > 0) {
        resolve({
          lat: Number(results[0].y),
          lng: Number(results[0].x),
        });
      } else {
        resolve(null);
      }
    });
  });
}
