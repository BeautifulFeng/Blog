/*
 * @Author: BeautifulFeng 11593811+beautifulfeng@user.noreply.gitee.com
 * @Date: 2023-06-21 02:35:47
 * @LastEditors: BeautifulFeng 11593811+beautifulfeng@user.noreply.gitee.com
 * @LastEditTime: 2023-06-22 01:11:04
 * @FilePath: \my-blog\src\assets\utils.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import dayjs from "dayjs"; // ES 2015
/**
 * 首页时间的处理
 * @param {*} val
 * @param {*} format 时间的格式 默认："YYYY-MM-DD"
 * @returns
 */
export const filterTimes = (val, format = "YYYY-MM-DD") => {
  if (!isNull(val)) {
    // val = parseInt(val);
    return dayjs(val).format(format);
  } else {
    return "--";
  }
};

export const isNull = (data) => {
  if (!data) return true;
  if (JSON.stringify(data) === "{}") return true;
  if (JSON.stringify(data) === "[]") return true;
};
/**
 * 讨论时间函数
 * @param {*} time
 * @returns
 */
export function formatTime(time) {
  // console.log(time);
  const now = new Date();
  const diff = (now - new Date(time)) / 1000; // 计算时间差，单位为秒
  if (diff < 60) {
    return "刚刚";
  } else if (diff < 3600) {
    return Math.floor(diff / 60) + "分钟前";
  } else if (diff < 86400) {
    return Math.floor(diff / 3600) + "小时前";
  } else {
    return Math.floor(diff / 86400) + "天前";
  }
}
/**
 * 节流 xx秒只触发1次
 * @param {fun} fn 函数
 * @param {num} delay 时间 :1000 单位ms
 * @returns
 */
export function throttle(fn, delay) {
  let lastTime = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastTime >= delay) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}
/**
 * 高端防抖 浏览器可能不支持 在指定的时间间隔内，只执行最后一次调用，忽略在这个时间间隔内的其他调用
 * 另外，，delay 在函数中自动会被setImmediate使用
 * @param {fun} fn 函数
 * @param {num} delay 时间 :1000 单位ms
 * @returns
 *
 */
export function debounceHeigh(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearImmediate(timer);
    }
    timer = setImmediate(() => {
      fn.apply(this, args);
    });
  };
}
/**
 * 防抖  在指定的时间间隔内，只执行最后一次调用，忽略在这个时间间隔内的其他调用
 * @param {fun} fn 函数
 * @param {num} delay 时间 :1000 单位ms
 * @returns
 */
export function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
/* 直接导入就在main.js中
import * as utils from './assest/utils'
app.config.globalProperties.$utils = utils; */
export default (app) => {
  app.config.globalProperties.$utils = {
    filterTimes,
    formatTime,
    throttle,
  };
};
