<template>
  <div class="security-operations">
    <div class="land">
      <LandingComponent> Security Operations </LandingComponent>
    </div>
    <div class="container">
      <first-sec-op-section />
      <second-sec-op-section />
      <first-sec-op-section />
      <second-sec-op-section />
      <first-sec-op-section />
      <second-sec-op-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstSecOpSection from "./sec-operations-sections/FirstSecOpSection.vue";
import SecondSecOpSection from "./sec-operations-sections/SecondSecOpSection.vue";

export default {
  components: { FirstSecOpSection, SecondSecOpSection },
  name: "security-operations",
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/security-solutions/security-operations/oracle-fusion-erp.jpg");
  }
}
</style>
