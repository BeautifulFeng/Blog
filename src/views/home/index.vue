<template>
  <div>
    <keep-alive>
      <lizi></lizi>
    </keep-alive>
    <div class="headDowm">
      <div class="icon-drowm" @click="Lookartcal">
        <svg
          t="1692261334390"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6139"
          width="32"
          height="32"
          data-spm-anchor-id="a313x.search_index.0.i17.601c3a81oHGWka"
        >
          <path
            d="M533.7 544.7l1.8-1.8 21.8-21.8L733 345.4c12.5-12.4 12.5-32.8 0.1-45.2-12.5-12.4-32.9-12.4-45.3 0L512 475.9 336.3 300.1c-12.5-12.4-32.9-12.4-45.3 0-12.4 12.5-12.4 32.9 0 45.3l175.7 175.7 21.5 21.5 2.2 2.2c5.7 5.2 13.2 8.3 21.5 8.3 8.4 0.1 16.1-3.1 21.8-8.4z"
            fill="#ffffff"
            p-id="6140"
            data-spm-anchor-id="a313x.search_index.0.i16.601c3a81oHGWka"
            class=""
          ></path>
          <path
            d="M533.7 724.8l1.8-1.8 21.8-21.8L733 525.5c12.5-12.4 12.5-32.8 0.1-45.2-12.5-12.4-32.9-12.4-45.3 0L512 656 336.3 480.2c-12.5-12.4-32.9-12.4-45.3 0-12.4 12.5-12.4 32.9 0 45.3l175.7 175.7 21.5 21.5 2.2 2.2c5.7 5.2 13.2 8.3 21.5 8.3 8.4 0.1 16.1-3.1 21.8-8.4z"
            fill="#ffffff"
            p-id="6141"
            data-spm-anchor-id="a313x.search_index.0.i18.601c3a81oHGWka"
            class=""
          ></path>
        </svg>
      </div>
    </div>
    <div class="bkg" id="bkg">
      <div
        class="home"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled"
      >
        <div
          :class="`card card${index}`"
          v-for="(item, index) in articleList"
          :key="item.id"
        >
          <div class="left">
            <!-- 标题 -->
            <span @click="Lookfile(item)" class="timu">
              {{ item.title }}
            </span>
            <!-- 内容文本 -->
            <span class="text" @click="Lookfile(item)">
              {{ item.content }}</span
            >
            <!-- 作者-创建时间-分类-观看数-点赞数 -->
            <div class="xiangqing">
              <span
                ><svg
                  t="1687371783145"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="3265"
                  width="16"
                  height="16"
                >
                  <path
                    d="M768 298.666667c0 141.386667-114.613333 256-256 256S256 440.053333 256 298.666667 370.613333 42.666667 512 42.666667s256 114.613333 256 256z m108.18 446.486666A211.94 211.94 0 0 0 725.333333 682.666667H298.666667a213.333333 213.333333 0 0 0-213.333334 213.333333v32a53.393333 53.393333 0 0 0 53.333334 53.333333h746.666666a53.393333 53.393333 0 0 0 53.333334-53.333333v-32a211.94 211.94 0 0 0-62.486667-150.846667z"
                    fill="#5C5C66"
                    p-id="3266"
                  ></path>
                </svg>
                <p style="color: #e76e16">
                  {{ item.nickname }}
                </p></span
              >
              <span>
                <svg
                  t="1687373332974"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="5572"
                  width="16"
                  height="16"
                >
                  <path
                    d="M511.488 0A512 512 0 1 0 1024 512a512 512 0 0 0-512.512-512z m218.112 724.114286L460.8 562.834286v-307.2h76.8V524.434286l230.4 136.704z"
                    fill="#999999"
                    p-id="5573"
                  ></path>
                </svg>
                <p>
                  {{ $utils.filterTimes(item.creat_time) }}
                </p>
              </span>

              <span>
                <svg
                  t="1687373474194"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="5478"
                  width="16"
                  height="16"
                >
                  <path
                    d="M487 347.43C487 424.512 424.512 487 347.43 487H237.57C160.488 487 98 424.512 98 347.43V237.57C98 160.488 160.488 98 237.57 98h109.86C424.512 98 487 160.488 487 237.57v109.86zM487 786.43C487 863.512 424.512 926 347.43 926H237.57C160.488 926 98 863.512 98 786.43V676.57C98 599.488 160.488 537 237.57 537h109.86C424.512 537 487 599.488 487 676.57v109.86zM926 347.43C926 424.512 863.512 487 786.43 487H676.57C599.488 487 537 424.512 537 347.43V237.57C537 160.488 599.488 98 676.57 98h109.86C863.512 98 926 160.488 926 237.57v109.86zM730.7 533.6c-107.861 0-195.3 87.439-195.3 195.3s87.439 195.3 195.3 195.3S926 836.761 926 728.9s-87.439-195.3-195.3-195.3z m0 309.734c-63.2 0-114.435-51.234-114.435-114.434S667.5 614.465 730.7 614.465 845.134 665.7 845.134 728.9 793.9 843.334 730.7 843.334z"
                    fill="#666666"
                    p-id="5479"
                  ></path>
                </svg>
                <p>{{ item.type }}</p>
              </span>
              <span>
                <svg
                  t="1687373492839"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="6121"
                  width="16"
                  height="16"
                >
                  <path
                    d="M512 619.38c29.23 0 59.78-45.83 59.78-107.6s-30.56-107.6-59.78-107.6c-29.22 0-59.78 45.83-59.78 107.6s30.55 107.6 59.78 107.6z m0 71.72c-76.42 0-131.5-82.63-131.5-179.33S435.58 332.45 512 332.45s131.5 82.63 131.5 179.33S588.42 691.1 512 691.1z m0 71.74c169.63 0 346.7-150.95 346.7-251.06S681.63 260.72 512 260.72c-164.37 0-346.7 160.27-346.7 251.06S347.63 762.84 512 762.84z m0 71.73c-202.08 0-418.44-190.18-418.44-322.79S309.92 188.99 512 188.99c206.94 0 418.44 180.3 418.44 322.79S718.94 834.57 512 834.57z"
                    fill="#262626"
                    p-id="6122"
                  ></path>
                </svg>
                <p>
                  {{ item.looknum > 999 ? "999+" : item.looknum }}
                </p>
              </span>
              <span>
                <svg
                  t="1687373512057"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="7122"
                  width="16"
                  height="16"
                >
                  <path
                    d="M939.358251 423.424662c-23.01825-37.252439-62.924121-60.779272-107.019409-63.209624-2.755764-0.38681-5.510504-0.579191-8.347109-0.579191l-152.202471-0.121773c6.649444-28.975938 10.015098-58.653865 10.015098-88.657202 0-28.223808-3.213181-57.139372-9.556657-85.952604-0.447185-2.043542-1.098008-4.006244-1.932002-5.866614-15.820314-57.302077-67.37755-96.841605-127.282918-96.841605-72.827679 0-132.081201 59.254545-132.081201 132.081201 0 3.334955 0.132006 6.66991 0.406253 10.015098-2.196015 57.211003-32.108279 109.947088-80.269162 141.363611-14.447037 9.42465-18.524912 28.773324-9.099239 43.220361 9.414417 14.437827 28.752858 18.535145 43.220361 9.099239 65.811892-42.925648 106.429984-115.325585 108.656699-193.684234 0.030699-1.332345-0.010233-2.663666-0.14224-3.996011-0.203638-2.012843-0.304945-4.016477-0.304945-6.019087 0-38.381146 31.233352-69.614497 69.614497-69.614497 32.57593 0 60.474326 22.204721 67.824735 53.997821 0.356111 1.534959 0.823761 3.019777 1.402953 4.453429 4.696975 22.814612 7.076162 45.579081 7.076162 67.743894 0 37.485753-6.222725 74.352405-18.494213 109.592001-3.324722 9.546424-1.819438 20.111037 4.02671 28.345582 5.856381 8.245801 15.332197 13.146415 25.448602 13.156648l193.226816 0.101307c1.423419 0.264013 2.857071 0.426719 4.300956 0.477884 24.116257 0.9967 45.935192 13.614066 58.603723 34.090423 7.838525 12.31242 11.438517 26.800389 10.431583 41.939181-0.080841 0.945535-0.121773 1.911536-0.11154 2.877537 0 0.854461 0.040932 1.697665 0.11154 2.53166 0.010233 0.335644-0.030699 0.661056-0.11154 0.976234-0.101307 0.376577-0.193405 0.772596-0.284479 1.159406l-74.972529 330.391802c-0.914836 1.281179-1.738597 2.6432-2.449795 4.046153-5.937223 11.762905-14.660908 21.48329-25.346271 28.172643-10.746762 6.812149-23.059182 10.614755-35.757388 11.06194-0.854461-0.061398-513.766226-0.224104-513.766226-0.224104-0.467651-0.020466-0.935302-0.030699-1.402953-0.030699 0 0-111.01542 0.172939-112.718201 0.457418-1.932002 0-3.446495-1.50426-3.446495-3.415796l0.299829-416.334173c0-1.901303 1.545192-3.446495 3.01466-3.456728l1.245364 0.121773c1.174756 0.132006 2.653433 0.284479 3.52836 0.193405l83.82822-0.222057 0 339.367221c0 17.253966 13.979386 31.233352 31.233352 31.233352s31.233352-13.979386 31.233352-31.233352L281.009092 435.350273c0-1.778506 0-8.631588 0-10.411117 0-17.253966-13.979386-30.928407-31.233352-30.928407-1.50426 0-117.547183 0.304945-119.402437 0.304945-36.34272 0-65.913199 29.566386-65.913199 65.893756l-0.299829 416.334173c0 36.337603 29.571503 65.902966 65.913199 65.902966 2.541893 0 111.406323-0.457418 111.406323-0.457418 0.457418 0.020466 0.925069 0.030699 1.382487 0.030699 0 0 511.458671 0.274246 512.505513 0.274246 25.469068 0 50.296523-7.197936 71.647807-20.73116 19.612687-12.281721 35.777855-29.881564 46.839795-50.967812 3.660366-5.622044 6.435573-11.875468 8.256034-18.615986 0.11154-0.416486 0.213871-0.823761 0.304945-1.240247l74.881454-330.340637c1.596358-6.212492 2.257413-12.586666 2.00261-18.992563C960.892707 473.366098 953.948551 446.331371 939.358251 423.424662z"
                    fill="#999999"
                    p-id="7123"
                  ></path>
                  <path
                    d="M450.027553 518.650467c-17.253966 0-31.233352 13.979386-31.233352 31.233352l0 30.470989c0 17.253966 13.979386 31.233352 31.233352 31.233352 17.253966 0 31.233352-13.979386 31.233352-31.233352l0-30.470989C481.260905 532.629853 467.281519 518.650467 450.027553 518.650467z"
                    fill="#999999"
                    p-id="7124"
                  ></path>
                  <path
                    d="M693.805696 518.650467c-17.253966 0-31.233352 13.979386-31.233352 31.233352l0 30.470989c0 17.253966 13.979386 31.233352 31.233352 31.233352 17.253966 0 31.233352-13.979386 31.233352-31.233352l0-30.470989C725.039048 532.629853 711.058638 518.650467 693.805696 518.650467z"
                    fill="#999999"
                    p-id="7125"
                  ></path>
                  <path
                    d="M648.940882 660.09492c-14.304797-9.393951-33.592073-5.398964-43.159986 8.763594-0.132006 0.193405-13.614066 19.754926-34.171264 19.754926-19.98824 0-32.423457-18.09717-33.266661-19.368116-9.17087-14.427594-28.254507-18.809391-42.834574-9.770528-14.650675 9.109472-19.155269 28.366048-10.055007 43.016723 11.214413 18.047028 41.96988 48.588625 86.156242 48.588625 43.962258 0 75.104535-30.318516 86.572728-48.222281C667.404396 688.461991 663.216004 669.500127 648.940882 660.09492z"
                    fill="#999999"
                    p-id="7126"
                  ></path>
                </svg>
                <p>{{ item.likenum }}</p>
              </span>
            </div>
          </div>
          <div class="right">
            <img
              class="right_img"
              :src="
                item.imgurl
                  ? item.imgurl
                  : 'https://image.uisdc.com/wp-content/uploads/2013/09/1379411391_1436653066_9750_imageAddr.jpg'
              "
              @click="Lookfile(item)"
            />
          </div>
        </div>
        <p v-if="noMore" style="text-align: center">没有更多了...</p>
        <div class="balls" v-if="loading">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <!-- 加载动画或提示 -->
      <!-- <div v-if="loading">Loading...</div> -->
      <div class="rightFather">
        <div class="rightcontent">
          <keep-alive>
            <div class="musicCloud">
              <iframe
                frameborder="no"
                border="0"
                marginwidth="0"
                marginheight="0"
                width="280"
                height="100"
                src="//music.163.com/outchain/player?type=2&id=441491410&auto=1&height=66"
              ></iframe>
            </div>
          </keep-alive>
          <div class="upmsg">
            <UpMsg />
          </div>
          <div class="totop" @click="Totop">
            <svg
              t="1692249528680"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5005"
              width="32"
              height="32"
            >
              <path
                d="M698.8 337.6H325.2c-18.4 0-33.5-14.4-33.5-32s15.1-32 33.5-32h373.7c18.4 0 33.5 14.4 33.5 32-0.1 17.6-15.1 32-33.6 32z"
                fill=""
                p-id="5006"
              ></path>
              <path
                d="M508.4 547.8l1.8-1.8-1.8 1.8zM508.2 545.8l2.2 2.2c-0.7-0.8-1.4-1.5-2.2-2.2zM511.1 508.7l1.8 1.8-1.8-1.8z"
                fill="#FFFFFF"
                p-id="5007"
              ></path>
              <path
                d="M510.9 510.7l2.2-2.2c-0.8 0.7-1.5 1.4-2.2 2.2z"
                fill="#FFFFFF"
                p-id="5008"
              ></path>
              <path
                d="M544 472.4v246c0 17.6-14.4 32-32 32s-32-14.4-32-32v-246c0-17.6 14.4-32 32-32s32 14.4 32 32z"
                fill=""
                p-id="5009"
              ></path>
              <path
                d="M511.9 379c-8.3 0-15.8 3.1-21.5 8.3l-2.2 2.2-21.5 21.5L311 566.7c-12.4 12.4-12.4 32.8 0 45.3 12.4 12.4 32.8 12.4 45.3 0L512 456.2l155.8 155.7c12.4 12.4 32.8 12.4 45.3 0 12.4-12.4 12.4-32.8-0.1-45.2L557.3 411l-21.8-21.8-1.8-1.8c-5.7-5.3-13.4-8.5-21.8-8.4z"
                fill=""
                p-id="5010"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import { artlooking, GetCates } from "../../api/artcate";
import router from "../../router";
// import { ElMessage } from "element-plus";
import UpMsg from "../upmessage/index.vue";
import lizi from "./canvas-background/lizi.vue";

// 文章列表数据
const articleList = ref([]);
const pageDate = reactive({
  pageNum: 1,
  total: 99, //总页数
});
const loading = ref(false);
const noMore = ref(false);
const disabled = computed(() => loading.value);
const getcates = async () => {
  // console.log(pageDate.pageNum);
  const res = await GetCates({
    pageNum: pageDate.pageNum,
  });
  res.data.forEach((item) => {
    articleList.value.push(item);
  });
  pageDate.total = res.total;
  // pageDate.pageNum = pageDate.pageNum + 1
  pageDate.pageNum += 1;
  // pageDate.pageNum++;
  // console.log(articleList.value, pageDate.total);
  loading.value = false;
};

// 跳转文章页面
const Lookfile = async (val) => {
  // console.log(val.id);
  await artlooking({
    id: val.id,
  });
  router.push({
    path: "/ariticle",
    query: {
      id: val.id,
      look: val.looknum,
      liek: val.likenum,
    },
  });
};
getcates();
// 懒加载
const load = () => {
  if (pageDate.pageNum == 1) {
    getcates();
  } else if (pageDate.pageNum < pageDate.total + 1) {
    loading.value = true;
    setTimeout(() => {
      getcates();
    }, 1500);
  } else {
    noMore.value = true;
  }
};
const Totop = () => {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  let step = Math.floor(scrollTop / 20);
  let timer = setInterval(function () {
    scrollTop -= step;
    if (scrollTop <= 0) {
      clearInterval(timer);
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, scrollTop);
    }
  }, 10);
};
// 下滑到文章列表
const Lookartcal = () => {
  const bkg = document.getElementById("bkg");
  console.log(bkg);
  if (bkg) {
    window.scrollTo({
      top: bkg.offsetTop - 60,
      behavior: "smooth",
    });
  }
};
// const upmsg = new Date();
</script>

<style scoped lang="scss">
$randomNumber: random(5);
.bkg {
  margin-top: 1vw;
  display: flex;
  justify-content: center;
  position: relative;
}

.home {
  /* height: 100%; */
  width: 800px;
}
.card {
  height: 13vh;
  border-radius: 10px;

  box-shadow: 10px 10px rgba(167, 167, 167, 0.952);
  position: relative;
  border-top: 0.1rem solid rgb(51, 50, 50);
  background-color: #eeeeeef6;
  box-shadow: 0px 0px 10px rgba(62, 74, 238, 0.952);
  // box-shadow:X轴偏移量 Y轴偏移量 阴影模糊半径 阴影扩展半径 阴影颜色 投影方式
  animation: shadow1 $randomNumber + s ease-in-out infinite;
}

@keyframes shadow1 {
  0% {
    box-shadow: 0 0 10px rgba(167, 167, 167, 0.952);
  }
  50% {
    box-shadow: 0 0 50px rgba(71, 71, 71, 0.5);
  }
  100% {
    box-shadow: 0 0 10px rgba(167, 167, 167, 0.952);
  }
}
.left {
  position: absolute;
  left: 5%;
  top: 15%;
  width: 60%;
}
.timu {
  color: rgb(77, 129, 173);
  text-align: left;
  white-space: nowrap; /* 禁止换行 */
  overflow: hidden; /* 隐藏溢出部分 */
  text-overflow: ellipsis; /* 使用省略号表示溢出部分 */
  cursor: pointer;
  font-size: large;
}
.xiangqing {
  margin-top: 1rem;
  display: flex;
}
.xiangqing > span {
  display: flex;
  margin-right: 1rem;
}
.xiangqing > span > svg {
  margin-top: 1rem;
  margin-right: 3px;
}
.xiangqing > span > p {
  font-size: 14px;
}
.right {
  position: absolute;
  right: 2%;
  top: 15%;
}
.text {
  height: 3.5rem;
  text-align: left;
  line-height: 2rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #949794;
  cursor: pointer;
}
.right_img {
  width: 9rem;
  height: 7rem;
  border-radius: 5%;
  object-fit: contain;
  /* object-fit:initial; */
  cursor: pointer;
}
.musicCloud {
  margin-left: 1rem;
}
.rightcontent {
  // position: fixed;
  // top: 200px;
  position: sticky;
  top: 80px; /* 设置元素距离顶部的距离 */
  display: flex;
  flex-direction: column;
}
.upmsg {
  margin-left: 1rem;
}
@media screen and (max-width: 939px) {
  .left {
    width: 80%;
  }
  .right {
    display: none;
  }
  .xiangqing {
    display: none;
  }
  .timu {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    // white-space: nowrap; /* 禁止换行 */
    // overflow: hidden; /* 隐藏溢出部分 */
    // text-overflow: ellipsis; /* 使用省略号表示溢出部分 */
    overflow: hidden;
    font-size: x-large;
  }
}
.balls {
  width: 4em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 2rem auto;
}

.balls div {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #ff978e;
  // background-color: #fc2f70;
}

.balls div:nth-of-type(1) {
  transform: translateX(-100%);
  animation: left-swing 0.5s ease-in alternate infinite;
}

.balls div:nth-of-type(3) {
  transform: translateX(-95%);
  animation: right-swing 0.5s ease-out alternate infinite;
}

@keyframes left-swing {
  50%,
  100% {
    transform: translateX(95%);
  }
}

@keyframes right-swing {
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
}

.totop {
  width: 32px;
  height: 32px;
  background: rgba(238, 238, 238, 0.9647058824);
  border-radius: 20%;
  box-shadow: 1px 1px 10px rgba(204, 204, 204, 0.5);
  margin: 2rem 1rem;
  cursor: pointer;
}
.headDowm {
  /* text-align: center; */
  cursor: pointer;
  color: #eeee;
  position: relative;
}
.icon-drowm {
  position: absolute;
  top: 0;
  left: 50%;
  animation: myicon-drowm 1s linear infinite alternate;
}
@keyframes myicon-drowm {
  0% {
    transform: translateY(-8rem);
  }
  100% {
    transform: translateY(-6rem);
    opacity: 0;
  }
}
@media screen and (max-width: 590px) {
  .musicCloud {
    display: none;
  }
  .upmsg {
    display: none;
  }
  .totop {
    display: none;
  }
}
@media screen and (max-width: 530px) {
  .home {
    width: 400px;
  }
}
</style>
