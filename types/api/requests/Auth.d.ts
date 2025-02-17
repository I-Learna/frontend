export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IForgetPassRequest {
  email: string;
}

export interface IResetPassRequest {
  resetToken: string;
  newPassword: string;
  confirmPassword: string;
}

export interface IChangePassRequest {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}
