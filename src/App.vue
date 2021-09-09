<template>
  <div id="app">
    <Navbar />
    <h1 v-for="(item, index) in posts" :key="index">{{ item.profile_name }}</h1>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
//import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    //HelloWorld,
    Navbar,
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #fafafa;
}
</style>
