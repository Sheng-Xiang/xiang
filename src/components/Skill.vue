<template>
    <div id="skill">
        <div class="container">
            <div class="theme">
                <div>
                    <font-awesome-icon class="themeIcon" :icon="['fas', 'tools'] " size="2x" />
                </div>
                <div>
                    <span>SKILL</span>
                </div>
            </div>
            <div class="content">
                <div class="item" v-for="(skill, key) in skills" :key="key" :class="skill.importance">
                    <p>
                        <font-awesome-icon :icon="[skill.style, skill.icon]" size="2x" v-if="skill.style" />
                        <img :src="skill.icon" alt="" height="32" v-else>
                    </p>
                    <p style="white-space: nowrap;">{{skill.name}}</p>
                    <div class="star">
                        <font-awesome-icon class="solidStar" :icon="['fas', 'star']" v-for="proficiency in `${skill.proficiency}`" :key="proficiency.key" v-show="proficiency == 1" />
                        <font-awesome-icon class="solidStar" :icon="['fas', 'star-half-alt']" v-for="proficiency in `${skill.proficiency}`" :key="proficiency.key" v-show="proficiency == '.'" />
                        <font-awesome-icon class="regularStar" :icon="['far', 'star']" v-for="proficiency in `${skill.proficiency}`" :key="proficiency.key" v-show="proficiency == 0" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Skill',
    data() {
        return {
            skills: {
                html: {
                    style: "fab",
                    icon: "html5",
                    name: "HTML5",
                    proficiency: "11110",
                    importance: "minor"
                },
                css: {
                    style: "fab",
                    icon: "css3-alt",
                    name: "CSS3",
                    proficiency: "11110",
                    importance: "minor"
                },
                js: {
                    style: "fab",
                    icon: "js-square",
                    name: "JavaScript ES6",
                    proficiency: "11100",
                    importance: "major"
                },
                bs: {
                    style: "fab",
                    icon: "bootstrap",
                    name: "Bootstrap 4",
                    proficiency: "11110",
                    importance: "minor"
                },
                jq: {
                    style: "",
                    icon: "https://www.vectorlogo.zone/logos/jquery/jquery-vertical.svg",
                    name: "jQuery",
                    proficiency: "11100",
                    importance: "minor"
                },
                sass: {
                    style: "fab",
                    icon: "sass",
                    name: "Sass/SCSS",
                    proficiency: "111.0",
                    importance: "major"
                },
                vue: {
                    style: "fab",
                    icon: "vuejs",
                    name: "Vue.js 2.x",
                    proficiency: "11100",
                    importance: "major"
                },
                cli: {
                    style: "fab",
                    icon: "vuejs",
                    name: "Vue CLI 4.x",
                    proficiency: "111.0",
                    importance: "minor"
                },
                vuex: {
                    style: "fab",
                    icon: "vuejs",
                    name: "Vuex",
                    proficiency: "11.00",
                    importance: "minor"
                },
                vuerouter: {
                    style: "fab",
                    icon: "vuejs",
                    name: "Vue Router",
                    proficiency: "11000",
                    importance: "minor"
                },
                node: {
                    style: "fab",
                    icon: "node",
                    name: "Node.js",
                    proficiency: "11100",
                    importance: "minor"
                },
                express: {
                    style: "fab",
                    icon: "node",
                    name: "Express",
                    proficiency: "11100",
                    importance: "minor"
                },
                restfulapi: {
                    style: "",
                    icon: "",
                    name: "RESTful API",
                    proficiency: "11110",
                    importance: "minor"
                },
                git: {
                    style: "fab",
                    icon: "git-alt",
                    name: "Git",
                    proficiency: "11100",
                    importance: "minor"
                }
            }
        }
    },
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
#skill {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    width: 100%;
    // background: rgba(208, 168, 102, 1);
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
    flex: 1 0 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-end;
    margin: 1rem;
    padding: 2rem;
    padding-left: 3rem;
    border-left: 1px solid rgba(255, 255, 255, 1);
}

.item {
    flex: 1 0 10%;
    margin: 1rem;
    padding: 0.5rem;

    .star {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &:hover {
        transform: scale(1.5);
        // color: rgba(255, 215, 0, 1);

        .solidStar {
            animation-name: spin;
            animation-duration: 2500ms;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }

        .regularStar {
            display: none;
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
        padding-right: 0rem;
    }

    .theme {
        padding: 1rem;

        .themeIcon {
            display: none;
        }
    }

    .content {
        flex-direction: column;
        border-left: 0px;
        padding: 2rem;
        align-items: center;
        width: 100%;
    }

    .minor {
        display: none;
    }
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>