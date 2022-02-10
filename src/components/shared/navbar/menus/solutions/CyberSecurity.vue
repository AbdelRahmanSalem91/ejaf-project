<template>
  <li>
    <a
      class="nav-link dropdown-toggle text-uppercase text-center position-relative"
      href="#"
      id="dataCenterMenuLinks"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      >cyber security solutions</a
    >
    <ul
      class="dropdown-menu drop-menu text-uppercase nested-menu-lvl2"
      aria-labelledby="dataCenterMenuLinks"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <li class="nav-item dropdown">
        <router-link to="/" class="">valimail defend</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="">enterprise security solutions</router-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "cyber-security",
};
</script>
