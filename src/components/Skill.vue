<template>
    <div id="skill">
        <div class="container">
            <div class="title">
                <span>Skill</span>
                <font-awesome-icon :icon="['fas', 'tools'] " size="2x" />
            </div>
            <div class="content">
                <div class="item" v-for="(skill, key) in skills" :key="key">
                    <p>
                        <font-awesome-icon :icon="[skill.style, skill.icon]" size="2x" v-if="skill.style"/>
                        <img :src="skill.icon" alt="" height="32" v-else>
                    </p>
                    <p>{{skill.name}}</p>
                    <font-awesome-icon class="solidStar" :icon="['fas', 'star']" v-for="proficiency in `${skill.proficiency}`" :key="proficiency.key" v-show="proficiency == 1" />
                    <font-awesome-icon class="solidStar" :icon="['fas', 'star-half-alt']" v-for="proficiency in `${skill.proficiency}`" :key="proficiency.key" v-show="proficiency == '.'" />
                    <font-awesome-icon class="regularStar" :icon="['far', 'star']" v-for="proficiency in `${skill.proficiency}`" :key="proficiency.key" v-show="proficiency == 0" />
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
                    proficiency: "11110"
                },
                css: {
                    style: "fab",
                    icon: "css3-alt",
                    name: "CSS3",
                    proficiency: "11110"
                },
                js: {
                    style: "fab",
                    icon: "js-square",
                    name: "JavaScript ES6",
                    proficiency: "11100"
                },
                bs: {
                    style: "fab",
                    icon: "bootstrap",
                    name: "Bootstrap 4",
                    proficiency: "11110"
                },
                jq: {
                    style: "",
                    icon: "https://www.vectorlogo.zone/logos/jquery/jquery-vertical.svg",
                    name: "jQuery",
                    proficiency: "11100"
                },
                sass: {
                    style: "fab",
                    icon: "sass",
                    name: "Sass/SCSS",
                    proficiency: "111.0"
                },
                vue: {
                    style: "fab",
                    icon: "vuejs",
                    name: "Vue.js 2.x",
                    proficiency: "11100"
                },
                cli: {
                    style: "fab",
                    icon: "vuejs",
                    name: "Vue CLI 4.x",
                    proficiency: "111.0"
                },
                vuex: {
                    style: "fab",
                    icon: "vuejs",
                    name: "Vuex",
                    proficiency: "11.00"
                },
                vuerouter: {
                    style: "fab",
                    icon: "vuejs",
                    name: "Vue Router",
                    proficiency: "11000"
                },
                node: {
                    style: "fab",
                    icon: "node",
                    name: "Node.js",
                    proficiency: "11100"
                },
                express: {
                    style: "fab",
                    icon: "node",
                    name: "Express",
                    proficiency: "11100"
                },
                restfulapi: {
                    style: "",
                    icon: "",
                    name: "RESTful API",
                    proficiency: "11110"
                },
                git: {
                    style: "fab",
                    icon: "git-alt",
                    name: "Git",
                    proficiency: "11100"
                }
            }
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#skill {
    height: 100vh;
    width: 100%;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: inherit;
}

.title {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 1rem;
    padding: 2rem;
    font-size: 2rem;
}

.content {
    flex: 1 0 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-end;
    margin: 1rem;
    padding: 2rem;
    border-left: 1px solid rgba(255, 255, 255, 1);
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.item {
    flex: 1 0 10%;
    margin: 1rem;
    padding: 0.5rem;

    &:hover {
        transform: scale(1.5);
        color: rgba(255, 215, 0, 1);

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
</style>