<script setup>
import FooterVue from '../components/footer.vue';
import HeaderVue from '../components/header.vue';
import MyLive2d from '../components/myLive2d.vue';
import flingLine from '../components/FlingLine.vue';
import LeftPart from './mem/leftPart.vue';
import RightPart from './mem/rightPart.vue';
</script>

<template>
  <MyLive2d />
  <div class="app-container">
    <HeaderVue class="header" />
    <div class="main-content">
      <LeftPart class="left-part" />
      <RightPart class="right-part" />
    </div>
    <flingLine />
    <FooterVue class="footer" />
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header, .footer {
  flex-shrink: 0;
}

.main-content {
  flex: 1;
  display: flex;
  min-height: 0; /* 关键：允许内容区域收缩 */
}

.left-part {
  flex: 0 0 62%;
  overflow: auto; /* 内容超出时滚动 */
}

.right-part {
  flex: 0 0 38%;
  overflow: auto;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
  }
  .left-part, .right-part {
    flex: 1 1 100%;
  }
}
</style>