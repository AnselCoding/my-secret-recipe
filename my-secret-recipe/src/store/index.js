import Vue from 'vue'
import Vuex from 'vuex'
import tools from './tools'
import food from './food'
import recipesM from './recipesM'
import ingredients from './ingredients'
import recipesD from './recipesD'
import carousel from './carousel'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    brand:"My Secret Recipe",
    editText:"完成修改!",
    retiredText:"完成刪除!",
    tools,
    food,
    recipesM,
    ingredients,
    recipesD,
    carousel
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
