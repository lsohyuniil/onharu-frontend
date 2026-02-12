export async function GetStoreDetail(id: string) {
  const res = await fetch(`/api/stores/${id}`);

  if (!res.ok) {
    throw new Error("상세 데이터 조회 실패");
  }

  return res.json();
}
