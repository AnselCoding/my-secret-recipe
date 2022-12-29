<template>
    <v-container class="containerBGC pb-6" id="food">
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2" class="d-flex align-center" >
                <h3>食品清單 | Food</h3>
                <v-btn color="secondary" small text @click="onCreateFood" class="font-weight-black">
                    新增
                </v-btn>
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
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate color="grey lighten-5">
                                            </v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                            </a>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <FoodDialog :snackbar="snackbar" :newItem="newItem" :dialog="dialog" :edit="edit" :create="create" :onEditSave="onEditSave"
            :onCreateSave="onCreateSave" :onEditFood="onEditFood" :onConfirmRetire="onConfirmRetire" :onCloseDialog="onCloseDialog"></FoodDialog>
        <ConfirmDialog :dialog="confirmDialog" :item="item"
            :onRetired="onRetiredFood" :onCloseDialog="onCloseDialog"></ConfirmDialog>
    </v-container>
</template>
<script>
import FoodDialog from './FoodDialog.vue';
import ConfirmDialog from '../Common/ConfirmDialog.vue';
export default {
    name: "Food",
    components: { FoodDialog, ConfirmDialog },
    data: () => ({
        confirmDialog: false, // show confirm dialog when it's going to delete item
        dialog: false, //show dialog when it's true
        edit: false, //show edit mode when it's true
        create: false, //show create mode when it's true
        item: {}, // choosen item
        newItem: {}, // deep copy for edit
        snackbar: {
            snackbar: false, // show snackbar when it's true
            snackbarText: '', // snackbar message
            timeout: 2000 // duration
        },
        refParameter: { // for beforeSaveImage() function
            pathFloder:"food",
            inputPic: null, 
            storePic: "", 
            tempPic: ""
        },
    }),
    computed: {
        food() {
            // get a list of food which is online
            return this.$store.state.db.food.filter(x => x.status == "onLine");
        },
    },
    methods: {
        async onCreateSave(){
            let tempItem = this.newItem;
            // check required value
            if (tempItem.name == "" || tempItem.purchaseDate == "" || tempItem.expiryDate == "") {
                // show snackbar
                this.snackbar.snackbarText = this.$store.state.requiredText;
                this.snackbar.snackbar = true;
                return;
            }
            // if it upload new pic change pic, or just leave it.
            let formdata = new FormData();
            let foodPic = document.getElementById("foodPic");
            if (foodPic.files.length > 0) {
                formdata.append("imageFile", foodPic.files[0]);
                // pic field only need pic name, don't need path
                let refParameter = this.refParameter;
                refParameter.inputPic = foodPic;
                beforeSaveImage(refParameter);
                tempItem.pic = refParameter.tempPic;
            }
            formdata.append("food",JSON.stringify(tempItem));
            // save new item
            var resp = await FoodService.createFood(formdata);
            resp.purchaseDate = resp.purchaseDate.YYYYMMDD();
            resp.expiryDate = resp.expiryDate.YYYYMMDD();
            resp.pic = getImgPath("food",resp.pic);
            this.$store.state.db.food.unshift(resp);
            
            closeDialogShowSnackbar(this.onCloseDialog, statusMode.create, this.snackbar);
        },
        async onCreateFood(){
            await this.dialogTrue(); // show dialog
            let tempItem = new Food({});
            tempItem.purchaseDate = tempItem.purchaseDate.YYYYMMDD();
            tempItem.expiryDate = tempItem.expiryDate.YYYYMMDD();
            this.newItem = tempItem; // update display
            this.create = true; // show create mode
        },
        async onEditSave() {
            let tempItem = this.newItem;
            // check required value
            if (tempItem.name == "" || tempItem.purchaseDate == "" || tempItem.expiryDate == "") {
                // show snackbar
                this.snackbar.snackbarText = this.$store.state.requiredText;
                this.snackbar.snackbar = true;
                return;
            }
            // locate the item
            let index = findIndexOfObj(this.$store.state.db.food,tempItem);
            // change store data(update store data)
            this.$store.state.db.food[index].name = tempItem.name;
            this.$store.state.db.food[index].purchaseDate = tempItem.purchaseDate;
            this.$store.state.db.food[index].expiryDate = tempItem.expiryDate;
            // if it upload new pic change pic, or just leave it.
            let formdata = new FormData();
            let foodPic = document.getElementById("foodPic");
            if (foodPic.files.length > 0) {
                formdata.append("imageFile", foodPic.files[0]);
                // pic field only need pic name, don't need path
                let refParameter = this.refParameter;
                refParameter.inputPic = foodPic;
                beforeSaveImage(refParameter);
                this.$store.state.db.food[index].pic = refParameter.storePic;
                tempItem.pic = refParameter.tempPic;
            }else{
                tempItem.pic = removeImgPath(tempItem.pic);
            }
            formdata.append("food",JSON.stringify(tempItem));
            var resp = await FoodService.updateFood(tempItem.id, formdata);

            closeDialogShowSnackbar(this.onCloseDialog, statusMode.edit, this.snackbar);
        },
        onEditFood() {
            this.edit = true; // show edit mode
            this.newItem = JSON.parse(JSON.stringify(this.item)); // deep copy choosen item for edit
            //dialog edit mode show newItem
        },
        async onRetiredFood() {
            // change store data to retired status
            // this.item與store同源，會同步更改
            this.item.status = "retired";
            this.item.retiredDate = todayStr();
            // call put (update backend DB), pic only need pic name.
            let tempItem = JSON.parse(JSON.stringify(this.item)); // deep copy choosen item for remove
            tempItem.pic = removeImgPath(tempItem.pic);
            let formdata = new FormData();
            formdata.append("food",JSON.stringify(tempItem));
            var resp = await FoodService.updateFood(tempItem.id, formdata);

            closeDialogShowSnackbar(this.onCloseDialog, statusMode.retired, this.snackbar);
        },
        async onConfirmRetire(){
            this.confirmDialog = true;
        },
        async onShowDialog(item) {
            // show dialog, use async let it can find item on dialog first, or it will show no defined.
            await this.dialogTrue(); // show dialog
            this.item = item; // record choosen item
            // show data at dialog
            showFoodName.innerHTML = item.name; // js id mode
            showFoodPurchaseDate.innerHTML = item.purchaseDate;
            showFoodExpiryDate.innerHTML = item.expiryDate;
            // $("#showFoodName").text(item.name); // jquery mode
            // document.getElementById('showFoodName').innerHTML = item.name; // js mode
        },
        dialogTrue() {
            this.dialog = true; // show dialog
        },
        onCloseDialog() {
            this.confirmDialog = false;
            this.dialog = false;
            this.edit = false;
            this.create = false;
        }
    }
};
</script>