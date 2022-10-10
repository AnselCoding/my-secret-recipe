import Vue from 'vue'
import Vuex from 'vuex'
import tools from './tools'
import food from './food'
import recipesM from './recipesM'
import ingredients from './ingredients'
import recipesD from './recipesD'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    brand:"My Secret Recipe",
    tools,
    food,
    recipesM,
    ingredients,
    recipesD
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
