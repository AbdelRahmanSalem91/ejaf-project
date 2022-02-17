<template>
  <div class="it-services">
    <div class="land">
      <LandingComponent>
        IT Services in Iraq <br />
        Strategic Preparation to <br />
        Incorporate IT Services
      </LandingComponent>
    </div>
    <div class="container">
      <first-it-services-section />
      <second-it-services-section />
      <third-it-services-section />
      <fourth-it-services-section />
      <fiveth-it-services-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import FirstItServicesSection from "./it-services-sections/FirstItServicesSection.vue";
import FivethItServicesSection from "./it-services-sections/FivethItServicesSection.vue";
import FourthItServicesSection from "./it-services-sections/FourthItServicesSection.vue";
import SecondItServicesSection from "./it-services-sections/SecondItServicesSection.vue";
import ThirdItServicesSection from "./it-services-sections/ThirdItServicesSection.vue";
import "./services.css";
export default {
  components: {
    FirstItServicesSection,
    ThirdItServicesSection,
    SecondItServicesSection,
    FourthItServicesSection,
    FivethItServicesSection,
  },
  name: "it-services",
};
</script>
<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../assets/it-services/it-services.jpg");
  }
}
</style>
