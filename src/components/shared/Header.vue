<template>
  <div class="header position-relative">
    <navbar-component
      class="position-fixed top-0 start-50 translate-middle-x"
    ></navbar-component>
    <video
      class="position-absolute top-0 start-0 w-100 h-100"
      autoplay
      loop
      muted
    >
      <source src="../../assets/home/landing/landing.mp4" type="video/mp4" />
    </video>
    <landing-section />
  </div>
</template>

<script>
import NavbarComponent from "./Navbar.vue";
import LandingSection from "../home/landing/Landing.vue";

export default {
  name: "header-component",
  components: {
    NavbarComponent,
    LandingSection,
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 620px;
}
video {
  object-fit: cover;
  z-index: -1;
}
</style>
