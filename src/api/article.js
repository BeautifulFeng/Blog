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
export const artDelete = (data) => {
  return request({
    url: "article/artDelete",
    method: "post",
    data,
  });
};
