<template>
    <div id="dashboard">
        <v-app app>
            <toolBar />
            <v-card>
                <v-layout fill-height>
                    <Navbar />
                    <v-main>
                        <cardtitle>
                            <h2><v-icon>mdi-file-account</v-icon>ผู้ใช้งาน</h2>
                            <div class="btnadd">
                                <v-btn tile color="success">
                                    <v-icon left>
                                        mdi-pencil
                                    </v-icon>
                                    เพิ่มผู้ใช้
                                </v-btn>
                            </div>
                        </cardtitle>
                        <v-breadcrumbs :items="items">
                            <template v-slot:divider>
                                <v-icon>mdi-chevron-right</v-icon>
                            </template>
                        </v-breadcrumbs>

                        <!-- <div class="paddingPage">
                            <form>
                                <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" label="Name"
                                    required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
                                <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required
                                    @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
                                <v-select v-model="select" :items="items" :error-messages="selectErrors" label="Item"
                                    required @change="$v.select.$touch()" @blur="$v.select.$touch()"></v-select>
                                <v-checkbox v-model="checkbox" :error-messages="checkboxErrors" label="Do you agree?"
                                    required @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"></v-checkbox>

                                <v-btn class="mr-4" @click="submit">
                                    submit
                                </v-btn>
                                <v-btn @click="clear">
                                    clear
                                </v-btn>
                            </form>
                        </div> -->
                        <div class="paddingPage">
                            <v-card>
                                <v-card-title>
                                    ผู้ใช้งานทั้งหมด
                                    <v-spacer></v-spacer>
                                    <v-text-field v-model="search" append-icon="mdi-magnify" label="ค้นหา" single-line
                                        hide-details></v-text-field>
                                </v-card-title>
                                <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
                            </v-card>
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
import cardtitle from './cardTitle.vue'

export default {
    name: "add_sale",
    components: {
        Navbar,
        toolBar,
        cardtitle
    },
    data: () => ({
        items: [
            {
                text: 'ตั้งค่า',
                disabled: true,
            },
            {
                text: 'ผู้ใช้งาน',
                disabled: true,
            },
        ],
    }),
    // return {
    //     search: '',
    //     headers: [
    //         {
    //             text: 'Dessert (100g serving)',
    //             align: 'start',
    //             sortable: false,
    //             value: 'name',
    //         },
    //         { text: 'Calories', value: 'calories' },
    //         { text: 'Fat (g)', value: 'fat' },
    //         { text: 'Carbs (g)', value: 'carbs' },
    //         { text: 'Protein (g)', value: 'protein' },
    //         { text: 'Iron (%)', value: 'iron' },
    //     ],
    //     desserts: [
    //         {
    //             name: 'Frozen Yogurt',
    //             calories: 159,
    //             fat: 6.0,
    //             carbs: 24,
    //             protein: 4.0,
    //             iron: 1,
    //         },
    //         {
    //             name: 'Ice cream sandwich',
    //             calories: 237,
    //             fat: 9.0,
    //             carbs: 37,
    //             protein: 4.3,
    //             iron: 1,
    //         },
    //         {
    //             name: 'Eclair',
    //             calories: 262,
    //             fat: 16.0,
    //             carbs: 23,
    //             protein: 6.0,
    //             iron: 7,
    //         },
    //         {
    //             name: 'Cupcake',
    //             calories: 305,
    //             fat: 3.7,
    //             carbs: 67,
    //             protein: 4.3,
    //             iron: 8,
    //         },
    //         {
    //             name: 'Gingerbread',
    //             calories: 356,
    //             fat: 16.0,
    //             carbs: 49,
    //             protein: 3.9,
    //             iron: 16,
    //         },
    //         {
    //             name: 'Jelly bean',
    //             calories: 375,
    //             fat: 0.0,
    //             carbs: 94,
    //             protein: 0.0,
    //             iron: 0,
    //         },
    //         {
    //             name: 'Lollipop',
    //             calories: 392,
    //             fat: 0.2,
    //             carbs: 98,
    //             protein: 0,
    //             iron: 2,
    //         },
    //         {
    //             name: 'Honeycomb',
    //             calories: 408,
    //             fat: 3.2,
    //             carbs: 87,
    //             protein: 6.5,
    //             iron: 45,
    //         },
    //         {
    //             name: 'Donut',
    //             calories: 452,
    //             fat: 25.0,
    //             carbs: 51,
    //             protein: 4.9,
    //             iron: 22,
    //         },
    //         {
    //             name: 'KitKat',
    //             calories: 518,
    //             fat: 26.0,
    //             carbs: 65,
    //             protein: 7,
    //             iron: 6,
    //         },
    //     ],
    // }
}
</script>
<style>
.v-breadcrumbs {
    padding-top: 0 !important;
}
</style>