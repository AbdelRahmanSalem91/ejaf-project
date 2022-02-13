<template>
  <div class="service-component">
    <div class="service mx-auto">
      <a href="#">
        <img
          :src="require('../../../assets/home/services/' + src)"
          :alt="name"
        />
      </a>
      <h3 class="my-5 text-center">
        <a href="#">
          {{ name }}
        </a>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "service-component",
  props: ["name", "src"],
};
</script>

<style scoped>
.service {
  width: 255px;
}
img {
  max-width: 100%;
}
h3 {
  font-size: 24px;
}
h3 a {
  color: var(--blue-color) !important;
}
</style>
