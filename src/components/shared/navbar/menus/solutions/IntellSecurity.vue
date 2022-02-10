<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle text-uppercase text-center position-relative"
      href="#"
      id="intellSecurityMenuLinks"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      >intelligent security solutions</a
    >
    <ul
      class="dropdown-menu drop-menu text-uppercase nested-menu-lvl2"
      aria-labelledby="intellSecurityMenuLinks"
    >
      <li class="nav-item dropdown">
        <router-link to="/wam" class="nav-link"
          >access control solution</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="nav-link">fire alarm solution</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="nav-link"
          >intrusion detection system</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="nav-link">ip cctv</router-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "intelligent-security",
};
</script>
