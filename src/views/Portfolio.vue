<template>
    <div class="portfolio">
        <PortfolioNav v-if="content === 'list'" />
        <PortfolioList v-if="content === 'list'" />
        <BlueNet v-if="content === 'bluenet'" />
    </div>
</template>
<script>
import PortfolioNav from '@/components/portfolio/PortfolioNav.vue'
import PortfolioList from '@/components/portfolio/PortfolioList.vue'
import BlueNet from '../components/portfolio/BlueNet.vue'

export default {
    name: 'Portfolio',
    components: {
        PortfolioNav,
        PortfolioList,
        BlueNet
    },
    data() {
        return {
            content: String
        }
    },
    mounted() {
        this.content = this.$route.params.name
        document.title = this.content + ' | xiang\'s portfolio'
        document.getElementsByTagName('html')[0].style['overflow'] = 'scroll'
    },
    updated() {
        document.title = this.content + ' | xiang\'s portfolio'
    },
    watch: {
        $route(to) {
            this.content = to.params.name
            document.getElementsByClassName('cursor')[0].style['transform'] = 'translate(0px, 0px)'
        }
    }
}
</script>