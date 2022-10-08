<template>
    <div>
        <v-app-bar app color="#575757" dark>
            <v-toolbar-title class="font-italic font-weight-black">My Secret Recipe</v-toolbar-title>

            <v-toolbar-items class="hidden-xs-only">
                <v-btn v-for="item in items" :key="item.title" text>
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
                <v-list-item v-for="item in items" :key="item.title" link>
                    {{item.title}}
                    <!-- <v-list-item-content>
            <v-list-item-title></v-list-item-title>
          </v-list-item-content> -->
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>

export default {
    name: 'TopNav',

    data: () => ({
        drawer: false,
        items: [
            { title: "Tools" },
            { title: "Food" },
            { title: "Recipes" },
        ]
        //
    }),
};
</script>