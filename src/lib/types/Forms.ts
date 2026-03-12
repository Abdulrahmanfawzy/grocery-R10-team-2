export type RegisterProps = {
  username: string;
  email: string;
  password: string;
  phone: string;
  agree_terms: number;
  password_confirmation: string;
};

export type LoginProps = {
  login: string;
  password: string;
};

export type ResetPasswordProps = {
  password: string;
  password_confirmation: string;
};

export type Auth = {
  currentUser: null | { username: string; email: string; phone: string };
  token: string | null;
};

export type ResponseProps = {
  data: {
    user: {
      id: number;
      username: string;
      email: string;
      phone?: string;
    };
    token: string;
  };
};
