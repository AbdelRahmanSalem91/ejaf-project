<template>
  <li>
    <a
      class="nav-link dropdown-toggle text-uppercase text-center position-relative"
      href="#"
      id="dataCenterMenuLinks"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      >data center & system solutions</a
    >
    <ul
      class="dropdown-menu drop-menu text-uppercase nested-menu-lvl2"
      aria-labelledby="dataCenterMenuLinks"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <li class="nav-item dropdown">
        <router-link to="/" class="">data center</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="">virtualization</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="">storgae</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="">cloud computing</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class=""
          >backup and replacement solutions</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/" class="">disaster recovery solutions</router-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "data-center",
};
</script>
