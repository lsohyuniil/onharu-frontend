// 로그인
export interface LoginReq {
  loginId: string;
  password: string;
}

// 로그인 확인
export interface UserMeReq {
  userId: number;
  loginId: string;
  userType: string;
  statusType: string;
  providerType: string;
  name: string;
}

// 회원가입
export interface ImageInfo {
  fileKey: string;
  filePath: string;
  displayOrder: string;
}

export interface ChildData {
  loginId: string;
  name: string;
  phone: string;
  nickname: string;
  images: ImageInfo[];
}

export interface OwnerData {
  loginId: string;
  name: string;
  phone: string;
  levelName?: string;
  businessNumber: string;
}

export interface SignupReq {
  password: string;
  passwordConfirm: string;
}

export interface SignupRes {
  userId: number;
  loginId?: string;
}
