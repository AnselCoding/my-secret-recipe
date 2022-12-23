<template>
    <div>
        <v-dialog persistent v-model="dialog" width="500">
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    刪除
                </v-card-title>
                <v-card-text class="pt-3 text-body-1" >
                    是否確認刪除{{ item.name }}?
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="secondary" text @click="onRetired">
                        確認
                    </v-btn>
                    <v-btn color="secondary" text @click="onCloseDialog">
                        取消
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
export default {
    name: 'ConfirmDialog',
    props: {
        dialog: Boolean,
        item: Object,
        onRetired: Function,
        onCloseDialog: Function,
    },
    data: () => ({
    }),
}
</script>