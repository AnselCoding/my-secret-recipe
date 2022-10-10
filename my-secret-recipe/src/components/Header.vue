<template>
    <v-parallax :height="parallaxHeight" src="../assets/header.jpg">
        <v-container class="fill-height">
            <v-row justify="center">
                <h1 class="white--text font-italic font-weight-black display-3 hidden-xs-only">
                    {{$store.state.brand}}
                </h1>
                <h1 class="white--text font-italic font-weight-black display-1 hidden-sm-and-up">
                    {{$store.state.brand}}
                </h1>
            </v-row>
        </v-container>
    </v-parallax>
    <!-- <v-sheet :height="sheetHeight">
        <v-container class="fill-height black">
            <v-row justify="center">
                <h1 class="white--text font-italic font-weight-black display-3 hidden-xs-only">
                    {{$store.state.brand}}
                </h1>
                <h1 class="white--text font-italic font-weight-black display-1 hidden-sm-and-up">
                    {{$store.state.brand}}
                </h1>
            </v-row>
        </v-container>
    </v-sheet> -->
</template>
<script>
export default {
    name: 'Header',
    data: () => ({
        //
    }),
    computed: {
        // sheetHeight() {
        //     switch (this.$vuetify.breakpoint.name) {
        //         case 'xs': return '200px'
        //         case 'sm': return '300px'
        //         case 'md': return '300px'
        //         case 'lg': return '300px'
        //         case 'xl': return '350px'
        //     }
        //     return '300px'
        // },
        parallaxHeight() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return '200'
                case 'sm': return '300'
                case 'md': return '300'
                case 'lg': return '300'
                case 'xl': return '350'
            }
            return '300'
        }
    },
    
}
</script>