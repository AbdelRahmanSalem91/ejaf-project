<template>
  <services-section />
  <technological-section />
  <partners-section />
</template>

<script>
import PartnersSection from "../components/home/partners/Partners.vue";
import ServicesSection from "../components/home/services/Services.vue";
import TechnologicalSection from "../components/home/technological/Technological.vue";
export default {
  name: "home-page",
  components: { ServicesSection, TechnologicalSection, PartnersSection },
};
</script>
