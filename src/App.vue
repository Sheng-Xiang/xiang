<template>
    <div id="app" oncontextmenu="return false" onselectstart="return false">
        <router-view />
        <div class="cursor"></div>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
import $ from 'jquery'
import { gsap, Power1 } from 'gsap'

export default {
    mounted() {
        let that = this
        let isMobileDevice = that.isMobileDevice()

        // 裝置判別
        if (isMobileDevice) {
            // 行動裝置
            $(() => {
                const cursor = $('.cursor')
                const html = $('html')
                const side = $('#side')
                const container = $('.container')
                cursor.css('display', 'none')
                html.css('cursor', 'auto')
                side.css('display', 'none')
                container.css('padding-right', '0rem')
            })
        } else {
            // 非行動裝置
            $(() => {
                const cursor = $('.cursor')
                const el = $('.item, .gotoTop, a')
                // 游標縮放
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
                // 滑鼠移動
                $(document).bind('mousemove', e => {
                    let offset = $(window).scrollTop()

                    gsap.to(cursor, 0, {
                        left: e.pageX - 10,
                        top: e.pageY - offset - 10
                    })
                })
            })
        }
        window.addEventListener('resize', () => {
            that.scroll(that.getContentPosition)
        });
    },
    updated() {
        let that = this
        let isMobileDevice = that.isMobileDevice()

        // 裝置判別
        if (!isMobileDevice) {
            // 非行動裝置
            $(() => {
                const cursor = $('.cursor')
                const el = $('a')
                // 游標縮放
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
<style lang="scss">
@font-face {
    font-family: 'custom-font';
    src: local(cwTeXYen zhonly),
        local(cwTeXYen-zhonly),
        url(./font/cwTeXYen-zhonly.ttf) format('truetype');
    unicode-range: U+4E00-9FFF; // 中文字型範圍
    font-display: swap;
}

@font-face {
    font-family: 'custom-font';
    src: local(Swansea q3pd),
        local(Swansea-q3pd),
        url(./font/Swansea-q3pd.ttf) format('truetype');
    unicode-range: U+00-024F; // 英文字型範圍
    font-display: swap;
}

#app {
    font-family: custom-font, 'Microsoft JhengHei', Avenir, Helvetica, Arial, sans-serif;
    // font-family: custom-font;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    letter-spacing: 0.2rem;
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
    cursor: none;
    overflow: hidden;

    scroll-behavior: smooth;

    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;

    &::-webkit-scrollbar {
        display: none
    }
}

body {
    margin: 0;
    background: rgba(0, 0, 0, 1);
    color: rgba(229, 229, 228, 1);
}
</style>