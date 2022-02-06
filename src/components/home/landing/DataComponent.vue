<template>
  <div class="count__data">
    <h2 class="h1 count">{{ count }}</h2>
    <div class="text-capitalize">{{ info }}</div>
  </div>
</template>

<script>
export default {
  name: "data-component",
  props: ["count", "info"],
};
</script>

<style scoped>
span {
  width: 200px;
}
</style>
