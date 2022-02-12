<template>
  <div class="data-center">
    <div class="land">
      <landing-component>
        Data Centers in Iraq <br />
        Goodbye to Conventional Data Centers
      </landing-component>
    </div>
    <div class="container">
      <first-data-section />
      <second-data-section />
      <third-data-secton />
      <fourth-data-section />
      <fivth-data-section />
      <sixth-data-section />
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
import FirstDataSection from "./data-center-sections/FirstDataSection.vue";
import SecondDataSection from "./data-center-sections/SecondDataSection.vue";
import ThirdDataSecton from "./data-center-sections/ThirdDataSecton.vue";
import FourthDataSection from "./data-center-sections/FourthDataSection.vue";
import FivthDataSection from "./data-center-sections/FivthDataSection.vue";
import SixthDataSection from "./data-center-sections/SixthDataSection.vue";

export default {
  name: "data-center",
  components: {
    LandingComponent,
    ContactsSection,
    BlogSection,
    FirstDataSection,
    SecondDataSection,
    ThirdDataSecton,
    FourthDataSection,
    FivthDataSection,
    SixthDataSection,
  },
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/data-center/data-center/data-center2.jpg");
  }
}
</style>
