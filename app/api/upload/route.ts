import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const fileName = searchParams.get("fileName");
    const contentType = searchParams.get("contentType");

    if (!fileName || !contentType)
      return NextResponse.json({ message: "fileName, contentType 필수" }, { status: 400 });

    const res = await fetch(
      `${process.env.API_BASE_URL}/api/upload?fileName=${fileName}&contentType=${contentType}`
    );

    const data = await res.json();
    if (!res.ok)
      return NextResponse.json(
        { message: data.message || "Presigned URL 생성 실패" },
        { status: res.status }
      );

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: "서버 에러 발생" }, { status: 500 });
  }
}
