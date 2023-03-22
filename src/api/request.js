import axios from "axios";
const service = axios.create({
  baseURL: "/api",
  timeout: 5000,
});
service.interceptors.request
  .use
  //   (config) => {
  // content-type 会根据请求参数的格式自动变换请求格式。只需要将请求对象转换为 json 格式即可
  // const data = config.data
  // config.data = new URLSearchParams(data).toString()
  // application/x-www-form-urlencoded 格式
  // if (localStorage.getItem('token')) {
  //   if (diffTokenTime()) {
  //     store.dispatch('app/logout')
  //     return Promise.reject(new Error('token 失效了'))
  //   }
  // }
  // config.headers.Authorization = localStorage.getItem('token')
  // return config
  //   },
  //   (error) => {
  //     return Promise.reject(new Error(error))
  //   }
  ();

service.interceptors.response
  .use
  //   (response) => {
  // console.log(response)
  // const meta = response.data
  // if (meta.status === 200 || meta.status === 201) {
  //   return meta
  // } else {
  // showNotify(meta.message)
  // return Promise.reject(new Error(meta.message))
  // }
  //   },
  //   (error) => {
  // console.log(error.response)
  // error.response && showNotify(error.response.data)
  // return Promise.reject(new Error(error.response.data))
  //   }
  ();
export default service;
