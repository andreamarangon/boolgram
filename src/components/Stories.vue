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
  &:hover {
    overflow: overlay;
  }
  &::-webkit-scrollbar {
    height: 5px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    //background: #f1f1f1;
    box-shadow: inset 0 0 2px grey;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
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
