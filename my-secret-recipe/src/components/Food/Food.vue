<template>
    <v-container class="containerBGC" id="food">
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <h3>食品清單 | Food</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <v-row>
                    <v-col class="pa-2" cols="12" sm="6" md="4" v-for="(item, i) in $store.state.food">
                        <v-hover v-slot="{ hover }">
                            <v-img aspect-ratio="2" :src="item.pic">
                                <v-expand-transition>
                                    <div v-if="hover"
                                        class="d-flex transition-fast-in-fast-out grey darken-2 v-img--reveal white--text"
                                        >
                                        {{item.name}}
                                    </div>
                                </v-expand-transition>
                            </v-img>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'Food',
    data: () => ({
        //
    })
}
</script>