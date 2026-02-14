export async function GetStoreCategory() {
  const res = await fetch("/api/stores/categories");

  if (!res.ok) {
    throw new Error("카테고리 목록 조회 실패");
  }

  return res.json();
}
