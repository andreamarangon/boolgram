<template>
  <div class="col-md-8">
    <div class="container-fluid">
      <div class="d-flex">
        <Story />
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
</style>
