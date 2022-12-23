<template>
    <v-container class="containerBGC pb-6" id="recipes">
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <h3>食譜筆記 | Recipes</h3>
            </v-col>
        </v-row>
        <v-row class="pb-5">
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <v-row>
                    <v-col class="pr-0 pa-0" cols="12" sm="6">
                        <v-img aspect-ratio="3">
                            <h3 class="recipesStartEnd">It all starts from here</h3>
                        </v-img>
                        <v-sheet v-for="(recipe, i) in recipesOdd">
                            <a @click.stop="onShowDialog(recipe)">
                                <v-img aspect-ratio="1.5" :src="recipe.headPic">
                                    <h1 class="pl-5 pt-5 recipeTitle">{{recipe.name}}</h1>
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate color="grey">
                                            </v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                            </a>
                        </v-sheet>
                        <v-img v-show="isEndLeft" aspect-ratio="3" class=" hidden-xs-only">
                            <h3 class="recipesStartEnd">End for now</h3>
                        </v-img>
                    </v-col>
                    <v-col class="pl-0 pa-0" cols="12" sm="6">
                        <v-sheet v-for="(recipe, i) in recipesEven">
                            <a @click.stop="onShowDialog(recipe)">
                                <v-img aspect-ratio="1.5" :src="recipe.headPic">
                                    <h1 class="pl-5 pt-5 recipeTitle">{{recipe.name}}</h1>
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate color="grey">
                                            </v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                            </a>
                        </v-sheet>
                        <v-img v-show="!isEndLeft" aspect-ratio="3" class="hidden-xs-only">
                            <h3 class="recipesStartEnd">End for now</h3>
                        </v-img>
                        <v-img aspect-ratio="3" class="hidden-sm-and-up">
                            <h3 class="recipesStartEnd">End for now</h3>
                        </v-img>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-dialog v-model="dialog" scrollable max-width="800px">
            <RecipesDialog :dialogTopId="dialogTopId" :recipe="recipe" :dialog="dialog" :onRetiredRecipe="onRetiredRecipe"></RecipesDialog>
        </v-dialog>
        <v-snackbar v-model="snackbar.snackbar" :timeout="snackbar.timeout">
            {{ snackbar.snackbarText }}
            <template v-slot:action="{ attrs }">
                <v-btn color="blue" text v-bind="attrs" @click="snackbar.snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>
<script>
import RecipesDialog from './RecipesDialog.vue';
export default {
    name: "Recipes",
    components: { RecipesDialog },
    data: () => ({
        dialog: false,
        recipe: {},
        snackbar: {
            snackbar: false, // show snackbar when it's true
            snackbarText: '', // snackbar message
            timeout: 2000 // duration
        },
        dialogTopId: "dialogRecipes" // the top of dialog
    }),
    computed: {
        recipesM() {
            return this.$store.state.db.recipesM.filter(x=>x.status=="onLine");
        },
        recipesEven() {
            var Even = [];
            for (let index = 0; index < this.recipesM.length; index = index + 2) {
                Even.push(this.recipesM[index]);
            }
            return Even;
        },
        recipesOdd() {
            var Odd = [];
            for (let index = 1; index < this.recipesM.length; index = index + 2) {
                Odd.push(this.recipesM[index]);
            }
            return Odd;
        },
        isEndLeft() {
            return this.recipesOdd < this.recipesEven;
        },
        today() {
            // for record retired date
            let date = new Date();
            let today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            return today;
        }
    },
    methods: {
        onShowDialog(recipe) {
            this.dialog = true;
            this.recipe = recipe; // record choosen item
            // locate the top of dialog
            location.href = "#dialogRecipes";
        },
        onRetiredRecipe() {
            // locate the item
            let index = this.recipe.id - 1;
            // change store data to retired status
            this.$store.state.db.recipesM[index].status = "retired";
            this.$store.state.db.recipesM[index].retiredDate = this.today;

            closeDialogShowSnackbar(this.onCloseDialog, statusMode.retired, this.snackbar);
        },
        onCloseDialog() {
            this.dialog = false;
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