<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle text-uppercase text-center position-relative"
      href="#"
      id="cyberSecurityMenuLinks"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      >ERP</a
    >
    <ul
      class="dropdown-menu drop-menu text-uppercase nested-menu-lvl2"
      aria-labelledby="cyberSecurityMenuLinks"
    >
      <li class="nav-item dropdown">
        <router-link to="/valimail-defend" class="nav-link"
          >ORACLE REP BUSINESS SOLUTIONS</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/enterprise-security" class="nav-link">
          ORACLE CLOUD SOLUTIONS</router-link
        >
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "erp-solution",
};
</script>
