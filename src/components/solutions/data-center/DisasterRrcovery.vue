<template>
  <div class="disaster-recovery">
    <div class="land">
      <LandingComponent>
        Disaster Recovery Solutions <br />
        Data Backup and Disaster Recovery Solutions
      </LandingComponent>
    </div>
    <div class="container">
      <first-dis-section />
      <second-dis-section />
      <third-dis-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstDisSection from "./disaster-rec-sections/FirstDisSection.vue";
import SecondDisSection from "./disaster-rec-sections/SecondDisSection.vue";
import ThirdDisSection from "./disaster-rec-sections/ThirdDisSection.vue";

export default {
  name: "disaster-recovery",
  components: {
    FirstDisSection,
    SecondDisSection,
    ThirdDisSection,
  },
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/data-center/disaster-recovery/disaster-recovery.jpg");
  }
}
</style>
