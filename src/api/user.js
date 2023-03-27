import request from "./request";

export const Reguser = (data) => {
  return request({
    url: "api/reguser",
    method: "post",
    data,
  });
};
export const Login = (data) => {
  return request({
    url: "api/login",
    method: "post",
    data,
  });
};

export const updateavatar = (data) => {
  return request({
    url: "user/upavatar",
    method: "post",
    data,
  });
};
