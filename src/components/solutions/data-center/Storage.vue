<template>
  <div class="storage-page">
    <div class="land">
      <LandingComponent>
        Storage <br />
        Solutions In Iraq
      </LandingComponent>
    </div>
    <div class="container">
      <first-stor-section />
      <second-stor-section />
      <third-stor-section />
      <fourth-stor-section />
      <fivth-stor-section />
      <sixth-stor-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstStorSection from "./storage-sections/FirstStorSection.vue";
import SecondStorSection from "./storage-sections/SecondStorSection.vue";
import ThirdStorSection from "./storage-sections/ThirdStorSection.vue";
import SixthStorSection from "./storage-sections/Sixth-Stor-Section.vue";
import FourthStorSection from "./storage-sections/FourthStorSection.vue";
import FivthStorSection from "./storage-sections/FivthStorSection.vue";

export default {
  name: "storage-component",
  components: {
    FirstStorSection,
    SecondStorSection,
    ThirdStorSection,
    SixthStorSection,
    FourthStorSection,
    FivthStorSection,
  },
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/data-center/storage/storage.jpg");
  }
}
</style>
