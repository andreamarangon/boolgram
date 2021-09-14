<template>
  <div id="stories">
    <div class="d-flex">
      <div
        class="story-container"
        v-for="(profile, index) in profiles"
        :key="index"
      >
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
  overflow: hidden;
  background-color: #fff;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 3px;
  padding: 16px 0;
  margin-bottom: 24px;
  .story-container {
    &:first-child {
      padding-left: 10px;
    }
    &:last-child {
      padding-right: 10px;
    }
  }
}
</style>
