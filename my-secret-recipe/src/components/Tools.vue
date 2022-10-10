<template>
    <v-container id="tools">
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <h3>用具清單 | Tools</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <v-row>
                    <v-col cols="12" sm="6" md="4" v-for="(tool, i) in $store.state.tools" :key="i">
                        <div class="text-center" color="yellow">{{tool.name}}</div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Tools',
    data: () => ({
        //
    })
};
</script>