"use client";

import { userMe } from "@/lib/api/auth";
import { useQuery } from "@tanstack/react-query";
import { useLogout } from "./useLogout";
import { useEffect } from "react";
import { Toast } from "@/components/feature/toast/Toast";

export function useAuth() {
  const { mutate: logout } = useLogout();

  const query = useQuery({
    queryKey: ["auth"],
    queryFn: userMe,
    staleTime: 0,
    retry: false,
  });

  useEffect(() => {
    if (
      query.isError ||
      (query.isSuccess &&
        query.data &&
        query.data.data == null &&
        query.data.isAuthenticated == true)
    ) {
      Toast("info", "세션이 만료되었습니다.", "다시 로그인해주세요.");
      logout();
    }
  }, [query.isError, query.isSuccess, query.data, logout]);
  return query;
}
