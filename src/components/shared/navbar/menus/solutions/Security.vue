<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle text-uppercase text-center position-relative"
      href="#"
      id="securitySolutionMenuLinks"
      role="button"
      aria-expanded="false"
      >security solutions</a
    >
    <ul
      class="dropdown-menu drop-menu text-uppercase nested-menu-lvl2"
      aria-labelledby="securitySolutionMenuLinks"
    >
      <li class="nav-item dropdown">
        <router-link to="/network-cloud-security" class="nav-link"
          >network cloud security</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/endpoint-security" class="nav-link"
          >endpoint security</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/application-security" class="nav-link"
          >application security</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/data-security" class="nav-link"
          >data security</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/industrial-security" class="nav-link"
          >industrial security</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/security-operations" class="nav-link"
          >security operations</router-link
        >
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "security-solutions",
};
</script>
