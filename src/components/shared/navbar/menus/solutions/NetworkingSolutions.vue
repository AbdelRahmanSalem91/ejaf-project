<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle text-uppercase text-center position-relative"
      href="#"
      id="networkingMenuLinks"
      role="button"
      aria-expanded="false"
      >networking solutions</a
    >
    <ul
      class="dropdown-menu drop-menu text-uppercase nested-menu-lvl2"
      aria-labelledby="networkingMenuLinks"
    >
      <li class="nav-item dropdown">
        <router-link class="nav-link" to="/wan-optimization"
          >wan optimization</router-link
        >
      </li>
      <li>
        <router-link class="nav-link" to="/enterprise-network"
          >enterprise network solutions</router-link
        >
      </li>
      <li>
        <router-link class="nav-link" to="/collaboration-solutions"
          >collaboration solutions</router-link
        >
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "networking-solutions",
};
</script>
