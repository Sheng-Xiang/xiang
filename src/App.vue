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
        let isMobileDevice = this.isMobileDevice()

        if (isMobileDevice) {
            $(() => {
                const cursor = $('.cursor')
                const html = $('html')
                cursor.css('display', 'none')
                html.css('cursor', 'auto')
                html.css('overflow-y', 'scroll')
            })
        } else {
            $(() => {
                const cursor = $('.cursor')

                $(document).bind('mousemove', e => {
                    let offset = $(window).scrollTop()

                    gsap.to(cursor, 0, {
                        left: e.pageX - 10,
                        top: e.pageY - offset - 10
                    })
                })

                let scrollLock = true

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
                });
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
            $('html').scrollTop(index * $(window).height())
        },
        isMobileDevice() {
            const mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
            let isMobileDevice = mobileDevice.some(e => navigator.userAgent.match(e))
            return isMobileDevice
        }
    }
}
</script>
<style lang="scss">
#app {
    font-family: 'Microsoft JhengHei', Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    // color: #2c3e50;
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

    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;

    &::-webkit-scrollbar {
        display: none
    }

    overflow-y: hidden;

    scroll-behavior: smooth;

    body {
        // background: rgba(0, 0, 0, 0.9);
        background: radial-gradient(circle, rgba(128, 128, 128, 1), rgba(0, 0, 0, 0.9));

    }
}
</style>