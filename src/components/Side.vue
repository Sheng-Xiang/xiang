<template>
    <div id="side">
        <div class="container">
            <div class="bar">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
            </div>
            <div class="gotoTop" @click="scroll(0)">
                <font-awesome-icon :icon="['fas', 'angle-up']" />
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import $ from 'jquery'

export default {
    name: 'Side',
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
        document.getElementsByClassName('circle')[this.getContentPosition].style['background'] = 'rgba(255, 255, 255, 1)'

        console.log($(window).innerHeight())
        console.log(window.innerHeight)
    },
    computed: {
        ...mapGetters({
            getContentPosition: 'getContentPosition'
        })
    },
    watch: {
        getContentPosition(val, oldVal) {
            let circle = document.getElementsByClassName('circle')
            const now = 'rgba(255, 255, 255, 1)'
            const other = 'rgba(128, 128, 128, 1)'
            circle[val].style['background'] = now
            circle[oldVal].style['background'] = other
        }
    },
    methods: {
        ...mapMutations({
            changeContentPosition: 'changeContentPosition'
        }),
        scroll(index) {
            this.changeContentPosition(index)
            $('html').scrollTop(index * window.innerHeight)
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#side {
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 10vw;
    width: calc(var(--vw, 1vw) * 10);
    margin: -8px;
    font-weight: bold;
}

.container {
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    height: inherit;
}

.bar {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 44vh;
    height: calc(var(--vh, 1vh) * 44);
    margin-top: 10vh;
    margin-top: calc(var(--vh, 1vh) * 10);

    &::after {
        position: absolute;
        top: 33vh;
        top: calc(var(--vh, 1vh) * 33);
        height: 44vh;
        height: calc(var(--vh, 1vh) * 44);
        left: 50%;
        border: 1px solid rgba(128, 128, 128, 1);
        content: '';
        margin-left: -1px;
    }
}

.circle {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: rgba(128, 128, 128, 1);
    box-shadow: none;
    z-index: 1
}

.gotoTop {
    position: absolute;
    bottom: 5vh;
    bottom: calc(var(--vh, 1vh) * 5);
    font-size: 2rem;
}

@media (min-width: 1025px) and (max-width: 1920px) {}

@media (min-width: 801px) and (max-width: 1024px) {}

@media (max-width: 800px) {
    #side {
        display: none;
    }
}

@media (max-width: 540px) {}
</style>