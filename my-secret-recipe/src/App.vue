<template>
  <v-app>
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
};
</script>
