<template>
    <body>
      <div class="content">
        <div class="competition" v-for="(competition, index) in competitions" :key="index">
          <div class="name">
            <b>⭐{{ competition.name }}</b>
          </div>
          <div class="rank">
            🚩{{ competition.rank }}
          </div>
          <hr />
        </div>
      </div>
    </body>
  </template>
  
  <script setup>
  const competitions = [
    { name: "2025 数字中国创新大赛 数字安全赛道 华南赛区初赛", rank: "Rank: 1" },
    { name: "2025 CISCN x CCB 华南分区决赛", rank: "Rank: 10" },
    { name: "2025 CISCN x CCB 初赛", rank: "Rank: 127" },
    { name: "2024 niteCTF", rank: "Rank: 23/1174" },
    { name: "2024 鹏城杯", rank: "初赛排名 60\n决赛——攻击排名：32/60\n决赛——防御排名：8/60" },
    { name: "2024 长城杯", rank: "Rank: 38 (获得决赛资格（没去线下赛唉唉）)" },
    { name: "2024 BaseCTF", rank: "Rank: 10/2037" },
    { name: "2024 羊城杯决赛", rank: "Rank: 12/18 (优胜奖)" },
    { name: "2024 羊城杯初赛", rank: "Rank: 18/500" },
    { name: "2024 中国工业互联网安全大赛智能家居赛道线下决赛", rank: "Rank: 13/30 (优秀奖)" },
    { name: "2024 TFCCTF", rank: "Rank: 50/1452" },
    { name: "2024 UIUCTF", rank: "Rank: 129/959" },
    { name: "2024 CISCN 华南分区决赛", rank: "Rank: 19/50(二等奖)" },
    { name: "2024 广东省赛决赛", rank: "Rank: 14/30(二等奖)" },
    { name: "2024 中国海洋大学信息安全竞赛", rank: "Rank: 1(一等奖)" },
    { name: "2024 polarCTF 夏季挑战赛", rank: "Rank: 4/118(二等奖)" },
    { name: "2024 Dragon Knight CTF", rank: "Rank: 6(三等奖)" },
    { name: "2024 CISCN 初赛", rank: "Rank: 296/2000" },
    { name: "2024 XYCTF", rank: "Rank: 12(三等奖)" },
    { name: "2024 复兴杯 决赛", rank: "Rank: 三等奖" },
    { name: "2023 CISCN 华南分区赛", rank: "Rank: 三等奖" },
  ];
  </script>
  
  <style scoped>
  /* 确保 body 填满整个视口 */
  body {
    margin: 0;
    height: 100vh;
    font-family: Arial, sans-serif;
    overflow: hidden; /* 防止 body 的滚动条出现 */
    color:white;
  }
  
  /* 滚动内容容器 */
  .content {
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow-y: auto; /* 启用垂直滚动 */
    height: 100%; /* 填满 body 的高度 */
    box-sizing: border-box; /* 包含内边距和边框 */
    padding-bottom: 80px;
  }
  
  /* 比赛条目样式 */
  .competition {
    text-align: left;
    margin: 20px 0;
  }
  
  /* 分割线样式 */
  hr {
    width: 80%;
    border: none;
    border-top: 1px solid #ddd;
    margin: 20px 0;
  }
  
  /* 比赛名称样式 */
  .name {
    font-size: 24px;
  }
  
  /* 比赛排名样式 */
  .rank {
    font-size: 18px;
    margin-top: 10px;
  }
  </style>
  