<template>
  <div class="virtualization-page">
    <div class="land">
      <landing-component>
        Virtualization <br />
        Business Renovation
      </landing-component>
    </div>
    <div class="container">
      <first-vir-secion />
      <second-vir-section />
      <third-vir-section />
      <fourth-vir-section />
      <fivth-vir-section />
      <contacts-section />
      <blog-section />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import LandingComponent from "../../shared/LandingComponent.vue";
import ContactsSection from "../../shared/contacts/Contacts.vue";
import BlogSection from "../../shared/blog/Blog.vue";
import FivthVirSection from "./virtual-sections/FivthVirSection.vue";
import FirstVirSecion from "./virtual-sections/FirstVirSecion.vue";
import SecondVirSection from "./virtual-sections/SecondVirSection.vue";
import ThirdVirSection from "./virtual-sections/ThirdVirSection.vue";
import FourthVirSection from "./virtual-sections/FourthVirSection.vue";

export default {
  name: "virtualization-component",
  components: {
    LandingComponent,
    ContactsSection,
    BlogSection,
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
