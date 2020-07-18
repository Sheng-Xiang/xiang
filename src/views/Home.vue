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

export default {
    name: 'Home',
    components: {
        Nav,
        About,
        Skill,
        Portfolio,
        Contact,
        Side
    }
}
</script>