<template>
    <v-container class="containerBGC" id="food">
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <h3>食品清單 | Food</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <v-row>
                    <v-col class="pa-2" cols="12" sm="6" md="4" v-for="(item, i) in food">
                        <v-hover v-slot="{ hover }">
                            <a @click.stop="onShowDialog(item)">
                                <v-img aspect-ratio="2" :src="item.pic">
                                    <v-expand-transition>
                                        <div v-if="hover"
                                            class="d-flex transition-fast-in-fast-out grey darken-2 v-img--reveal white--text">
                                            {{item.name}}
                                        </div>
                                    </v-expand-transition>
                                </v-img>
                            </a>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <FoodDialog :newItem="newItem" :dialog="dialog" :edit="edit" :onEditSave="onEditSave" :onEditFood="onEditFood"
            :onRetiredFood="onRetiredFood" :onCloseDialog="onCloseDialog"></FoodDialog>
    </v-container>
</template>
<script>
import FoodDialog from './FoodDialog.vue';
export default {
    name: "Food",
    components: { FoodDialog },
    data: () => ({
        dialog: false, //show dialog when it's true
        edit: false, //show edit mode when it's true
        item: {}, // choosen item
        newItem: {}, // deep copy for edit
    }),
    computed:{
        food() {
            // get a list of food which is online
            return this.$store.state.food.filter(x=>x.status=="onLine");
        },
        today() {
            // for record retired date
            let date = new Date();
            let today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
            return today;
        }
    },
    methods: {
        dialogTrue(){
            this.dialog = true;
        },
        async onShowDialog(item) {            
            await this.dialogTrue(); // show dialog
            this.item = item; // record choosen item
            // show data at dialog
            document.getElementById('showFoodName').innerHTML = item.name;
            document.getElementById('showFoodPurchaseDate').innerHTML = item.purchaseDate;
            document.getElementById('showFoodExpiryDate').innerHTML = item.expiryDate;
        },
        onEditSave(){
            // locate the item
            let index = this.newItem.id-1;
            // change store data
            this.$store.state.food[index].name = this.newItem.name;
            this.$store.state.food[index].purchaseDate = this.newItem.purchaseDate;
            this.$store.state.food[index].expiryDate = this.newItem.expiryDate;
            this.onCloseDialog();
        },
        onEditFood(){
            this.edit = true; // show edit mode
            this.newItem = JSON.parse(JSON.stringify(this.item)); // deep copy choosen item for edit
        },
        onRetiredFood(){
            // locate the item
            let index = this.item.id-1;
            // change store data to retired status
            this.$store.state.food[index].status = "retired";
            this.$store.state.food[index].retiredDate = this.today;
            this.onCloseDialog();
        },
        onCloseDialog() {
            this.dialog = false;
            this.edit = false;
        }
    }
};
</script>