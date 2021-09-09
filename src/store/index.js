import Vue from "vue";
import Vuex from "vuex";

//axios
import axios from "axios";
//Vue.prototype.$http = axios;

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    posts: [],
    profiles: [],
    test: "Test 1,2,3...",
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setProfiles(state, profiles) {
      state.profiles = profiles;
    },
  },
  actions: {
    loadPosts({ commit }) {
      console.log("load posts");
      return new Promise((resolve) => {
        axios
          .get("https://flynn.boolean.careers/exercises/api/boolgram/posts")
          .then((data) => {
            console.log(data.data);
            let posts = data.data;
            commit("setPosts", posts);
          })
          .catch((error) => {
            console.log(error);
          });
        resolve();
      });
    },
    loadProfiles({ commit }) {
      console.log("load profile");
      return new Promise((resolve) => {
        axios
          .get("https://flynn.boolean.careers/exercises/api/boolgram/profiles")
          .then((data) => {
            console.log(data.data);
            let profiles = data.data;
            commit("setProfiles", profiles);
          })
          .catch((error) => {
            console.log(error);
          });
        resolve();
      });
    },
  },
  modules: {},
});
