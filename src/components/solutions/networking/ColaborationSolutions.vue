<template>
  <div class="enterprise-network">
    <div class="land">
      <LandingComponent>
        Collaboration Solutions <br />
        Modifying the Ways of Doing Work
      </LandingComponent>
    </div>
    <div class="container">
      <first-collab-section />
      <second-collab-section />
      <third-collab-section />
      <fourth-collab-section />
      <fiveth-collab-section />
      <sixth-collab-section />
      <seventh-collab-section />
      <eightth-collab-section />
      <nineth-collab-section />
      <tenth-collab-section />
      <eleventh-collab-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstCollabSection from "./collab-sections/FirstCollabSection.vue";
import ThirdCollabSection from "./collab-sections/ThirdCollabSection.vue";
import FivethCollabSection from "./collab-sections/FivethCollabSection.vue";
import SixthCollabSection from "./collab-sections/SixthCollabSection.vue";
import EightthCollabSection from "./collab-sections/EightthCollabSection.vue";
import NinethCollabSection from "./collab-sections/NinethCollabSection.vue";
import TenthCollabSection from "./collab-sections/TenthCollabSection.vue";
import EleventhCollabSection from "./collab-sections/EleventhCollabSection.vue";
import SecondCollabSection from "./collab-sections/SecondCollabSection.vue";
import FourthCollabSection from "./collab-sections/FourthCollabSection.vue";
import SeventhCollabSection from "./collab-sections/SeventhCollabSection.vue";

export default {
  name: "collaboration-solutions",
  components: {
    FirstCollabSection,
    ThirdCollabSection,
    FivethCollabSection,
    SixthCollabSection,
    EightthCollabSection,
    NinethCollabSection,
    TenthCollabSection,
    EleventhCollabSection,
    SecondCollabSection,
    FourthCollabSection,
    SeventhCollabSection,
  },
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/networking/collaboration-solutions/collaboration-solutions.jpg");
  }
}
</style>
