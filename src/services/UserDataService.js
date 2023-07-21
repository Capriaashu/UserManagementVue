import http from "./http-common";

class UserDataService {
  // HTTP service to make requests to the backend API

  // Retrieve all users
  getAll() {
    return http.get("/users"); // Send a GET request to the "/users" endpoint to retrieve all users
  }

  // get user baed on ID
  get(id) {
    return http.get(`/users/${id}`); // Send a PUT request to the "/users/{id}" endpoint to update an existing user with the provided data
  }

  // Create a new user
  create(data) {
    return http.post("/users", data); // Send a POST request to the "/users" endpoint to create a new user with the provided data
  }

  // Update an existing user
  update(id, data) {
    return http.put(`/users/${id}`, data); // Send a PUT request to the "/users/{id}" endpoint to update an existing user with the provided data
  }

  // Delete a user
  delete(id) {
    return http.delete(`/users/${id}`); // Send a DELETE request to the "/users/{id}" endpoint to delete a user with the specified ID
  }
}

export default new UserDataService();
