<template>
  <ul
    class="dropdown-menu drop-menu text-uppercase"
    aria-labelledby="navbarDropdownMenuLink"
  >
    <li>
      <router-link class="nav-link" to="/">members login</router-link>
    </li>
    <li>
      <router-link class="nav-link" to="/">submit a ticket</router-link>
    </li>
    <li>
      <router-link class="nav-link" to="/">Something else here</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "support-menu",
};
</script>
