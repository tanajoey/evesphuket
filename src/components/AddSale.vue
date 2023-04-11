<template>
    <div id="dashboard">
        <v-app app>
            <toolBar />
            <v-card>
                <v-layout>
                    <Navbar />
                    <v-main>
                        <div>
                            addsale
                        </div>
                    </v-main>
                </v-layout>
            </v-card>
        </v-app>
    </div>
</template>
    
<script>
import Navbar from './Navbar.vue'
import toolBar from './toolBar.vue'

export default {
    name: "add_sale",
    components: {
        Navbar,
        toolBar
    },
    // data() {

    // },
}
</script>