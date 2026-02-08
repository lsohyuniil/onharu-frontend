export async function getCurrentPosition(): Promise<GeolocationPosition | null> {
  if (!navigator.geolocation) return null;

  try {
    return await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: true,
      });
    });
  } catch (err) {
    return null;
  }
}
