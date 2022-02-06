<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg nav">
      <div class="container-fluid">
        <a class="navbar-brand text-white" href="#">
          <img src="../../assets/logo.png" alt="Ejaf Technology" />
        </a>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link active text-white text-uppercase active"
                aria-current="page"
                href="#"
                >home</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white text-uppercase"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                solutions
              </a>
              <ul
                class="dropdown-menu drop-menu text-uppercase"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item text-white text-uppercase" href="#"
                    >Action</a
                  >
                </li>
                <li>
                  <a class="dropdown-item text-white text-uppercase" href="#"
                    >Another action</a
                  >
                </li>
                <li>
                  <a class="dropdown-item text-white text-uppercase" href="#"
                    >Something else here</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white text-uppercase"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                services
              </a>
              <ul
                class="dropdown-menu drop-menu text-uppercase"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item text-white text-uppercase" href="#"
                    >Action</a
                  >
                </li>
                <li>
                  <a class="dropdown-item text-white text-uppercase" href="#"
                    >Another action</a
                  >
                </li>
                <li>
                  <a class="dropdown-item text-white text-uppercase" href="#"
                    >Something else here</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white text-uppercase" href="#"
                >about us</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-white text-uppercase" href="#"
                >contact us</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white text-uppercase"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                services
              </a>
              <ul
                class="dropdown-menu drop-menu text-uppercase"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item text-white text-uppercase" href="#"
                    >Action</a
                  >
                </li>
                <li>
                  <a class="dropdown-item text-white text-uppercase" href="#"
                    >Another action</a
                  >
                </li>
                <li>
                  <a class="dropdown-item text-white text-uppercase" href="#"
                    >Something else here</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar-component",
};
</script>

<style scoped>
.nav a img {
  max-width: 300px;
}
.nav a:hover,
.nav a.active {
  color: var(--blue-color) !important;
}
.drop-menu {
  background-color: var(--main-color);
}
</style>
