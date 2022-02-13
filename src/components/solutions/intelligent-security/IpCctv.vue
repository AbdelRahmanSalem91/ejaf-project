<template>
  <div class="ip-cctv">
    <div class="land">
      <LandingComponent>
        IP camera <br />
        Durable High Definition Videos Cameras
      </LandingComponent>
    </div>
    <div class="container">
      <first-ip-cctv-section />
      <second-ip-cctv-section />
      <third-ip-cctv-section />
      <fourth-ip-cctv-section />
      <fiveth-ip-cctv-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstIpCctvSection from "./ip-cctv/FirstIpCctvSection.vue";
import FivethIpCctvSection from "./ip-cctv/FivethIpCctvSection.vue";
import FourthIpCctvSection from "./ip-cctv/FourthIpCctvSection.vue";
import SecondIpCctvSection from "./ip-cctv/SecondIpCctvSection.vue";
import ThirdIpCctvSection from "./ip-cctv/ThirdIpCctvSection.vue";

export default {
  components: {
    FirstIpCctvSection,
    SecondIpCctvSection,
    ThirdIpCctvSection,
    FourthIpCctvSection,
    FivethIpCctvSection,
  },
  name: "ip-cctv",
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/intelligent-security/ip-cctv/ip-cctv.jpg");
  }
}
</style>
