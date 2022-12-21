import Vue from 'vue'
import Vuex from 'vuex'
// import tools from './RecipeDb/tools' // 引用前端模擬資料
// import food from './RecipeDb/food'
// import recipesM from './RecipeDb/recipesM'
// import ingredients from './RecipeDb/ingredients'
// import recipesD from './RecipeDb/recipesD'
// import carousels from './RecipeDb/carouselsls'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    brand:"My Secret Recipe",
    editText:"完成修改!",
    retiredText:"完成刪除!",
    db:{},
    // tools,
    // food,
    // recipesM,
    // ingredients,
    // recipesD,
    // carousels
  },
  mutations: {
    async loadDb(){
      var response = await HomeService.getMySecretRecipe();

      // manage img path and Date formate
      response.food.forEach(item => {
        item.pic = getImgPath('food',item.pic);
        item.expiryDate = item.expiryDate.YYYYMMDD();
        item.purchaseDate = item.purchaseDate.YYYYMMDD();
      });
      response.tools.forEach(item => {
        item.pic = getImgPath('tools',item.pic);
        item.purchaseDate = item.purchaseDate.YYYYMMDD();
      });
      response.carousels.forEach(item => {
        item.pic = getImgPath('',item.pic);
      })
      response.recipesM.forEach(item => {
        item.headPic = getImgPath('recipes',item.headPic);
      });
      response.recipesD.forEach(item => {
        item.pic = getImgPath('recipes',item.pic);        
      });
      
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
