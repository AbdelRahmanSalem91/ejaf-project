<template>
  <nav
    class="navbar navbar-expand-lg w-100 position-fixed top-0 start-0 d-flex justify-content-between nav"
    :class="{ onScroll: !view.topOfPage }"
  >
    <div class="container">
      <div class="logo">
        <a class="navbar-brand" href="/">
          <img src="../../../assets/logo.png" alt="Ejaf Technology" />
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
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a
              class="nav-link text-uppercase basic-link home-link"
              aria-current="page"
              href="/"
              >home</a
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-uppercase basic-link"
              href="#"
              id="navbarDropdownMenuLink"
            >
              solutions
            </a>
            <solutions-menu />
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-white text-uppercase basic-link"
              href="#"
              id="navbarDropdownMenuLink"
            >
              services
            </a>
            <services-menu />
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-white text-uppercase basic-link"
              :to="{ name: 'About' }"
              >about us</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link text-white text-uppercase basic-link"
              :to="{ name: 'Contact' }"
              >contact us</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-white text-uppercase basic-link"
              href="#"
            >
              support
            </a>
            <support-menu />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import SolutionsMenu from "./menus/SolutionsMenu.vue";
import ServicesMenu from "./menus/ServicesMenu.vue";
import SupportMenu from "./menus/SupportMenu.vue";
import "./navbar.css";
export default {
  components: { SolutionsMenu, ServicesMenu, SupportMenu },
  name: "navbar-component",
  data() {
    return {
      view: {
        topOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },
  },
};
</script>
