<template>
    <div class="card">
        <div class="imgBx" loading="lazy" :alt="avatar">
            <img :src="member.avatarUrl" />
        </div>
        <div class="content">
            <h2>{{ member.nickname }}</h2>
            <h3>主攻方向：{{ member.major }}</h3>
            <div class="link">
                <a target="_blank" :href="member.blogUrl" class="github">
                    <img :src="member.blogType === 'github' ? blogImg2 :  blogImg1" width="28px" height="28px" />
                </a>
                <a v-if="member.blogType2" target="_blank" :href="member.blogUrl2" class="github">
                    <img :src="member.blogType2 === 'github' ? blogImg2 :  blogImg1" width="28px" height="28px" />
                </a>
            </div>

            <p class="paragraph">
               Slogan: {{ member.paragraph }}
            </p>
        </div>
    </div>
</template>

<script>
import blogImg1 from '@/assets/bg/blog.png';  // 使用@别名指向src目录
import blogImg2 from '@/assets/bg/github.png';


export default {
    name: 'MemberView',
    props: {
        member: {
            type: Object,
            default: {
                avatarUrl: {
                    type: String,
                    default: 'ctfer'
                },
                nickname: {
                    type: String,
                    default: 'ctfer'
                },
                major: {
                    type: String,
                    default: 'Crypto'
                },
                paragraph: {
                    type: String,
                    default: 'Formerly known as Blair, 27 years old. Favorite food is apples and I hate bugs.'
                },
                blogUrl: {
                    type: String,
                    default: ''
                },
            }
        },

    },
    setup() {
        return {
            blogImg1,
            blogImg2
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



.card {
    position: relative;
    max-width: 300px;
    border-radius: 20px;
    height: 200px;
    background: rgba(255, 255, 255, 1);
    margin: 10px 10px;
    padding: 20px 15px;
    display: flex;
    flex-direction: row;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
    z-index: 2;
}

.card:hover {
    height: 420px;

}

.card .imgBx {
    position: relative;
    width: 240px;
    height: 240px;
    top: -60px;
    left: 30px;
    z-index: 1;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

/* 头像大小 */
.card .imgBx img {
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

.card .content {
    position: relative;
    margin-top: -140px;
    padding: 10px 15px;
    text-align: center;
    color: #111;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;
}

.card:hover .content {
    visibility: visible;
    opacity: 1;
    margin-top: -40px;
    transition-delay: 0.3s;
}

.paragraph {
    text-align: left;
    width: 300px;
}

@media(max-width: 800px) {
    .card {
        width: 210px;
        height: 140px;
    }

    .card:hover {
        height: 196px;
    }

    .card .imgBx {
        width: 168px;
        height: 168px;
    }

    .card .imgBx img {

        width: 182px;
        height: 182px;
    }
}
</style>