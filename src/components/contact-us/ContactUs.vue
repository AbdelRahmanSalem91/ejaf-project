<template>
  <div class="container">
    <contacts-component />
    <div class="map text-center my-5">
      <img src="../../assets/contact-us/map.jpg" alt="Ejaf Map" />
    </div>
    <blog-component />
  </div>
</template>

<script>
import BlogComponent from "../shared/blog/Blog.vue";
import ContactsComponent from "../shared/contacts/Contacts.vue";
export default {
  components: { ContactsComponent, BlogComponent },
};
</script>

<style></style>
