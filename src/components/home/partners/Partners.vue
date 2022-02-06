<template>
  <section class="partners mt-5 pt-5">
    <div class="container">
      <heading-component title="our partners" class="text-white" />
      <heading-component
        title="our official partners & vendors"
        class="text-white"
      />
      <!-- <div class="owl-carousel owl-theme my-5 mx-auto partners-carousel">
        <div>
          <img src="../../../assets/partners/carousel-1/intercard.jpg" alt="" />
        </div>
        <div>
          <img src="../../../assets/partners/carousel-1/Microsoft.jpg" alt="" />
        </div>
        <div>
          <img
            src="../../../assets/partners/carousel-1/ManageEngine.jpg"
            alt=""
          />
        </div>
        <div>
          <img src="../../../assets/partners/carousel-1/huawei.jpg" alt="" />
        </div>
        <div>
          <img src="../../../assets/partners/carousel-1/SAP.png" alt="" />
        </div>
      </div> -->
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
.partners-carousel {
  height: 600px;
}
</style>
