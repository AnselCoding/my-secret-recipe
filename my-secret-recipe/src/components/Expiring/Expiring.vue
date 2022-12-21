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
            :onEditExpiring="onEditExpiring" :onRetiredExpiring="onRetiredExpiring" :onCloseDialog="onCloseDialog">
        </ExpiringDialog>
    </v-container>
</template>
<script>
import ExpiringDialog from './ExpiringDialog.vue';
export default {
    name: "Expiring",
    components: { ExpiringDialog },
    data: () => ({
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
        today() {
            // for record retired date
            let date = new Date();
            let today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
            return today;
        }
    },
    methods: {
        dialogTrue() {
            this.dialog = true;
        },
        async onShowDialog(item) {
            await this.dialogTrue(); // show dialog
            this.item = item; // record choosen item
            // show data at dialog
            showExpiringName.innerHTML = item.name; // js id mode
            showExpiringPurchaseDate.innerHTML = item.purchaseDate;
            showExpiringExpiryDate.innerHTML = item.expiryDate;
            // $("#showExpiringName").text(item.name); // jquery mode
            // document.getElementById('showExpiringName').innerHTML = item.name; // js mode
        },
        onEditExpiring() {
            this.edit = true; // show edit mode
            this.newItem = JSON.parse(JSON.stringify(this.item)); // deep copy choosen item for edit
        },
        async onEditSave() {
            // locate the item
            let index = findIndexOfObj(this.$store.state.db.food,this.newItem);
            // change view data(update store data)
            this.$store.state.db.food[index].name = this.newItem.name;
            this.$store.state.db.food[index].purchaseDate = this.newItem.purchaseDate;
            this.$store.state.db.food[index].expiryDate = this.newItem.expiryDate;
            // call put (update backend DB), pic only need pic name.
            this.newItem.pic = removeImgPath(this.newItem.pic);
            var resp = await FoodService.updateFood(this.newItem.id, this.newItem);

            this.onCloseDialog();

            // show snackbar
            this.snackbar.snackbarText = this.$store.state.editText;
            this.snackbar.snackbar = true;
        },
        async onRetiredExpiring() {
            // change store data to retired status
            // this.item與store同源，會同步更改
            this.item.status = "retired";
            this.item.retiredDate = this.today;
            this.newItem = JSON.parse(JSON.stringify(this.item)); // deep copy choosen item for remove
            this.newItem.pic = removeImgPath(this.newItem.pic);
            // call put (update backend DB)
            var resp = await FoodService.updateFood(this.newItem.id, this.newItem);

            this.onCloseDialog();

            // show snackbar
            this.snackbar.snackbarText = this.$store.state.retiredText;
            this.snackbar.snackbar = true;
        },
        onCloseDialog() {
            this.dialog = false;
            this.edit = false;
        }
    }
}
</script>