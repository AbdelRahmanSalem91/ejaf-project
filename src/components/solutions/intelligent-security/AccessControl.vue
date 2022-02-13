<template>
  <div class="access-control">
    <div class="land">
      <LandingComponent> Access Control Solution </LandingComponent>
    </div>
    <div class="container">
      <first-access-section />
      <second-access-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstAccessSection from "./access-control-sections/FirstAccessSection.vue";
import SecondAccessSection from "./access-control-sections/SecondAccessSection.vue";

export default {
  name: "access-control",
  components: {
    FirstAccessSection,
    SecondAccessSection,
  },
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/intelligent-security/access-control/access-control-solution.jpg");
  }
}
</style>
