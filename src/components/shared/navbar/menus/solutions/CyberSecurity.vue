<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle text-uppercase text-center position-relative"
      href="#"
      id="cyberSecurityMenuLinks"
      role="button"
      aria-expanded="false"
      >cyber security solutions</a
    >
    <ul
      class="dropdown-menu drop-menu text-uppercase nested-menu-lvl2"
      aria-labelledby="cyberSecurityMenuLinks"
    >
      <li class="nav-item dropdown">
        <router-link to="/valimail-defend" class="nav-link"
          >valimail defend</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/enterprise-security" class="nav-link"
          >enterprise security solutions</router-link
        >
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "cyber-security",
};
</script>
