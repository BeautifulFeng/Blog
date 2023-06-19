<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    const canvas = this.$refs.canvas;
    const ctx = canvas.getContext("2d");

    // 设置canvas的宽度和高度
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 定义粒子数组
    const particles = [];

    // 定义一个绘制函数
    function draw() {
      // 绘制背景
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 更新粒子位置
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // 碰到边界反弹
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx = -particle.vx;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy = -particle.vy;
        }
      });
      // 绘制连线
      ctx.globalAlpha = 0.5;
      particles.forEach((particleA, indexA) => {
        particles.slice(indexA + 1).forEach((particleB) => {
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            ctx.lineWidth = 1;
            ctx.strokeStyle = "#ffffff";
            ctx.stroke();
          }
        });
      });
      ctx.globalAlpha = 1;
      // 绘制粒子
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      // 请求下一帧动画
      requestAnimationFrame(draw);
    }

    // 初始化粒子数组
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const vx = Math.random() * 2 - 1;
      const vy = Math.random() * 2 - 1;
      const size = 1;
      //   const size = Math.random() * 1.6;
      const color = "#ffffff";

      particles.push({ x, y, vx, vy, size, color });
    }

    // 调用绘制函数
    draw();
  },
};
</script>
<style scoped>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -99;
  pointer-events: none;
}
</style>
