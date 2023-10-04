<template>
    <nav class="navbar shadow navbar-dark bg-dark justify-content-between flex-nowrap flex-row navbar-fixed-top  ">
        <div class="container-fluid">
            <a class="navbar-brand float-left" href="/login-user">
                Employee Management
            </a>
            <ul class="nav navbar-nav flex-row float-right gap-2">
                <li class="nav-item">
                    <router-link class="btn btn-outline-primary" to="/usersList">User List</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="btn btn-outline-primary" to="/addUser">Add</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="btn btn-outline-primary" to="/" @click="handleLogout">Logout</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>
  
<script>

import { mapActions } from 'vuex';
export default {
    name: "Navbar",
    methods: {
        ...mapActions("auth", ["logout"]),
        handleLogout() {
            this.logout().then(() => {
                // Redirect to the login page
                this.$router.push({ name: "login-user" });
            });
        },
    },
}
</script>
  