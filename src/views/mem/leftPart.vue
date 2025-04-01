<template>
  <div class="container">
      <MemberCard 
      v-for="(member, index) in members" 
      :key="index" 
      :member="member"
      class="member-item"
    />
  </div>
</template>


<script>
//import MemberCard from '../../components/MemberCard.vue';
import { defineAsyncComponent } from 'vue'

export default {
components: { 
  MemberCard: defineAsyncComponent(() => 
    import('../../components/MemberCard.vue')
  )
 },
props: {
  title: {
    type: String,
    default: '团队成员'
  }
},
data() {
  return {
    members: []
  };
},
async created() {
  try {
    const response = await fetch('/members.json');
    this.members = await response.json();
  } catch (error) {
    console.error('加载成员数据失败:', error);
    // 可以在这里设置默认数据或显示错误信息
  }
}
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

.link {
  margin: 10px;
}

.github {
  margin: 20px;
}

.github img,
.blog img {
  transition: transform 0.3s, filter 0.3s;
}

.github:hover img,
.blog:hover img {
  transform: scale(1.2);
  /* 放大图标 */
  filter: brightness(1.5);
  /* 增加亮度 */
}

.container {
    display: flex;
    /* 改为顶部对齐 */
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
    padding-top: 30px;
    padding-right: 0px;
    margin-top: 65px;
    /* 给容器上方留点空间 */
}

.container .card {
    position: relative;
    max-width: 300px;
    border-radius: 20px;
    height: 200px;
    background: rgba(255, 255, 255, 0.8); /* 半透明背景 */
    margin: 10px 10px;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
    z-index: 2;
    backdrop-filter: blur(10px);
}

.container .card:hover {
    height: 420px;
    background: rgba(255, 255, 255, 1); /* 悬停时更亮 */
}

.container .card .imgBx {
    position: relative;
    width: 240px;
    height: 240px;
    top: -60px;
    left: 30px;
    z-index: 1;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

/* 头像大小 */
.container .card .imgBx img {
    /*max-width: 100%;*/
    height: 240px;
    width: 240px;
    border-radius: 50%;
    object-fit: cover;
    /* 保持图片比例，防止变形 */
}

.imgBx:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

.container .card .content {
    position: relative;
    margin-top: -140px;
    padding: 10px 15px;
    text-align: center;
    color: #111;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;
}
.container .card:hover .content {
  visibility: visible;
  opacity: 1;
  margin-top: -40px;
  transition-delay: 0.3s;
}

@media(max-width: 800px) {
  .container .card {
      width: 210px;
      height: 140px;
  }

  .container .card:hover {
      height: 196px;
  }

  .container .card .imgBx {
      width: 168px;
      height: 168px;
  }

  .container .card .imgBx img {
      width: 182px;
      height: 182px;
  }
}
</style>