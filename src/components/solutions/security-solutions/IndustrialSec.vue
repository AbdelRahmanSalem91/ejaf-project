<template>
  <div class="industrial-security">
    <div class="land">
      <LandingComponent> Industrial Security </LandingComponent>
    </div>
    <div class="container">
      <first-industrial-sec-section />
      <second-industrial-sec-section />
      <first-industrial-sec-section />
      <second-industrial-sec-section />
      <first-industrial-sec-section />
      <second-industrial-sec-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstIndustrialSecSection from "./industrial-security-sections/FirstIndustrialSecSection.vue";
import SecondIndustrialSecSection from "./industrial-security-sections/SecondIndustrialSecSection.vue";

export default {
  components: { FirstIndustrialSecSection, SecondIndustrialSecSection },
  name: "industrial-security",
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/security-solutions/industrial-security/oracle-fusion-erp.jpg");
  }
}
</style>
