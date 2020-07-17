<template>
    <div id="contact">
        <div class="container">
            <div class="theme">
                <div>
                    <font-awesome-icon class="themeIcon" :icon="['far', 'address-book'] " size="2x" />
                </div>
                <div>
                    <span>CONTACT</span>
                </div>
            </div>
            <div class="content">
                <div class="item">
                    <a href="mailto:a2325504a@gmail.com">
                        <font-awesome-icon class="contactIcon" :icon="['far', 'envelope'] " size="3x" />
                    </a>
                    <p>Mail</p>
                </div>
                <div class="item">
                    <a href="https://github.com/Sheng-Xiang?tab=repositories">
                        <font-awesome-icon class="contactIcon" :icon="['fab', 'github'] " size="3x" />
                    </a>
                    <p>Github</p>
                </div>
                <div class="item">
                    <a href="tel:0978108508">
                        <font-awesome-icon class="contactIcon" :icon="['fas', 'mobile-alt'] " size="3x" />
                    </a>
                    <p>Phone</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Contact',
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
#contact {
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
    justify-content: flex-start;
    align-items: center;
    margin: 1rem;
    padding: 2rem;
    padding-left: 3rem;
    border-left: 1px solid rgba(255, 255, 255, 1);
}

.item {
    flex: 1 1 10%;
    margin: 1rem;
    padding: 0.5rem;
}

a {
    color: rgba(255, 255, 255, 1);

    &:hover {
        .contactIcon {
            transform: scale(1.5);
        }

        .tooltiptext {
            display: block;
        }
    }
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
    }

    .theme {
        margin-top: 10vh;
        margin-top: calc(var(--vh, 1vh) * 10);
        padding: 1rem;

        .themeIcon {
            display: none;
        }
    }

    .content {
        border-left: 0px;
        flex-direction: column;
        align-items: center;
    }
}
</style>