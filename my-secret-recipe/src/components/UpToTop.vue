<template>
    <div>
        <v-btn v-scroll="onScroll" v-show="fab" fab dark fixed bottom right color="secondary" @click="toTop">
            <v-icon>▲</v-icon>
        </v-btn>
    </div>

</template>
<script>
export default {
    name: 'UpToTop',
    data: () => ({
        fab: false
    }),
    methods: {
        onScroll(e) {
            if (typeof window === 'undefined') return
            const top = window.pageYOffset //|| e.target.scrollTop || 0
            this.fab = top > 20
        },
        toTop() {
            this.$vuetify.goTo(0)
        }
    }
}
</script>