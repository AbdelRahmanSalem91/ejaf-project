<template>
  <div class="endpoint-security">
    <div class="land">
      <LandingComponent> Endpoint Security </LandingComponent>
    </div>
    <div class="container">
      <first-endpoint-sec-section />
      <second-endpoint-sec-section />
      <first-endpoint-sec-section />
      <second-endpoint-sec-section />
      <first-endpoint-sec-section />
      <second-endpoint-sec-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstEndpointSecSection from "./endpoint-security-sections/FirstEndpointSecSection.vue";
import SecondEndpointSecSection from "./endpoint-security-sections/SecondEndpointSecSection.vue";

export default {
  components: { FirstEndpointSecSection, SecondEndpointSecSection },
  name: "endpoint-security",
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/security-solutions/endpoint-security/oracle-fusion-erp.jpg");
  }
}
</style>
