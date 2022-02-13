<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle text-uppercase text-center position-relative"
      href="#"
      id="cyberSecurityMenuLinks"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      >VOLUME LICENSING</a
    >
    <ul
      class="dropdown-menu drop-menu text-uppercase nested-menu-lvl2"
      aria-labelledby="cyberSecurityMenuLinks"
    >
      <li class="nav-item dropdown">
        <router-link to="/valimail-defend" class="nav-link"
          >Microsoft Products & Services Agreement</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/enterprise-security" class="nav-link">
          Microsoft Cloud Agreement</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/enterprise-security" class="nav-link">
          Microsoft CSP License</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/enterprise-security" class="nav-link">
          Microsoft Azure</router-link
        >
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "volume-licening",
};
</script>
