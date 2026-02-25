import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ApiError, SuccessResponse } from "@/lib/api/types/common";
import { logout } from "@/lib/api/auth";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<SuccessResponse<null>, ApiError>({
    mutationFn: logout,
    onSuccess: async () => {
      queryClient.setQueryData(["auth"], null);

      router.push("/");
      router.refresh();
    },
  });
};
