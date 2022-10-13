<template>
  <div>
    <v-app-bar app color="#575757" dark>
      <v-toolbar-title class="font-italic font-weight-black pr-4">{{
        $store.state.brand
      }}</v-toolbar-title>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn :href="item.id" v-for="item in items" :key="item.title" text>
          {{ item.title }}
        </v-btn>

        <!-- <v-btn to="/" text>
                home
                </v-btn>
                <v-btn to="/about" text>
                about
                </v-btn> -->
      </v-toolbar-items>
      <v-spacer></v-spacer>

      <v-col class="pt-7 pr-0">
        <v-autocomplete
          dense
          v-model="recipeName"
          @keypress.enter="onSearch"
          :items="recipesName"
        >
        </v-autocomplete>
      </v-col>
      <v-col cols="1">
        <v-btn @click="onSearch" icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-col>

      <v-spacer class="hidden-md-and-up"></v-spacer>
      <span class="hidden-md-and-up">
        <v-btn @click.stop="drawer = !drawer" text>Menu</v-btn>
      </span>

      <!-- <v-spacer></v-spacer>

            <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
                <span class="mr-2">Latest Release</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn> -->
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary right>
      <v-list>
        <v-list-item
          :href="item.id"
          v-for="item in items"
          :key="item.title"
          link
        >
          {{ item.title }}
          <!-- <v-list-item-content>
                        <v-list-item-title></v-list-item-title>
                    </v-list-item-content> -->
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-dialog id="aa" v-model="dialog" scrollable max-width="800px">
      <RecipesDialog
        :dialogTopId="dialogTopId"
        :recipe="recipe"
        :dialog="dialog"
        :onRetiredRecipe="onRetiredRecipe"
      ></RecipesDialog>
    </v-dialog>
    <v-snackbar v-model="snackbar.snackbar" :timeout="snackbar.timeout">
      {{ snackbar.snackbarText }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar.snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import RecipesDialog from "./Recipes/RecipesDialog.vue";

export default {
  name: "TopNav",
  components: { RecipesDialog },
  data: () => ({
    drawer: false,
    items: [
      { title: "Tools", id: "#tools" },
      { title: "Food", id: "#food" },
      { title: "Recipes", id: "#recipes" },
    ],
    recipeName: "",
    dialog: false,
    recipe: {},
    snackbar: {
      snackbar: false, // show snackbar when it's true
      snackbarText: "", // snackbar message
      timeout: 2000, // duration
    },
    dialogTopId: "dialogTopNav" // the top of dialog
  }),
  computed: {
    recipesM() {
      return this.$store.state.recipesM.filter((x) => x.status == "onLine");
    },
    recipesName() {
      let recipesName = [];
      for (const recipeM of this.recipesM) {
        recipesName.push(recipeM.name);
      }
      return recipesName;
    },
  },
  methods: {
    onSearch() {
      this.recipe = this.$store.state.recipesM.find(
        (x) => x.name == this.recipeName
      );
      if (this.recipe) {
        this.dialog = true;
      }
      // locate the top of dialog
      location.href = "#dialogTopNav";
    },
    onRetiredRecipe() {
      // locate the item
      let index = this.recipe.id - 1;
      // change store data to retired status
      this.$store.state.recipesM[index].status = "retired";
      this.$store.state.recipesM[index].retiredDate = this.today;
      this.onCloseDialog();
      this.recipeName = "";
      this.recipe = {};

      // show snackbar
      this.snackbar.snackbarText = this.$store.state.retiredText;
      this.snackbar.snackbar = true;
    },
    onCloseDialog() {
      this.dialog = false;
    },
  },
};
</script>