import axios, { type AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: "https://reqres.in/api/",
    headers: {
        "Content-type": "application/json",
    },
});

export default apiClient;