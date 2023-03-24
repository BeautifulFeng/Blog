import request from "./request";

export const GetCates = () => {
  return request({
    url: "artcate/cates",
    method: "get",
  });
};
