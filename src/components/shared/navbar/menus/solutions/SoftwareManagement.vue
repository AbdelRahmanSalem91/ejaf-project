<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle text-uppercase text-center position-relative"
      href="#"
      id="softwareMangementMenuLinks"
      role="button"
      aria-expanded="false"
      >software mangement solutions</a
    >
    <ul
      class="dropdown-menu drop-menu text-uppercase nested-menu-lvl2"
      aria-labelledby="softwareMangementMenuLinks"
    >
      <li class="nav-item dropdown">
        <router-link to="/ejaf-erp" class="nav-link">ejaf erp</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/odoo-erp" class="nav-link">odoo erp</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/oracle-fusion-erp" class="nav-link"
          >oracle fusion erp</router-link
        >
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "software-management",
};
</script>
