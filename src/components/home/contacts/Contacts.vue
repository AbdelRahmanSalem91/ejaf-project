<template>
  <section class="contacts">
    <div class="container d-flex">
      <contact-form />
      <contact-details />
    </div>
  </section>
</template>

<script>
import ContactDetails from "./ContactDetails.vue";
import ContactForm from "./ContactForm.vue";
export default {
  components: { ContactDetails, ContactForm },
  name: "contacts-section",
};
</script>

<style></style>
