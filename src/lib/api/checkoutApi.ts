import axios from "axios";

const api = axios.create({
  baseURL: "https://grocery.newcinderella.online/api",
  headers: {
    Authorization: `Bearer 393|K2UabsykX200TgCnir17PLnNxZb97lp2rt7KSQx0c32bb2f9`,
    Accept: "application/json",
  },
});

export default api;
