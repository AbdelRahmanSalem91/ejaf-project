<template>
  <div class="header position-relative">
    <navbar-component
      class="position-fixed top-0 start-0 d-flex justify-content-between header__nav"
      :class="{ onScroll: !view.topOfPage }"
    ></navbar-component>
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
import NavbarComponent from "./Navbar.vue";
import LandingSection from "../home/landing/Landing.vue";

export default {
  name: "header-component",
  components: {
    NavbarComponent,
    LandingSection,
  },
  data() {
    return {
      view: {
        topOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 100%;
}
.header__nav {
  z-index: 10;
}
.nav__background {
  background-color: var(--main-color);
}
video {
  object-fit: cover;
  z-index: -1;
}
.onScroll {
  background-color: var(--main-color);
}
</style>
