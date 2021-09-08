import Vue from "vue";
import Vuex from "vuex";

//axios
import axios from "axios";
//Vue.prototype.$http = axios;

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    posts: [],
    test: "Test 1,2,3...",
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
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
  },
  modules: {},
});
