<template>
    <v-app>
        <v-main>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <div class="imgLogo">
                            <img alt="Vue logo" src="../assets/logo.png">
                        </div>
                        <h3>ระบบครุภัณฑ์คอมพิวเตอร์ สำนักงานสาธารณสุขจังหวัดพังงา</h3>
                        <v-card class="elevation-12">
                            <v-toolbar dark color="primary">
                                <v-toolbar-title>เข้าสู่ระบบ</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <form ref="form" @submit.prevent="login()">
                                    <v-text-field v-model="username" name="username" label="ชื่อผู้ใช้" type="text"
                                        placeholder="ชื่อผู้ใช้" required></v-text-field>

                                    <v-text-field v-model="password" name="password" label="รหัสผ่าน" type="password"
                                        placeholder="รหัสผ่าน" required></v-text-field>
                                    <v-btn type="submit" class="mt-4" color="primary" value="log in">เข้าสู่ระบบ</v-btn>
                                </form>
                            </v-card-text>
                        </v-card>

                    </v-flex>
                </v-layout>
            </v-container>
        </v-main>
    </v-app>
</template>
 
<script>
export default {
    name: "Log_in",
    data() {
        return {
            username: "",
            password: "",
        };
    },
    methods: {
        login() {
            const { username } = this;
            this.$router.replace({ name: "dashboard", params: { username: username } });
        }
    },
};
</script>
<style scoped>
.imgLogo {
    max-width: 100px;
    margin: 0 auto;
}
.imgLogo img {
    width: 100%;
}
</style>