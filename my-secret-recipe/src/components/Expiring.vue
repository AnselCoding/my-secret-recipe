<template>
    <v-container class="containerBGC" v-if="expiring.length > 0">
        <v-row id="expiring">
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <h3>即期食品 | Expiring Items</h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <v-row>
                    <v-col class="pa-2" cols="12" sm="6" md="4" v-for="(item, i) in expiring">
                        <v-hover v-slot="{ hover }">
                            <v-img aspect-ratio="2" :src="item.pic">
                                <v-expand-transition>
                                    <div v-if="hover || today > new Date(item.expiryDate)"
                                        :class="{'font-weight-bold text-h6 red--text': today > new Date(item.expiryDate)}"
                                        class="d-flex transition-fast-in-fast-out grey darken-2 v-img--reveal white--text flex-column">
                                        <span>{{item.name}}</span>
                                        <span>{{item.expiryDate}}</span>
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
    name: 'Expiring',
    data: () => ({
        today: new Date(),
    }),
    computed: {
        expiring() {
            let beforeAMonth = new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate())
            var expirings = this.$store.state.food.filter(x => beforeAMonth > new Date(x.expiryDate));
            return expirings;
        }
    }
}
</script>