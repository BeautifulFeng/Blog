import request from "./request";

export const GetCates = (data) => {
  return request({
    url: "artcate/cates",
    method: "POST",
    data,
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
export const artlooking = (data) => {
  return request({
    url: "artcate/artlooking",
    method: "post",
    data,
  });
};
export const artliking = (data) => {
  return request({
    url: "artcate/artliking",
    method: "post",
    data,
  });
};
export const getReplyTwo = (data) => {
  return request({
    url: "artcate/getReplyTwo",
    method: "post",
    data,
  });
};
export const getAuthorId = (data) => {
  return request({
    url: "artcate/getAuthorId",
    method: "post",
    data,
  });
};
