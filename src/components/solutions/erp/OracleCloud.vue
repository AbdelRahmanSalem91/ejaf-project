<template>
  <div class="oracle-cloud">
    <div class="land">
      <LandingComponent> Oracle Cloud Business </LandingComponent>
    </div>
    <div class="container">
      <first-oracle-cloud-section />
      <second-oracle-cloud-section />
      <first-oracle-cloud-section />
      <second-oracle-cloud-section />
      <first-oracle-cloud-section />
      <second-oracle-cloud-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstOracleCloudSection from "./oracle-cloud-sections/FirstOracleCloudSection.vue";
import SecondOracleCloudSection from "./oracle-cloud-sections/SecondOracleCloudSection.vue";

export default {
  name: "oracle-cloud",
  components: {
    FirstOracleCloudSection,
    SecondOracleCloudSection,
  },
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/erp/oracle-erp/oracle-fusion-erp.jpg");
  }
}
</style>
