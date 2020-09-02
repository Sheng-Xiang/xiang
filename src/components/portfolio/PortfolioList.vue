<template>
    <main>
        <Card v-for="(item, key) in potfolio" :key="key" :portfolio="item" />
    </main>
</template>
<script>
import Card from '@/components/portfolio/Card.vue'

export default {
    name: 'List',
    components: {
        Card
    },
    data() {
        return {
            potfolio: [{
                    url: 'bluenet',
                    name: 'BlueNet交通大平台',
                    outline: '大學時跟著黃教授做叫車服務系統，負責前端介面，主要工作項目為實現叫車流程。'
                    // outline: '大學時跟著實驗室黃教授做計程車服務系統，負責前端介面，主要工作項目為串接 google map API ，取得使用者 GPS 位置，與後端串接部分。'
                }
            ]
        }
    },
    mounted() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
main {
    margin: 10vh 5% 0 5%;
    margin: calc(var(--vh, 1vh) * 10) 5% 0 5%; // top right bottom left
    padding: 0rem 5%; // vertical horizontal
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

a {
    font-weight: bold;
    color: rgba(229, 229, 228, 0.9);
    text-decoration: none;
}

@media (min-width: 1025px) and (max-width: 1440px) {}

@media (min-width: 769px) and (max-width: 1024px) {}

@media (max-width: 768px) {}

@media (max-width: 445px) {
    main {
        padding: 1rem 5%;
    }
}
</style>