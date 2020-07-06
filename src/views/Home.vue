<template>
    <div class="home">
        <Nav />
        <About />
        <Skill />
        <Portfolio />
        <Contact />
    </div>
</template>
<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import About from '@/components/About.vue'
import Skill from '@/components/Skill.vue'
import Portfolio from '@/components/Portfolio.vue'
import Contact from '@/components/Contact.vue'

export default {
    name: 'Home',
    components: {
        Nav,
        About,
        Skill,
        Portfolio,
        Contact
    }
}
</script>