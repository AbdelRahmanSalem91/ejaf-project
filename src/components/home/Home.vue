<template>
  <div class="video-container position-relative top-0 start-0 w-100">
    <video class="position-absolute w-100" autoplay loop muted>
      <source src="../../assets/home/landing/landing.mp4" type="video/mp4" />
    </video>
  </div>
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

<style scoped>
video {
  object-fit: cover;
  z-index: -1;
  top: -90px;
  left: 50px;
  height: 100vh;
}
</style>
