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
        <router-link to="/microsoft-products" class="nav-link"
          >Microsoft Products & Services Agreement</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/microsoft-cloud" class="nav-link">
          Microsoft Cloud Agreement</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/microsoft-csp" class="nav-link">
          Microsoft CSP License</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/microsoft-azure" class="nav-link">
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
