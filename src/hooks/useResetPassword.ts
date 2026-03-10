import { api } from "@/lib/api/BaseURLAuth";
import type { ResetPasswordPayload } from "@/lib/types/ForgetPassword";
import { useMutation } from "@tanstack/react-query";

const fetchApi = async (data: ResetPasswordPayload) => {
  const response = await api.post("reset-password", data);
  return response.data;
};

export const useResetPassword = () => {
  const mutate = useMutation({
    mutationKey: ["reset-password"],
    mutationFn: (data: ResetPasswordPayload) => fetchApi(data),
  });
  return mutate;
};
