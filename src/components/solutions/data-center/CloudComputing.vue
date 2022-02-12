<template>
  <div class="cloud-computing-page">
    <div class="land">
      <landing-component>
        Cloud computing <br />
        on-demand availability of <br />
        computer system resources
      </landing-component>
    </div>
    <div class="container">
      <first-section />
      <second-section />
      <third-section />
      <fourth-section />
      <fivth-section />
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
import FirstSection from "./cloud-comp-sections/FirstCompSection.vue";
import SecondSection from "./cloud-comp-sections/SecondCompSection.vue";
import ThirdSection from "./cloud-comp-sections/ThirdCompSection.vue";
import FourthSection from "./cloud-comp-sections/FourthCompSection.vue";
import FivthSection from "./cloud-comp-sections/FivthCompSection.vue";

export default {
  name: "cloud-computing-component",
  components: {
    LandingComponent,
    ContactsSection,
    BlogSection,
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FivthSection,
  },
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/data-center/cloud-computing/cloud.jpg");
  }
}
</style>
