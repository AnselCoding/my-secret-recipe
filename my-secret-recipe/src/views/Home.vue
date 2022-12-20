<template>
  <div class="home">
    <Header></Header>
    <Expiring></Expiring>
    <Tools></Tools>
    <Food></Food>
    <Carousels></Carousels>
    <Recipes></Recipes>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Tools from '../components/Tools/Tools.vue';
import Food from '../components/Food/Food.vue';
import Expiring from '../components/Expiring/Expiring.vue';
import Recipes from '../components/Recipes/Recipes.vue';
import Carousels from '../components/Recipes/Carousels.vue';

export default {
  name: 'Home',
  components: {
    Header,
    HelloWorld,
    Tools,
    Food,
    Expiring,
    Recipes,
    Carousels
  }

}
</script>

<style>
  .v-img--reveal {
      align-items: center;
      bottom: 0;
      justify-content: center;
      opacity: .8;
      position: absolute;
      width: 100%;
      height: 100%;
  }
  .containerBGC{
    background-color: #E8DFDF;
  }
  </style>