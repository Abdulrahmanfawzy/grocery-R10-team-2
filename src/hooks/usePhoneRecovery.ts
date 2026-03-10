import { api } from "@/lib/api/BaseURLAuth";
import type { ForgetPassword } from "@/lib/types/ForgetPassword";
import { useMutation } from "@tanstack/react-query";

const fetchApi = async (data: ForgetPassword) => {
  const response = await api.post("forgot-password", {
    identifier: data.phone,
  });
  return response.data;
};

export const usePhoneRecovery = () => {
  const mutate = useMutation({
    mutationKey: ["phoneRecover"],
    mutationFn: (data: ForgetPassword) => fetchApi(data),
  });
  return mutate;
};
