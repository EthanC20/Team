<script setup>
import FooterVue from '../components/footer.vue';
import HeaderVue from '../components/header.vue';
import MyLive2d from '../components/myLive2d.vue';
import flingLine from '../components/flingLine.vue';

import MainVue from './homepart/main.vue';
</script>

<template>
  <MyLive2d></MyLive2d>

  <div class="container">
    <!-- 内容部分 -->
    <div class="content">
      <!-- 头部 -->
      <HeaderVue class="header"></HeaderVue>
      <!-- 主体 -->
      <el-main>
        <MainVue class="body"></MainVue>
        <flingLine></flingLine>

      </el-main>
      <!-- 底部 -->
      <FooterVue class="footer"></FooterVue>
    </div>
  </div>
</template>

<style scoped>
html,
body {
  height: 100%;
  margin: 0;
  overflow: hidden;
  /* 禁止滚动条 */
}

.container {
  height: 100%;
  /* 确保 container 占满整个网页 */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: rgb(66, 100, 203);
}



/* Header 样式 */
.header {
  flex: 0 0 auto;
  background-color: transparent;
  height: 60px;
}

/* Footer 样式 */
.footer {
  flex: 0 0 auto;
  background-color: transparent;
  height: 60px;
}

/* 主体样式 */
.body {
  flex: 1;
  position: relative;
}
</style>
