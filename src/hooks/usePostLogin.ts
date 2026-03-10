
import { api } from "@/lib/api/BaseURLAuth";
import type { LoginProps, ResponseProps } from "@/lib/types/Forms";
import { setUser } from "@/store/AuthSlices/loginSlice";
;

import { useAppDispatch } from "@/store/hook";

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const fetchApi = async (data: LoginProps): Promise<ResponseProps> => {
  const response = await api.post("login", data);
  return response.data;
};

export const usePostLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const mutate = useMutation({
    mutationKey: ["Login"],
    mutationFn: (data: LoginProps) => fetchApi(data),
    onSuccess: (data: ResponseProps) => {
      dispatch(setUser(data.data));
      navigate("/");
    },
  });
  return mutate;
};