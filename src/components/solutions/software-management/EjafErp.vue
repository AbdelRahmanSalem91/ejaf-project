<template>
  <div class="ejaf-erp">
    <div class="land">
      <LandingComponent>
        Enterprise resource planning (ERP) <br />
        Integrated Management of <br />
        Main Business Processes
      </LandingComponent>
    </div>
    <div class="container">
      <first-ejaf-erp-section />
      <second-ejaf-erp-section />
      <third-ejaf-erp-section />
      <fourth-ejaf-erp-section />
      <fiveth-ejaf-erp-section />
      <sixth-ejaf-erp-section />
      <seventh-ejaf-erp-section />
      <eightth-ejaf-erp-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import EightthEjafErpSection from "./ejaf-erp-sections/EightthEjafErpSection.vue";
import FirstEjafErpSection from "./ejaf-erp-sections/FirstEjafErpSection.vue";
import FivethEjafErpSection from "./ejaf-erp-sections/FivethEjafErpSection.vue";
import FourthEjafErpSection from "./ejaf-erp-sections/FourthEjafErpSection.vue";
import SecondEjafErpSection from "./ejaf-erp-sections/SecondEjafErpSection.vue";
import SeventhEjafErpSection from "./ejaf-erp-sections/SeventhEjafErpSection.vue";
import SixthEjafErpSection from "./ejaf-erp-sections/SixthEjafErpSection.vue";
import ThirdEjafErpSection from "./ejaf-erp-sections/ThirdEjafErpSection.vue";

export default {
  components: {
    FirstEjafErpSection,
    SecondEjafErpSection,
    ThirdEjafErpSection,
    FourthEjafErpSection,
    FivethEjafErpSection,
    SixthEjafErpSection,
    SeventhEjafErpSection,
    EightthEjafErpSection,
  },
  name: "ejaf-erp",
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/software-management/ejaf-erp/erp.jpg");
  }
}
</style>
