<script setup>
// 无需额外逻辑
</script>

<template>
  <div class="router-view-wrapper" v-cloak>
    <router-view v-slot="{ Component }">
      <transition name="scale-slide" mode="in-out">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>


<style scoped>
[v-cloak] {
  display: none;
}
.router-view-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #0a0a0a;
  /* 避免空白时的背景 */
}

.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 0.6s ease;
  width: 100%;
  height: 100%;
}

.scale-slide-enter-from {
  transform: translateX(-100%) scale(1);
}

.scale-slide-enter-to {
  transform: translateX(0%) scale(1);
}

.scale-slide-leave-from {
  transform: translateX(0%) scale(1);
}

.scale-slide-leave-to {
  transform: translateX(100%) scale(0.6);
}

/* 针对所有元素设置透明的滑动条 */
* {
  /* 设置整个页面滑动条为透明 */
  scrollbar-width: thin;
  /* Firefox 浏览器 */
  scrollbar-color: transparent transparent;
  /* Firefox 滚动条颜色 */
}

/* 针对 Webkit 浏览器（如 Chrome、Safari、Edge）设置透明滑动条 */
::-webkit-scrollbar {
  width: 8px;
  /* 设置滑动条宽度 */
}

::-webkit-scrollbar-track {
  background: transparent;
  /* 设置滑动条轨道背景透明 */
}

::-webkit-scrollbar-thumb {
  background-color: transparent;
  /* 设置滑动条的颜色透明 */
  border-radius: 10px;
  /* 可选：设置滑动条的圆角 */
}

::-webkit-scrollbar-button {
  display: none;
  /* 可选：隐藏滑动条的按钮 */
}
</style>
