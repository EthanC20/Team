<template>
    <div>
      <live2d :style="style" :model="['Potion-Maker/Pio', 'school-2017-costume-yellow']" :direction="direction"
        :size="size"></live2d>
    </div>
  </template>
  
  <script>
  import live2d from 'vue-live2d'
  
  export default {
    name: 'App',
    components: {
      live2d
    },
    data() {
      return {
        direction: 'right',
        style: 'position: fixed; bottom: 0; left: 0; z-index: 10; margin-left: 20px;',
        size: 200, // 默认大小
        tips: {
          mouseover: [{
            selector: '.vue-live2d',
            texts: ['这样可以修改默认语句']
          }]
        }
      }
    },
    created() {
      this.tips = this.customTips;
      this.updateSize(); // 初始化时设置大小
      window.addEventListener('resize', this.updateSize); // 监听窗口大小变化
    },
    methods: {
      updateSize() {
        const width = window.innerWidth;
        if (width >= 1920) {
          this.size = 300; // 大屏幕
        } else if (width >= 1280) {
          this.size = 250; // 中等屏幕
        } else {
          this.size = 200; // 小屏幕
        }
      }
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateSize); // 组件销毁时移除监听
    }
  }
  </script>