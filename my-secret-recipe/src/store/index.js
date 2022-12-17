import Vue from 'vue'
import Vuex from 'vuex'
import tools from './RecipeDb/tools'
import food from './RecipeDb/food'
import recipesM from './RecipeDb/recipesM'
import ingredients from './RecipeDb/ingredients'
import recipesD from './RecipeDb/recipesD'
import carousel from './RecipeDb/carousel'

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
