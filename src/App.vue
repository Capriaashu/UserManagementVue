<template>
 <div class="vue-tempalte">
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignUp from './views/login/SignUp.vue';
export default {
  name: 'App',
  components:{
    SignUp,
  }
}
</script>