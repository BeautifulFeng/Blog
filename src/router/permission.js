import router from "./index";
import { useUserStore } from "../store/user";
import { storeToRefs } from "pinia";

router.beforeEach((to, from, next) => {
  const Userstore = useUserStore();
  const { token } = storeToRefs(Userstore);
  // console.log(Userstore);
  console.log(token);
  if (to.path === "/myinfo") {
    if (token.value) {
      next();
    } else {
      next("/home");
    }
  } else {
    next();
  }
});
