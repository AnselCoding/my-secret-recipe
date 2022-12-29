<template>
    <v-container class="containerBGC" id="tools">
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2" class="d-flex align-center" >
                <h3>用具清單 | Tools</h3>
                <v-btn color="secondary" small text @click="onCreateTool" class="font-weight-black">
                    新增
                </v-btn>
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
        <ToolsDialog :snackbar="snackbar" :newTool="newTool" :dialog="dialog" :edit="edit" :create="create" :onEditSave="onEditSave"
            :onCreateSave="onCreateSave" :onEditTools="onEditTools" :onConfirmRetire="onConfirmRetire" :onCloseDialog="onCloseDialog"></ToolsDialog>
        <ConfirmDialog :dialog="confirmDialog" :item="tool" 
            :onRetired="onRetiredTools" :onCloseDialog="onCloseDialog"></ConfirmDialog>
    </v-container>
</template>

<script>
import ToolsDialog from './ToolsDialog.vue';
import ConfirmDialog from '../Common/ConfirmDialog.vue';
export default {
    name: "Tools",
    components: { ToolsDialog, ConfirmDialog },
    data: () => ({
        confirmDialog: false, // show confirm dialog when it's going to delete item
        dialog: false, // show dialog when it's true
        edit: false, // show edit mode when it's true
        create: false, //show create mode when it's true
        tool: {}, // choosen item
        newTool: {}, // deep copy for edit
        snackbar: {
            snackbar: false, // show snackbar when it's true
            snackbarText: '', // snackbar message
            timeout: 2000 // duration
        },
        refParameter:{ // for beforeSaveImage() function
            pathFloder:"tools",
            inputPic: null,
            storePic: "", 
            tempPic: ""
        }
    }),
    computed: {
        tools() {
            // get a list of tools which are online
            return this.$store.state.db.tools.filter(x => x.status == "onLine");
        },
    },
    methods: {
        async onCreateSave(){
            let tempItem = this.newTool;
            // check required value
            if (tempItem.name == "" || tempItem.purchaseDate == "") {
                // show snackbar
                this.snackbar.snackbarText = this.$store.state.requiredText;
                this.snackbar.snackbar = true;
                return;
            }
            // if it upload new pic change pic, or just leave it.
            let formdata = new FormData();
            let toolPic = document.getElementById("toolPic");
            if (toolPic.files.length > 0) {
                formdata.append("imageFile", toolPic.files[0]);
                // pic field only need pic name, don't need path
                let refParameter = this.refParameter;
                refParameter.inputPic = toolPic;
                beforeSaveImage(refParameter);
                tempItem.pic = refParameter.tempPic;
            }
            formdata.append("tool",JSON.stringify(tempItem));
            // save new item
            var resp = await ToolsService.createTool(formdata);
            resp.purchaseDate = resp.purchaseDate.YYYYMMDD();
            resp.pic = getImgPath("tools",resp.pic);
            this.$store.state.db.tools.unshift(resp);
            
            closeDialogShowSnackbar(this.onCloseDialog, statusMode.create, this.snackbar);
        },
        async onCreateTool(){
            await this.dialogTrue(); // show dialog
            let tempItem = new Tool({});
            tempItem.purchaseDate = tempItem.purchaseDate.YYYYMMDD();
            this.newTool = tempItem; // update display
            this.create = true; // show create mode
        },
        async onEditSave() {            
            let tempItem = this.newTool;
            // check required value
            if (tempItem.name == "" || tempItem.purchaseDate == "") {
                // show snackbar
                this.snackbar.snackbarText = this.$store.state.requiredText;
                this.snackbar.snackbar = true;
                return;
            }
            // locate the item
            let index = findIndexOfObj(this.$store.state.db.tools, tempItem);
            // change store data
            this.$store.state.db.tools[index].name = tempItem.name;
            this.$store.state.db.tools[index].purchaseDate = tempItem.purchaseDate;
            // if it upload new pic change pic, or just leave it.
            let formdata = new FormData();
            let toolPic = document.getElementById("toolPic");
            if (toolPic.files.length > 0) {
                formdata.append("imageFile", toolPic.files[0]);
                // pic field only need pic name, don't need path
                let refParameter = this.refParameter;
                refParameter.inputPic = toolPic;
                beforeSaveImage(refParameter);
                this.$store.state.db.tools[index].pic = refParameter.storePic;
                tempItem.pic = refParameter.tempPic;
            }else{
                tempItem.pic = removeImgPath(tempItem.pic);
            }
            formdata.append("tool",JSON.stringify(tempItem));
            var resp = await ToolsService.updateTool(tempItem.id, formdata);

            closeDialogShowSnackbar(this.onCloseDialog, statusMode.edit, this.snackbar);
        },
        onEditTools() {
            this.edit = true; // show edit mode
            this.newTool = JSON.parse(JSON.stringify(this.tool)); // deep copy choosen item for edit
            //dialog edit mode show newTool
        },
        async onRetiredTools() {
            // change store data to retired status
            // this.item與store同源，會同步更改
            this.tool.status = "retired";
            this.tool.retiredDate = todayStr();
            // call put (update backend DB), pic only need pic name.
            let tempItem = JSON.parse(JSON.stringify(this.tool)); // deep copy choosen item for remove
            tempItem.pic = removeImgPath(tempItem.pic);
            let formdata = new FormData();
            formdata.append("tool",JSON.stringify(tempItem));
            var resp = await ToolsService.updateTool(tempItem.id, formdata);

            closeDialogShowSnackbar(this.onCloseDialog, statusMode.retired, this.snackbar);
        },
        async onConfirmRetire(){
            this.confirmDialog = true;
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
};
</script>

