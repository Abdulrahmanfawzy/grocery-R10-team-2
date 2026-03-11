import axios from "axios";

export const api = axios.create({
    baseURL: "/api",
});
localStorage.setItem("token", "368|qQgoM1RNKZuOmT76s678GXDyGQM6tjp5b5Gj4U1Bf776b4b9");

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});