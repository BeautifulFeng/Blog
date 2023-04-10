import { defineStore } from "pinia";
// import { useOtherStore } from './other-store'  其他store

export const useUserStore = defineStore("User", {
  // 推荐使用 完整类型推断的箭头函数
  state: () => {
    // 组件里用法
    //  const store = useUserStore()
    //  store.counter++
    return {
      // 所有这些属性都将自动推断其类型
      counter: 0,
      token: localStorage.getItem("token") || "",
      headurl: localStorage.getItem("userinfo")
        ? JSON.parse(localStorage.getItem("userinfo")).headimgurl
        : " ",
      nickname: localStorage.getItem("userinfo")
        ? JSON.parse(localStorage.getItem("userinfo")).nickname
        : " ",
      username: localStorage.getItem("userinfo")
        ? JSON.parse(localStorage.getItem("userinfo")).username
        : " ",
    };
  },
  // getters = computed
  getters: {
    // 要使用其他存储 getter，您可以直接在 better 内部使用它：
    // otherGetter(state) {
    //   const otherStore = useOtherStore()
    //   return state.localData + otherStore.data
    // },
    // 用法
    // const store = useUserStore()
    //  store.doubleCount
    // 类型是自动推断的，因为我们没有使用 `this`
    doubleCount: (state) => state.counter + 2,
    doubleCountPlusOne() {
      // 自动完成 ✨
      return this.doubleCount + 1;
    },
    getUserById: (state) => {
      // 传参的意思
      // 组件里可以 store.getUserById(2)  2=userId
      return (userId) => state.users.find((user) => user.id === userId);
    },
  },
  // Actions 相当于组件中的 methods 可以是异步的
  actions: {
    // 使用
    // const main = useUserStore()
    // Actions 像 methods 一样被调用：
    // main.setToken()
    setToken(a, b) {
      localStorage.setItem("token", a);
      localStorage.setItem("userinfo", b);
      this.token = a;
      this.headurl = JSON.parse(b).headimgurl;
      this.nickname = JSON.parse(b).nickname;
      this.username = JSON.parse(b).username;
      // console.log(localStorage.getItem("userinfo"));
      // console.log(JSON.parse(localStorage.getItem("userinfo")));
    },
    updAvator(c) {
      const userinfo = JSON.parse(localStorage.getItem("userinfo"));
      userinfo.headimgurl = c;
      this.setToken(this.token, JSON.stringify(userinfo));
    },
    updNickname(a) {
      const userinfo = JSON.parse(localStorage.getItem("userinfo"));
      userinfo.nickname = a;
      this.setToken(this.token, JSON.stringify(userinfo));
    },
    clearToken() {
      localStorage.removeItem("token");
      localStorage.removeItem("userinfo");
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random());
    },
    //   async registerUser(login, password) {
    //     try {
    //       this.userData = await api.post({ login, password })
    //       showTooltip(`Welcome back ${this.userData.name}!`)
    //     } catch (error) {
    //       showTooltip(error)
    //       // 让表单组件显示错误
    //       return error
    //     }
    //   },
    // },
  },
});
