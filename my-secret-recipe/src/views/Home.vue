<template>
  <div class="home">
    <Header></Header>
    <Expiring></Expiring>
    <Tools></Tools>
    <Food></Food>
    <Recipes></Recipes>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Tools from '../components/Tools.vue';
import Food from '../components/Food.vue';
import Expiring from '../components/Expiring.vue';
import Recipes from '../components/Recipes.vue';

export default {
  name: 'Home',
  components: {
    Header,
    HelloWorld,
    Tools,
    Food,
    Expiring,
    Recipes
}
}
</script>
