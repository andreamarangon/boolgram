<template>
  <main id="main">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <MainLeft :profiles="profiles" :posts="posts" />
        </div>
        <div class="col-md-4">
          <MainRight />
        </div>
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

  props: ["profiles", "posts"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  max-width: 975px;
}
</style>
