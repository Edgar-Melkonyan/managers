import axios from "axios";

export const salaryApi = axios.create({
  baseURL: process.env.APP_URL
})
