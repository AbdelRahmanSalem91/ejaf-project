<template>
  <div class="microsoft-cloud">
    <div class="land">
      <LandingComponent> Microsoft Cloud </LandingComponent>
    </div>
    <div class="container">
      <first-micro-cloud-section />
      <second-micro-cloud-section />
      <first-micro-cloud-section />
      <second-micro-cloud-section />
      <first-micro-cloud-section />
      <second-micro-cloud-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstMicroCloudSection from "./micro-cloud-sections/FirstMicroCloudSection.vue";
import SecondMicroCloudSection from "./micro-cloud-sections/SecondMicroCloudSection.vue";

export default {
  components: { FirstMicroCloudSection, SecondMicroCloudSection },
  name: "microsoft-cloud",
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/volume-licensing/microsoft-cloud/oracle-fusion-erp.jpg");
  }
}
</style>
