import { apiClient } from "./clientApiClient";
import { ApiResponse } from "./types/common";
import { NotificationData } from "./types/notification";

// 알림 설정 조회
export const getNotification = (): Promise<ApiResponse<NotificationData>> => {
  return apiClient.get<ApiResponse<NotificationData>>("/notifications/me");
};

// 알림 설정 수정
export const updateNotification = (body: {
  isSystemEnabled: boolean;
}): Promise<ApiResponse<NotificationData>> => {
  return apiClient.put<ApiResponse<NotificationData>>("/notifications/me", body);
};
