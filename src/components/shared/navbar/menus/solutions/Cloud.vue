<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle text-uppercase text-center position-relative"
      href="#"
      id="cloudSolutionMenuLinks"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      >cloud solutions</a
    >
    <ul
      class="dropdown-menu drop-menu text-uppercase nested-menu-lvl2"
      aria-labelledby="cloudSolutionMenuLinks"
    >
      <li class="nav-item dropdown">
        <router-link to="/private-public-cloud" class="nav-link"
          >private, public cloud</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/managed-services" class="nav-link"
          >managed services</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/cloud-applications" class="nav-link"
          >cloud applications</router-link
        >
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "cloud-solutions",
};
</script>
