<template>
  <section class="contacts mt-5 py-5">
    <div class="row pt-5">
      <contact-form class="col-lg-6 mb-5" />
      <contact-details class="col-lg-6" />
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
