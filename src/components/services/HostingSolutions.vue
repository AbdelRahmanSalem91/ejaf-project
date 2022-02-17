<template>
  <div class="hosting-solutions">
    <div class="land">
      <LandingComponent>
        Hosting Solutions <br />
        Invest your Application and Business
      </LandingComponent>
    </div>
    <div class="container">
      <first-hosting-section />
      <second-hosting-section />
      <third-hosting-section />
      <fourth-hosting-section />
      <fiveth-hosting-section />
      <sixth-hosting-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import FirstHostingSection from "./hosting-solutions-sections/FirstHostingSection.vue";
import FivethHostingSection from "./hosting-solutions-sections/FivethHostingSection.vue";
import FourthHostingSection from "./hosting-solutions-sections/FourthHostingSection.vue";
import SecondHostingSection from "./hosting-solutions-sections/SecondHostingSection.vue";
import SixthHostingSection from "./hosting-solutions-sections/SixthHostingSection.vue";
import ThirdHostingSection from "./hosting-solutions-sections/ThirdHostingSection.vue";
import "./services.css";
export default {
  components: {
    FirstHostingSection,
    SecondHostingSection,
    ThirdHostingSection,
    FourthHostingSection,
    FivethHostingSection,
    SixthHostingSection,
  },
  name: "hosting-solutions",
};
</script>
<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../assets/hosting-solutions/hosting-solutions2.jpg");
  }
}
</style>
