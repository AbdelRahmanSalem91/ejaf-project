<template>
  <div class="application-security">
    <div class="land">
      <LandingComponent> Application Security </LandingComponent>
    </div>
    <div class="container">
      <first-app-sec-section />
      <second-app-sec-section />
      <first-app-sec-section />
      <second-app-sec-section />
      <first-app-sec-section />
      <second-app-sec-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstAppSecSection from "./application-security-sections/FirstAppSecSection.vue";
import SecondAppSecSection from "./application-security-sections/SecondAppSecSection.vue";

export default {
  components: { FirstAppSecSection, SecondAppSecSection },
  name: "application-security",
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/security-solutions/application-security/oracle-fusion-erp.jpg");
  }
}
</style>
