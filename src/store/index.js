import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './Mutation'
import actions from './Action'
import  getters from './getters'

Vue.use(Vuex)
const state ={
  cartList:[],
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
  }
})
