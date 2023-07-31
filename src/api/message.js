import request from "./request";

export const GetDanmu = () => {
  return request({
    url: "message/danmu",
    method: "get",
  });
};
export const SenDanmu = (data) => {
  return request({
    url: "message/danmu",
    method: "post",
    data,
  });
};
