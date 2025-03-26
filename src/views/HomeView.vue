<script setup>
import flingLine from '../components/flingLine.vue';

import MainVue from './homepart/main.vue';
</script>

<template>


  <div class="container">
    <flingLine />
    <div class="content">
      <el-main>
        <MainVue class="body"></MainVue>
      </el-main>
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
  height: 100vh;
  /* 确保 container 占满整个网页 */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  color: rgb(66, 100, 203);
}


/* 主体样式 */
.body {
  margin-top: 100px;
  flex: 1;
  position: relative;
}
</style>
