<template>
  <div class="my-card d-flex flex-column">
    <div class="img-container align-self-center">
      <img :src="profile.profile_picture" class="" alt="profile_picture" />
    </div>
    <div class="my-card-body">
      <p class="text-center">{{ profile.profile_name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Story",
  props: ["profile"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.my-card {
  width: 80px;
  padding: 0 4px;
  .img-container {
    display: inline-block;
    position: relative;
    width: 56px;
    height: 56px;
    overflow: hidden;
    border-radius: 50%;
    border: 4px solid fuchsia;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .my-card-body {
    p {
      font-size: 12px;
      overflow: hidden;
      margin: 0;
    }
  }
}
</style>
