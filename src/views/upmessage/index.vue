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
.content-p {
  max-width: 256px;
}
</style>

<template>
  <div>
    <div class="up-back">
      <div>
        <p style="color: #1e73be">2023-8-17</p>
        <p class="content-p">
          新增主页canvas粒子像素效果，loading效果，优化体验
        </p>
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
