<template>
  <div class="header">
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
.onScroll {
  background-color: var(--main-color);
}
</style>
