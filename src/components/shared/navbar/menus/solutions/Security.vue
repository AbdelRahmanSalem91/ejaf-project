<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle text-uppercase text-center position-relative"
      href="#"
      id="securitySolutionMenuLinks"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      >security solutions</a
    >
    <ul
      class="dropdown-menu drop-menu text-uppercase nested-menu-lvl2"
      aria-labelledby="securitySolutionMenuLinks"
    >
      <li class="nav-item dropdown">
        <router-link to="/" class="">network cloud security</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="">endpoint security</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="">application security</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="">data security</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="">industrial security</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="">security operations</router-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "security-solutions",
};
</script>
