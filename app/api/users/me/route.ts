import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { serverApiClient } from "@/lib/api/serverApiClient";
import { SuccessResponse } from "@/lib/api/types/common";
import { UserMeReq } from "@/lib/api/types/auth";

export async function GET() {
  const cookieStore = await cookies();

  const hasSession = cookieStore.has("JSESSIONID");

  if (!hasSession) {
    return NextResponse.json({ success: false, isAuthenticated: false, data: null });
  }

  const result = await serverApiClient.get<SuccessResponse<UserMeReq>>("/api/users/me");

  if (!result.success) {
    return NextResponse.json({
      success: false,
      isAuthenticated: false,
      data: null,
    });
  }
  const { success, data } = result.data;

  return NextResponse.json({
    success,
    isAuthenticated: true,
    data,
  });
}
