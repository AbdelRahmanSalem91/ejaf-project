<template>
  <services-section />
  <technological-section />
  <partners-section />
  <contacts-section />
</template>

<script>
import ContactsSection from "../components/home/contacts/Contacts.vue";
import PartnersSection from "../components/home/partners/Partners.vue";
import ServicesSection from "../components/home/services/Services.vue";
import TechnologicalSection from "../components/home/technological/Technological.vue";
export default {
  name: "home-page",
  components: {
    ServicesSection,
    TechnologicalSection,
    PartnersSection,
    ContactsSection,
  },
};
</script>
