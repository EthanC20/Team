<script setup>
import FooterVue from '../components/footer.vue';
import HeaderVue from '../components/header.vue';
import MyLive2d from '../components/myLive2d.vue';
import flingLine from '../components/flingLine.vue';

import LeftPart from './mem/leftPart.vue';
import RightPart from './mem/rightPart.vue';
</script>

<template>
  <MyLive2d></MyLive2d>
  <div class="container">
    <!-- 视频背景 -->
    <!-- 内容 -->
    <div class="content">
      <!-- 头部 -->
      <HeaderVue class="header"></HeaderVue>
      <el-main>
        <div>
          <LeftPart class="leftPart"></LeftPart>
          <RightPart class="rightPart"></RightPart>
        </div>
        <flingLine></flingLine>
      </el-main>
      <FooterVue class="footer"></FooterVue>
    </div>
  </div>
</template>

<style scoped>
html,
leftPart {
  height: 100%;
  margin: 0;
  overflow: hidden;
  /* 禁止滚动条 */
}

.container {
  position: relative;
  height: 100%;
  /* 确保容器高度占满屏幕 */
  display: flex;
  flex-direction: column;
  overflow: hidden;
}


/* 内容区域样式 */
.content {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  /* 确保内容位于视频上面 */
}

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

/* 主体样式 */
.leftPart {
  float: left;
  /* 主体区域自动填充剩余空间 */
  position: relative;
}
</style>
