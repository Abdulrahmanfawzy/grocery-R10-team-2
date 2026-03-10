
import { api } from "@/lib/api/BaseURLAuth";
import type { RegisterProps } from "@/lib/types/Forms";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const fetchApi = async (data: RegisterProps) => {
  const response = await api.post("register", data);
  return response.data;
};
export const usePostUser = () => {
  const navigate = useNavigate();
  const mutate = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: RegisterProps) => fetchApi(data),
    onSuccess: () => {
      navigate("/Login");
    },
  });
  return mutate;
};
