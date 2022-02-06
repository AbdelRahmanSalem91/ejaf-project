<template>
  <div class="service-component w-25">
    <div class="service">
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
a {
  transition: color 400ms, background-color 400ms;
}
</style>
