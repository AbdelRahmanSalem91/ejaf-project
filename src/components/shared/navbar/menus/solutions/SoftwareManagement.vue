<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle text-uppercase text-center position-relative"
      href="#"
      id="networkingMenuLinks"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      >software mangement solutions</a
    >
    <ul
      class="dropdown-menu drop-menu text-uppercase nested-menu-lvl2"
      aria-labelledby="networkingMenuLinks"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <li class="nav-item dropdown">
        <router-link to="/" class="">ejaf erp</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="">odoo erp</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="">oracle fusion erp</router-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "software-management",
};
</script>
