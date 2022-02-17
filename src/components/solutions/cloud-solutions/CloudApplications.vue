<template>
  <div class="cloud-applications">
    <div class="land">
      <LandingComponent> Cloud Applications </LandingComponent>
    </div>
    <div class="container">
      <first-cloud-apps-section />
      <second-cloud-apps-section />
      <first-cloud-apps-section />
      <second-cloud-apps-section />
      <first-cloud-apps-section />
      <second-cloud-apps-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstCloudAppsSection from "./cloud-applications-sections/FirstCloudAppsSection.vue";
import SecondCloudAppsSection from "./cloud-applications-sections/SecondCloudAppsSection.vue";

export default {
  name: "cloud-applications",
  components: { FirstCloudAppsSection, SecondCloudAppsSection },
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/cloud-solutions/cloud-applications/oracle-fusion-erp.jpg");
  }
}
</style>
