import { NextResponse } from "next/server";
import { serverApiClient } from "@/lib/api/serverApiClient";

export async function POST() {
  const result = await serverApiClient.post("/api/users/logout", undefined);

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        message: result.error.message,
      },
      {
        status: result.error.status,
      }
    );
  }

  const response = NextResponse.json(result.data);

  response.cookies.set("JSESSIONID", "", {
    path: "/",
    maxAge: 0,
    httpOnly: true,
    sameSite: "lax",
  });

  return response;
}
