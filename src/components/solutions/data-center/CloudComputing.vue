<template>
  <div class="cloud-computing-page">
    <div class="land">
      <LandingComponent>
        Cloud computing <br />
        on-demand availability of <br />
        computer system resources
      </LandingComponent>
    </div>
    <div class="container">
      <first-section />
      <second-section />
      <third-section />
      <fourth-section />
      <fivth-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstSection from "./cloud-comp-sections/FirstCompSection.vue";
import SecondSection from "./cloud-comp-sections/SecondCompSection.vue";
import ThirdSection from "./cloud-comp-sections/ThirdCompSection.vue";
import FourthSection from "./cloud-comp-sections/FourthCompSection.vue";
import FivthSection from "./cloud-comp-sections/FivthCompSection.vue";

export default {
  name: "cloud-computing-component",
  components: {
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
