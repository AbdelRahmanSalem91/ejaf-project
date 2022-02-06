<template>
  <footer
    class="footer d-flex justify-content-center align-items-center flex-column"
  >
    <span class="copyright">
      &copy; 2021 EJAFTEC. ALL RIGHTS RESERVED. DESIGNED BY
      <a href="#">MAZAJNET</a>
    </span>
    <ul>
      <li>
        <a href="#">
          <i class="fa fa-facebook"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-twitter"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="fa fa-linkedin"></i>
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
</style>
