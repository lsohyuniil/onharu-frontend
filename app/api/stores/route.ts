import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const pageNum = searchParams.get("page") ?? "1";
  const perPage = searchParams.get("perPage") ?? "16";
  const categoryId = searchParams.get("categoryId") ?? "0";

  const url = `http://onharu-api.votex.co.kr:15080/api/stores?pageNum=${pageNum}&perPage=${perPage}&categoryId=${categoryId}`;

  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });

  const data = await res.json();
  return NextResponse.json(data);
}
