<template>
  <div
    class="data d-flex justify-contnt-between text-center mx-auto text-center col-lg-6 mx-lg-0 d-lg-flex justify-content-between row"
  >
    <div class="count__data clients col-lg-3 mb-5">
      <h2 class="h1 count">800+</h2>
      <div class="text-capitalize">happy clients</div>
    </div>
    <div class="count__data projects col-lg-3 mb-5">
      <h2 class="h1 count">1900+</h2>
      <div class="text-capitalize">projects completed</div>
    </div>
    <div class="count__data partners col-lg-3 mb-5">
      <h2 class="h1 count">30+</h2>
      <div class="text-capitalize">business partners</div>
    </div>
    <div class="count__data countries col-lg-3 mb-5">
      <h2 class="h1 count">6</h2>
      <div class="text-capitalize">countries</div>
    </div>
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
</style>
