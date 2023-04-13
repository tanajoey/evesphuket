<template>
    <div id="navbar">
        <v-navigation-drawer permanent>
            <v-list>
                <!-- <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="https://randomuser.me/api/portraits/women/85.jpg"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item> -->

                <v-list-item link>
                    <v-list-item-content>
                        <v-list-item-title class="text-h6">
                            {{ username || "Username" }}
                        </v-list-item-title>
                        <v-list-item-subtitle v-on:click="logout">log out</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider></v-divider>
            <v-list-group no-action v-for="navLink in navLinks" :key="navLink.text">
                <v-list-item slot="activator" :to="navLink.route">
                    <v-list-item-icon>
                        <v-icon>{{ navLink.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ navLink.text }}</v-list-item-title>
                </v-list-item>
                <v-list-item class="submenu" v-for="sub in navLink.subLinks" :key="sub.text" :to="sub.route">
                    <v-list-item-icon>
                        <v-icon>{{ sub.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ sub.text }}</v-list-item-title>
                </v-list-item>
            </v-list-group>
        </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    name: "Nav_bar",
    data() {
        return {
            navLinks: [
                { icon: "mdi-view-dashboard", text: "ภาพรวม", route: "/dashboard" },
                {
                    icon: "mdi-list-box",
                    text: "รายการสินค้า",
                    route: "",
                    subLinks: [
                        { icon: "mdi-list-box", text: "รายการสินค้า", route: "/Adduser" }, 
                        { icon: "mdi-format-list-bulleted-type", text: "หมวดหมู่", route: "/AddType" },
                        { icon: "mdi-cart-percent", text: "โปรโมชั่น", route: "/AddType" }
                    ],
                },
                {
                    icon: "mdi-cog",
                    text: "ตั้งค่า",
                    route: "",
                    subLinks: [
                        { icon: "mdi-file-account", text: "ผู้ใช้งาน", route: "/listUser" }, 
                        { icon: "mdi-steam", text: "รายการลูกทีม", route: "/AddListSale" },
                    ],
                },
            ],
            username: this.$route.params.username,
        };
    },
    methods: {
        logout() {
            this.$router.replace({ name: "login" });
        },
    },
};
</script>
<style>
.mdi-chevron-down::before {
    content: "" !important;
}

.mdi-chevron-down {
    display: none !important;
}

.v-list-group, .v-list-group__items {
    text-align: left;
}
.submenu .v-list-item__icon{
    margin-left: 0 !important;
}
</style>
