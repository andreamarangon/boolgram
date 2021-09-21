<template>
  <div id="suggestions">
    <div class="d-flex justify-content-between">
      <span class="my-lightgray my-bold">Suggerimenti per te</span>
      <span
        @click="(showLess = false), (isHidden = true)"
        v-if="!isHidden"
        class="my-font-size-12 my-text-bold"
        >Mostra tutti</span
      >
    </div>
    <div v-if="showLess">
      <div
        v-for="(profile, index) in profiles.slice(0, 5)"
        :key="index"
        class="profile-container d-flex justify-content-between mt-2"
      >
        <div class="d-flex">
          <img
            :src="profile.profile_picture"
            class="align-self-center rounded-circle me-3"
            alt="immagine-profilo"
          />
          <div class="profile-name d-flex flex-column justify-content-center">
            <span class="my-text-bold">{{ profile.profile_name }}</span>
            <span class="my-lightgray my-font-size-12"
              >Consigliati da Instagram</span
            >
          </div>
        </div>
        <div class="d-flex align-items-center">
          <span class="my-lightblue my-font-size-12 my-bold">Segui</span>
        </div>
      </div>
    </div>
    <div v-else>
      <div
        v-for="(profile, index) in profiles"
        :key="index"
        class="profile-container d-flex justify-content-between mt-2"
      >
        <div class="d-flex">
          <img
            :src="profile.profile_picture"
            class="align-self-center rounded-circle me-3"
            alt="immagine-profilo"
          />
          <div class="profile-name d-flex flex-column justify-content-center">
            <span class="my-text-bold">{{ profile.profile_name }}</span>
            <span class="my-lightgray my-font-size-12"
              >Consigliati da Instagram</span
            >
          </div>
        </div>
        <div class="d-flex align-items-center">
          <span class="my-lightblue my-font-size-12 my-bold">Segui</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Suggestions",
  props: ["profiles"],
  data() {
    return {
      showLess: true,
      isHidden: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#suggestions {
  margin-top: 30px;
  .profile-container {
    img {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
