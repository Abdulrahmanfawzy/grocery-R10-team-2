export type RegisterProps = {
  usename: string;
  email: string;
  password: string;
  phone: string;
};

export type LoginProps = {
  email: string;
  password: string;
};

export type ResetPasswordProps = {
  password: string;
  confirmPassword: string;
};
