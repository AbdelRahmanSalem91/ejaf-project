<template>
  <div class="microsoft-csp">
    <div class="land">
      <LandingComponent> Microsoft Csp </LandingComponent>
    </div>
    <div class="container">
      <first-micro-csp-section />
      <second-micro-csp-section />
      <first-micro-csp-section />
      <second-micro-csp-section />
      <first-micro-csp-section />
      <second-micro-csp-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstMicroCspSection from "./micro-csp-sections/FirstMicroCspSection.vue";
import SecondMicroCspSection from "./micro-csp-sections/SecondMicroCspSection.vue";

export default {
  components: { FirstMicroCspSection, SecondMicroCspSection },
  name: "microsoft-csp",
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/volume-licensing/microsoft-csp/oracle-fusion-erp.jpg");
  }
}
</style>
