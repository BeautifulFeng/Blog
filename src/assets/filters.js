/*
 * @Author: BeautifulFeng 11593811+beautifulfeng@user.noreply.gitee.com
 * @Date: 2023-03-25 04:40:47
 * @LastEditors: BeautifulFeng 11593811+beautifulfeng@user.noreply.gitee.com
 * @LastEditTime: 2023-06-21 02:26:36
 * @FilePath: \my-blog\src\assets\filters.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// const dayjs = require('dayjs')
import dayjs from "dayjs"; // ES 2015
const filterTimes = (val, format = "YYYY-MM-DD") => {
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
//*  用全局属性导入方法 globalProperties.名字={} 然后main.js 挂载这个方法
//! import filters from './utils/filters'
// const app = createApp(App)
// for (const iconName in ELIcons) {
//   app.component(iconName, ELIcons[iconName])
// }
//! filters(app)
// SvgIcon(app)
// app.use(store).use(router).use(i18n).mount('#app')
export default (app) => {
  app.config.globalProperties.filters = {
    filterTimes,
  };
};
