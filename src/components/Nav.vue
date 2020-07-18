<template>
    <div class="nav">
        <div class="container">
            <div class="logo">
                <span class="major">Sheng-Xiang</span>
                <img class="minor" src="logo.png" alt="">
            </div>
            <div class="menu">
                <div class="item" @click="scroll(0)">
                    <span class="zh">關於</span>
                    <span class="en">About</span>
                </div>
                <div class="item" @click="scroll(1)">
                    <span class="zh">技能</span>
                    <span class="en">Skill</span>
                </div>
                <div class="item" @click="scroll(2)">
                    <span class="zh">作品集</span>
                    <span class="en">Portfolio</span>
                </div>
                <div class="item" @click="scroll(3)">
                    <span class="zh">聯繫</span>
                    <span class="en">Contact</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
import $ from 'jquery'

export default {
    name: 'Nav',
    mounted() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
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
.nav {
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

.menu {
    flex: 1 0 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 1rem;
    padding: 2rem;
    font-size: 1.5rem;

    .item {
        flex: 0 0 10%;

        &:hover {
            .zh {
                display: none;
            }

            .en {
                display: block;
            }
        }

        .en {
            display: none;
        }
    }
}

@media (min-width: 1025px) and (max-width: 1920px) {
    .menu {
        .item {
            flex: 0 0 15%;
        }
    }
}

@media (min-width: 801px) and (max-width: 1024px) {
    .menu {
        .item {
            flex: 0 0 25%;
        }
    }
}

@media (max-width: 800px) {
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

    .menu {
        flex: 1;
        justify-content: space-around;
        padding: 0rem;

        .item {
            flex: 1 1 100%;

            &:hover {
                .zh {
                    display: block;
                }

                .en {
                    display: none;
                }
            }
        }
    }
}

@media (max-width: 540px) {
    .menu {
        font-size: 1.2rem
    }
}
</style>