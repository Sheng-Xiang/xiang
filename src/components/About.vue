<template>
    <div id="about">
        <div class="container">
            <div class="theme">
                <div>
                    <font-awesome-icon class="themeIcon" :icon="['far', 'id-badge'] " size="2x" />
                </div>
                <div>
                    <span>ABOUT</span>
                </div>
            </div>
            <div class="content">
                <div class="front">
                    <span class="name-zh">曾聖翔</span>
                </div>
                <div class="middle">
                    <span class="bar"> | </span>
                </div>
                <div class="tail">
                    <span class="name-en">Sheng-Xiang</span>
                </div>
                <div class="front period">
                    <span>2020/09 畢業</span>
                </div>
                <div class="tail project">
                    <span>臺北科大 電子工程系</span>
                </div>
                <div class="front period">
                    <span>2015/06 畢業</span>
                </div>
                <div class="tail project">
                    <span>台中高工 資訊科</span>
                </div>
                <div class="front">
                    <span class="work">經濟部工業局</span>
                </div>
                <div class="middle">
                    <span class="work"> | </span>
                </div>
                <div class="tail">
                    <span class="work"><a href="https://www.digitalent.org.tw/index.html">DIGI+Talent</a></span>
                </div>
                <div class="front period">
                    <span>2018/07-11 實習</span>
                </div>
                <div class="tail project">
                    <span>中華顧問工程司 前端工程師</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
import { gsap, Power1 } from 'gsap'

export default {
    name: 'About',
    mounted() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        $(() => {
            const cursor = $('.cursor')
            const el = $('a')

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
        window.addEventListener('resize', () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#about {
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
    margin: 1rem;
    padding: 2rem;
    padding-top: 0rem;
    padding-left: 3rem;
    border-left: 1px solid rgba(255, 255, 255, 1);
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-row-gap: 1rem;
    grid-column-gap: 0.5rem;
    justify-content: start;
    align-items: baseline;

    .front {
        grid-column: 1;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        .name-zh {
            font-size: 4rem;
        }

        .work {
            font-size: 1.5rem;
        }
    }

    .middle {
        display: flex;
        justify-content: center;
        align-items: flex-end;

        .bar {
            font-size: 3rem;
        }

        .work {
            font-size: 1.5rem;
        }
    }

    .tail {
        grid-column: 3;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;

        .name-en {
            font-size: 3rem;
        }

        .work {
            font-size: 1.5rem;
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

    .content {
        .front {
            .name-zh {
                font-size: 3.5rem;
            }
        }

        .middle {
            .bar {
                font-size: 2.25rem;
            }
        }

        .tail {

            .name-en {
                font-size: 2.25rem;
            }
        }
    }
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
        margin: 1rem;
        padding: 2rem;
        border-left: 0px;
        grid-template-rows: 4rem 2rem 2rem 2.5rem 2rem;

        .front {
            grid-column: 1;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;

            .name-zh {
                font-size: 3rem;
            }
        }

        .middle {
            display: flex;
            justify-content: center;
            align-items: flex-end;

            .bar {
                font-size: 2.25rem;
            }
        }

        .tail {
            grid-column: 3;
            display: flex;
            justify-content: flex-start;
            align-items: flex-end;

            .name-en {
                font-size: 2.25rem;
            }
        }
    }
}

@media (max-width: 540px) {
    .content {
        grid-row-gap: 1rem;
        grid-column-gap: 0.5rem;
        grid-template-rows: repeat(8, 2rem);

        .front {

            .name-zh {
                font-size: 1.5rem;
            }

            .work {
                font-size: 1rem;
            }
        }

        .middle {
            .bar {
                font-size: 1rem;
            }

            .work {
                font-size: 1rem;
            }
        }

        .tail {
            .name-en {
                font-size: 1rem;
            }

            .work {
                font-size: 1rem;
            }
        }

        .period {
            grid-column: 1/ span 3;
            justify-content: center;
        }

        .project {
            grid-column: 1/ span 3;
            justify-content: center;
        }
    }
}

a {
    font-weight: bold;
    color: rgba(255, 255, 255, 0.9);
}
</style>