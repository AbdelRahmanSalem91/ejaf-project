<template>
  <div class="data-security">
    <div class="land">
      <LandingComponent> Data Security </LandingComponent>
    </div>
    <div class="container">
      <first-data-sec-section />
      <second-data-sec-section />
      <first-data-sec-section />
      <second-data-sec-section />
      <first-data-sec-section />
      <second-data-sec-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstDataSecSection from "./data-security-sections/FirstDataSecSection.vue";
import SecondDataSecSection from "./data-security-sections/SecondDataSecSection.vue";

export default {
  components: { FirstDataSecSection, SecondDataSecSection },
  name: "data-security",
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/security-solutions/data-security/oracle-fusion-erp.jpg");
  }
}
</style>
