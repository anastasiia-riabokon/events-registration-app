import axios from "axios";

export const myApi = axios.create({
  baseURL: "https://events-registration-app-be.onrender.com/api",
});
