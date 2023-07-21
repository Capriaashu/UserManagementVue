<template>
<img class="logo" src="@/assets/emp-dir.png" />
<div class="row">
    <div class="mx-auto col-10 col-md-8 col-lg-6">
        <h1>Login </h1>
        <form class="mx-auto col-10 col-md-8 col-lg-6">
            <div class=" mb-4">
                <input type="name" v-model="username" class="form-control" placeholder="Enter User Name">
            </div>
            <div class="mb-4">
                <input type="password" v-model="password" class="form-control" placeholder="Enter Password">
            </div>
            <div class=" mb-4">
                <button type="button" class="btn btn-info" @click="onClickLogin">Login</button>
            </div>
            <p class="forgot-password text-right">
                New User <router-link :to="{name: 'signup'}">Sign Up?</router-link>
            </p>
        </form>
    </div>
    <p class="callout-danger" v-if="isUserValid" id="error">Incorrect Username or Password !!!</p>
</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'Login',
    data() {
    return {
      username: '',
      password: '',
      isUserValid: false,
      error: '',
    };
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async onClickLogin() {
      try {
        const user = await this.login({
          username: this.username,
          password: this.password,
        });
        this.isUserValid = !!user;
        this.error = this.isUserValid ? "" : "Incorrect Username or Password";
        if (this.isUserValid) {
          this.$router.push({ name: "usersList" });
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
}
</script>

<style>
.logo {
    width: 100px;
}
</style>
