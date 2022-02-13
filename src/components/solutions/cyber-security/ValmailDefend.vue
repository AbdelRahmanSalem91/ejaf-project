<template>
  <div class="valimail-defend">
    <div class="land">
      <LandingComponent>
        Valimail Defend <br />
        Email Defender Soulation
      </LandingComponent>
    </div>
    <div class="container">
      <first-section />
      <second-section />
      <third-section />
      <fourth-section />
      <fivth-section />
      <six-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstSection from "./valimail-sections/FirstSection.vue";
import SecondSection from "./valimail-sections/SecondSection.vue";
import ThirdSection from "./valimail-sections/ThirdSection.vue";
import FourthSection from "./valimail-sections/FourthSection.vue";
import FivthSection from "./valimail-sections/FivthSection.vue";
import SixSection from "./valimail-sections/SixSection.vue";

export default {
  name: "valimail-defend",
  components: {
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FivthSection,
    SixSection,
  },
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/cyber-security/valimail-defend/valimail-defend.jpg");
  }
}
</style>
