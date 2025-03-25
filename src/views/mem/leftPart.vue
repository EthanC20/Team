<template>

    <div class="container">

        <!-- 这里放队员名片 -->
        <div class="card">
            <div class="imgBx">
                <img src="@/assets/avatar/img1.jpg" />
            </div>

            <div class="content">
                <!-- // 花名 -->
                <h2>Joel Forger</h2>
                <h3>Crypto</h3>
                <!-- github 或者 blog 链接 -->
                <div class="link">
                    <a target="_blank" href="https://space.bilibili.com/3546725136468673?spm_id_from=333.1007.0.0"
                        class="github">
                        <img src="../../assets/bg/github.png" width="28px" height="28px" />
                    </a>

                    <a target="_blank" href="https://space.bilibili.com/3546725136468673?spm_id_from=333.1007.0.0"
                        class="blog">
                        <img src="../../assets/bg/blog.png" width="28px" height="28px" />
                    </a>
                </div>
                <!-- 简介 -->
                <p>
                    Formerly known as Blair, 27 years old. Favorite food is apples and I
                    hate bugs.
                </p>
            </div>
        </div>

        <div class="card">
            <div class="imgBx">
                <img src="@/assets/avatar/img2.jpg" />
            </div>

            <div class="content">
                <h2>Anya Forger</h2>

                <p>
                    One of the protagonists of this work. A girl with superpowers who
                    can read minds to others. In order to enter Eden Academy, he falsely
                    claimed to be 6 years old, but the actual age should be about 4 or 5
                    years old.
                </p>
            </div>
        </div>

        <div class="card">
            <div class="imgBx">
                <img src="@/assets/avatar/img2.jpg" />
            </div>

            <div class="content">
                <h2>Anya Forger</h2>

                <p>
                    One of the protagonists of this work. A girl with superpowers who
                    can read minds to others. In order to enter Eden Academy, he falsely
                    claimed to be 6 years old, but the actual age should be about 4 or 5
                    years old.
                </p>
            </div>
        </div>

        <div class="card">
            <div class="imgBx">
                <img src="@/assets/avatar/img2.jpg" />
            </div>

            <div class="content">
                <h2>Anya Forger</h2>

                <p>
                    One of the protagonists of this work. A girl with superpowers who
                    can read minds to others. In order to enter Eden Academy, he falsely
                    claimed to be 6 years old, but the actual age should be about 4 or 5
                    years old.
                </p>
            </div>
        </div>

        <div class="card">
            <div class="imgBx">
                <img src="@/assets/avatar/img2.jpg" />
            </div>

            <div class="content">
                <h2>Anya Forger</h2>

                <p>
                    One of the protagonists of this work. A girl with superpowers who
                    can read minds to others. In order to enter Eden Academy, he falsely
                    claimed to be 6 years old, but the actual age should be about 4 or 5
                    years old.
                </p>
            </div>
        </div>


        <div class="card">
            <div class="imgBx">
                <img src="@/assets/avatar/img2.jpg" />
            </div>

            <div class="content">
                <h2>Anya Forger</h2>

                <p>
                    One of the protagonists of this work. A girl with superpowers who
                    can read minds to others. In order to enter Eden Academy, he falsely
                    claimed to be 6 years old, but the actual age should be about 4 or 5
                    years old.
                </p>
            </div>
        </div>

        <div class="card">
            <div class="imgBx">
                <img src="@/assets/avatar/img2.jpg" />
            </div>

            <div class="content">
                <h2>Anya Forger</h2>

                <p>
                    One of the protagonists of this work. A girl with superpowers who
                    can read minds to others. In order to enter Eden Academy, he falsely
                    claimed to be 6 years old, but the actual age should be about 4 or 5
                    years old.
                </p>
            </div>
        </div>
    </div>
</template>


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
    padding: 10px;
    margin-top: 100px;
    /* 给容器上方留点空间 */
}


.container .card {
    position: relative;
    max-width: 300px;
    border-radius: 20px;
    height: 200px;
    background: rgba(255, 255, 255, 1);
    margin: 10px 10px;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
    z-index: 2;
}

.container .card:hover {
    height: 420px;

}

.container .card .imgBx {
    position: relative;
    width: 240px;
    height: 240px;
    top: -60px;
    left: 20px;
    z-index: 1;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

/* 头像大小 */
.container .card .imgBx img {
    /*max-width: 100%;*/
    height: 260px;
    width: 260px;
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