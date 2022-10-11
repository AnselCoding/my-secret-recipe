<template>
    <v-card class="px-5 pb-4">
        <v-card-title></v-card-title>
        <v-card-text style="height: 700px;">
            <v-row class="headerText pa-0">
                <v-col class="pa-0" cols="12" sm="6">
                    <v-img aspect-ratio="1.2" :src="recipe.headPic"></v-img>
                </v-col>
                <v-col class="pt-5" cols="12" sm="6">
                    <div>
                        <h2>{{recipe.name}}</h2>
                        <p>{{recipe.description}}</p>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="cardText">
                    <v-row>
                        <v-col cols="6" class="d-flex">
                            <h4>份數</h4>
                            <v-spacer></v-spacer> {{recipe.quantity}}
                        </v-col>
                        <v-col cols="6" class="d-flex">
                            <h4>時間</h4>
                            <v-spacer></v-spacer> {{recipe.cookingTime}}
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="cardText">
                    <v-row>
                        <v-col>
                            <h4>食材</h4>
                        </v-col>
                    </v-row>
                    <v-row class="pb-2">
                        <v-col cols="6" md="4" class="d-flex py-1" v-for="(ingredient,i) in ingredients" :key="i">
                            {{ingredient.name}} <v-spacer></v-spacer> {{ingredient.amount}}
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-row class="d-flex flex-column">
                <v-col class="cardText" v-for="(recipeStep,i) in recipeSteps" :key="i">
                    <v-row>
                        <v-col v-show="i%2==0" class="pa-0 hidden-sm-and-down" cols="4">
                            <v-img aspect-ratio="1.5" :src="recipeStep.pic"></v-img>
                        </v-col>
                        <v-col cols="12" md="8">
                            <v-row class="ma-0 recipeSteps">
                                <v-col v-if="i%2==1" class="display-4 d-flex justify-center align-center">
                                    {{recipeStep.step}}
                                </v-col>
                                <v-spacer v-if="i%2==1"></v-spacer>
                                <v-col cols="8" md="7">
                                    {{recipeStep.description}}
                                </v-col>
                                <v-spacer v-if="i%2==0"></v-spacer>
                                <v-col v-if="i%2==0" class="display-4 d-flex justify-center align-center">
                                    {{recipeStep.step}}
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col v-show="i%2==1" class="pa-0 hidden-sm-and-down" cols="4">
                            <v-img aspect-ratio="1.5" :src="recipeStep.pic"></v-img>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>
<script>
export default {
    name: 'RecipesDialog',
    props: {
        recipe: Object,
        dialog: Boolean,
        // edit: Boolean,
        // onEditSave: Function,
        // onEditFood: Function,
        // onRetiredFood: Function,
        // onCloseDialog: Function,
    },
    data: () => ({
        // for datepicker
        // menu: false,
        // menu2: false,
    }),
    computed: {
        ingredients() {
            return this.$store.state.ingredients.filter(x => x.recipeId == this.recipe.id);
        },
        recipeSteps() {
            return this.$store.state.recipesD.filter(x => x.recipeId == this.recipe.id);
        }
    }
}
</script>

<style>
.headerText {
    color: white;
    background-color: #939393;
}

.cardText {
    background-color: #D9D9D9;
    border: 1.7px solid black;
}

.recipeSteps {
    height: 100%;
}
</style>