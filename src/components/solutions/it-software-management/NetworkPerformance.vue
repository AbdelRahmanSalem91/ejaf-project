<template>
  <div class="network-performance">
    <div class="land">
      <landing-component>
        Network and performance management
      </landing-component>
    </div>
    <div class="container">
      <first-net-per-section />
      <second-net-per-section />
      <third-net-per-section />
      <fourth-net-per-section />
      <fiveth-net-per-section />
      <sixth-net-per-section />
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
import FirstNetPerSection from "./network-performance/FirstNetPerSection.vue";
import ThirdNetPerSection from "./network-performance/ThirdNetPerSection.vue";
import FivethNetPerSection from "./network-performance/FivethNetPerSection.vue";
import SixthNetPerSection from "./network-performance/SixthNetPerSection.vue";
import SecondNetPerSection from "./network-performance/SecondNetPerSection.vue";
import FourthNetPerSection from "./network-performance/FourthNetPerSection.vue";

export default {
  name: "network-performance",
  components: {
    LandingComponent,
    ContactsSection,
    BlogSection,
    FirstNetPerSection,
    ThirdNetPerSection,
    FivethNetPerSection,
    SixthNetPerSection,
    SecondNetPerSection,
    FourthNetPerSection,
  },
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/it-software-management/network-performance/network-and-server-performance-management.jpg");
  }
}
</style>
