<template>
  <div id="profile">
    <div class="profile-container d-flex">
      <img
        src="../assets/profile.jpg"
        class="rounded-circle"
        alt="immagine-profilo"
      />
      <div class="profile-name d-flex flex-column">
        <span class="my-text-bold">sheriffwoody</span>
        <span>Woody Pride</span>
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
  font-size: 14px;
  margin-top: 30px;
  img {
    width: 56px;
    height: 56px;
  }
}
</style>
