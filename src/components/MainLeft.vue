<template>
  <div id="main-left">
    <Stories :profiles="profiles" />
  </div>
</template>

<script>
import Stories from "./Stories.vue";

export default {
  name: "MainLeft",
  components: {
    Stories,
  },

  props: ["profiles"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#main-left {
  margin-top: 30px;
}
</style>
