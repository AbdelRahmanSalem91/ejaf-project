<template>
  <div class="oracle-erp-business">
    <div class="land">
      <LandingComponent> Oracle ERP Business </LandingComponent>
    </div>
    <div class="container">
      <first-oracle-erp-section />
      <second-oracle-erp-section />
      <first-oracle-erp-section />
      <second-oracle-erp-section />
      <first-oracle-erp-section />
      <second-oracle-erp-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstOracleErpSection from "./oracle-erp-sections/FirstOracleErpSection.vue";
import SecondOracleErpSection from "./oracle-erp-sections/SecondOracleErpSection.vue";

export default {
  name: "oracle-erp-business",
  components: {
    FirstOracleErpSection,
    SecondOracleErpSection,
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
