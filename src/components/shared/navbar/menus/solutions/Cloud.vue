<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle text-uppercase text-center position-relative"
      href="#"
      id="networkingMenuLinks"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      >cloud solutions</a
    >
    <ul
      class="dropdown-menu drop-menu text-uppercase nested-menu-lvl2"
      aria-labelledby="networkingMenuLinks"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <li class="nav-item dropdown">
        <router-link to="/" class="">private, public cloud</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="">managed services</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="">cloud applications</router-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "cloud-solutions",
};
</script>
