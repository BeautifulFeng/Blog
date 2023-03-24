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
