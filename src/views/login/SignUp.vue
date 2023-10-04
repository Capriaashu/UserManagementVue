<template>
<img class="logo" src="@/assets/emp-dir.png" />
<div class="row">
    <div class="mx-auto col-10 col-md-8 col-lg-6">
        <h1>Sign Up </h1>
        <form class="mx-auto col-10 col-md-8 col-lg-6">
            <div class=" mb-4">
                <input type="name" v-model="user.username" class="form-control" placeholder="Enter User Name">
            </div>
            <div class=" mb-4">
                <input type="email" v-model="user.email" class="form-control" placeholder="Enter E-Mail">
            </div>
            <div class="mb-4">
                <input type="password" v-model="user.password" class="form-control" placeholder="Enter Password">
            </div>
            <div class="d-grid mb-4">
                <button type='button' class="btn btn-info" v-on:click="onClickSignUp($event)">Sign Up</button>
            </div>
            <p class="forgot-password text-right">
            Already registered?
            <router-link to="/login-user">Sign in</router-link>
          </p>
        </form>
    </div>
</div>
</template>

<script>
import UserDataService from '../../services/UserDataService';
export default {
    name: 'SignUp',
    data() {
        return {
            user: {
                username: "",
                email: "",
                password: ""
            }
        }

    },
    methods: {
        onClickSignUp(event) {
            var data = {
                name: "",
                username: this.user.username,
                password: this.user.password,
                email: this.user.email,
                active: true
            };
            if (data.username !== '') {
                UserDataService.create(data)
                    .then(response => {
                        this.user.id = response.data.id;
                        this.$router.push({ name: "login-user" });
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }

        }
    }
}
</script>

<style>
.logo {
    width: 100px;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
}
</style>
