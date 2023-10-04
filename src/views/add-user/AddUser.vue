<template>
    <Navbar />
    <div v-if="!submitted" class="card add-form vue-tempalte card-shadow w-75">
        <div class="card-header text-center">
            Add User
        </div>

        <div class="card-body vue-tempalte">
            <form>
                <div class="form-group  form-container mb-4">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" v-model="currentUser.name" />
                </div>
                <div class="form-group  form-container mb-4">
                    <label for="username">Username</label>
                    <input type="text" class="form-control" id="username" v-model="currentUser.username" />
                </div>
                <div class="form-group  form-container mb-4">
                    <label for="password">Password</label>
                    <input type="text" class="form-control" id="password" v-model="currentUser.password" />
                </div>

                <div class="form-group  form-container mb-4">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email" v-model="currentUser.email" />
                </div>
                <div class="form-group  mb-4 gender-radio">
                    <label for="gender">Gender:</label>
                    <div class="form-group  mb-4 ">
                        <input type="radio" id="male" value="Male" v-model="currentUser.gender">
                        <label for="male">Male</label>
                    </div>
                    <div class="form-group  mb-4 ">
                        <input type="radio" id="female" value="Female" v-model="currentUser.gender">
                        <label for="female">Female</label>
                    </div>
                </div>
                <div class="form-group d-flex hobbies-check mb-4">
                    <label for="status">User Active:</label>
                    <input type="checkbox" v-model="currentUser.active">
                </div>
                <div class="form-group  form-container mb-4">
                    <label for="country">Country:</label>
                    <select id="country" v-model="currentUser.country">
                        <option value="">Select</option>
                        <option v-for="country in countries" :key="country.id" :value="country.name">{{ country.name }}
                        </option>
                    </select>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">

                    <button class="btn btn-secondary" type="button" @click="onClickBack">Back</button>
                    <button type="button" class="btn btn-primary" @click="onClickSave">Save</button>
                </div>
                <div class="form-group  form-container mb-4">
                    <p>{{ message }}</p>
                </div>
            </form>
        </div>
    </div>

    <div v-else>
        <h4>You Added user successfully!</h4>
        <button class="btn btn-success" @click="newUser">Add New User</button>
    </div>
</template>

<script>
import UserDataService from "../../services/UserDataService";
import Navbar from '@/components/Navbar.vue';

export default {
    name: "add-user",
    data() {
        return {
            currentUser: {
                name: "",
                username: "",
                password: "",
                email: "",
                active: "",
                country: "",
                gender: ""
            },
            message: "",
            countries: [
                { id: 1, name: "Argentina" },
                { id: 2, name: "Australia" },
                { id: 3, name: "Belgium" },
                { id: 4, name: "Brazil" },
                { id: 5, name: "Canada" },
                { id: 6, name: "China" },
                { id: 7, name: "Denmark" },
                { id: 8, name: "Egypt" },
                { id: 9, name: "France" },
                { id: 10, name: "Germany" },
                { id: 11, name: "Greece" },
                { id: 12, name: "India" },
                { id: 13, name: "Italy" },
                { id: 14, name: "Japan" },
                { id: 15, name: "Mexico" },
                { id: 16, name: "Netherlands" },
                { id: 17, name: "Norway" },
                { id: 18, name: "Russia" },
                { id: 19, name: "South Africa" },
                { id: 20, name: "Spain" },
                { id: 21, name: "Sweden" },
                { id: 22, name: "Switzerland" },
                { id: 23, name: "Turkey" },
                { id: 24, name: "UK" },
                { id: 25, name: "USA" },
            ],
            selectedCountry: "",
            submitted: false
        };
    },
    methods: {
        onClickSave() {
            UserDataService.create(this.currentUser)
                .then(response => {
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });
        },
        newUser() {
            this.submitted = false;
            this.currentUser = {}
        },
        onClickBack() {
            this.$router.push({
                name: "usersList"
            });
        },
    },
    mounted() {
        this.message = "";
    },
    components: { Navbar }
};
</script>

<style>
.submit-form {
    max-width: 300px;
    margin: auto;
}

.add-form {
    text-align: left;
    margin: auto;
    margin-bottom: 2px;
}

.form-container {
    display: flex;
    gap: 1em;
}

.form-container label {
    width: 150px;
}

.gender-radio {
    display: flex;
    gap: 4em;
}

.hobbies-check {
    flex: 2;
    display: flex;
    gap: 0.5em;
}
</style>
