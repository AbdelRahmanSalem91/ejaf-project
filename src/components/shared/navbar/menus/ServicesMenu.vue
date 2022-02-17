<template>
  <ul
    class="dropdown-menu drop-menu text-uppercase"
    aria-labelledby="navbarDropdownMenuLink"
  >
    <li>
      <router-link class="nav-link" to="/it-services">it services</router-link>
    </li>
    <li>
      <router-link class="nav-link" to="/network-penetration-testing"
        >network penetration testing</router-link
      >
    </li>
    <li>
      <router-link class="nav-link" to="/hosting-solutions"
        >hosting solutions</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "services-menu",
};
</script>
