<template>
    <v-container class="containerBGC" id="tools">
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <h3>用具清單 | Tools</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <v-row>
                    <v-col class="pa-2" cols="12" sm="6" md="4" v-for="(tool, i) in tools" :key="i">
                        <v-hover v-slot="{ hover }">
                            <a @click.stop="onShowDialog(tool)">
                                <v-img aspect-ratio="2" :src="tool.pic">
                                    <v-expand-transition>
                                        <div v-if="hover"
                                            class="d-flex transition-fast-in-fast-out grey darken-2 v-img--reveal white--text">
                                            {{tool.name}}
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
        <ToolsDialog :snackbar="snackbar" :newTool="newTool" :dialog="dialog" :edit="edit" :onEditSave="onEditSave"
            :onEditTools="onEditTools" :onRetiredTools="onRetiredTools" :onCloseDialog="onCloseDialog"></ToolsDialog>

    </v-container>
</template>

<script>
import ToolsDialog from './ToolsDialog.vue';
export default {
    name: "Tools",
    components: { ToolsDialog },
    data: () => ({
        dialog: false, // show dialog when it's true
        edit: false, // show edit mode when it's true
        tool: {}, // choosen item
        newTool: {}, // deep copy for edit
        snackbar: {
            snackbar: false, // show snackbar when it's true
            snackbarText: '', // snackbar message
            timeout: 2000 // duration
        },
    }),
    computed: {
        tools() {
            // get a list of tools which are online
            return this.$store.state.db.tools.filter(x => x.status == "onLine");
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
        async onShowDialog(tool) {
            await this.dialogTrue(); // show dialog
            this.tool = tool; // record choosen item
            // show data at dialog
            showToolName.innerHTML = tool.name; // js id mode
            showToolPurchaseDate.innerHTML = tool.purchaseDate;
            // $("#showToolName").text(tool.name); // jquery mode
            // document.getElementById('showToolName').innerHTML = tool.name; // js mode
        },
        onEditTools() {
            this.edit = true; // show edit mode
            this.newTool = JSON.parse(JSON.stringify(this.tool)); // deep copy choosen item for edit
        },
        async onEditSave() {
            // locate the item
            let index = findIndexOfObj(this.$store.state.db.tools,this.newTool);
            // change store data
            this.$store.state.db.tools[index].name = this.newTool.name;
            this.$store.state.db.tools[index].purchaseDate = this.newTool.purchaseDate;
            // call put (update backend DB), pic only need pic name.
            this.newTool.pic = removeImgPath(this.newTool.pic);
            var resp = await ToolsService.updateTool(this.newTool.id, this.newTool);

            this.onCloseDialog();

            // show snackbar
            this.snackbar.snackbarText = this.$store.state.editText;
            this.snackbar.snackbar = true;
        },
        async onRetiredTools() {
            // change store data to retired status
            // this.item與store同源，會同步更改
            this.tool.status = "retired";
            this.tool.retiredDate = this.today;
            this.newTool = JSON.parse(JSON.stringify(this.tool)); // deep copy choosen item for remove
            this.newTool.pic = removeImgPath(this.newTool.pic);
            // call put (update backend DB)
            var resp = await ToolsService.updateTool(this.newTool.id, this.newTool);

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
};
</script>

