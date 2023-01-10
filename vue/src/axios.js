import axios from "axios";

const axiosClient = axios.create({
  baseURL: 'http://localhost:5174/api'
})
axiosClient.interceptors.request.use()

export default axiosClient;
