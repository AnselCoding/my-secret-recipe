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
            let expirings = this.$store.state.food.filter(x => beforeAMonth > new Date(x.expiryDate));
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
            document.getElementById('showExpiringName').innerHTML = item.name;
            document.getElementById('showExpiringPurchaseDate').innerHTML = item.purchaseDate;
            document.getElementById('showExpiringExpiryDate').innerHTML = item.expiryDate;
        },
        onEditSave() {
            // locate the item
            let index = this.newItem.id - 1;
            // change store data
            this.$store.state.food[index].name = this.newItem.name;
            this.$store.state.food[index].purchaseDate = this.newItem.purchaseDate;
            this.$store.state.food[index].expiryDate = this.newItem.expiryDate;
            this.onCloseDialog();

            // show snackbar
            this.snackbar.snackbarText = this.$store.state.editText;
            this.snackbar.snackbar = true;
        },
        onEditExpiring() {
            this.edit = true; // show edit mode
            this.newItem = JSON.parse(JSON.stringify(this.item)); // deep copy choosen item for edit
        },
        onRetiredExpiring() {
            // locate the item
            let index = this.item.id - 1;
            // change store data to retired status
            this.$store.state.food[index].status = "retired";
            this.$store.state.food[index].retiredDate = this.today;
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