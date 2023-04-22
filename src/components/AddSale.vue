<template>
    <div id="AddSale">
        <v-app>
            <toolBar />
            <v-card>
                <v-layout fill-height>
                    <Navbar />
                    <v-main>
                        <cardtitle>
                            <h2><v-icon>mdi-file-account</v-icon>{{ title }}</h2>
                        </cardtitle>
                        <v-breadcrumbs :items="breadcrumb">
                            <template v-slot:divider>
                                <v-icon>mdi-chevron-right</v-icon>
                            </template>
                        </v-breadcrumbs>

                        <div class="paddingPage">
                            <v-form ref="form" v-model="disableBtn" lazy-validation>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <v-text-field v-model="firstName" name="firstName" label="ชื่อ" type="text"
                                                :rules="RulesInput" placeholder="ชื่อ" required></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="6">
                                            <v-text-field v-model="lastName" name="lastName" label="สกุล" type="text"
                                                :rules="RulesInput" placeholder="สกุล" required></v-text-field>
                                        </v-col>

                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <v-text-field v-model="user" name="user" label="ชื่อผู้ใช้" type="text"
                                                :rules="RulesInput" placeholder="ชื่อผู้ใช้" required></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="6">
                                            <v-text-field v-model="password" name="password" label="รหัสผ่าน"
                                                :rules="RulesInput" type="password" placeholder="รหัสผ่าน" :counter="8"
                                                required></v-text-field>
                                        </v-col>

                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <v-text-field v-model="email" name="email" label="อีเมล" type="text"
                                                :rules="emailRules" placeholder="อีเมล" required></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="6">
                                            <v-select v-model="selectedStatus" :items="status" item-text="title"
                                                :rules="RulesInput" item-value="id" return-object label="สถานะการใช้งาน"
                                                name="status" required></v-select>
                                        </v-col>

                                    </v-row>
                                    <!-- @click="addUser" -->
                                    <v-btn class="mr-4" :disabled="!disableBtn" @click="addUser" color="success">
                                        บันทึก
                                    </v-btn>
                                    <!-- @click="resetForm" -->
                                    <router-link to="/listUser" tag="v-btn">
                                        <v-btn> กลับหน้าแรก </v-btn>
                                    </router-link>
                                </v-container>
                            </v-form>
                        </div>
                    </v-main>
                </v-layout>
            </v-card>
            <v-dialog v-model="dialog" width="auto" class="dialogAlertVdialog">
                <v-card>
                    <v-toolbar color="primary" title="Opening from the top"></v-toolbar>
                    <v-card-text>
                        <div class="pa-12 dialogAlert">{{ textAlert }}</div>
                    </v-card-text>
                    <v-card-actions class="justify-end">
                        <v-btn variant="text" @click="openmodal(false)">ปิด</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-app>
    </div>
</template>
    
<script>
import axios from "axios";
import Navbar from './Navbar.vue'
import toolBar from './toolBar.vue'
import cardtitle from './cardTitle.vue'

export default {
    name: "add_sale",
    components: {
        Navbar,
        toolBar,
        cardtitle
    },

    data: () => ({
        breadcrumb: [
            {
                text: 'ตั้งค่า',
                disabled: true,
                href: ''
            },
            {
                text: 'ผู้ใช้งาน',
                disabled: false,
                href: 'listUser',
            },
            {
                text: 'เพิ่มผู้ใช้',
                disabled: true,
                href: '',
            },
        ],
        status: [
            {
                id: '1',
                title: 'ใช้งาน',
            },
            {
                id: '2',
                title: 'ไม่ใช้งาน',
            },
        ],
        firstName: '',
        lastName: '',
        user: '',
        password: '',
        email: '',
        selectedStatus: { id: "1", title: "ใช้งาน" },
        RulesInput: [(v) => !!v || "โปรดกรอกข้อมูลให้ครบถ้วน"],
        emailRules: [
            v => !!v || 'โปรดกรอกข้อมูลให้ครบถ้วน',
            v => /.+@.+\..+/.test(v) || 'โปรดกรอกข้อมูลให้ถูกต้อง',
        ],
        dialog: false,
        disableBtn: true,
        textAlert: "",
        title: "",
    }),
    computed: {
    },
    methods: {
        addUser() {
            this.$refs.form.validate();
            if (this.$refs.form.validate() == true) {
                axios({
                    method: "post",
                    url: "http://localhost/project/evesphuketapi/addSale.php",
                    data: {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        user: this.user,
                        password: this.password,
                        email: this.email,
                        status: this.selectedStatus.id,
                    },
                }).then(function (response) {
                    this.openmodal(true);
                    if (response.data.err === true) {
                        this.textAlert = "บันทึกไม่สำเร็จ";
                    } else if (response.data.check === true) {
                        this.textAlert = "ชื่อผู้ใช้ซ้ำ โปรดใช้ชื่อผู้ใช้อื่น";
                    } else {
                        this.$refs.form.reset();
                        this.textAlert = "บันทึกสำเร็จ";
                    }
                }.bind(this)
                );
            }
        },
        openmodal(bool) {
            this.dialog = bool;
        },
    },
    async mounted() {
        this.title = this.breadcrumb[this.breadcrumb.length - 1].text;
    },
}
</script>
<style>
.v-breadcrumbs {
    padding-top: 0 !important;
}
</style>