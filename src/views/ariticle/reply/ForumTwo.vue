<style scoped lang="scss">
.content-text {
  max-width: 600px;
  word-wrap: break-word;
}
@media screen and (max-width: 1400px) {
  .content-text {
    max-width: 300px;
  }
}
@media screen and (max-width: 900px) {
  .content-text {
    max-width: 200px;
  }
}
@media screen and (max-width: 768px) {
  .content-text {
    max-width: 148px;
  }
}

.Forum {
  border-bottom: 0.0625rem solid #efefef;
  margin-top: 1rem;
  // padding-bottom: 1rem;
  display: flex;
  flex-direction: row;
}

.iconbutton {
  display: flex;
  padding: 0 8px;
  font-size: 12px;
}

.Forum-headimg {
  padding: 0 0.625rem;
}

.Forum-headimg > img {
  border-radius: 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
  /* object-fit: contain; */
}

.Forum-content {
  flex: 1;
}
.Forum-content-author {
  display: flex;
}
.author {
  font-size: 13px;
  line-height: 2rem;
}
.author_other {
  font-size: 13px;
  line-height: 2rem;
  color: #8590a6;
}
.Forum-content-other {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.b2timeago {
  font-size: 12px;
  color: #8590a6;
}
.b2timeago-a {
  font-size: 12px;
  color: #8590a6;
  margin-left: 0.6rem;
  cursor: pointer;
  display: none;
}
.Forum-a:hover .b2timeago-a {
  display: inline;
}
.totop {
  /* width: 56px; */
  height: 100%;
  /* background-color: red; */
  position: fixed;
  right: 1vw;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
}

.totop > button {
  background-color: rgba(238, 238, 238, 0.933);
  height: 3.5rem;
  width: 3.5rem;
  font-size: 0.75rem;
  margin-top: 0.5rem;
  text-align: center;
}

.totop > button:hover {
  background-color: #f3f2f2;
}
.Forum-content-repling {
  display: flex;
  position: relative;
  background-color: #f5f6f7;
  /* height: 100px; */
  flex-direction: column;
  border-radius: 6px;
}
.commentform {
  padding: 1rem 1rem 0.3rem 1rem;
}
.comment-smile-box {
  display: flex;
  align-items: center;
  justify-items: center;
  z-index: 3;
  flex-flow: wrap;
  width: 230px;
  height: 102px;
  padding: 2px;
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.11);
  background-color: #fff;
}
.smily-button {
  width: 14.2857%;
  height: 33px;
  background: #f5f6f7;
  border: 1px solid #fff;
  font-size: 19px;
  line-height: 33px;
  padding: 0;
}
.but {
  font-size: 13px;
  &:hover {
    opacity: 0.9;
    transition: opacity 0.2s;
  }
}
.send {
  background: #1e73be;
  border: 1px solid #1e73be;
  border-radius: 6px;
  color: #fff;
}
.biaoqing {
  cursor: pointer;
  margin-left: 1rem;
}
</style>

<template>
  <!-- <div class="Forum-a"> -->
  <div class="Forum">
    <!-- 头像 -->
    <div class="Forum-headimg">
      <!-- <el-icon size="32"><Avatar /></el-icon> -->
      <img :src="item.imgurl" alt="" />
    </div>
    <!-- 回复主题 -->
    <div class="Forum-content">
      <div class="Forum-a">
        <!-- 回复人的名字 -->
        <div class="Forum-content-author">
          <div class="author">{{ item.user_id }}</div>
          <div v-if="item.level == '博主'" title="博主">
            <svg
              t="1687299409866"
              class="icon"
              viewBox="100 -140 3222 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="17039"
              width="64"
              height="32"
            >
              <path
                d="M2533.50188862 82.339079H1118.88951162L1061.05840562 22.956139H570.12760062L320.70455962 280.294457l490.930806 494.934355L911.20073062 676.196029l1622.301158-0.541765c126.479143 1.625295 230.204161-124.348813 238.394911-275.216559 8.980442-165.366843-99.115426-318.906682-238.394911-318.098626zM403.84251262 280.294457L601.79789062 82.339079h415.708129l197.955377 197.955378L811.63536562 684.092941z"
                fill="#d81e06"
                p-id="17040"
                data-spm-anchor-id="a313x.7781069.0.i35"
                class="selected"
              ></path>
              <path
                d="M2179.57332062 311.53317q-8.365217 63.597687-54.25913 103.210801-44.075787 37.537878-101.833433 37.537879h-146.129598l-12.37795 94.349731h-86.939489l25.114016-191.27055h241.415939q17.850694 0 31.679472-12.130024t16.454961-32.193689q2.617-20.036118-8.071379-31.642742t-28.566619-11.606624H1814.69008262L1884.81649662 170.793674h175.825659q57.427077 0 91.705184 37.519513 35.56365 39.622296 27.225981 103.219983z m-535.998297 235.070863L1692.91235662 170.793674h86.948672l-49.337333 375.837907z m-222.444987 5.729853q-21.064553 0-36.518626-42.753514L1262.55821162 170.793674h94.42319l82.642101 232.48141L1576.36863062 170.793674H1671.44377562l-204.034163 339.346828q-25.24257 42.239296-46.288758 42.239296zM2308.89902462 348.483372H2555.71424862v221.554288h-331.27545V170.793674H2555.71424862v36.19724h-246.815224zM2471.23565662 533.84042V384.671429h-162.336632v149.168991z"
                fill="#FFFFFF"
                p-id="17041"
              ></path>
              <path
                d="M605.01174962 240.580336l1.303909-3.920908c3.920909-13.084999 18.309816-20.926816 32.689542-17.005908 6.537908 2.617 11.771908 6.537908 14.388908 13.075817a25.710876 25.710876 0 0 1-2.617 28.768633c-1.313091 0-1.313091 1.313091-2.617 2.617 19.613725 11.771908 37.923542 23.534634 56.224175 33.975086 6.537908 3.920909 14.388908 9.182456 20.926817 13.075816a4.930979 4.930979 0 0 0 7.841817-1.313091l1.313091-1.303909c22.230725-39.22745 43.157541-78.464083 65.379084-118.995441a25.830248 25.830248 0 0 1-15.692817-23.534634q0-11.781091 7.851-19.613725c10.458817-10.467999 26.151633-9.182456 36.61045 0l1.303909 1.303908c10.467999 13.075817 6.537908 28.768633-10.458817 40.540542 5.234 10.458817 10.458817 20.917634 16.996725 30.072542 15.692817 28.768633 31.385633 57.537267 47.07845 84.992809 3.920909 6.537908 6.537908 7.851 11.771908 3.920908 24.79263-14.379725 48.382358-30.072542 73.220901-44.452267l3.920908-2.617c-5.224817-3.920909-7.841817-10.458817-9.182455-16.996725-1.313091-14.388908 10.458817-26.160816 23.534633-27.464725 11.771908-1.303909 22.230725 6.537908 26.151634 18.309816 0 3.920909 1.303909 5.224817 1.303908 6.537909v9.182455c-3.920909 13.075817-13.075817 20.917634-27.455542 20.917634 0 1.303909-1.303909 2.617-1.303908 5.234L942.35680262 422.392957c-1.303909 6.537908-3.920909 7.841817-10.458817 7.841817H687.38755862c-6.537908 0-9.182456-1.303909-10.458817-7.841817-11.771908-39.22745-23.534634-78.4549-33.975085-118.995442-2.607817-10.458817-6.537908-20.917634-9.182456-32.689542a29.769521 29.769521 0 0 1-24.847725-13.075817c-1.303909-3.920909-2.617-5.234-3.920908-7.841817V240.580336z m205.29216 214.474615h115.074533c10.458817 0 19.613725 7.851 19.613725 18.309817 0 9.182456-6.537908 18.300634-15.692817 19.613725h-234.060792a19.66882 19.66882 0 0 1-18.309817-13.075817c-2.617-7.851 0-16.996725 6.537909-20.926816a22.129718 22.129718 0 0 1 13.075816-3.920909c37.923542-1.303909 75.837901 0 113.761443 0z"
                fill="#FFF142"
                p-id="17042"
              ></path>
              <path
                d="M809.65195462 139.095837a26.629121 26.629121 0 0 1 18.309817 7.823452l1.303908 1.303909c10.458817 13.084999 6.537908 28.768633-10.458817 40.540541 5.234 10.458817 10.458817 20.926816 16.996726 30.072542 15.692817 28.768633 31.385633 57.537267 47.078449 85.001992 3.920909 6.537908 6.537908 7.841817 11.762726 3.920908 24.847725-14.388908 48.382358-30.072542 73.230083-44.46145l3.920909-2.617c-5.224817-3.920909-7.841817-10.458817-9.182456-16.996725-1.303909-14.379725 10.467999-26.151633 23.543816-27.455542 11.762726-1.313091 22.230725 6.537908 26.151634 18.300634 0 1.313091 1.303909 2.617 1.303909 3.920909v9.182455c-3.920909 13.075817-13.075817 20.926816-27.455543 20.926816 0 1.303909-1.313091 2.617-1.313091 5.224818l-43.157541 146.460166c-1.303909 6.537908-3.920909 7.841817-10.458817 7.841817h-121.575712V139.095837z m0 313.828785H924.72648762c10.458817 0 19.613725 7.841817 19.613726 18.300633 0 9.182456-6.537908 18.309816-15.692817 19.622908H810.95586362"
                fill="#FFC41F"
                p-id="17043"
              ></path>
            </svg>
          </div>
          <div v-else title="游客" style="margin-left: -1.2rem">
            <svg
              t="1687299741016"
              class="icon"
              viewBox="-250 -50 1204 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="22150"
              data-spm-anchor-id="a313x.7781069.0.i43"
              width="64"
              height="32"
            >
              <path
                d="M1247.119 391.831l2.1 1.663q-1.035-0.875-2.1-1.663zM-33.29 394.223l3.792-3.004c-4.553 3.167-8.267 7.216-10.964 11.922z"
                p-id="22151"
              ></path>
              <path
                d="M100.094 1025.202c-0.335 2.246-0.686 4.478-0.991 6.738 0.632-2.397 1.004-5.153 1.025-7.992zM66.475 1057.29zM32.898 1021.133q0.365-2.523 0.758-5.046c-0.512 2.136-0.819 4.598-0.846 7.124z"
                p-id="22152"
              ></path>
              <path
                d="M1183.934 1013.3c0.422 2.64 0.802 5.294 1.181 7.948-0.106-3.188-0.621-6.214-1.497-9.083zM1116.45 1030.643c-0.291-2.086-0.597-4.157-0.919-6.228 0.164 2.851 0.645 5.522 1.408 8.070z"
                p-id="22153"
              ></path>
              <path
                d="M838.858 313.771h-46.031l-24.591 139.174h41.743q41.29 0 66.012-18.581t30.848-53.265q11.887-67.326-67.982-67.326z"
                p-id="22154"
                data-spm-anchor-id="a313x.7781069.0.i42"
                class="selected"
                fill="#dbdbdb"
              ></path>
              <path
                d="M983.722 204.992h-750.886c-0.008 0-0.018 0-0.027 0-31.855 0-57.681 25.807-57.715 57.653v374.76c0.031 31.85 25.86 57.656 57.715 57.656 0.010 0 0.019 0 0.029 0h750.885c0.012 0 0.027 0 0.045 0 31.852 0 57.675-25.809 57.7-57.654v-374.76c-0.023-31.849-25.848-57.656-57.7-57.656-0.014 0-0.029 0-0.047 0zM329.58 622.995l-64.278-348.869h50.102l45.9 272.748c1.11 6.693 1.744 14.404 1.744 22.263 0 3.179-0.105 6.334-0.309 9.463l1.145-0.426c6.755-22.046 17.464-41.111 31.416-57.305l126.091-246.742h48.293l-190.019 348.869h-50.086zM657.27 312.195l-48.131 272.748h33.546l-6.695 38.053h-112.307l6.723-38.068h33.619l48.131-272.748h-33.546l6.723-38.068h112.307l-6.723 38.068h-33.648zM954.537 379.288q-9.072 51.355-51.253 83.21t-96.642 30.104h-45.361l-23.030 130.393h-45.185l61.638-348.869h99.283q56.635 0 83.137 27.246t17.416 77.945z"
                p-id="22155"
                data-spm-anchor-id="a313x.7781069.0.i40"
                class=""
                fill="#dbdbdb"
              ></path>
            </svg>
          </div>
          <div class="author_other">{{ "▶" + item.other_id }}</div>
        </div>
        <!-- 回复的内容 -->
        <div class="Forum-content-text">
          <p class="content-text">{{ item.text }}</p>
        </div>
        <!-- 回复的时间与点赞 -->
        <div class="Forum-content-other">
          <span class="date">
            <time
              class="b2timeago"
              :datetime="item.time"
              itemprop="datePublished"
              >{{ $utils.formatTime(item.time) }}</time
            >

            <a
              class="b2timeago-a"
              v-if="userStore.id === 2 || nickname === item.user_id"
              @click="deletereplytwo(item)"
              >删除</a
            >
          </span>
          <!-- 其他回复 -->
          <div class="iconbutton">
            <button class="reply iconbutton" @click="Tworeply">
              <svg
                t="1687894334652"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4593"
                width="12"
                height="12"
              >
                <path
                  d="M368.413 501.7c0 28.25-22.936 51.093-51.233 51.093-28.25 0-51.186-22.842-51.186-51.094 0-28.25 22.936-51.185 51.186-51.185 28.297 0 51.233 22.935 51.233 51.185z"
                  p-id="4594"
                ></path>
                <path
                  d="M955.006 473.357c0-213.137-199.057-386.555-443.803-386.555-244.743 0-443.801 173.418-443.801 386.555 0 126.615 71.325 245.209 190.946 317.465v121.86c0 8.674 4.755 16.597 12.354 20.606 3.496 1.959 7.18 2.89 11.142 2.89 4.568 0 9.044-1.305 12.96-3.913l56.221-37.11a18.411 18.411 0 0 0 2.704-2.052l63.587-42.33c31.7 5.967 63.306 9.045 93.982 9.045 244.65-0.092 443.708-173.419 443.708-386.461zM293.405 756.885c-112.163-63.213-179.06-169.223-179.06-283.622 0-187.218 178.035-339.565 396.857-339.565 218.825 0 396.858 152.347 396.858 339.565S729.98 812.827 511.203 812.827c-30.581 0-62.28-3.357-94.167-9.977-6.06-1.397-12.494-0.092-17.808 3.452l-74.402 49.6c-1.026 0.56-2.518 1.865-2.518 1.865l-16.97 11.189v-91.652c0-8.483-4.614-16.224-11.933-20.419z"
                  p-id="4595"
                ></path>
                <path
                  d="M570.968 487.341c0 28.25-22.936 51.28-51.28 51.28-28.25 0-51.186-23.03-51.186-51.28s22.936-51.093 51.187-51.093c28.343 0 51.279 22.843 51.279 51.093z m200.177 0c0 28.25-22.937 51.28-51.187 51.28-28.25 0-51.187-23.03-51.187-51.28s22.936-51.093 51.187-51.093c28.25 0 51.187 22.843 51.187 51.093z"
                  p-id="4596"
                ></path>
              </svg>
            </button>
            <button class="givelike iconbutton">
              <svg
                @click="replyGood(item)"
                v-if="!item.goodshow"
                t="1687894475060"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5595"
                width="12"
                height="12"
              >
                <path
                  d="M841.900615 408.186609 664.015206 408.186609c-4.087085 0-7.605212-1.823532-9.635451-4.979408-2.044566-3.188622-2.387373-6.788613-0.932232-10.313903 10.105149-19.105127 57.494459-115.41052 44.899606-217.797421-3.51915-28.749788-18.948561-67.455321-72.482825-88.576361-13.886265-5.465478-39.682791-8.026814-59.192124-8.601912-46.860261-1.38044-56.329936 7.693216-60.373019 11.568477-0.164752 0.155543-0.324388 0.316202-0.484024 0.476861C490.730581 105.371886 491.958548 127.455857 493.514997 155.415652c0.795109 14.287401 1.694595 30.466895 0.857531 48.953945-4.579295 49.570999-11.171434 76.334549-24.283056 98.636484-40.689724 69.270666-109.423155 104.141872-122.656551 105.213273l-96.509031 0L86.587054 408.219355c-11.761881 0-21.296025 9.534144-21.296025 21.296025L65.291029 844.261383c0 11.760858 9.534144 21.296025 21.296025 21.296025l164.337859 0c0.858554 0 1.700735-0.065492 2.533706-0.164752l104.601336 0c1.191128 0.969071 2.534729 2.081405 3.739161 3.082198 22.952758 19.025309 83.921341 69.563332 184.571692 69.563332l209.634508 0c53.634548 0 96.863095-29.224602 112.819508-76.270081 0.13917-0.409322 0.26606-0.823761 0.38067-1.24127 2.246157-8.247848 8.025791-25.420973 15.344476-47.162136 27.735691-82.408895 74.159-220.339314 74.159-294.15653C958.708971 446.576965 918.317029 408.186609 841.900615 408.186609zM107.883079 450.812429l121.744785 0 0 372.152928L107.883079 822.965357 107.883079 450.812429zM844.182588 799.778262c-7.649214 22.723537-13.225209 39.289841-15.882736 48.862871-10.205433 29.319769-37.183877 46.803979-72.293513 46.803979l-209.634508 0c-85.292572 0-135.816269-41.879829-157.38961-59.763129-9.691733-8.03193-15.541975-12.881378-24.845874-12.881378l-91.914386 0L272.221962 450.812429l75.364455 0c20.070104 0 51.52142-17.555841 74.262354-33.985022 24.394596-17.623379 58.936297-47.932686 84.96409-92.242867 19.039635-32.386618 25.602098-68.703755 30.019711-116.802216 0.029676-0.317225 0.051165-0.63445 0.066515-0.952698 0.975211-20.862143-0.039909-39.114856-0.855484-53.780881-0.63445-11.403724-1.402953-25.209148-0.179079-31.395034 15.941064-3.081175 61.369719-0.632403 74.387197 4.490268 27.712155 10.934027 42.701544 28.639271 45.822628 54.138014 11.341303 92.193749-35.07689 182.903703-40.407292 192.944384-0.493234 0.932232-0.74906 1.486864-0.74906 1.486864-7.703449 16.70138-6.353708 35.947723 3.624551 51.509141 9.889231 15.376199 26.888394 24.556279 45.473681 24.556279l177.88541 0c52.712549 0 74.215282 19.825534 74.215282 68.429509C916.115897 586.05053 869.322152 725.084073 844.182588 799.778262z"
                  fill="#272636"
                  p-id="5596"
                ></path>
              </svg>

              <svg
                v-else
                @click="replycancelGoodTwo(item)"
                t="1688031036790"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2278"
                width="12"
                height="12"
              >
                <path
                  d="M841.900615 408.186609 664.015206 408.186609c-4.087085 0-7.605212-1.823532-9.635451-4.979408-2.044566-3.188622-2.387373-6.788613-0.932232-10.313903 10.105149-19.105127 57.494459-115.41052 44.899606-217.797421-3.51915-28.749788-18.948561-67.455321-72.482825-88.576361-13.886265-5.465478-39.682791-8.026814-59.192124-8.601912-46.860261-1.38044-56.329936 7.693216-60.373019 11.568477-0.164752 0.155543-0.324388 0.316202-0.484024 0.476861C490.730581 105.371886 491.958548 127.455857 493.514997 155.415652c0.795109 14.287401 1.694595 30.466895 0.857531 48.953945-4.579295 49.570999-11.171434 76.334549-24.283056 98.636484-40.689724 69.270666-109.423155 104.141872-122.656551 105.213273l-96.509031 0L86.587054 408.219355c-11.761881 0-21.296025 9.534144-21.296025 21.296025L65.291029 844.261383c0 11.760858 9.534144 21.296025 21.296025 21.296025l164.337859 0c0.858554 0 1.700735-0.065492 2.533706-0.164752l104.601336 0c1.191128 0.969071 2.534729 2.081405 3.739161 3.082198 22.952758 19.025309 83.921341 69.563332 184.571692 69.563332l209.634508 0c53.634548 0 96.863095-29.224602 112.819508-76.270081 0.13917-0.409322 0.26606-0.823761 0.38067-1.24127 2.246157-8.247848 8.025791-25.420973 15.344476-47.162136 27.735691-82.408895 74.159-220.339314 74.159-294.15653C958.708971 446.576965 918.317029 408.186609 841.900615 408.186609zM107.883079 450.812429l121.744785 0 0 372.152928L107.883079 822.965357 107.883079 450.812429zM844.182588 799.778262c-7.649214 22.723537-13.225209 39.289841-15.882736 48.862871-10.205433 29.319769-37.183877 46.803979-72.293513 46.803979l-209.634508 0c-85.292572 0-135.816269-41.879829-157.38961-59.763129-9.691733-8.03193-15.541975-12.881378-24.845874-12.881378l-91.914386 0L272.221962 450.812429l75.364455 0c20.070104 0 51.52142-17.555841 74.262354-33.985022 24.394596-17.623379 58.936297-47.932686 84.96409-92.242867 19.039635-32.386618 25.602098-68.703755 30.019711-116.802216 0.029676-0.317225 0.051165-0.63445 0.066515-0.952698 0.975211-20.862143-0.039909-39.114856-0.855484-53.780881-0.63445-11.403724-1.402953-25.209148-0.179079-31.395034 15.941064-3.081175 61.369719-0.632403 74.387197 4.490268 27.712155 10.934027 42.701544 28.639271 45.822628 54.138014 11.341303 92.193749-35.07689 182.903703-40.407292 192.944384-0.493234 0.932232-0.74906 1.486864-0.74906 1.486864-7.703449 16.70138-6.353708 35.947723 3.624551 51.509141 9.889231 15.376199 26.888394 24.556279 45.473681 24.556279l177.88541 0c52.712549 0 74.215282 19.825534 74.215282 68.429509C916.115897 586.05053 869.322152 725.084073 844.182588 799.778262z"
                  fill="#d81e06"
                  p-id="2279"
                ></path>
              </svg>

              <div style="margin: -1.2px 0 0 2px">{{ item.good }}</div>
            </button>
          </div>
        </div>
      </div>
      <!-- 回复的回复框 -->
      <div>
        <div class="Forum-content-repling" v-if="replytext2show">
          <!-- 回复文本框 -->
          <div>
            <div class="commentform">
              <el-input v-model="replytext2" placeholder="您的看法" />
            </div>
          </div>
          <!-- 回复表情发布框 -->
          <div
            style="
              display: flex;
              justify-content: space-between;
              padding-bottom: 6px;
            "
          >
            <!-- 表情 -->
            <el-dropdown trigger="click">
              <div class="biaoqing">
                <svg
                  t="1687882510654"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2523"
                  width="32"
                  height="32"
                >
                  <path
                    d="M318.85312 401.08032h102.0928v40.96h-102.0928zM603.05408 401.08032h102.11328v40.96h-102.11328z"
                    fill=""
                    p-id="2524"
                  ></path>
                  <path
                    d="M511.97952 867.84c-196.1984 0-355.81952-159.62112-355.81952-355.84S315.78112 156.16 511.97952 156.16c196.21888 0 355.86048 159.62112 355.86048 355.84S708.1984 867.84 511.97952 867.84z m0-670.72C338.35008 197.12 197.12 338.37056 197.12 512s141.23008 314.88 314.85952 314.88c173.64992 0 314.90048-141.23008 314.90048-314.88S685.62944 197.12 511.97952 197.12z"
                    fill=""
                    p-id="2525"
                  ></path>
                  <path
                    d="M511.97952 732.63104c-97.11616 0-176.128-78.99136-176.128-176.14848h40.96a135.33184 135.33184 0 0 0 135.168 135.18848 135.3728 135.3728 0 0 0 135.20896-135.18848h40.96c0 97.15712-79.03232 176.14848-176.16896 176.14848z"
                    fill=""
                    p-id="2526"
                  ></path>
                </svg>
              </div>
              <template #dropdown>
                <!-- <el-dropdown-menu> -->
                <div class="comment-smile-box b2-show" bis_skin_checked="1">
                  <button class="text smily-button" @click="insertEmoji('😁')">
                    😁</button
                  ><button class="text smily-button" @click="insertEmoji('😊')">
                    😊</button
                  ><button class="text smily-button" @click="insertEmoji('😎')">
                    😎</button
                  ><button class="text smily-button" @click="insertEmoji('😤')">
                    😤</button
                  ><button class="text smily-button" @click="insertEmoji('😥')">
                    😥</button
                  ><button class="text smily-button" @click="insertEmoji('😂')">
                    😂</button
                  ><button class="text smily-button" @click="insertEmoji('😍')">
                    😍</button
                  ><button class="text smily-button" @click="insertEmoji('😏')">
                    😏</button
                  ><button class="text smily-button" @click="insertEmoji('😙')">
                    😙</button
                  ><button class="text smily-button" @click="insertEmoji('😟')">
                    😟</button
                  ><button class="text smily-button" @click="insertEmoji('😖')">
                    😖</button
                  ><button class="text smily-button" @click="insertEmoji('😜')">
                    😜</button
                  ><button class="text smily-button" @click="insertEmoji('😱')">
                    😱</button
                  ><button class="text smily-button" @click="insertEmoji('😲')">
                    😲</button
                  ><button class="text smily-button" @click="insertEmoji('😭')">
                    😭</button
                  ><button class="text smily-button" @click="insertEmoji('😚')">
                    😚</button
                  ><button class="text smily-button" @click="insertEmoji('💀')">
                    💀</button
                  ><button class="text smily-button" @click="insertEmoji('👻')">
                    👻</button
                  ><button class="text smily-button" @click="insertEmoji('👍')">
                    👍</button
                  ><button class="text smily-button" @click="insertEmoji('💪')">
                    💪</button
                  ><button class="text smily-button" @click="insertEmoji('👊')">
                    👊
                  </button>
                </div>
                <!-- </el-dropdown-menu> -->
              </template>
            </el-dropdown>
            <!-- 回复 -->
            <div style="margin-right: 1rem">
              <button class="but" @click="replytext2cancel">取消</button>
              <button class="but send" @click="replytext2send(item)">
                发送
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script setup>
import { ref, h } from "vue";
// import { throttle } from "../../../assets/utils";
import { useUserStore } from "../../../store/user";
import { ChatRound, Star } from "@element-plus/icons-vue";
import {
  addReplyTwo,
  deleteReplyTwo,
  replygoodTwo,
  replycancelgoodTwo,
} from "../../../api/article";
import { getAuthorId } from "../../../api/artcate";
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  fatherid: {
    type: Number,
    required: true,
  },
});
const fatherid = props.fatherid;
const emit = defineEmits(["fresh"]);
const userStore = useUserStore();
const nickname = ref(userStore.nickname);
//回复的值
const replytext2 = ref();
const replytext2show = ref(false);
const Tworeply = () => {
  // console.log("我点击了回复");
  replytext2show.value = !replytext2show.value;
};
const replytext2cancel = () => {
  replytext2show.value = false;
  replytext2.value = "";
};
//发送回复
const replytext2send = async (item) => {
  console.log(item);
  const id = userStore.id;
  if (!localStorage.getItem("token") || !id) {
    ElMessage({
      message: h("p", null, [
        h("span", null, "请用户先 "),
        h("i", { style: "color: teal" }, "登录"),
      ]),
      type: "error",
    });
  } else {
    const res = await getAuthorId({ name: item.user_id });
    const data = {
      otherId: res.data.id,
      userId: id,
      fatherId: props.fatherid,
      text: replytext2.value,
    };
    const resTwo = await addReplyTwo(data);
    if (resTwo.status !== 200) {
      ElMessage({
        showClose: true,
        message: "发送失败.",
        type: "error",
        offset: 300,
      });
    } else {
      ElMessage({
        showClose: true,
        message: "发送成功.",
        type: "success",
        offset: 300,
      });
      replytext2.value = "";
      emit("fresh", fatherid);
      item.reply += 1;
    }
  }
};

//表情包函数
const insertEmoji = (emoji) => {
  replytext2.value += emoji;
};
//删除回复
const deletereplytwo = async (item) => {
  // console.log(item);
  const res = await deleteReplyTwo({ id: item.id, father_id: fatherid });
  if (res.status !== 200) {
    ElMessage({
      showClose: true,
      message: "删除失败.",
      type: "error",
      offset: 300,
    });
  } else {
    ElMessage({
      showClose: true,
      message: "删除成功.",
      type: "success",
      offset: 300,
    });
    emit("fresh", fatherid);
  }
};
//点赞事件
const replyGood = async (item) => {
  console.log(userStore);
  const res = await replygoodTwo({
    id: item.id,
    userId: userStore.id,
  });
  // console.log(res);
  if (res.status == 200) {
    item.goodshow = !item.goodshow;
    item.good += 1;
  }
};
//取消赞
const replycancelGoodTwo = async (item) => {
  const res = await replycancelgoodTwo({
    id: item.id,
    userId: userStore.id,
  });
  // console.log(res);
  if (res.status == 200) {
    item.goodshow = !item.goodshow;
    item.good -= 1;
  }
};
</script>
