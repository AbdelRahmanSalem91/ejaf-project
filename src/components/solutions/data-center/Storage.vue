<template>
  <div class="storage-page">
    <div class="land">
      <landing-component>
        Storage <br />
        Solutions In Iraq
      </landing-component>
    </div>
    <div class="container">
      <first-stor-section />
      <second-stor-section />
      <third-stor-section />
      <fourth-stor-section />
      <fivth-stor-section />
      <sixth-stor-section />
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
import FirstStorSection from "./storage-sections/FirstStorSection.vue";
import SecondStorSection from "./storage-sections/SecondStorSection.vue";
import ThirdStorSection from "./storage-sections/ThirdStorSection.vue";
import SixthStorSection from "./storage-sections/Sixth-Stor-Section.vue";
import FourthStorSection from "./storage-sections/FourthStorSection.vue";
import FivthStorSection from "./storage-sections/FivthStorSection.vue";

export default {
  name: "storage-component",
  components: {
    LandingComponent,
    ContactsSection,
    BlogSection,
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
