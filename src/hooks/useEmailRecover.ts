import { api } from "@/lib/api/BaseURLAuth";
import { useMutation } from "@tanstack/react-query";

type ForgetPassword = {
  email: string;
};
const fetchApi = async (data: ForgetPassword) => {
  const response = await api.post("forgot-password", {
    identifier: data.email,
  });
  return response.data;
};

export const useEmailRecovery = () => {
  const mutate = useMutation({
    mutationKey: ["EmailRecover"],
    mutationFn: (data: ForgetPassword) => fetchApi(data),
  });
  return mutate;
};
