<template>
  <div class="disaster-recovery">
    <div class="land">
      <landing-component>
        Disaster Recovery Solutions <br />
        Data Backup and Disaster Recovery Solutions
      </landing-component>
    </div>
    <div class="container">
      <first-dis-section />
      <second-dis-section />
      <third-dis-section />
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
import FirstDisSection from "./disaster-rec-sections/FirstDisSection.vue";
import SecondDisSection from "./disaster-rec-sections/SecondDisSection.vue";
import ThirdDisSection from "./disaster-rec-sections/ThirdDisSection.vue";

export default {
  name: "disaster-recovery",
  components: {
    LandingComponent,
    ContactsSection,
    BlogSection,
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
