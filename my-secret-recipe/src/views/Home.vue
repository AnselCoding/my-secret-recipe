<template>
  <div class="home">
    <Header></Header>
    <Tools></Tools>
    <Food></Food>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import Tools from '../components/Tools.vue';
import Food from '../components/Food.vue';

export default {
  name: 'Home',
  components: {
    Header,
    HelloWorld,
    Tools,
    Food
}
}
</script>
