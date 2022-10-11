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
                    <v-col class="pa-2" cols="12" sm="6" md="4" v-for="(tool, i) in $store.state.tools" :key="i">
                        <v-hover v-slot="{ hover }">
                            <a @click.stop="dialog = true">
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
        <ToolsDialog :dialog="dialog" :closeDialog="closeDialog"></ToolsDialog>
    </v-container>
</template>

<script>
import ToolsDialog from './ToolsDialog.vue';
export default {
    name: "Tools",
    components: { ToolsDialog },
    data: () => ({
        dialog: false,
    }),
    methods: {
        closeDialog() {
            this.dialog = false;
        }
    }
};
</script>

