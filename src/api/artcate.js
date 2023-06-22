/*
 * @Author: BeautifulFeng 11593811+beautifulfeng@user.noreply.gitee.com
 * @Date: 2023-03-25 04:20:54
 * @LastEditors: BeautifulFeng 11593811+beautifulfeng@user.noreply.gitee.com
 * @LastEditTime: 2023-06-23 03:34:38
 * @FilePath: \my-blog\src\api\artcate.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
