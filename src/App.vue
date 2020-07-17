<template>
    <div id="app" oncontextmenu="return false" onselectstart="return false">
        <router-view />
        <div class="cursor"></div>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import $ from 'jquery'
import gsap from 'gsap'

export default {
    mounted() {
        let that = this
        let isMobileDevice = that.isMobileDevice()
        // 裝置判別
        if (isMobileDevice) {
            // 行動裝置
            let startx
            let starty

            $(() => {
                const cursor = $('.cursor')
                const html = $('html')
                cursor.css('display', 'none')
                html.css('cursor', 'auto')
            })
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
                        console.log("height: " + $(window).height())
                        console.log("innerHeight: " + $(window).innerHeight())
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
                        console.log("height: " + $(window).height())
                        console.log("innerHeight: " + $(window).innerHeight())
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
                const cursor = $('.cursor')
                let scrollLock = true
                // 滑鼠移動
                $(document).bind('mousemove', e => {
                    let offset = $(window).scrollTop()

                    gsap.to(cursor, 0, {
                        left: e.pageX - 10,
                        top: e.pageY - offset - 10
                    })
                })
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
        window.addEventListener('resize', () => {
            that.scroll(that.getContentPosition)
        });
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
<style lang="scss">
@font-face {
    font-family: 'custom-font';
    src: url('./font/cwTeXYen-zhonly.ttf');
    unicode-range: U+4E00-9FFF; // 中文字型範圍
}
@font-face {
    font-family: 'custom-font';
    src: url('./font/Swansea-q3pd.ttf');
    unicode-range: U+00-024F; // 英文字型範圍
}

#app {
    font-family: 'Microsoft JhengHei', Avenir, Helvetica, Arial, sans-serif;
    font-family: custom-font;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    letter-spacing: 0.2rem;
    color: #FFFFFF;
}

.cursor {
    top: -1.5rem;
    left: -1.5rem;
    background-color: rgba(255, 255, 255, 1);
    width: 1.5rem;
    height: 1.5rem;
    clip-path: circle(50% at 50% 50%);
    position: fixed;
    pointer-events: none;
    z-index: 99999;
    mix-blend-mode: exclusion;
}

html {
    cursor: none !important;
    overflow: hidden;

    scroll-behavior: smooth;

    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;

    &::-webkit-scrollbar {
        display: none
    }
}

body {
    background: radial-gradient(circle, rgba(128, 128, 128, 1), rgba(0, 0, 0, 0.9));
}
</style>