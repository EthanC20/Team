<script setup>
import {
  Menu as IconMenu,
  Position,
  Memo,
  TrophyBase,
  Connection,
} from "@element-plus/icons-vue";
</script>

<template>
  <div class="top-nav">
    <div class="container">
      <ul class="menu">
        <div> <img class="logo" src="@/assets/bg/webicon.png" /> </div>
        <div class="logo">Del0n1x</div>
        <li class="menu-item current">
          <router-link to="/">
            <span class="mask mask-top">Home</span>
            <span class="mask mask-bottom">Home</span>
          </router-link>
        </li>
        <li class="menu-item member">
          <router-link to="/mem">
            <span class="mask mask-top">Members</span>
            <span class="mask mask-bottom">Members</span>
          </router-link>
        </li>
        <li class="menu-item awards">
          <router-link to="/awards">
            <span class="mask mask-top">Awards</span>
            <span class="mask mask-bottom">Awards</span>
          </router-link>
        </li>
        <li class="menu-item Wp">
          <a target="_blank" href="https://www.yuque.com/keyboard-ovrmx/scxvuu">
            <span class="mask mask-top">WriteUp</span>
            <span class="mask mask-bottom">WriteUp</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.menu {
  display: flex;
  justify-content: flex-start;
  /* 左对齐 */
  list-style-type: none;
  padding: 0;
  align-items: center;
  /* 确保菜单项垂直居中 */
}

.menu-item {
  position: relative;
  /* 确保子元素相对于这个元素定位 */
  font-size: 21px;
  margin-left: 10px;
  white-space: nowrap;
  /* 防止文本自动换行 */
  text-align: center;
  margin-top: -50px;
}

.menu-item a {
  text-decoration: none;
  display: inline-block;
  position: relative;
  width: 138px;
  /* 增加宽度，确保文本显示完整 */
  padding: 0 10px;
  /* 给文本留出一些空间 */
  font-weight: bold;
  color: rgba(38, 238, 225, 0.5);
}

.mask {
  font-size: 28px;
  display: block;
  font-family: 'Soufont';
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  white-space: nowrap;
  /* 防止换行 */
  text-overflow: ellipsis;
  /* 超出部分用省略号表示 */
  transition: opacity 0.7s ease, transform 0.7s ease;
  /* 添加平滑过渡 */
}

/* mask-top 默认显示，mask-bottom 默认隐藏 */
.mask-top {
  opacity: 1;
}

.mask-bottom {
  opacity: 0;
  top: 100%;
  /* 初始状态时，位于下方 */
}

.menu-item a:hover .mask-top {
  opacity: 0;
  /* 鼠标悬浮时，隐藏上面的文本 */
  transform: translateY(-100%);
  /* 向上移动 */
}

.menu-item a:hover .mask-bottom {
  opacity: 1;
  /* 鼠标悬浮时，显示下面的文本 */
  transform: translateY(0);
  /* 向上移动到显示区域 */
}

.logo {
  font-family: 'Soufont';
  font-size: 28px;
  margin-left: 20px;
  display: inline-block;
  /* 确保 logo 跟其他菜单项在一行 */
  vertical-align: middle;
  /* 确保 logo 在菜单项垂直居中 */
  color: rgb(38, 238, 225);
}
</style>
