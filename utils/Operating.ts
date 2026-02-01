export function Operating({ openTime, closeTime }: { openTime: string; closeTime: string }) {
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  const [openH, openM] = openTime.split(":").map(Number);
  const [closeH, closeM] = closeTime.split(":").map(Number);

  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;

  const status = nowMinutes >= openMinutes || nowMinutes < closeMinutes ? "영업중" : "영업종료";
  const midnightStatus =
    nowMinutes >= openMinutes && nowMinutes < closeMinutes ? "영업중" : "영업종료";

  return { status, midnightStatus, openMinutes, closeMinutes, nowMinutes };
}
