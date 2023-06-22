import axios from "axios";
// import { ElMessage } from "element-plus";
// import { diffTokenTime } from "@/utils/auth";
// import store from "@/store";
const service = axios.create({
  baseURL: "http://127.0.0.1:5177/",
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    // if (localStorage.getItem("token")) {
    //   if (diffTokenTime()) {
    //     store.dispatch("app/logout");
    //     return Promise.reject(new Error("token 失效了"));
    //   }
    // }
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
