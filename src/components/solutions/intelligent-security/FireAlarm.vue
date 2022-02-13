<template>
  <div class="fire-alarm">
    <div class="land">
      <LandingComponent> Fire Alarm Solution </LandingComponent>
    </div>
    <div class="container">
      <first-fire-alarm-section />
      <second-fire-alarm-section />
      <third-fire-alarm-section />
      <fourth-fire-alarm-section />
      <fivth-fire-alarm-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstFireAlarmSection from "./fire-alarm-sections/FirstFireAlarmSection.vue";
import FivthFireAlarmSection from "./fire-alarm-sections/FivthFireAlarmSection.vue";
import FourthFireAlarmSection from "./fire-alarm-sections/FourthFireAlarmSection.vue";
import SecondFireAlarmSection from "./fire-alarm-sections/SecondFireAlarmSection.vue";
import ThirdFireAlarmSection from "./fire-alarm-sections/ThirdFireAlarmSection.vue";

export default {
  components: {
    FirstFireAlarmSection,
    SecondFireAlarmSection,
    ThirdFireAlarmSection,
    FourthFireAlarmSection,
    FivthFireAlarmSection,
  },
  name: "fire-alarm",
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/intelligent-security/fire-alarm/fire-alarm-solution.jpg");
  }
}
</style>
