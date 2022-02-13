<template>
  <div class="wan-page">
    <div class="land">
      <LandingComponent>
        Wan Optimization <br />
        Improve the Dexterity of your Business
      </LandingComponent>
    </div>
    <div class="container">
      <first-wan-section />
      <second-wan-section />
      <third-wan-section />
      <fourth-wan-section />
      <fiveth-wan-section />
      <sixth-wan-section />
      <seventh-wan-section />
      <eightth-wan-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstWanSection from "./wan-sections/FirstWanSection.vue";
import SecondWanSection from "./wan-sections/SecondWanSection.vue";
import ThirdWanSection from "./wan-sections/ThirdWanSection.vue";
import FourthWanSection from "./wan-sections/FourthWanSection.vue";
import SixthWanSection from "./wan-sections/SixthWanSection.vue";
import EightthWanSection from "./wan-sections/EightthWanSection.vue";
import FivethWanSection from "./wan-sections/FivethWanSection.vue";
import SeventhWanSection from "./wan-sections/SeventhWanSection.vue";
export default {
  components: {
    FirstWanSection,
    SecondWanSection,
    ThirdWanSection,
    FourthWanSection,
    SixthWanSection,
    EightthWanSection,
    FivethWanSection,
    SeventhWanSection,
  },
  name: "wan-page",
};
</script>
<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/networking/wan/wan-bg.jpg");
  }
}
</style>
