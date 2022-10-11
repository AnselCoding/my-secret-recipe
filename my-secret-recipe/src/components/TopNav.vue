<template>
    <div>
        <v-app-bar app color="#575757" dark>
            <v-toolbar-title class="font-italic font-weight-black pr-4">{{$store.state.brand}}</v-toolbar-title>

            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn :href="item.id" v-for="item in items" :key="item.title" text>
                    {{item.title}}

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
                <v-autocomplete dense v-model="recipeName" @keypress.enter="onSearch" :items="recipesName">
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
                <v-list-item :href="item.id" v-for="item in items" :key="item.title" link>
                    {{item.title}}
                    <!-- <v-list-item-content>
                        <v-list-item-title></v-list-item-title>
                    </v-list-item-content> -->
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-dialog id="aa" v-model="dialog" scrollable max-width="800px">
            <RecipesDialog :recipe="recipe" :dialog="dialog"></RecipesDialog>
        </v-dialog>
    </div>
</template>

<script>
import RecipesDialog from './Recipes/RecipesDialog.vue'

export default {
    name: 'TopNav',
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
        recipe: {}
    }),
    computed: {
        recipesName() {
            let recipesName = [];
            for (const recipeM of this.$store.state.recipesM) {
                recipesName.push(recipeM.name);
            }
            return recipesName;
        }
    },
    methods: {
        onSearch() {
            this.recipe = this.$store.state.recipesM.find(x => x.name == this.recipeName);
            if(this.recipe){
                this.dialog = true;
            }
            // document.getElementById("aa").scrollIntoView(true);
            // document.getElementById("aa").scrollTop=0;
            // console.log(document.getElementById("aa").scrollTop);
            console.log(document.getElementById("aa").scrollTop);
            document.getElementById("aa").scrollTop=50;
            // console.log(document.querySelector("＃aa").scrollTop);
            // this.$vuetify.goTo(0)
            // const scrollOptions = {
            //     left: 0,
            //     top: 0,
            //     behavior: 'smooth'
            // }
            // document.getElementById("aa").scrollTo(scrollOptions);
        }
    }
};
</script>