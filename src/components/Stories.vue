<template>
  <div id="stories" class="my-container-fluid">
    <div class="d-flex">
      <div v-for="(profile, index) in profiles" :key="index">
        <Story :profile="profile" />
      </div>
    </div>
  </div>
</template>

<script>
import Story from "./Story.vue";

export default {
  name: "Stories",
  components: {
    Story,
  },

  props: ["profiles"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#stories {
  overflow-x: auto;
}
</style>
