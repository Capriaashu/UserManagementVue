# UserManagementVue

User Management Application
The User Management Application is a web-based application built using Vue.js, Vuex, and Vue Router to manage user data. The application allows users to view a list of users, add new users, and edit existing user information. The application also includes user authentication to ensure that only authorized users can access certain routes.

### Features
View a list of users with basic information (name, username, email, status, country, gender).
Add new users to the system.
Edit existing user information.
User authentication to protect certain routes from unauthorized access.

### Technologies Used
Vue.js: A progressive JavaScript framework for building user interfaces.
Vuex: A state management pattern and library for Vue.js applications.
Vue Router: A routing library for Vue.js applications.
Bootstrap: A popular CSS framework for building responsive and mobile-first websites.
Font Awesome: A library of scalable vector icons for web projects.

### Getting Started
Prerequisites
Make sure you have Node.js and npm installed on your system.

### Installation
Clone the repository:
```sh
git clone https://github.com/Capriaashu/UserManagementVue.git
```

Navigate to the project directory:
```sh
cd UserManagementVue
```


Install dependencies:
```sh
npm install
```


### Compile and Hot-Reload for Development
Start the development server:
```sh
npm run dev
```

The application will be accessible at http://localhost:5173 in your web browser.

Use the application to manage User, view the list of User, add new User, and edit User information.

Deployment
To deploy the application for production, build the project using:

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

API Requests
The application makes HTTP requests to a backend API using the http-common module. The UserDataService class provides methods for interacting with the backend API to perform CRUD operations on user data.

Retrieve all users:
```sh
 getAll() {
    return http.get("/users"); // Send a GET request to the "/users" endpoint to retrieve all users
  }
```

Get user based on ID:
```sh
get(id) {
    return http.get(`/users/${id}`); // Send a PUT request to the "/users/{id}" endpoint to update an existing user with the provided data
  }
```

Create a new user:
```sh
const userData = { /* user data object */ };
create(data) {
    return http.post("/users", data); // Send a POST request to the "/users" endpoint to create a new user with the provided data
  }
```

Update an existing user:
```sh
const userId = 1; // Replace with the ID of the user to be updated
const userData = { /* Updated user data object */ };
 update(id, data) {
    return http.put(`/users/${id}`, data); // Send a PUT request to the "/users/{id}" endpoint to update an existing user with the provided data
  }
```


Delete a user:
```sh
const userId = 1; // Replace with the ID of the user to be deleted
delete(id) {
    return http.delete(`/users/${id}`); // Send a DELETE request to the "/users/{id}" endpoint to delete a user with the specified ID
  }
```


### Auth Module
Introduction
The auth module is responsible for handling user authentication within the Employee Management Application. It provides actions and mutations to manage user login and logout functionality, as well as getters to retrieve the user's authentication status and information.


### Acknowledgments
Special thanks to the Vue.js, Vuex, and Vue Router teams for their awesome work in building these amazing libraries.
Thanks to the Bootstrap and Font Awesome communities for providing useful tools and resources for web development.



