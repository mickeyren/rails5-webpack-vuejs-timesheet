import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
 state: {
   activities: [],
   newTodo: ''
 },
 mutations: {
   ADD_ACTIVITY(state, activity){
     state.activities.unshift(activity)
   }
  },
 actions: {
   addActivity({commit}, activity){
     commit('ADD_ACTIVITY', activity)
   }
 }
})