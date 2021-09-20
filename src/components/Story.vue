<template>
  <div id="story">
    <div class="my-card d-flex flex-column">
      <div class="img-container align-self-center">
        <img :src="profile.profile_picture" class="" alt="profile_picture" />
      </div>
      <div class="my-card-body">
        <p class="text-center">{{ profile.profile_name }}</p>
      </div>
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
  width: 75px;
  padding: 0 4px;
  .img-container {
    border-radius: 50%;
    padding: 2px;
    position: relative;
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    img {
      background: #fff;
      padding: 2px;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      cursor: pointer;
    }
  }
  .my-card-body {
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 12px;
      margin: 0;
    }
  }
}
</style>
