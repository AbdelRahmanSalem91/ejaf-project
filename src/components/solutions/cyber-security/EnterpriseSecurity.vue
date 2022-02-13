<template>
  <div class="enterprise-security">
    <div class="land">
      <LandingComponent>
        Enterprise Security Solutions <br />
        Advanced Network Security <br />
        Solutions for Enterprises
      </LandingComponent>
    </div>
    <div class="container">
      <first-enter-sec-section />
      <second-enter-sec-section />
      <third-enter-sec-section />
      <fourth-enter-sec-section />
      <fivth-enter-sec-section />
      <sixth-enter-sec-security />
      <seventh-enter-sec-section />
      <eightth-enter-sec-section />
      <nineth-enter-sec-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstEnterSecSection from "./enterprise-security/FirstEnterSecSection.vue";
import SecondEnterSecSection from "./enterprise-security/SecondEnterSecSection.vue";
import ThirdEnterSecSection from "./enterprise-security/ThirdEnterSecSection.vue";
import FourthEnterSecSection from "./enterprise-security/FourthEnterSec-Section.vue";
import FivthEnterSecSection from "./enterprise-security/FivthEnterSecSection.vue";
import SixthEnterSecSecurity from "./enterprise-security/SixthEnterSecSecurity.vue";
import SeventhEnterSecSection from "./enterprise-security/SeventhEnterSecSection.vue";
import EightthEnterSecSection from "./enterprise-security/EightthEnterSecSection.vue";
import NinethEnterSecSection from "./enterprise-security/NinethEnterSecSection.vue";

export default {
  name: "enterprise-security",
  components: {
    FirstEnterSecSection,
    SecondEnterSecSection,
    ThirdEnterSecSection,
    FourthEnterSecSection,
    FivthEnterSecSection,
    SixthEnterSecSecurity,
    SeventhEnterSecSection,
    EightthEnterSecSection,
    NinethEnterSecSection,
  },
};
</script>
