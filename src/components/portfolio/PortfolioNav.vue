<template>
    <nav>
        <div class="container">
            <div class="logo">
                <router-link to="/">
                    <span class="major">Sheng-Xiang</span>
                    <img class="minor" src="logo.png" alt="">
                </router-link>
            </div>
            <div class="menu">
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'Nav',
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
nav {
    z-index: 2;
    position: fixed;
    top: 0;
    height: 10vh;
    height: calc(var(--vh, 1vh) * 10);
    width: 100vw;
    border-bottom: 1px solid rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 1);
    color: rgba(229, 229, 228, 1);
    font-weight: bold;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: inherit;
}

.logo {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem;
    padding: 2rem;
    font-size: 2rem;

    .major {
        white-space: nowrap;
    }

    .minor {
        display: none;
        height: 2.5vh;
        height: calc(var(--vh, 1vh) * 2.5);
    }
}

a {
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
}

@media (min-width: 1025px) and (max-width: 1440px) {}

@media (min-width: 769px) and (max-width: 1024px) {}

@media (max-width: 768px) {
    .logo {
        flex: 0;
        padding: 1rem;

        .major {
            display: none;
        }

        .minor {
            display: block;
        }
    }
}

@media (max-width: 445px) {}
</style>