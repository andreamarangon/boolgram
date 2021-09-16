<template>
  <div id="posts">
    <div class="">
      <div class="" v-for="(post, index) in posts" :key="index">
        <Post :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "Posts",
  components: {
    Post,
  },
  data() {
    return {};
  },

  props: ["posts"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
