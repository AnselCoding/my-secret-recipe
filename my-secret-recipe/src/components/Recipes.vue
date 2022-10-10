<template>
    <v-container id="recipes">
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <h3>食譜筆記 | Recipes</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <v-row>
                    <v-col class="text-center" cols="12" sm="6">
                        <span>It all starts from here</span>
                    </v-col>
                    <v-col class="text-center" cols="12" sm="6" v-for="(recipe, i) in $store.state.recipesM">
                        
                        {{recipe.name}}
                    </v-col>
                    <v-col class="text-center" cols="12" sm="6">
                        <span>End for now</span>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'Recipes',
    data: () => ({}),
}
</script>