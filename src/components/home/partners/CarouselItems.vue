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
  transition: all 0.2s ease-in-out 0s;
}
</style>
