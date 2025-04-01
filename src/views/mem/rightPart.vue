<template>
    <div class="rightPart">
        <p>
            {{msg}}
        </p>
    </div>
</template>
<script>
import { ref } from 'vue';

export default {
    setup(){
        const msg = ref('在CTF的世界里，我们不仅是技术的追逐者，更是智慧的探险家。每一道题目，都是一片未知的领域，等待我们去探索、去征服。我们以代码为剑，以逻辑为盾，在虚拟的战场上披荆斩棘，寻找隐藏的真相。\n我们是一群热爱挑战的灵魂，每一次解题，都是对自我极限的突破；每一次合作，都是对团队默契的升华。无论是指尖敲击键盘的节奏，还是深夜灯火下的沉思，都是我们追逐梦想的印记。\n在这里，我们不仅是队友，更是彼此的灯塔。我们用智慧点亮前行的路，用坚持书写属于我们的传奇。CTF不仅是一场比赛，更是一场关于勇气、智慧与团结的旅程。\n我们是探索者，是解谜者，是永不放弃的追梦人。在CTF的世界里，我们并肩作战，用代码与热情，谱写属于我们的辉煌篇章。');
        return {
            msg
        }
    }    
}



</script>

<style scoped>
.rightPart {
    margin-top: 100px;
    display: flex;
    /* 启用 Grid 布局 */
    grid-template-columns: auto 1fr;
    /* 图片占据自动宽度，文字占据剩余空间 */
    gap: 20px;
    /* 图片和文字之间的间距 */
    align-items: start;
    /* 让图片和文字顶部对齐 */
}

.rightPart p {
    color: rgb(97, 135, 218);
    font-size: 30px;
    margin: 0;
    /* border: 2px solid #ccc; */
    margin-right: 20px;;
    /* 去除默认的段落边距 */
}
</style>