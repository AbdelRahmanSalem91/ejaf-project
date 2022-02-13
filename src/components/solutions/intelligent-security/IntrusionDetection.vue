<template>
  <div class="intrusion-detection">
    <div class="land">
      <LandingComponent>
        Intrusion Detection System <br />
        Guard your Premises Entirely
      </LandingComponent>
    </div>
    <div class="container">
      <first-intru-section />
      <second-intru-section />
      <third-intru-section />
      <fourth-intru-section />
      <fiveth-intru-section />
      <sixth-intru-section />
      <seventh-intru-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstIntruSection from "./intrusion-detection/FirstIntruSection.vue";
import FivethIntruSection from "./intrusion-detection/FivethIntruSection.vue";
import FourthIntruSection from "./intrusion-detection/FourthIntruSection.vue";
import SecondIntruSection from "./intrusion-detection/SecondIntruSection.vue";
import SeventhIntruSection from "./intrusion-detection/SeventhIntruSection.vue";
import SixthIntruSection from "./intrusion-detection/SixthIntruSection.vue";
import ThirdIntruSection from "./intrusion-detection/ThirdIntruSection.vue";

export default {
  components: {
    FirstIntruSection,
    SecondIntruSection,
    ThirdIntruSection,
    FourthIntruSection,
    FivethIntruSection,
    SixthIntruSection,
    SeventhIntruSection,
  },
  name: "intrusion-detection",
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/intelligent-security/intrusion-detection/intrusion-detection.jpg");
  }
}
</style>
