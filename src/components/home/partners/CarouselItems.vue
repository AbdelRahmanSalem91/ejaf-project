<template>
  <a
    href="#"
    target="_blank"
    data-bs-toggle="tooltip"
    data-bs-placement="top"
    :title="
      caro.toUpperCase().substring(caro.indexOf('/') + 1, caro.indexOf('.'))
    "
    data-bs-animation="true"
    data-bs-custom-class="tipStyles"
  >
    <img :src="require('../../../assets/home/partners/' + caro)" alt="" />
  </a>
</template>

<script>
export default {
  name: "carousel-items",
  props: ["car"],
  data: function () {
    return {
      caro: this.car,
    };
  },
};
</script>

<style scoped>
img {
  max-width: 200px;
  max-height: 200px;
}
.tipStyles {
  background: transparent;
  color: #fff;
}
@media (max-width: 992px) {
  img {
    max-width: 150px;
    max-height: 150px;
  }
}
</style>
