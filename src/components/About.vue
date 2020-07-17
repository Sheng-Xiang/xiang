<template>
    <div id="about">
        <div class="container">
            <div class="title">
                <span>ABOUT</span>
                <font-awesome-icon class="titleIcon" :icon="['far', 'id-badge'] " size="2x" />
            </div>
            <div class="content">
                <img src="logo.png" alt="" height="50px">
                <p>曾聖翔 | Sheng-Xiang</p>
                <blockquote>
                    <p>2015/9 ~ 2020/9 臺北科技大學 電子工程系</p>
                    <p>2012/9 ~ 2015/6 台中高工 資訊科</p>
                </blockquote>
                <p>前端工程師 | 中華顧問工程司</p>
                <blockquote>
                    <p>2018/7 ~ 2018/11 <a href="https://www.digitalent.org.tw/index.html">DIGI+Talent</a> 實習生</p>
                </blockquote>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
import { gsap, Power1 } from 'gsap'

export default {
    name: 'About',
    mounted() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        $(() => {
            const cursor = $('.cursor')
            const el = $('a')

            el.on('mouseenter', () => {
                gsap.to(cursor, 0.3, {
                    ease: Power1.easeOut,
                    scale: 2.3,
                    backgroundColor: 'rgba(255, 255, 255, 1)'
                })
            })

            el.on('mouseleave', () => {
                gsap.to(cursor, 0.3, {
                    ease: Power1.easeOut,
                    scale: 1
                })
            })
        })
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#about {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 100%;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: inherit;
}

.title {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 1rem;
    padding: 2rem;
    font-size: 2rem;
}

.content {
    flex: 1 1 50%;
    text-align: start;
    margin: 1rem;
    padding: 2rem;
    border-left: 1px solid rgba(255, 255, 255, 1);
}

@media (min-width: 1025px) and (max-width: 1920px) {
    .container {}

    .title {}
}

@media (min-width: 801px) and (max-width: 1024px) {
    .container {}

    .title {}
}

@media (max-width: 800px) {
    .container {
        flex-direction: column;
    }

    .title {
        margin-top: 10vh;
        margin-top: calc(var(--vh, 1vh) * 10);
        padding: 1rem;

        .titleIcon {
            display: none;
        }
    }

    .content {
        border-left: 0px;

    }
}

a {
    font-weight: bold;
    color: rgba(255, 255, 255, 0.9);
}
</style>