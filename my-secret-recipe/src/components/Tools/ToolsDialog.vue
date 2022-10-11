<template>
    <v-dialog persistent v-model="dialog" width="500">
        <v-card>
            <v-card-title class="text-h5 grey lighten-2">
                用具 | Tools
            </v-card-title>

            <v-card-text>
                <v-row v-if="edit">
                    <v-col cols="12" class="pb-0">
                        <v-text-field v-model="newTool.name" label="用具名稱" required></v-text-field>
                    </v-col>
                    <v-col cols="12" class="py-0">
                        <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="40"
                            transition="scale-transition" offset-y min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field v-model="newTool.purchaseDate" label="購買日期" readonly v-bind="attrs"
                                    v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="newTool.purchaseDate" @input="menu = false"></v-date-picker>
                        </v-menu>
                    </v-col>
                </v-row>
                <ol v-else class="pt-3">
                    <li>用具名稱：<span id="showToolName"></span></li>
                    <li>購買日期：<span id="showToolPurchaseDate"></span></li>
                </ol>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <div v-if="edit">
                    <v-btn color="secondary" text @click="onEditSave">
                        儲存
                    </v-btn>
                </div>
                <div v-else>
                    <v-btn color="secondary" text @click="onEditTools">
                        修改
                    </v-btn>
                    <v-btn color="secondary" text @click="onRetiredTools">
                        刪除
                    </v-btn>
                </div>
                <v-btn color="secondary" text @click="onCloseDialog">
                    取消
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: 'ToolsDialog',
    props: {
        newTool: Object,
        dialog: Boolean,
        edit: Boolean,
        onEditSave: Function,
        onEditTools: Function,
        onRetiredTools: Function,
        onCloseDialog: Function,
    },
    data: () => ({
        // for datepicker
        menu: false,
    }),
}
</script>