<template>
  <li class="nav-item dropdown">
    <a
      class="nav-link dropdown-toggle text-uppercase text-center position-relative"
      href="#"
      id="dataCenterMenuLinks"
      role="button"
      aria-expanded="false"
      >data center & system solutions</a
    >
    <ul
      class="dropdown-menu drop-menu text-uppercase nested-menu-lvl2"
      aria-labelledby="dataCenterMenuLinks"
    >
      <li class="nav-item dropdown">
        <router-link to="/data-center" class="nav-link"
          >data center</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/virtualization" class="nav-link"
          >virtualization</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/storage" class="nav-link">storgae</router-link>
      </li>
      <li class="nav-item dropdown">
        <router-link to="/cloud-computing" class="nav-link"
          >cloud computing</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/backup-and-replication" class="nav-link"
          >backup and replication solutions</router-link
        >
      </li>
      <li class="nav-item dropdown">
        <router-link to="/disaster-recovery" class="nav-link"
          >disaster recovery solutions</router-link
        >
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "data-center",
};
</script>
