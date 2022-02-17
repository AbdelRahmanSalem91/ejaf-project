<template>
  <div class="microsoft-azure">
    <div class="land">
      <LandingComponent> Microsoft Azure </LandingComponent>
    </div>
    <div class="container">
      <first-micro-azure-section />
      <second-micro-azure-section />
      <first-micro-azure-section />
      <second-micro-azure-section />
      <first-micro-azure-section />
      <second-micro-azure-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstMicroAzureSection from "./micro-azure-sections/FirstMicroAzureSection.vue";
import SecondMicroAzureSection from "./micro-azure-sections/SecondMicroAzureSection.vue";

export default {
  components: { FirstMicroAzureSection, SecondMicroAzureSection },
  name: "microsoft-azure",
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/volume-licensing/microsoft-azure/oracle-fusion-erp.jpg");
  }
}
</style>
