<template>
  <div class="private-public-cloud">
    <div class="land">
      <LandingComponent> Private Public Cloud </LandingComponent>
    </div>
    <div class="container">
      <first-priv-publ-cloud-section />
      <second-priv-publ-cloud-section />
      <first-priv-publ-cloud-section />
      <second-priv-publ-cloud-section />
      <first-priv-publ-cloud-section />
      <second-priv-publ-cloud-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstPrivPublCloudSection from "./priv-publ-cloud-sections/FirstPrivPublCloudSection.vue";
import SecondPrivPublCloudSection from "./priv-publ-cloud-sections/SecondPrivPublCloudSection.vue";

export default {
  components: { FirstPrivPublCloudSection, SecondPrivPublCloudSection },
  name: "private-public-cloud",
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/cloud-solutions/priv-publ-cloud/oracle-fusion-erp.jpg");
  }
}
</style>
