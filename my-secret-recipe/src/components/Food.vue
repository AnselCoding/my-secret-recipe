<template>
    <v-container>
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <h3>食品清單 | Food</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <v-row>
                    <v-col cols="12" sm="6" md="4" v-for="(item, i) in $store.state.food">
                        <div class="text-center">
                            {{item.name}}
                        </div>
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