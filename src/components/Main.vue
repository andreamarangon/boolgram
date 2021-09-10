<template>
  <main id="main">
    <div class="container">
      <div class="row">
        <MainLeft :profiles="profiles" />
        <MainRight />
      </div>
    </div>
  </main>
</template>

<script>
import MainLeft from "./MainLeft.vue";
import MainRight from "./MainRight.vue";

export default {
  name: "Main",
  components: {
    MainLeft,
    MainRight,
  },

  props: ["profiles"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#main {
}
</style>
