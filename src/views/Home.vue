<template>
  <div class="container">
    <header-component />
    <services-section />
    <technological-section />
    <partners-section />
    <contacts-section />
    <blog-section />
  </div>
</template>

<script>
import HeaderComponent from "../components/shared/Header.vue";
import BlogSection from "../components/shared/blog/Blog.vue";
import ContactsSection from "../components/shared/contacts/Contacts.vue";
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
    BlogSection,
    HeaderComponent,
  },
};
</script>
