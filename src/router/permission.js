/*
 * @Author: BeautifulFeng 11593811+beautifulfeng@user.noreply.gitee.com
 * @Date: 2023-03-29 17:27:14
 * @LastEditors: BeautifulFeng 11593811+beautifulfeng@user.noreply.gitee.com
 * @LastEditTime: 2023-06-29 00:50:15
 * @FilePath: \my-blog\src\router\permission.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from "./index";
import { useUserStore } from "../store/user";
import { storeToRefs } from "pinia";

router.beforeEach((to, from, next) => {
  const Userstore = useUserStore();
  const { token } = storeToRefs(Userstore);
  // console.log(to, from);
  // console.log(token);
  if (to.path === "/myinfo" || to.path === "/write") {
    if (token.value) {
      next();
    } else {
      next("/home");
    }
  } else {
    next();
  }
});
