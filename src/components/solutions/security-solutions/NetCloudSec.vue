<template>
  <div class="network-cloud-security">
    <div class="land">
      <LandingComponent> Network Cloud Security </LandingComponent>
    </div>
    <div class="container">
      <first-net-cloud-sec-section />
      <second-net-cloud-sec-section />
      <first-net-cloud-sec-section />
      <second-net-cloud-sec-section />
      <first-net-cloud-sec-section />
      <second-net-cloud-sec-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstNetCloudSecSection from "./net-cloud-sec-sections/FirstNetCloudSecSection.vue";
import SecondNetCloudSecSection from "./net-cloud-sec-sections/SecondNetCloudSecSection.vue";

export default {
  components: { FirstNetCloudSecSection, SecondNetCloudSecSection },
  name: "network-cloud-security",
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/security-solutions/network-cloud-security/oracle-fusion-erp.jpg");
  }
}
</style>
