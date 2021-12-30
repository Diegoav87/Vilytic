import axios from "axios";

const baseURL = process.env.NODE_ENV === "production" ? "https://vilytic.herokuapp.com/" : "http://127.0.0.1:8000/";

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",
    },
});

export default axiosInstance;