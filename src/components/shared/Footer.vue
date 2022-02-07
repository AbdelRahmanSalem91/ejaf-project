<template>
  <footer
    class="footer d-flex justify-content-center align-items-center flex-column text-center"
  >
    <span class="copyright">
      &copy; 2021 EJAFTEC. ALL RIGHTS RESERVED. DESIGNED BY
      <a href="#">MAZAJNET</a>
    </span>
    <ul class="mt-5">
      <li class="mx-3">
        <a href="#">
          <i class="fab fa-facebook-f"></i>
        </a>
      </li>
      <li class="mx-3">
        <a href="#">
          <i class="fab fa-twitter"></i>
        </a>
      </li>
      <li class="mx-3">
        <a href="#">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "footer-component",
};
</script>

<style scoped>
.footer {
  height: 312px;
  border-top: 1px solid #020f21;
}
.footer,
.footer a {
  color: rgba(255, 255, 255, 0.5);
  transition: 0.3s all;
}
.footer a:hover {
  color: rgba(255, 255, 255, 1);
}
</style>
