<template>
  <nav class="navbar navbar-expand-lg w-100">
    <div class="container">
      <div class="logo">
        <a class="navbar-brand" href="#">
          <img src="../../assets/logo.png" alt="Ejaf Technology" />
        </a>
      </div>
      <button
        class="navbar-toggler border-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="nav-icon"></span>
        <span class="nav-icon"></span>
        <span class="nav-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link active text-white text-uppercase"
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
                <a
                  class="dropdown-item text-white text-uppercase text-center"
                  href="#"
                  >Action</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item text-white text-uppercase text-center"
                  href="#"
                  >Another action</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item text-white text-uppercase text-center"
                  href="#"
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
                <a
                  class="dropdown-item text-white text-uppercase text-center"
                  href="#"
                  >Action</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item text-white text-uppercase text-center"
                  href="#"
                  >Another action</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item text-white text-uppercase text-center"
                  href="#"
                  >Something else here</a
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white text-uppercase" href="#">about us</a>
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
                <a
                  class="dropdown-item text-white text-uppercase text-center"
                  href="#"
                  >Action</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item text-white text-uppercase text-center"
                  href="#"
                  >Another action</a
                >
              </li>
              <li>
                <a
                  class="dropdown-item text-white text-uppercase text-center"
                  href="#"
                  >Something else here</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar-component",
};
</script>

<style scoped>
.logo {
  width: 25%;
}
.logo img {
  max-width: 90%;
}
a:hover,
a.active {
  color: var(--blue-color) !important;
}
.drop-menu {
  background-color: var(--blue-color);
}
button:hover {
  border-color: var(--blue-color) !important;
}
button:hover .nav-icon {
  background-color: var(--blue-color);
}
.nav-icon {
  display: block;
  height: 2px;
  width: 30px;
  background-color: #fff;
  margin: 5px auto;
}
button,
.nav-icon {
  transition: 0.5s all;
}
.navbar-collapse {
  background-color: var(--main-color);
  text-align: center;
}
@media (max-width: 991px) {
  .logo {
    width: 60%;
  }
}
</style>
