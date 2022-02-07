<template>
  <section class="partners mt-5 pt-5">
    <div class="container">
      <heading-component title="our partners" class="text-white text-center" />
      <heading-component
        title="our official partners & vendors"
        class="text-white text-center"
      />
      <div class="carousels-container">
        <carousel-component />
      </div>
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
.partners-carousel {
  height: 300px;
}
.carousels-container {
  width: 85%;
  margin: 0 auto;
}
</style>
