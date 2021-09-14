<template>
  <div id="main-left">
    <Stories :profiles="profiles" />
    <Posts :posts="posts" />
  </div>
</template>

<script>
import Stories from "./Stories.vue";
import Posts from "./Posts.vue";

export default {
  name: "MainLeft",
  components: {
    Stories,
    Posts,
  },

  props: ["profiles", "posts"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#main-left {
  margin-top: 30px;
}
</style>
