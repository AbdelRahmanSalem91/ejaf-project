<template>
  <div class="backup-and-replication-page">
    <div class="land">
      <LandingComponent>
        Data Centers in Iraq <br />
        Goodbye to Conventional Data Centers <br />
      </LandingComponent>
    </div>
    <div class="container">
      <first-rep-section />
      <second-comp-section />
      <third-rep-section />
      <fourth-rep-section />
      <fivth-rep-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstRepSection from "./backup-rep-sections/FirstRepSection.vue";
import SecondCompSection from "./cloud-comp-sections/SecondCompSection.vue";
import ThirdRepSection from "./backup-rep-sections/ThirdRepSection.vue";
import FivthRepSection from "./backup-rep-sections/FivthRepSection.vue";
import FourthRepSection from "./backup-rep-sections/FourthRepSection.vue";

export default {
  name: "backup-and-replication",
  components: {
    FirstRepSection,
    SecondCompSection,
    ThirdRepSection,
    FivthRepSection,
    FourthRepSection,
  },
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/data-center/backup-and-replication/backup.jpg");
  }
}
</style>
