import axios from "axios";
export const api = axios.create({
  baseURL: "https://grocery.newcinderella.online/api/auth/",
});
