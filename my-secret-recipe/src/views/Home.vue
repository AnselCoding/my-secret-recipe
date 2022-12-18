<template>
  <div class="home" v-if="hasEntry">
    <Header></Header>
    <Expiring></Expiring>
    <Tools></Tools>
    <Food></Food>
    <Carousel></Carousel>
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
import Carousel from '../components/Recipes/Carousel.vue';

export default {
  name: 'Home',
  components: {
    Header,
    HelloWorld,
    Tools,
    Food,
    Expiring,
    Recipes,
    Carousel
  },
  computed:{    
    hasEntry(){
      if(this.$store.state.db && ('food' in this.$store.state.db)) return true
      console.log("hasEntry");
      return false;
    },
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