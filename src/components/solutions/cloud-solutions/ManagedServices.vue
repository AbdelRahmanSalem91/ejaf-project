<template>
  <div class="managed-services">
    <div class="land">
      <LandingComponent> Managed Services </LandingComponent>
    </div>
    <div class="container">
      <first-managed-services-section />
      <second-managed-services-section />
      <first-managed-services-section />
      <second-managed-services-section />
      <first-managed-services-section />
      <second-managed-services-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstManagedServicesSection from "./managed-services-sections/FirstManagedServicesSection.vue";
import SecondManagedServicesSection from "./managed-services-sections/SecondManagedServicesSection.vue";

export default {
  components: { FirstManagedServicesSection, SecondManagedServicesSection },
  name: "managed-services",
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/cloud-solutions/managed-services/oracle-fusion-erp.jpg");
  }
}
</style>
