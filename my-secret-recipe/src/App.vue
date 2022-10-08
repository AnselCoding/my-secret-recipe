<template>
  <v-app>
    <TopNav />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import TopNav from '@/components/TopNav.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "App",
  components: {
    TopNav,
    Footer
},
  data: () => ({
    //
  }),
};
</script>
