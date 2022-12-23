<template>
  <v-app v-if="hasEntry">
    <TopNav />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
    <UpToTop />
  </v-app>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import Footer from '@/components/Footer.vue';
import UpToTop from './components/UpToTop.vue';

export default {
  name: "App",
  components: {
    TopNav,
    Footer,
    UpToTop
  },
  data: () => ({
    //
  }),
  created () {
    this.$store.dispatch('loadDb');
  },
  computed:{    
    hasEntry(){
      if(this.$store.state.db && ('food' in this.$store.state.db)) return true
      console.log("hasEntry");
      return false;
    },
  }
};
</script>

<style>
  /* Pseudo-elements (::) 虛擬元素 (css做html) */
  .required label::after {
    content: "*";
    color: red;
  }
</style>