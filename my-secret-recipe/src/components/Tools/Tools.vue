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
                                </v-img>
                            </a>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <ToolsDialog :newTool="newTool" :dialog="dialog" :edit="edit" :onEditSave="onEditSave" :onEditTools="onEditTools" :onRetiredTools="onRetiredTools" :onCloseDialog="onCloseDialog"></ToolsDialog>
    </v-container>
</template>

<script>
import ToolsDialog from './ToolsDialog.vue';
export default {
    name: "Tools",
    components: { ToolsDialog },
    data: () => ({
        dialog: false,
        edit: false,
        tool: {},
        newTool: {},
    }),
    computed:{
        tools() {
            return this.$store.state.tools.filter(x=>x.status=="onLine");
        },
        today() {
            let date = new Date();
            let today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
            return today;
        }
    },
    methods: {
        dialogTrue(){
            this.dialog = true;
        },
        async onShowDialog(tool) {            
            await this.dialogTrue();
            this.tool = tool;
            document.getElementById('showToolName').innerHTML = tool.name;
            document.getElementById('showToolPurchaseDate').innerHTML = tool.purchaseDate;
        },
        onEditSave(){
            let index = this.newTool.id-1;
            this.$store.state.tools[index].name = this.newTool.name;
            this.$store.state.tools[index].purchaseDate = this.newTool.purchaseDate;
            this.onCloseDialog();
        },
        onEditTools(){
            this.edit = true;
            this.newTool = JSON.parse(JSON.stringify(this.tool));
        },
        onRetiredTools(){
            let index = this.tool.id-1;
            this.$store.state.tools[index].status = "retired";
            this.$store.state.tools[index].retiredDate = this.today;
            console.log(this.today);
            this.onCloseDialog();
        },
        onCloseDialog() {
            this.dialog = false;
            this.edit = false;
        }
    }
};
</script>

