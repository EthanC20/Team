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
    <!-- 内容 -->
    <div class="content">
      <!-- 头部 -->
      <HeaderVue class="header"></HeaderVue>
      <!-- 主体 -->
      <el-main>
        <div class="layout-main">
          <LeftPart class="leftPart"></LeftPart>
          <RightPart class="rightPart"></RightPart>
        </div>
        <flingLine></flingLine>
      </el-main>
      <!-- 底部 -->
      <FooterVue class="footer"></FooterVue>
    </div>
  </div>
</template>

<style scoped>
/* 基础样式重置 */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* 内容区域 */
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

/* Element Plus 的 el-main 样式 */
el-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 0; /* 移除默认内边距 */
}

/* 主布局 */
.layout-main {
  flex: 1;
  display: flex;
  min-height: 0;
  overflow: hidden; /* 防止内部溢出 */
}

/* 左侧部分 */
.leftPart {
  flex: 0 0 62%; /* 固定62%宽度 */
  min-width: 0; /* 允许内容收缩 */
  border: 2px solid rgb(35, 212, 94);
  overflow: auto; /* 如果需要滚动 */
  padding:10px;
}

/* 右侧部分 */
.rightPart {
  flex: 0 0 38%; /* 固定38%宽度 */
  min-width: 0;
  border: 1px solid rgba(2, 48, 199, 0.938);
  overflow: auto; /* 如果需要滚动 */
}

/* 头部样式 */
.header {
  flex-shrink: 0;
  height: 60px;
  background-color: transparent;
}

/* 底部样式 */
.footer {
  flex-shrink: 0;
  height: 60px;
  background-color: transparent;
}
</style>