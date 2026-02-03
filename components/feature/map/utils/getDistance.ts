export const getDistance = (myLat: number, myLng: number, storeLat: number, storeLng: number) => {
  const R = 6371;
  const dLat = ((storeLat - myLat) * Math.PI) / 180;
  const dLng = ((storeLng - myLng) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((myLat * Math.PI) / 180) *
      Math.cos((storeLat * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};
