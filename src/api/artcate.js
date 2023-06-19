import request from "./request";

export const GetCates = () => {
  return request({
    url: "artcate/cates",
    method: "get",
  });
};
export const getArt = (data) => {
  return request({
    url: "artcate/art",
    method: "post",
    data,
  });
};
export const getReply = (data) => {
  return request({
    url: "artcate/reply",
    method: "post",
    data,
  });
};
export const getNickname = (data) => {
  return request({
    url: "artcate/nickname",
    method: "post",
    data,
  });
};
export const upimg = (data) => {
  return request({
    url: "artcate/upartimg",
    method: "post",
    data,
  });
};
export const addArt = (data) => {
  return request({
    url: "article/add",
    method: "post",
    data,
  });
};
export const searchart = (data) => {
  return request({
    url: "artcate/search",
    method: "post",
    data,
  });
};
