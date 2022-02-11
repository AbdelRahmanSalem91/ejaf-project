<template>
  <div class="container mt-5 pt-5">
    <div class="landing d-flex flex-column justify-content-center mt-5 pt-5">
      <h2 class="title my-5 animate__animated animate__fadeInUp">
        <slot></slot>
      </h2>
      <data-component />
    </div>
  </div>
</template>

<script>
import DataComponent from "./DataComponent.vue";
export default {
  name: "landing-component",
  components: { DataComponent },
};
</script>

<style scoped>
.title {
  font-size: 50px;
}
</style>
