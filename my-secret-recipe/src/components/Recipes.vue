<template>
    <v-container class="containerBGC" id="recipes">
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <h3>食譜筆記 | Recipes</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <v-row>
                    <v-col class="pr-0" cols="12" sm="6">
                        <v-img aspect-ratio="3">
                            <div class="recipesStartEnd">It all starts from here</div>
                        </v-img>
                        <v-sheet v-for="(recipe, i) in recipesOdd">
                            <v-img aspect-ratio="1.5" :src="recipe.headPic">
                                <div class="pl-5 pt-5 recipeTitle">{{recipe.name}}</div>
                            </v-img>
                        </v-sheet>
                        <v-img v-show="isEndLeft" aspect-ratio="3">
                            <div class="recipesStartEnd">End for now</div>
                        </v-img>
                    </v-col>
                    <v-col class="pl-0" cols="12" sm="6">
                        <v-sheet v-for="(recipe, i) in recipesEven">
                            <v-img aspect-ratio="1.5" :src="recipe.headPic">
                                <div class="pl-5 pt-5 recipeTitle">{{recipe.name}}</div>
                            </v-img>
                        </v-sheet>
                        <v-img v-show="!isEndLeft" aspect-ratio="3">
                            <div class="recipesStartEnd">End for now</div>
                        </v-img>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'Recipes',
    data: () => ({
        //
    }),
    computed: {
        recipesEven() {
            var Even = [];
            for (let index = 0; index < this.$store.state.recipesM.length; index = index + 2) {
                Even.push(this.$store.state.recipesM[index]);
            }
            return Even
        },
        recipesOdd() {
            var Odd = [];
            for (let index = 1; index < this.$store.state.recipesM.length; index = index + 2) {
                Odd.push(this.$store.state.recipesM[index]);
            }
            return Odd
        },
        isEndLeft() {
            return this.recipesOdd < this.recipesEven
        }
    }
}
</script>

<style>
.recipeTitle {
    color: white;
    font-weight: bold;
    -webkit-text-stroke: .5px black;
}

 .recipesStartEnd {
    height: 100%;
    background-color: #575757;
    color: white;
    display: flex;
    align-items: center;
    padding-left: 15px;
    opacity: .5;
}
</style>