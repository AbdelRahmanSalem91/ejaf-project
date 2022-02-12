<template>
  <info-section-left>
    <div class="info-desc col-lg-8">
      <h2 class="title-green h1">Data Compression</h2>
      <p class="desc">
        If we lessen the number of bits required to embody the data then it is
        said that we have compressed the data. Data compression can be very
        beneficial as it takes less storage capacity. Moreover, a file can be
        easily transported if it contains compressed data. It also proves to be
        budget-friendly as it decreases the expenditure for storage hardware and
        network bandwidth.
      </p>
    </div>
    <div class="info-img col-lg-4">
      <img
        class="w-100"
        src="../../../../assets/networking/wan/data-compression.png"
        alt="Wan Accelerator"
      />
    </div>
  </info-section-left>
</template>

<script>
import InfoSectionLeft from "../../../shared/InfoSectionLeft.vue";

export default {
  name: "fivth-wan-section",
  components: { InfoSectionLeft },
};
</script>
