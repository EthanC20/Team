<script setup>
import FooterVue from '../components/footer.vue';
import HeaderVue from '../components/header.vue';
import MyLive2d from '../components/myLive2d.vue';
import FlingLine from '../components/FlingLine.vue';

import MainVue from './awards/main.vue';
</script>

<template>
  <MyLive2d></MyLive2d>
  <div class="container">
    <!-- 视频背景 -->

    <!-- 内容 -->
    <div class="content">
      <!-- 头部 -->
      <HeaderVue class="header"></HeaderVue>
      <!-- 主体 -->
      <el-main>
        <MainVue class="body"></MainVue>
        <FlingLine/>

      </el-main>
      <!-- 底部 -->
      <FooterVue class="footer"></FooterVue>
    </div>
  </div>
</template>

<style scoped>

.container {
  position: relative;
  height: 100vh;
  /* 确保容器高度占满屏幕 */
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
/* 内容样式 */



/* 主体部分自适应剩余高度 */
el-main {
  flex: 1;
  /* 主体部分占用剩余空间 */
  display: flex;
  /* 保证内容居中对齐时有效 */
}

/* Header 样式 */
.header {
  flex: 0 0 auto;
  /* 头部固定高度 */
  background-color: transparent;
  height: 60px;
}

/* Footer 样式 */
.footer {
  flex: 0 0 auto;
  background-color: transparent;
  height: 60px;
}
</style>