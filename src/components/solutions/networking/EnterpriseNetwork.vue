<template>
  <div class="enterprise-network">
    <div class="land">
      <landing-component>
        Enterprise Network Solutions <br />
        EJAF provides an enterprise <br />
        network solution in Iraq
      </landing-component>
    </div>
    <div class="container">
      <first-enter-section />
      <second-enter-section />
      <third-enter-section />
      <fourth-enter-section />
      <fiveth-enter-section />
      <sixth-enter-section />
      <contacts-section />
      <blog-section />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import LandingComponent from "../../shared/LandingComponent.vue";
import ContactsSection from "../../shared/contacts/Contacts.vue";
import BlogSection from "../../shared/blog/Blog.vue";
import FirstEnterSection from "./enterprise-sections/FirstEnterSection.vue";
import ThirdEnterSection from "./enterprise-sections/ThirdEnterSection.vue";
import FourthEnterSection from "./enterprise-sections/FourthEnterSection.vue";
import FivethEnterSection from "./enterprise-sections/FivethEnterSection.vue";
import SecondEnterSection from "./enterprise-sections/SecondEnterSection.vue";
import SixthEnterSection from "./enterprise-sections/SixthEnterSection.vue";
export default {
  name: "enterprise-network",
  components: {
    LandingComponent,
    ContactsSection,
    BlogSection,
    FirstEnterSection,
    ThirdEnterSection,
    FourthEnterSection,
    FivethEnterSection,
    SecondEnterSection,
    SixthEnterSection,
  },
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/networking/enterprise-network/enterprise-network-solutions.jpg");
  }
}
</style>
