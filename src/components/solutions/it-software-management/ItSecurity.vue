<template>
  <div class="it-security-page">
    <div class="land">
      <landing-component>
        IT Security Management <br />
        Ensure the Confidentiality, Integrity, <br />
        & Availability of an Organization's Information.
      </landing-component>
    </div>
    <div class="container">
      <first-it-sec-section />
      <second-it-sec-section />
      <third-it-sec-section />
      <fourth-it-sec-section />
      <fivth-it-sec-section />
      <sixth-it-sec-section />
      <seventh-it-sec-section />
      <eightth-it-sec-section />
      <nineth-it-sec-section />
      <tenth-it-sec-section />
      <eleventh-it-sec-section />
      <twelve-it-sec-section />
      <thirteen-it-sec-section />
      <fourteen-it-sec-section />
      <fivteen-it-sec-section />
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
import FirstItSecSection from "./it-security-sections/FirstItSecSection.vue";
import ThirdItSecSection from "./it-security-sections/ThirdItSecSection.vue";
import FourthItSecSection from "./it-security-sections/FourthItSecSection.vue";
import FivthItSecSection from "./it-security-sections/FivthItSecSection.vue";
import SixthItSecSection from "./it-security-sections/SixthItSecSection.vue";
import SeventhItSecSection from "./it-security-sections/SeventhItSecSection.vue";
import NinethItSecSection from "./it-security-sections/NinethItSecSection.vue";
import TenthItSecSection from "./it-security-sections/TenthItSecSection.vue";
import TwelveItSecSection from "./it-security-sections/TwelveItSecSection.vue";
import ThirteenItSecSection from "./it-security-sections/ThirteenItSecSection.vue";
import FourteenItSecSection from "./it-security-sections/FourteenItSecSection.vue";
import FivteenItSecSection from "./it-security-sections/FivteenItSecSection.vue";
import SecondItSecSection from "./it-security-sections/SecondItSecSection.vue";
import EightthItSecSection from "./it-security-sections/EightthItSecSection.vue";
import EleventhItSecSection from "./it-security-sections/EleventhItSecSection.vue";

export default {
  name: "it-security",
  components: {
    LandingComponent,
    ContactsSection,
    BlogSection,
    FirstItSecSection,
    ThirdItSecSection,
    FourthItSecSection,
    FivthItSecSection,
    SixthItSecSection,
    SeventhItSecSection,
    NinethItSecSection,
    TenthItSecSection,
    TwelveItSecSection,
    ThirteenItSecSection,
    FourteenItSecSection,
    FivteenItSecSection,
    SecondItSecSection,
    EightthItSecSection,
    EleventhItSecSection,
  },
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/it-software-management/it-security/it-security-management1.jpg");
  }
}
</style>
