<template>
  <heading-component title="Who we are?" class="text-center" />
  <p class="h4">
    EJAF technology is one of the most trusted security and automation solutions
    companies in Iraq, spreading is 3 domestic locations (Erbil, Baghdad and
    Basrah) which helps in spreading our services all across Iraq. Aimed at
    providing the perfect combination between quality and efficiency, with 2
    goals in mind:
  </p>
  <ol class="my-4 h4 mx-3">
    <li>Future proof solutions that will last for years to come.</li>
    <li>
      Improving the standards of security and automation in our daily lives.
    </li>
  </ol>
  <p class="h4">
    From simple to mega projects, the key is in planning and taking efficient
    actions. Combining more than 8 years of experiences to deliver not just a
    standard product, but a solution customized to fit all your needs.
  </p>
  <p class="h4 my-4">
    With an impressive portfolio of projects and strategic partners that will
    stand tall as a proof of how EJAF changed the landscape of security and
    automation in Iraq.
  </p>
  <ContactsSection />
  <BlogSection />
</template>

<script>
import BlogSection from "../shared/blog/Blog.vue";
import ContactsSection from "../shared/contacts/Contacts.vue";
import HeadingComponent from "../shared/Heading.vue";
export default {
  components: {
    ContactsSection,
    BlogSection,
    HeadingComponent,
  },
};
</script>

<style></style>
