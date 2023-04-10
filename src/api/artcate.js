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
    data
  });
};
