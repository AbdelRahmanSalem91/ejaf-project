<template>
  <div class="valimail-defend">
    <div class="land">
      <landing-component>
        Valimail Defend <br />
        Email Defender Soulation
      </landing-component>
    </div>
    <div class="container">
      <first-section />
      <second-section />
      <third-section />
      <fourth-section />
      <fivth-section />
      <six-section />
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
import FirstSection from "./sections/FirstSection.vue";
import SecondSection from "./sections/SecondSection.vue";
import ThirdSection from "./sections/ThirdSection.vue";
import FourthSection from "./sections/FourthSection.vue";
import FivthSection from "./sections/FivthSection.vue";
import SixSection from "./sections/SixSection.vue";

export default {
  name: "valimail-defend",
  components: {
    LandingComponent,
    ContactsSection,
    BlogSection,
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FivthSection,
    SixSection,
  },
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/cyber-security/valimail-defend/valimail-defend.jpg");
  }
}
</style>
