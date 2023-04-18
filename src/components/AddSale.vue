<template>
    <div id="AddSale">
        <v-app>
            <toolBar />
            <v-card>
                <v-layout fill-height>
                    <Navbar />
                    <v-main>
                        <cardtitle>
                            <h2><v-icon>mdi-file-account</v-icon>เพิ่มผู้ใช้</h2>
                        </cardtitle>
                        <v-breadcrumbs :items="breadcrumb">
                            <template v-slot:divider>
                                <v-icon>mdi-chevron-right</v-icon>
                            </template>
                        </v-breadcrumbs>

                        <div class="paddingPage">
                            <!-- @submit.prevent="addUser" -->
                            <form ref="form" >
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <v-text-field v-model="firstName" name="firstName" label="ชื่อ" type="text"
                                                placeholder="ชื่อ" required></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="6">
                                            <v-text-field v-model="lastName" name="lastName" label="สกุล" type="text"
                                                placeholder="สกุล" required></v-text-field>
                                        </v-col>

                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <v-text-field v-model="user" name="user" label="ชื่อผู้ใช้" type="text"
                                                placeholder="ชื่อผู้ใช้" required></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="6">
                                            <v-text-field v-model="password" name="password" label="รหัสผ่าน"
                                                type="password" placeholder="รหัสผ่าน" :counter="8" required></v-text-field>
                                        </v-col>

                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <v-text-field v-model="email" name="email" label="อีเมล" type="text"
                                                placeholder="อีเมล" required></v-text-field>
                                        </v-col>

                                        <v-col cols="12" md="6">
                                            <v-select v-model="selectedStatus" :items="status" item-text="title"
                                                item-value="id" return-object label="สถานะการใช้งาน" name="status"
                                                required></v-select>
                                        </v-col>

                                    </v-row>
                                    <!-- @click="addUser" -->
                                    <v-btn class="mr-4" @click="addUser">
                                        บันทึก
                                    </v-btn>
                                    <!-- @click="resetForm" -->
                                    <v-btn @click="resetForm">
                                        ยกเลิก
                                    </v-btn>
                                </v-container>
                            </form>
                        </div>
                    </v-main>
                </v-layout>
            </v-card>
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
        selectedStatus: null,
        // selectedStatus: {
        //     id: '2',
        //     title: 'ไม่ใช้งาน',
        // },
    }),
    computed: {
    },
    methods: {
        addUser() {
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
                if(response.data.err === true){
                    alert('บันทึกไม่สำเร็จ');
                }else{
                    alert('บันทึกสำเร็จ');
                }
                this.resetForm();
            }.bind(this));
        },
        resetForm() {
            this.firstName = ''
            this.lastName = ''
            this.user = ''
            this.password = '',
            this.email = '',
            this.selectedStatus = null
        },
    },
}
</script>
<style>
.v-breadcrumbs {
    padding-top: 0 !important;
}
</style>