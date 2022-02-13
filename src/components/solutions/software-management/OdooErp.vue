<template>
  <div class="odoo-erp">
    <div class="land">
      <LandingComponent>
        ODOO <br />
        Enterprise Resource Planning (ERP)
      </LandingComponent>
    </div>
    <div class="container">
      <first-odoo-section />
      <second-odoo-section />
      <third-odoo-section />
      <fourth-odoo-section />
      <fiveth-odoo-section />
      <sixth-odoo-section />
      <seventh-odoo-section />
      <eightth-odoo-section />
      <nineth-odoo-section />
      <tenth-odoo-section />
      <eleventh-odoo-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import EightthOdooSection from "./odoo-erp-sections/EightthOdooSection.vue";
import EleventhOdooSection from "./odoo-erp-sections/EleventhOdooSection.vue";
import FirstOdooSection from "./odoo-erp-sections/FirstOdooSection.vue";
import FivethOdooSection from "./odoo-erp-sections/FivethOdooSection.vue";
import FourthOdooSection from "./odoo-erp-sections/FourthOdooSection.vue";
import NinethOdooSection from "./odoo-erp-sections/NinethOdooSection.vue";
import SecondOdooSection from "./odoo-erp-sections/SecondOdooSection.vue";
import SeventhOdooSection from "./odoo-erp-sections/SeventhOdooSection.vue";
import SixthOdooSection from "./odoo-erp-sections/SixthOdooSection.vue";
import TenthOdooSection from "./odoo-erp-sections/TenthOdooSection.vue";
import ThirdOdooSection from "./odoo-erp-sections/ThirdOdooSection.vue";

export default {
  components: {
    FirstOdooSection,
    SecondOdooSection,
    ThirdOdooSection,
    FourthOdooSection,
    FivethOdooSection,
    SixthOdooSection,
    SeventhOdooSection,
    EightthOdooSection,
    NinethOdooSection,
    TenthOdooSection,
    EleventhOdooSection,
  },
  name: "odoo-erp",
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/software-management/odoo-erp/odoo.jpg");
  }
}
</style>
