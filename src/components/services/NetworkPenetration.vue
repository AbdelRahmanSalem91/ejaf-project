<template>
  <div class="network-penetration">
    <div class="land">
      <LandingComponent> Network Penetration Testing </LandingComponent>
    </div>
    <div class="container">
      <first-net-penet-section />
      <second-net-penet-section />
      <third-net-penet-section />
      <fourth-net-penet-section />
      <fiveth-net-penet-section />
      <sixth-net-penet-section />
      <seventh-net-penet-section />
      <eightth-net-penet-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import EightthNetPenetSection from "./net-penet-sections/EightthNetPenetSection.vue";
import FirstNetPenetSection from "./net-penet-sections/FirstNetPenetSection.vue";
import FivethNetPenetSection from "./net-penet-sections/FivethNetPenetSection.vue";
import FourthNetPenetSection from "./net-penet-sections/FourthNetPenetSection.vue";
import SecondNetPenetSection from "./net-penet-sections/SecondNetPenetSection.vue";
import SeventhNetPenetSection from "./net-penet-sections/SeventhNetPenetSection.vue";
import SixthNetPenetSection from "./net-penet-sections/SixthNetPenetSection.vue";
import ThirdNetPenetSection from "./net-penet-sections/ThirdNetPenetSection.vue";
import "./services.css";
export default {
  components: {
    FirstNetPenetSection,
    SecondNetPenetSection,
    ThirdNetPenetSection,
    FourthNetPenetSection,
    FivethNetPenetSection,
    SixthNetPenetSection,
    SeventhNetPenetSection,
    EightthNetPenetSection,
  },
  name: "network-penetration",
};
</script>
<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../assets/network-penetration/enterprise-network-solutions.jpg");
  }
}
</style>
