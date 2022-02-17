<template>
  <div class="microsoft-products">
    <div class="land">
      <LandingComponent> Microsoft Products </LandingComponent>
    </div>
    <div class="container">
      <first-micro-prod-section />
      <second-micro-prod-section />
      <first-micro-prod-section />
      <second-micro-prod-section />
      <first-micro-prod-section />
      <second-micro-prod-section />
      <ContactsSection />
      <BlogSection />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import FirstMicroProdSection from "./micro-prod-sections/FirstMicroProdSection.vue";
import SecondMicroProdSection from "./micro-prod-sections/SecondMicroProdSection.vue";

export default {
  components: { FirstMicroProdSection, SecondMicroProdSection },
  name: "microsoft-products",
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/volume-licensing/microsoft-products/oracle-fusion-erp.jpg");
  }
}
</style>
