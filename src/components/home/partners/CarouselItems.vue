<template>
  <a href="#">
    <img :src="require('../../../assets/home/partners/' + car)" alt="" />
  </a>
</template>

<script>
export default {
  name: "carousel-items",
  props: ["car"],
};
</script>

<style scoped>
img {
  max-width: 200px;
  max-height: 200px;
}
@media (max-width: 992px) {
  img {
    max-width: 150px;
    max-height: 150px;
  }
}
</style>
