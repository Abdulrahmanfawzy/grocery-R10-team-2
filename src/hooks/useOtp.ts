import { api } from "@/lib/api/BaseURLAuth";
import type { VerifyOtpPayload } from "@/lib/types/ForgetPassword";
import { useMutation } from "@tanstack/react-query";

const fetchApi = async (data: VerifyOtpPayload) => {
  const response = await api.post("verify-otp", data);
  return response.data;
};

export const useOtp = () => {
  const mutate = useMutation({
    mutationKey: ["otp"],
    mutationFn: (data: VerifyOtpPayload) => fetchApi(data),
  });
  return mutate;
};
