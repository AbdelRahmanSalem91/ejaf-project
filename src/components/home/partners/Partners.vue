<template>
  <section class="partners mt-5 pt-5">
    <heading-component
      title="our partners"
      class="text-center h1 partners__title"
    />
    <heading-component
      title="our official partners & vendors"
      class="text-center px-3 h1 partners__title"
    />
    <div class="carousels-container">
      <carousel-component />
    </div>
  </section>
</template>

<script>
import HeadingComponent from "../../shared/Heading.vue";
import CarouselComponent from "./Carousel.vue";
export default {
  name: "partners-section",
  components: { HeadingComponent, CarouselComponent },
};
</script>

<style scoped>
.partners__title {
  font-size: 36px !important;
}
.partners-carousel {
  height: 300px;
}
.carousels-container {
  width: 85%;
  margin: 0 auto;
}
</style>
