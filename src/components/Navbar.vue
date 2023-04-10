<template>
    <div id="app">
        <v-toolbar color="primary" dark fixed app>
            <v-toolbar-title>ระบบครุภัณฑ์คอมพิวเตอร์ สำนักงานสาธารณสุขจังหวัดพังงา</v-toolbar-title>
        </v-toolbar>
        <v-navigation-drawer permanent>
            <v-list>
                <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            {{ username || 'Username' }}
                        </v-list-item-title>
                        <v-list-item-subtitle v-on:click="logout">log out</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-list dense nav>
                <v-list-item v-for="item in items" :key="item.title" link :to="item.route">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    name: "Nav_bar",
    data() {
        return {
            items: [
                { title: 'Dashboard', icon: 'mdi-view-dashboard',route:'/dashboard' },
                { title: 'Photos', icon: 'mdi-image',route:'/AddteamLeader' },
            ],
            username: this.$route.params.username
        }
    },
    methods: {
        logout() {
            this.$router.replace({ name: 'login' })
        }
    }
}
</script>