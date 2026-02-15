import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const res = await fetch(`${process.env.API_BASE_URL}/api/users/signup/child`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { message: data.message || "회원가입 실패" },
        { status: res.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: "서버 에러 발생" }, { status: 500 });
  }
}
