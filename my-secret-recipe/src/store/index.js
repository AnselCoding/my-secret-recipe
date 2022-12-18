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
    db:{},
    tools,
    food,
    recipesM,
    ingredients,
    recipesD,
    carousel
  },
  mutations: {
    async loadDb(){
      var response = await HomeService.getMySecretRecipe();
      console.log(response); 
      response.food.forEach(item => {
        item.pic = `/Img/food/${item.pic}`;
        item.expiryDate = item.expiryDate.substr(0,10);// build a method
      });
      console.log(response.food)
      this.state.db = response;
    }
  },
  actions: {
    loadDb({commit}){
      commit("loadDb");
    }
  },
  modules: {
  }
})
