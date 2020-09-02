<template>
    <article>
        <section class="photo">
            <img :src="require(`../../assets/${this.portfolio.url}.png`)" alt="">
        </section>
        <section class="title">
            <span>{{ portfolio.name }}</span>
        </section>
        <section class="outline">
            <span v-if="portfolio.outline">{{ portfolio.outline }}</span>
            <span v-else>BlueNet交通大平台，依賴實驗室已有的應用進行跨平台輕量化的拓展。</span>
        </section>
        <section class="more">
            <router-link :to="'/portfolio/'+portfolio.url" :target="target">
                <span>read more</span>
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </router-link>
        </section>
    </article>
</template>
<script>
export default {
    name: 'Card',
    props: {
        portfolio: {},
        target: String
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
article {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 2fr 1fr;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
    border: 1px solid rgba(255, 255, 255, 1);
    height: 25vh;
    height: calc(var(--vh, 1vh) * 25);
    width: 40vw;
    width: calc(var(--vw, 1vw) * 40);
}

section {
    grid-column: 2;
    padding: 0 1rem;
}

.photo {
    grid-column: 1;
    grid-row: 1 / span 3;
    margin: 1rem 0;
}

img {
    max-width: 100%;
    height: auto;
}

.title {
    font-size: 1.5rem;
    text-align: start;
}

.outline {
    text-align: start;
}

.more {
    text-align: end;
}

a {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
    padding: 0 1rem;
    font-size: 1.25rem;
}

@media (min-width: 1025px) and (max-width: 1440px) {
    .title {
        font-size: 1.25rem;
    }

    a {
        font-size: 1rem;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .title {
        font-size: 1.25rem;
    }

    a {
        font-size: 1rem;
    }
}

@media (max-width: 768px) {
    article {
        grid-template-rows: auto 1fr 2fr 1fr;
        height: 40vh;
        height: calc(var(--vh, 1vh) * 40);
        width: 75vw;
        width: calc(var(--vw, 1vw) * 75);
    }

    section {
        grid-column: 1 / span2;
    }

    .photo {
        margin: 0;
        grid-column: 1 / span 2;
        grid-row: 1;
    }

    .title {
        font-size: 1.5rem;
        text-align: center;
    }

    .more {
        text-align: center;
    }

    a {
        font-size: 1rem;
    }
}

@media (max-width: 445px) {
    article {
        height: 35vh;
        height: calc(var(--vh, 1vh) * 35);
    }

    img {
        max-width: 25%;
        height: auto;
    }
}
</style>