<script setup>
import flingLine from '../components/flingLine.vue';
import LeftPart from './mem/leftPart.vue';
import RightPart from './mem/rightPart.vue';
</script>

<template>

  <div class="app-container">
    <flingLine />
    <div class="main-content">
      <LeftPart class="left-part" />
      <RightPart class="right-part" />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}



.main-content {
  margin-top:100px;
  flex: 1;
  display: flex;
  min-height: 0;
  /* 关键：允许内容区域收缩 */
}

.left-part {
  flex: 0 0 62%;
  overflow-y: auto;
  overscroll-behavior: contain;
}

.right-part {
  padding-right: 20px;
  flex: 0 0 38%;
  overflow-y: auto;
  overscroll-behavior: contain;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }

  .left-part,
  .right-part {
    flex: 1 1 100%;
  }
}
</style>