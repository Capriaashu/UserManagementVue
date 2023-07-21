import UserDataService from "../services/UserDataService";

const state = {
  user: null,
};

const mutations = {
  LOGIN(state, user) {
    state.user = user;
  },
};

const actions = {
  async login({ commit }, { username, password }) {
    try {
      const response = await UserDataService.getAll();
      const userList = response.data;
      const user = userList.find(
        (element) => element.username === username && element.password === password
      );
      if (user) {
        commit("LOGIN", user);
        return user;
      } else {
        throw new Error("Incorrect Username or Password");
      }
    } catch (error) {
      throw error;
    }
  },
};

const getters = {
  isLoggedIn: (state) => !!state.user,
  currentUser: (state) => state.user,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
