<template>
  <header-component></header-component>
  <home />
  <footer-component />
</template>

<script>
import FooterComponent from "./components/shared/Footer.vue";
import HeaderComponent from "./components/shared/Header.vue";
import Home from "./views/Home.vue";

export default {
  components: {
    HeaderComponent,
    Home,
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
