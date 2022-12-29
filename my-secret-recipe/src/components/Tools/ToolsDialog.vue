<template>
    <div>
        <v-dialog persistent v-model="dialog" width="500">
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    用具 | Tools
                </v-card-title>

                <v-card-text>
                    <v-row v-if="edit || create">
                        <v-col cols="12" class="pb-0 required">
                            <v-text-field v-model="newTool.name" label="用具名稱"  :rules="rules.nameRules" autofocus></v-text-field>
                        </v-col>
                        <v-col cols="12" class="py-0 required">
                            <v-menu v-model="menu" :close-on-content-click="false" :nudge-right="40"
                                transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field v-model="newTool.purchaseDate" label="購買日期" readonly v-bind="attrs"
                                        v-on="on" :rules="rules.dateRules"></v-text-field>
                                </template>
                                <v-date-picker v-model="newTool.purchaseDate" @input="menu = false"></v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col cols="12" class="pb-0">
                            <v-file-input
                            id="toolPic"
                            :rules="rules.avatarRules"
                            accept="image/png, image/jpeg"
                            placeholder="Pick a picture"
                            prepend-icon="mdi-camera"
                            label="圖片"
                            @change="uploadImage"
                            ></v-file-input>
                        </v-col>
                        <v-col>
                            <v-img aspect-ratio="2" :src="previewImage"></v-img>
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
                    <div v-if="create">
                        <v-btn color="secondary" text @click="onCreateSave(); cleanPreImage();">
                            儲存
                        </v-btn>
                    </div>
                    <div v-if="edit">
                        <v-btn color="secondary" text @click="onEditSave(); cleanPreImage();">
                            儲存
                        </v-btn>
                    </div>
                    <div v-if="!create && !edit">
                        <v-btn color="secondary" text @click="onEditTools">
                            修改
                        </v-btn>
                        <v-btn color="secondary" text @click="onConfirmRetire">
                            刪除
                        </v-btn>
                    </div>
                    <v-btn color="secondary" text @click="onCloseDialog(); cleanPreImage();">
                        取消
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <Snackbar :snackbar="snackbar"></Snackbar>
    </div>
</template>
<script>
import Snackbar from '../Common/Snackbar.vue';
export default {
    name: 'ToolsDialog',
    components: { Snackbar },
    props: {
        snackbar: Object,
        newTool: Object,
        dialog: Boolean,
        edit: Boolean,
        create: Boolean,
        onCreateSave: Function,
        onEditSave: Function,
        onEditTools: Function,
        onConfirmRetire: Function,
        onCloseDialog: Function,
    },
    data: () => ({
        previewImage: null, // preview image value
        // for datepicker
        menu: false,
        rules:{
            nameRules: [
                value => !!value || 'Required.',
                value => (value && value.length <= 30) || 'Max 30 characters',
            ],
            dateRules:[
                value => !!value || 'Required.',
            ],
            avatarRules:[
                value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
            ]
        }        
    }),
    methods:{
        uploadImage(e){
            // clean previewImage when it clean attached image.
            if(!e){
                this.previewImage = null;
                return;
            }
            // preview attached image
            const reader = new FileReader();
            reader.readAsDataURL(e);
            reader.onload = e =>{
                this.previewImage = e.target.result;
            };
        },
        cleanPreImage(){
            this.previewImage = null;
        }
    }
}
</script>