import axios from "axios";
// import { ElMessage } from "element-plus";
import { diffTokenTime } from "../assets/auth";
// import store from "@/store";
import { useUserStore } from "../store/user";
// import { storeToRefs } from "pinia";
// console.log(import.meta);
const store = useUserStore();
const service = axios.create({
  // baseURL: "http://114.132.188.196:5177/",
  // baseURL: "http://localhost:5177/",
  baseURL: import.meta.env.VITE_PUBLIC_PATH,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("token")) {
      if (diffTokenTime()) {
        store.clearToken();
        ElMessage.error("请重新登录！");
        location.reload();
        return Promise.reject(new Error("token 失效了"));
      }
    }
    config.headers.Authorization = localStorage.getItem("token");
    return config;
  },
  (error) => {
    return Promise.reject(new Error(error));
  }
);

service.interceptors.response.use(
  (response) => {
    const data = response.data;
    // console.log(response);
    if (data.status === 200 || 201) {
      return data;
    } else {
      // ElMessage.error(data.message);
      return Promise.reject(new Error(data.message));
      // return Promise.reject(new Error(response.message));
    }
  },
  (error) => {
    console.log(error.response);
    // error.response && ElMessage.error(error.response.data);
    return Promise.reject(new Error(error.response.data));
  }
);
export default service;
