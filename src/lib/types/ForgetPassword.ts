export type ForgetPassword = {
  email?: string;
  phone?: string;
};

export type VerifyOtpPayload = {
  otp: string;
  identifier: string;
};
export type ResetPasswordPayload = {
  otp: string;
  identifier: string;
  password: string;
  password_confirmation: string;
};