import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contentPosition: 0
    },
    mutations: {
        changeContentPosition: (state, index) => {
            state.contentPosition = index
        }
    },
    actions: {
    },
    getters: {
        getContentPosition: (state) => {
            return state.contentPosition
        }
    },
    modules: {
    }
})