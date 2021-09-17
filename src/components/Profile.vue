<template>
  <div id="profile">
    <div class="profile-container d-flex justify-content-between">
      <div class="d-flex">
        <img
          src="../assets/profile.jpg"
          class="rounded-circle me-3"
          alt="immagine-profilo"
        />
        <div class="profile-name d-flex flex-column justify-content-center">
          <span class="my-text-bold">sheriffwoody</span>
          <span class="my-lightgray">Woody Pride</span>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <span class="my-lightblue my-font-size-12 my-bold">Passa a</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#profile {
  margin-top: 52px;
  img {
    width: 56px;
    height: 56px;
  }
}
</style>
