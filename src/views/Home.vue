<template>
    <div class="home">
        <Nav />
        <About />
        <Skill />
        <Portfolio />
        <Contact />
        <Side />
    </div>
</template>
<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import About from '@/components/About.vue'
import Skill from '@/components/Skill.vue'
import Portfolio from '@/components/Portfolio.vue'
import Contact from '@/components/Contact.vue'
import Side from '@/components/Side.vue'

import { mapMutations, mapGetters } from 'vuex'
import $ from 'jquery'

export default {
    name: 'Home',
    components: {
        Nav,
        About,
        Skill,
        Portfolio,
        Contact,
        Side
    },
    mounted() {
        document.title = 'xiang'
        document.getElementsByTagName('html')[0].style['overflow'] = 'hidden'

        let that = this
        let isMobileDevice = that.isMobileDevice()

        // 裝置判別
        if (isMobileDevice) {
            // 行動裝置
            let startx
            let starty
            //手指接觸螢幕
            document.addEventListener("touchstart", e => {
                startx = e.touches[0].pageX
                starty = e.touches[0].pageY
            }, false)
            //手指離開螢幕
            document.addEventListener("touchend", e => {
                let endx = e.changedTouches[0].pageX
                let endy = e.changedTouches[0].pageY
                let direction = that.getDirection(startx, starty, endx, endy)
                let scrollLock = true
                let index = that.getContentPosition
                switch (direction) {
                    case 0:
                        // 無滑動
                        break
                    case 1:
                        // 向上滑動
                        if (scrollLock) {
                            scrollLock = false
                            if (index < 3) {
                                that.scroll(index + 1)
                                that.changeContentPosition(index + 1)
                            }
                        }

                        setTimeout(() => { scrollLock = true }, 1000)
                        break
                    case 2:
                        // 向下滑動
                        if (scrollLock) {
                            scrollLock = false

                            if (index > 0) {
                                that.scroll(index - 1)
                                that.changeContentPosition(index - 1)
                            }
                        }

                        setTimeout(() => { scrollLock = true }, 1000)
                        break
                    case 3:
                        // 向左滑動
                        break
                    case 4:
                        // 向右滑動
                        break
                    default:
                }
            }, false)
        } else {
            // 非行動裝置
            $(() => {
                let scrollLock = true
                // 滾輪滾動
                $(document).bind('mousewheel', e => {
                    let index = this.getContentPosition

                    if (scrollLock) {
                        scrollLock = false
                        if (e.originalEvent.deltaY < 0) {
                            if (index > 0) {
                                this.scroll(index - 1)
                                this.changeContentPosition(index - 1)
                            }
                        } else {
                            if (index < 3) {
                                this.scroll(index + 1)
                                this.changeContentPosition(index + 1)
                            }
                        }
                    }

                    setTimeout(() => { scrollLock = true }, 1000)
                })
            })
        }
    },
    computed: {
        ...mapGetters({
            getContentPosition: 'getContentPosition'
        })
    },
    methods: {
        ...mapMutations({
            changeContentPosition: 'changeContentPosition'
        }),
        scroll(index) {
            this.changeContentPosition(index)
            $('html').scrollTop(index * $(window).innerHeight())
        },
        isMobileDevice() {
            const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
            let isMobileDevice = mobileDevice.some(e => navigator.userAgent.match(e))
            return isMobileDevice
        },
        //獲得角度
        getAngle(angx, angy) {
            return Math.atan2(angy, angx) * 180 / Math.PI
        },
        //根據起點終點返回方向 1向上 2向下 3向左 4向右 0未滑動
        getDirection(startx, starty, endx, endy) {
            let angx = endx - startx
            let angy = endy - starty
            let result = 0
            //如果滑動距離太短 
            if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
                return result
            }
            let angle = this.getAngle(angx, angy)
            if (angle >= -135 && angle <= -45) {
                result = 1
            } else if (angle > 45 && angle < 135) {
                result = 2
            } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
                result = 3
            } else if (angle >= -45 && angle <= 45) {
                result = 4
            }
            return result
        }
    }
}
</script>