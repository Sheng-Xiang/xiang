<template>
    <div id="portfolio">
        <div class="container">
            <div class="theme">
                <div class="themeIcon">
                    <font-awesome-icon :icon="['fas', 'book-open'] " size="2x" />
                </div>
                <div>
                    <span>PORTFOLIO</span>
                </div>
            </div>
            <div class="content">
                <Card v-for="(item, key) in potfolio" :key="key" :portfolio="item" target="_blank" />
                <router-link to="/portfolio/list" target="_blank">More Portfolio</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import Card from '@/components/portfolio/Card.vue'

export default {
    name: 'Portfolio',
    components: {
        Card
    },
    data() {
        return {
            potfolio: [{
                    url: 'bluenet',
                    name: 'BlueNet交通大平台',
                    outline: '大學時跟著黃教授做叫車服務系統，負責前端介面，主要工作項目為實現叫車流程。'
                }
            ]
        }
    },
    mounted() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        let vw = window.innerWidth * 0.01;
        document.documentElement.style.setProperty('--vw', `${vw}px`);
        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            let vw = window.innerWidth * 0.01;
            document.documentElement.style.setProperty('--vw', `${vw}px`);
        });
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#portfolio {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 100%;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90vh;
    height: calc(var(--vh, 1vh) * 90);
    padding-top: 10vh;
    padding-top: calc(var(--vh, 1vh) * 10);
    padding-right: 10vw;
    padding-right: calc(var(--vw, 1vw) * 10 - 1rem);
}

.theme {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    padding: 2rem;
    font-size: 2rem;

    div {
        margin: 1rem;
    }
}

.content {
    flex: 1 1 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 1rem;
    padding: 2rem;
    padding-left: 3rem;
    border-left: 1px solid rgba(255, 255, 255, 1);
}

a {
    font-weight: bold;
    color: rgba(229, 229, 228, 0.9);
    text-decoration: none;
    background-color: rgba(0, 0, 0, 1);
    border: 1px solid rgba(229, 229, 228, 0.9);
    margin: 1rem;
    padding: 0.5rem;
    align-self: flex-end;
}

@media (min-width: 1025px) and (max-width: 1440px) {
    .container {}

    .theme {}
}

@media (min-width: 769px) and (max-width: 1024px) {
    .container {}

    .theme {}
}

@media (max-width: 768px) {
    .container {
        flex-direction: column;
        padding-right: 0rem;
    }

    .theme {
        flex: 0;
        padding: 1rem;
        flex-direction: row;
        justify-content: center;

        .themeIcon {
            display: none;
        }
    }

    .content {
        flex-direction: column;
        border-left: 0px;
        padding: 2rem;
    }

    a {
        align-self: center;
    }
}
</style>