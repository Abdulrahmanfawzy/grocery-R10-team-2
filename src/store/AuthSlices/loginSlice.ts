import type { Auth } from "@/lib/types/Forms";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Auth = {
  currentUser: null,
  token: "",
};
const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload.user;
      state.token = action.payload.token;
    },
    clearUser: (state) => {
      state.currentUser = null;
      state.token = "";
    },
  },
});

export const { setUser, clearUser } = loginSlice.actions;
export default loginSlice.reducer;
