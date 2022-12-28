<template>
    <v-container class="containerBGC" v-if="expiring.length > 0">
        <v-row id="expiring">
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <h3>即期食品 | Expiring Items</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <v-row>
                    <v-col class="pa-2" cols="12" sm="6" md="4" v-for="(item, i) in expiring">
                        <v-hover v-slot="{ hover }">
                            <a @click.stop="onShowDialog(item)">
                                <v-img aspect-ratio="2" :src="item.pic">
                                    <v-expand-transition>
                                        <div v-if="hover || todayDate > new Date(item.expiryDate)"
                                            :class="{'font-weight-bold text-h6 red--text': todayDate > new Date(item.expiryDate)}"
                                            class="d-flex transition-fast-in-fast-out grey darken-2 v-img--reveal white--text flex-column">
                                            <span>{{item.name}}</span>
                                            <span>{{item.expiryDate}}</span>
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
        <ExpiringDialog :snackbar="snackbar" :newItem="newItem" :dialog="dialog" :edit="edit" :onEditSave="onEditSave"
            :onEditFood="onEditFood" :onConfirmRetire="onConfirmRetire" :onCloseDialog="onCloseDialog"></ExpiringDialog>
        <ConfirmDialog :dialog="confirmDialog" :item="item" 
            :onRetired="onRetiredFood" :onCloseDialog="onCloseDialog"></ConfirmDialog>
    </v-container>
</template>
<script>
import ExpiringDialog from './ExpiringDialog.vue';
// import FoodDialog from '../Food/FoodDialog.vue';
import ConfirmDialog from '../Common/ConfirmDialog.vue';
export default {
    name: "Expiring",
    components: { ExpiringDialog, ConfirmDialog },
    data: () => ({
        confirmDialog: false, // show confirm dialog when it's going to delete item
        todayDate: new Date(), // to check if item is expired
        dialog: false, // show dialog when it's true
        edit: false, // show edit mode when it's true
        item: {}, // choosen item
        newItem: {}, // deep copy for edit
        snackbar: {
            snackbar: false, // show snackbar when it's true
            snackbarText: '', // snackbar message
            timeout: 2000 // duration
        },
    }),
    computed: {
        expiring() {
            // food expired in a month
            let beforeAMonth = new Date(this.todayDate.getFullYear(), this.todayDate.getMonth() + 1, this.todayDate.getDate());
            let expirings = this.$store.state.db.food.filter(x => beforeAMonth > new Date(x.expiryDate));
            // get a list of food which is online
            expirings = expirings.filter(x => x.status == "onLine");
            return expirings;
        },
    },
    methods: {
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
            let index = findIndexOfObj(this.$store.state.db.food, tempItem);
            // change view data(update store data)
            this.$store.state.db.food[index].name = tempItem.name;
            this.$store.state.db.food[index].purchaseDate = tempItem.purchaseDate;
            this.$store.state.db.food[index].expiryDate = tempItem.expiryDate;
            // if it upload new pic change pic, or just leave it.
            let formdata = new FormData();
            let expiringPic = document.getElementById("expiringPic");
            if (expiringPic.files.length > 0) {
                formdata.append("imageFile", expiringPic.files[0]);
                let picName = expiringPic.value.substr(expiringPic.value.lastIndexOf("\\")+1);
                this.$store.state.db.food[index].pic = picName;
                tempItem.pic = picName;
            }
            formdata.append("food",JSON.stringify(tempItem));
            var resp = await FoodService.updateFood(tempItem.id, formdata);

            closeDialogShowSnackbar(this.onCloseDialog, statusMode.edit, this.snackbar);
        },
        onEditFood() {
            this.edit = true; // show edit mode
            this.newItem = JSON.parse(JSON.stringify(this.item)); // deep copy choosen item for edit
        },
        async onRetiredFood() {
            // change store data to retired status
            // this.item與store同源，會同步更改
            this.item.status = "retired";
            this.item.retiredDate = todayStr();
            // call put (update backend DB), pic only need pic name.
            let tempItem = JSON.parse(JSON.stringify(this.item)); // deep copy choosen item for remove
            tempItem.pic = removeImgPath(tempItem.pic);
            var resp = await FoodService.updateFood(tempItem.id, tempItem);

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
            showExpiringName.innerHTML = item.name; // js id mode
            showExpiringPurchaseDate.innerHTML = item.purchaseDate;
            showExpiringExpiryDate.innerHTML = item.expiryDate;
            // $("#showFoodName").text(item.name); // jquery mode
            // document.getElementById('showFoodName').innerHTML = item.name; // js mode
        },
        dialogTrue() {
            this.dialog = true;
        },
        onCloseDialog() {
            this.confirmDialog = false;
            this.dialog = false;
            this.edit = false;
            this.create = false;
        }
    }
}
</script>