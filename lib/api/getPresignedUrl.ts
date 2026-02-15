export interface PresignedUrlResponse {
  success: boolean;
  data: {
    presignedUrl: string;
    downloadUrl: string;
  };
}

export const getPresignedUrl = async (
  fileName: string,
  contentType: string
): Promise<PresignedUrlResponse> => {
  const params = new URLSearchParams({ fileName, contentType });

  const res = await fetch(`/api/upload?${params.toString()}`);

  const data = await res.json();

  if (!res.ok) throw new Error("Presigned URL 발급 실패");

  return data;
};
