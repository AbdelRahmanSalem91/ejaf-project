<template>
  <div
    class="data d-flex justify-contnt-between text-center mx-auto text-center mx-lg-0 d-lg-flex justify-content-between row"
  >
    <div class="count__data clients col-lg-2 mb-3">
      <h2 class="h1 count">800+</h2>
      <h5 class="text-capitalize">happy clients</h5>
    </div>
    <div class="count__data projects col-lg-2 mb-3">
      <h2 class="h1 count">1900+</h2>
      <h5 class="text-capitalize">projects completed</h5>
    </div>
    <div class="count__data partners col-lg-2 mb-3">
      <h2 class="h1 count">30+</h2>
      <h5 class="text-capitalize">business partners</h5>
    </div>
    <div class="count__data countries col-lg-2 mb-3">
      <h2 class="h1 count">6</h2>
      <h5 class="text-capitalize">countries</h5>
    </div>
    <div class="col-lg-4"></div>
  </div>
</template>

<script>
export default {
  name: "data-component",
};
</script>

<style scoped>
span {
  width: 200px;
}
.count {
  margin: 0;
}
h5 {
  font-size: 18px;
}
</style>
