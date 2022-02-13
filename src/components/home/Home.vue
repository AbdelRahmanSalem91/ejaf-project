<template>
  <div class="container">
    <header-component />
    <services-section />
    <technological-section />
    <partners-section />
    <ContactsSection />
    <BlogSection />
  </div>
</template>

<script>
import HeaderComponent from "../shared/Header.vue";
import BlogSection from "../shared/blog/Blog.vue";
import ContactsSection from "../shared/contacts/Contacts.vue";
import PartnersSection from "./partners/Partners.vue";
import ServicesSection from "./services/Services.vue";
import TechnologicalSection from "./technological/Technological.vue";

export default {
  name: "home-component",
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
