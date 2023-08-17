<!--
 * @Author: BeautifulFeng 11593811+beautifulfeng@user.noreply.gitee.com
 * @Date: 2023-03-22 20:57:22
 * @LastEditors: BeautifulFeng 11593811+beautifulfeng@user.noreply.gitee.com
 * @LastEditTime: 2023-06-22 02:21:40
 * @FilePath: \my-blog\src\views\upmessage\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<style scoped>
.up-back {
  /* text-align: center; */
  height: 300px;
  font-size: 13px;
  border-radius: 0.5rem;
  position: relative;
  padding: 0.5rem 0.75rem;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ffe4d7),
    color-stop(42%, #dee2f8),
    to(#d1e7fd)
  );
  background-image: linear-gradient(
    90deg,
    #ffe4d7 0,
    #dee2f8 42%,
    #d1e7fd 100%
  );
}
.up-back::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#faefef),
    to(rgba(228, 239, 250, 0))
  );
  background-image: linear-gradient(
    0deg,
    #f8f3f3 0,
    /* #333333 100, */ rgba(198, 225, 252, 0) 100%
  );
}
.up-content {
  border-top: 0.0625rem solid #7a79796b;
}
.widget-mission-footer {
  background: #ffffff;
  border-radius: 0 0 10px 10px;
}
.widget-mission-footer a {
  padding: 10px;
  font-size: 12px;
  text-align: center;
  display: block;
  border-top: 1px solid #f5f6f7;
  font-weight: 600;
  color: black;
}
</style>

<template>
  <div>
    <div class="up-back">
      <div>
        <p style="color: #1e73be">2023-8-17</p>
        <p>新增主页canvas动画，loading效果，优化体验</p>
      </div>

      <div class="up-content">
        <div>
          <p style="color: #1e73be">嗨！朋友</p>
          <p>所有的勇敢，都源于一个勇敢的开始</p>
        </div>
      </div>
    </div>
    <div class="widget-mission-footer" bis_skin_checked="1">
      <a href="" target="_blank" onclick="event.preventDefault()">全部公告</a>
    </div>
  </div>
</template>

<script setup></script>
