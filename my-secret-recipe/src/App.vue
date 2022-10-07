<template>
  <v-app>

    <v-app-bar app color="primary" dark>
      <!-- <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />

        <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
      </div> -->
      <!-- <div id="nav">
        <router-link class="yellow--text" to="/">Home</router-link> |
        <router-link class="white--text" to="/about">About</router-link>
      </div> -->

      <v-toolbar-tittle class="font-italic font-weight-black">My Secret Recipe</v-toolbar-tittle>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn text>
          Tools
        </v-btn>
        <v-btn text>
          Food
        </v-btn>
        <v-btn text>
          Recipes
        </v-btn>
        <!-- <v-btn to="/" text>
          home
        </v-btn>
        <v-btn to="/about" text>
          about
        </v-btn> -->

      </v-toolbar-items>
      <v-spacer></v-spacer>
      <span class="hidden-sm-and-up">
        <v-btn @click.stop="drawer = !drawer" text>Menu</v-btn>
      </span>

      <!-- <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          >
          {{item.title}}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    items:[
      { title:"Tools"},
      { title:"Food"},
      { title:"Recipes"},
    ]
    //
  }),
};
</script>
