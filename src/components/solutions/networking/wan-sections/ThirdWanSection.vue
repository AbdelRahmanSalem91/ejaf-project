<template>
  <info-section-left>
    <div class="info-desc col-lg-8">
      <h2 class="title-green h1">Traffic Shaping</h2>
      <p class="desc">
        Traffic shaping means the maintenance of the rate of data transfer.
        Traffic shaping helps to curtail the overcrowding until the server sends
        a limited amount of data. This limited amount of data is extremely
        important during the transfer of real-time data files like audio, video,
        etc.
      </p>
    </div>
    <div class="info-img col-lg-4">
      <img
        class="w-100"
        src="../../../../assets/networking/wan/traffic-shaping.png"
        alt="Wan Accelerator"
      />
    </div>
  </info-section-left>
</template>

<script>
import InfoSectionLeft from "../../../shared/InfoSectionLeft.vue";

export default {
  name: "third-wan-section",
  components: { InfoSectionLeft },
};
</script>
