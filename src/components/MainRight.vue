<template>
  <div id="main-right">
    <Profile />
    <Suggestions :profiles="profiles" />
    <Footer />
  </div>
</template>

<script>
import Profile from "./Profile.vue";
import Suggestions from "./Suggestions.vue";
import Footer from "./Footer.vue";

export default {
  name: "MainRight",
  components: { Profile, Suggestions, Footer },
  props: ["profiles"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#main-right {
  display: none;
}
// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  #main-right {
    display: block;
  }
}
</style>
