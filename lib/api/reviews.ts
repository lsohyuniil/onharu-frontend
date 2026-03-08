import { apiClient } from "./clientApiClient";
import { ApiResponse } from "./types/common";

export const deleteReview = (reviewId: number): Promise<ApiResponse<void>> => {
  return apiClient.delete<ApiResponse<void>>(`/reviews/${reviewId}`);
};
