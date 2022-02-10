<template>
  <div class="container mt-5 pt-5">
    <div class="wan-landing d-flex flex-column justify-content-center">
      <h2 class="title my-5 animate__animated animate__fadeInUp">
        Wan Optimization <br />
        Improve the Dexterity of your Business
      </h2>
      <data-component />
    </div>
  </div>
</template>

<script>
import DataComponent from "../../shared/DataComponent.vue";
export default {
  components: { DataComponent },
};
</script>

<style scoped>
.title {
  font-size: 50px;
}
</style>
