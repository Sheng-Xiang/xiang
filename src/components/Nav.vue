<template>
    <div class="nav">
        <div class="container">
            <div class="logo">
                <span>Sheng-Xiang</span>
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
import { gsap, Power1 } from 'gsap'

export default {
    name: 'Nav',
    mounted() {
        $(() => {
            const cursor = $('.cursor')
            const el = $('.menu .item')

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
    },
    methods: {
        ...mapMutations({
            changeContentPosition: 'changeContentPosition'
        }),

        scroll(index) {
            this.changeContentPosition(index)
            $('html').scrollTop(index * $(window).height())
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
    position: fixed;
    top: 0;
    height: 10vh;
    width: 100%;
    margin: -8px;
    border-bottom: 1px solid rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 1);
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
}

.menu {
    flex: 1 1 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 1rem;
    padding: 2rem;

    .item {
        flex: 0 1 10%;

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
</style>