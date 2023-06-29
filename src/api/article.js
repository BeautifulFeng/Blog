import request from "./request";

export const addArt = (data) => {
  return request({
    url: "article/add",
    method: "post",
    data,
  });
};
export const addReplying = (data) => {
  return request({
    url: "article/replying",
    method: "post",
    data,
  });
};
export const addReplyTwo = (data) => {
  return request({
    url: "article/addReplyTwo",
    method: "post",
    data,
  });
};
export const artDelete = (data) => {
  return request({
    url: "article/artDelete",
    method: "post",
    data,
  });
};
export const deleteReply = (data) => {
  return request({
    url: "article/deleteReply",
    method: "post",
    data,
  });
};
export const deleteReplyTwo = (data) => {
  return request({
    url: "article/deleteReplyTwo",
    method: "post",
    data,
  });
};
export const replygood = (data) => {
  return request({
    url: "article/replygood",
    method: "post",
    data,
  });
};
export const replygoodTwo = (data) => {
  return request({
    url: "article/replygoodTwo",
    method: "post",
    data,
  });
};
export const replycancelgood = (data) => {
  return request({
    url: "article/replycancelgood",
    method: "post",
    data,
  });
};
export const replycancelgoodTwo = (data) => {
  return request({
    url: "article/replycancelgoodTwo",
    method: "post",
    data,
  });
};
