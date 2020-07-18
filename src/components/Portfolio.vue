<template>
    <div id="portfolio">
        <div class="container">
            <div class="theme">
                <div>
                    <font-awesome-icon class="themeIcon" :icon="['fas', 'book-open'] " size="2x" />
                </div>
                <div>
                    <span>PORTFOLIO</span>
                </div>
            </div>
            <div class="content">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Portfolio',
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
    // background: rgba(229, 229, 228, 1);
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
    justify-content: flex-end;
    align-items: center;
    margin: 1rem;
    padding: 2rem;
    padding-left: 3rem;
    border-left: 1px solid rgba(255, 255, 255, 1);
}

a {
    font-weight: bold;
    color: #2c3e50;
}

@media (min-width: 1025px) and (max-width: 1920px) {
    .container {}

    .theme {}
}

@media (min-width: 801px) and (max-width: 1024px) {
    .container {}

    .theme {}
}

@media (max-width: 800px) {
    .container {
        flex-direction: column;
        padding-right: 0rem;
    }

    .theme {
        padding: 1rem;

        .themeIcon {
            display: none;
        }
    }

    .content {
        border-left: 0px;
        padding: 2rem;
        // flex-direction: column;
        // align-items: center;
    }
}
</style>