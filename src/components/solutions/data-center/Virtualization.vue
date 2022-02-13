<template>
  <div class="virtualization-page">
    <div class="land">
      <LandingComponent>
        Virtualization <br />
        Business Renovation
      </LandingComponent>
    </div>
    <div class="container">
      <first-vir-secion />
      <second-vir-section />
      <third-vir-section />
      <fourth-vir-section />
      <fivth-vir-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FivthVirSection from "./virtual-sections/FivthVirSection.vue";
import FirstVirSecion from "./virtual-sections/FirstVirSecion.vue";
import SecondVirSection from "./virtual-sections/SecondVirSection.vue";
import ThirdVirSection from "./virtual-sections/ThirdVirSection.vue";
import FourthVirSection from "./virtual-sections/FourthVirSection.vue";

export default {
  name: "virtualization-component",
  components: {
    FivthVirSection,
    FirstVirSecion,
    SecondVirSection,
    ThirdVirSection,
    FourthVirSection,
  },
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/data-center/virtualization/virtualization.jpg");
  }
}
</style>
