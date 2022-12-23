<template>
    <div>
        <v-snackbar v-model="snackbar.snackbar" :timeout="snackbar.timeout">
            {{ snackbar.snackbarText }}

            <template v-slot:action="{ attrs }">
                <v-btn color="blue" text v-bind="attrs" @click="snackbar.snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>
<script>
export default {
    name: 'Snackbar',
    props: {
        snackbar: Object,
    },
    data: () => ({
    }),
}
</script>