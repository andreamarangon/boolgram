<template>
  <div id="app">
    <Navbar />
    <Main :profiles="profiles" :posts="posts" />
    <!--     <h1 v-for="(item, index) in posts" :key="index">
      {{ item.profile_name }}
    </h1>
 -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
//import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    //HelloWorld,
    Navbar,
    Main,
  },
  mounted() {
    //console.log(this.$store)
    this.$store.dispatch("loadPosts");
    this.$store.dispatch("loadProfiles");
  },
  computed: {
    ...mapState(["posts"]),
    ...mapState(["profiles"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif, Helvetica,
    Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: rgba(var(--f75, 38, 38, 38), 1);
  margin-top: 60px;
  background-color: #fafafa;
  .my-text-bold {
    font-weight: 600;
  }
  .my-text-underline-hover:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
