<template>
  <div
    class="owl-carousel owl-theme owl-loaded my-5 mx-auto partners-carousel car-1"
  >
    <template v-for="(car, index) in firstCarousel" :key="index">
      <carousel-items :car="'carousel-1/' + car" />
    </template>
  </div>
  <div
    class="owl-carousel owl-theme owl-loaded my-5 mx-auto partners-carousel car-2"
  >
    <template v-for="(car, index) in secondCarousel" :key="index">
      <carousel-items :car="'carousel-2/' + car" />
    </template>
  </div>
  <div
    class="owl-carousel owl-theme owl-loaded my-5 mx-auto partners-carousel car-3"
  >
    <template v-for="(car, index) in thirdCarousel" :key="index">
      <carousel-items :car="'carousel-3/' + car" />
    </template>
  </div>
  <div
    class="owl-carousel owl-theme owl-loaded my-5 mx-auto partners-carousel car-4"
  >
    <template v-for="(car, index) in fourthCarousel" :key="index">
      <carousel-items :car="'carousel-4/' + car" />
    </template>
  </div>
  <div
    class="owl-carousel owl-theme owl-loaded my-5 mx-auto partners-carousel car-5"
  >
    <template v-for="(car, index) in fivthCarousel" :key="index">
      <carousel-items :car="'carousel-5/' + car" />
    </template>
  </div>
  <div
    class="owl-carousel owl-theme owl-loaded my-5 mx-auto partners-carousel car-6"
  >
    <template v-for="(car, index) in sixthCarousel" :key="index">
      <carousel-items :car="'carousel-6/' + car" />
    </template>
  </div>
</template>

<script>
import CarouselItems from "./CarouselItems.vue";
export default {
  components: { CarouselItems },
  name: "carousel-component",
  setup() {
    const firstCarousel = [
      "intercard.jpg",
      "Microsoft.jpg",
      "ManageEngine.jpg",
      "huawei.jpg",
      "SAP.png",
    ];
    const secondCarousel = [
      "apollo.jpg",
      "arcon.jpg",
      "aruba.jpg",
      "Networks.jpg",
      "VERITAS.jpg",
    ];
    const thirdCarousel = [
      "Bitdefender.jpg",
      "Barracuda.jpg",
      "cisco.jpg",
      "Control-Case.jpg",
      "DELL-EMC.jpg",
      "parksol.jpg",
    ];
    const fourthCarousel = [
      "HOTELOGIX.jpg",
      "hp.jpg",
      "HUAWEI.jpg",
      "IBA2.jpg",
      "Juniper.jpg",
    ];
    const fivthCarousel = [
      "ara.jpg",
      "AXIS.jpg",
      "fortigate.jpg",
      "kaspersky.jpg",
      "Veeam.jpg",
      "vmware.jpg",
    ];
    const sixthCarousel = [
      "para.jpg",
      "RSA.jpg",
      "solarwinds.jpg",
      "WAVETEC.jpg",
      "vmware-partner.jpg",
    ];
    return {
      firstCarousel,
      secondCarousel,
      thirdCarousel,
      fourthCarousel,
      fivthCarousel,
      sixthCarousel,
    };
  },
};
</script>

<style scoped>
.partners-carousel {
  backface-visibility: visible !important;
  /* width: 50%; */
  text-align: center;
  touch-action: pan-y;
  user-select: none;
}
</style>
