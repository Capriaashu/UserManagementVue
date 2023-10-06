<template>
    <div class="vue-tempalte">
        <Navbar />

        <div class="col-md-12 mt-3">
            <div class="input-group mb-3 w-50">
                <input type="text" class="form-control" placeholder="Search" v-model="filterCriteria"
                    @input="filteredData" />
                <button class="btn btn-secondary" type="button" @click="clearFilter">Clear</button>
            </div>
        </div>
        <div class="col-md-12 mt-3">
            <Table :fields="fields" :dataList="filteredUserList" @deleteRowData="deleteRowData"
                @editRowData="editRowData" />
        </div>
    </div>
</template>

<script>
import UserDataService from "../../services/UserDataService";
import Table from "../../components/TableComponent.vue";
import Navbar from "../../components/Navbar.vue";

export default {
    name: "users-list",
    components: {
        Table,
        Navbar,
    },
    data() {
        const fields = ["id", "name", "username", "email", "status", "country", "gender"];
        return {
            userList: [],
            fields,
            filterCriteria: "",
        };
    },
    methods: {
        retrieveUsers() {
            UserDataService.getAll()
                .then((response) => {
                    this.userList = response.data.map(this.getDisplayUser);
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        refreshList() {
            this.retrieveUsers();
        },

        editRowData(id) {
            this.$router.push({
                name: "user-details",
                params: {
                    id: id,
                },
            });
        },

        deleteRowData(id) {
            UserDataService.delete(id)
                .then(() => {
                    this.refreshList();
                })
                .catch((e) => {
                    console.log(e);
                });
        },

        getDisplayUser(user) {
            return {
                id: user.id,
                name: user.name.length > 50 ? user.name.substr(0, 30) + "..." : user.name,
                username: user.username.length > 50 ? user.username.substr(0, 30) + "..." : user.username,
                password: user.password,
                email: user.email,
                status: user.active ? "Active" : "Deactive",
                country: user.country,
                gender: user.gender,
            };
        },
        clearFilter() {
            this.filterCriteria = "";
        },

    },
    mounted() {
        this.retrieveUsers();
    },
    computed: {
        filteredUserList() {
            return this.userList.filter((user) => {
                return Object.values(user).some((value) => {
                    if (value !== undefined && value !== null) {
                        return value.toString().toLowerCase().includes(this.filterCriteria.toLowerCase());
                    }
                    return false;
                });
            });
        },
    },
};
</script>

