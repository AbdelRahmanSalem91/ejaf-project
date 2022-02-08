<template>
  <div class="header position-relative">
    <video
      class="position-absolute top-0 start-0 w-100 h-100"
      autoplay
      loop
      muted
    >
      <source src="../../assets/home/landing/landing.mp4" type="video/mp4" />
    </video>
    <div class="container">
      <landing-section />
    </div>
  </div>
</template>

<script>
import LandingSection from "../home/landing/Landing.vue";

export default {
  name: "header-component",
  components: {
    LandingSection,
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 100%;
}
video {
  object-fit: cover;
  z-index: -1;
}
.onScroll {
  background-color: var(--main-color);
}
</style>
