import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// using font awesome in vue
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasStar, faStarHalfAlt, faTools, faBookOpen, faMobileAlt, faAngleUp, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar, faIdBadge, faAddressBook, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faHtml5, faCss3Alt, faJsSquare, faBootstrap, faSass, faVuejs, faNode, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faIdBadge, faTools, faBookOpen, faAddressBook)
library.add(fasStar, farStar, faStarHalfAlt, faHtml5, faCss3Alt, faJsSquare, faBootstrap, faSass, faVuejs, faNode, faGitAlt)
library.add(faArrowRight)
library.add(faEnvelope, faGithub, faMobileAlt)
library.add(faAngleUp)
library.add(faArrowLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)
// using font awesome in vue

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
