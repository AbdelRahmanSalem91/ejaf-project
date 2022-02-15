<template>
  <div class="oracle-fusion-erp">
    <div class="land">
      <LandingComponent>
        Oracle Fusion ERP <br />
        Enterprise Resource Planning (ERP)
      </LandingComponent>
    </div>
    <div class="container">
      <first-oracle-section />
      <second-oracle-section />
      <third-oracle-section />
      <fourth-oracle-section />
      <fiveth-oracle-section />
      <sixth-oracle-section />
      <seventh-oracle-section />
      <eightth-oracle-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import EightthOracleSection from "./oracle-fusion-sections/EightthOracleSection.vue";
import FirstOracleSection from "./oracle-fusion-sections/FirstOracleSection.vue";
import FivethOracleSection from "./oracle-fusion-sections/FivethOracleSection.vue";
import FourthOracleSection from "./oracle-fusion-sections/FourthOracleSection.vue";
import SecondOracleSection from "./oracle-fusion-sections/SecondOracleSection.vue";
import SeventhOracleSection from "./oracle-fusion-sections/SeventhOracleSection.vue";
import SixthOracleSection from "./oracle-fusion-sections/SixthOracleSection.vue";
import ThirdOracleSection from "./oracle-fusion-sections/ThirdOracleSection.vue";

export default {
  components: {
    FirstOracleSection,
    SecondOracleSection,
    ThirdOracleSection,
    FourthOracleSection,
    FivethOracleSection,
    SixthOracleSection,
    SeventhOracleSection,
    EightthOracleSection,
  },
  name: "oracle-fusion-erp",
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/software-management/oracle-fusion/oracle-fusion-erp.jpg");
  }
}
</style>
