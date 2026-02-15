export interface SignupChildRequest {
  loginId: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phone: string;
  nickname: string;
  certificate: string;
}

export interface SignupOwnerRequest {
  loginId: string;
  password: string;
  passwordConfirm: string;
  phone: string;
  storeName: string;
  businessNumber: string;
}

export interface SignupChildResponse {
  success: boolean;
  data: {
    id: number;
    loginId: string;
  };
}

export interface SignupOwnerResponse {
  success: boolean;
  data: {
    userId: number;
  };
}

export interface SignupError {
  message: string;
  status: number;
}

async function postJson<TResponse>(url: string, body: unknown): Promise<TResponse> {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message ?? "회원가입 실패",
      status: res.status,
    } satisfies SignupError;
  }

  return data;
}

export async function signupChild(body: SignupChildRequest): Promise<SignupChildResponse> {
  return postJson<SignupChildResponse>("/api/users/signup/child", body);
}

export async function signupOwner(body: SignupOwnerRequest): Promise<SignupOwnerResponse> {
  return postJson<SignupOwnerResponse>("/api/users/signup/owner", body);
}
