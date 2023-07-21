import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import router from './router/router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
import store from './stores/index'; // Import the Vuex store instance

library.add(fas);

router.beforeEach((to, from, next) => {
    const isLoggedIn = store.getters['auth/isLoggedIn'];
  
    // Check if the route requires authentication and the user is not logged in
    if (to.meta.requiresAuth && !isLoggedIn) {
      // Check if the current route is already the login page
      if (to.name === 'login-user') {
        // If it is, simply proceed with the navigation
        next();
      } else {
        // If it's not, redirect to the login page
        next({ name: 'login-user' });
      }
    } else {
      next(); // Proceed with navigation
    }
  });
  

const app = createApp(App);
app.component('fa', FontAwesomeIcon);
app.use(store); // Use the store plugin
app.use(router);
app.mount('#app');
