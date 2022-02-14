<template>
  <navbar-component />
  <router-view />
  <footer-component />
</template>

<script>
import NavbarComponent from "./components/shared/navbar/Navbar.vue";
import FooterComponent from "./components/shared/Footer.vue";

export default {
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>

<style>
.clients h2 {
  color: var(--yellow-color);
}
.projects h2 {
  color: var(--orange-color);
}
.partners h2 {
  color: var(--blue-color);
}
.countries h2 {
  color: var(--orange-color);
}
</style>
