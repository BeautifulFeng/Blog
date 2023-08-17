<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// 樱花类
class CherryBlossom {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 4 + 1;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 3 + 1;
    this.radius = Math.random() * 10 + 5;
    this.color = this.getRandomColor();
  }
  getRandomColor() {
    // const colors = ["#FFB6C1", "#FF69B4", "#FF1493"];
    const colors = ["#F8BBD0", "#FFCDD2", "#E57373", "#FF8A80", "#FF5252"];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }
  draw() {
    const ctx = this.ctx;
    const gradient = this.ctx.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.radius
    );
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, "white");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > this.canvas.width || this.x < 0) {
      this.speedX *= -1;
    }
    if (this.y > this.canvas.height) {
      this.y = 0;
      this.x = Math.random() * this.canvas.width;
    }
  }
}
const canvas = ref(null);
onMounted(() => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.value.width = width;
  canvas.value.height = height;
  const cherryBlossoms = Array.from(
    { length: 100 },
    () => new CherryBlossom(canvas.value)
  );
  const ctx = canvas.value.getContext("2d");
  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (const cherryBlossom of cherryBlossoms) {
      cherryBlossom.update();
      cherryBlossom.draw();
    }
    requestAnimationFrame(animate);
  }
  animate();
});
</script>
<style scoped>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  pointer-events: none;
  /* background-color: transparent; */
}
</style>
