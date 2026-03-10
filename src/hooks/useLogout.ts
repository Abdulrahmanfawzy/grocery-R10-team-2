import { api } from "@/lib/api/BaseURLAuth";
import { persistor } from "@/store";

import { clearUser } from "@/store/AuthSlices/loginSlice";
import { useAppDispatch } from "@/store/hook";

import { useMutation } from "@tanstack/react-query";

const fetchApi = async (token: string) => {
  const response = await api.post("logout", null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const { mutate: LogOut, isPending } = useMutation({
    mutationKey: ["LogOut"],
    mutationFn: (token: string) => fetchApi(token),
    onSuccess: () => {
      dispatch(clearUser());
      persistor.purge();
    },
  });
  return { LogOut, isPending };
};
