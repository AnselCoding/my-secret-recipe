<template>
    <v-container class="pa-0">
        <v-carousel cycle :height="parallaxHeight" hide-delimiter-background show-arrows-on-hover>
            <v-carousel-item v-for="(item,i) in $store.state.carousel" :key="i" class="">
                <v-row :height="parallaxHeight" class="carouselItem">
                    <v-col cols="8" class="pa-0">
                        <v-img position="center top" :height="parallaxHeight" :src="item.pic"></v-img>
                    </v-col>
                    <v-col cols="4" :height="parallaxHeight" class="carouselCard">
                        <a :href="item.url">
                            <h3>{{item.header}}</h3>
                        </a>
                        <p>{{item.description}}</p>
                    </v-col>
                </v-row>
            </v-carousel-item>
        </v-carousel>
    </v-container>

</template>
<script>
export default {
    name: 'Carousel',
    data: () => ({}),
    computed: {
        parallaxHeight() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return '200'
                case 'sm': return '300'
                case 'md': return '300'
                case 'lg': return '350'
                case 'xl': return '350'
            }
            return '300'
        }
    }
}
</script>
<style>
.carouselItem {
    position: relative;
    top: 3.4%;
}

.carouselCard {
    text-decoration: none;
    background-color: #575757;
    color: white;
}

.v-application a {
    text-decoration: none;
    color: white;
}

.v-application a:hover {
    color: blue;
}
</style>