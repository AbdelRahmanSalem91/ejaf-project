<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle text-uppercase text-center position-relative"
      href="#"
      id="itSoftwareMenuLinks"
      role="button"
      aria-expanded="false"
      >it software solutions</a
    >
    <ul
      class="dropdown-menu drop-menu text-uppercase nested-menu-lvl2"
      aria-labelledby="itSoftwareMenuLinks"
    >
      <li class="nav-item dropdown">
        <router-link to="/it-security-management" class="nav-link"
          >it security management</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link
          to="/network-and-server-performance-management"
          class="nav-link"
          >network and server performance management</router-link
        >
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "itSoftware-management",
};
</script>
