<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle text-uppercase text-center position-relative"
      href="#"
      id="networkingMenuLinks"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      >intelligent security solutions</a
    >
    <ul
      class="dropdown-menu drop-menu text-uppercase nested-menu-lvl2"
      aria-labelledby="networkingMenuLinks"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <li class="nav-item dropdown">
        <router-link to="/" class="">access control solution</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="">fire alarm solution</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="">intrusion detection system</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="">ip cctv</router-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "intelligent-security",
};
</script>
