<template>
    <v-sheet :height="sheetHeight">
        <v-container class="fill-height black">
            <v-row align="center" justify="center">
                <h1 class="white--text font-italic font-weight-black text-center display-3 hidden-xs-only">
                    My Secret Recipe
                </h1>
                <h1 class="white--text font-italic font-weight-black text-center display-1 hidden-sm-and-up">
                    My Secret Recipe
                </h1>
            </v-row>
        </v-container>
    </v-sheet>
</template>
<script>
export default {
    name: 'Header',
    data: () => ({
        //
    }),
    computed: {
        sheetHeight() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return '200px'
                case 'sm': return '300px'
                case 'md': return '300px'
                case 'lg': return '300px'
                case 'xl': return '350px'
            }
            return '300px'
        }
    }
}
</script>