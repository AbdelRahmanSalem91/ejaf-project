<template>
  <info-section-right>
    <div class="info-desc col-lg-8 pt-3">
      <h2 class="title-yellow h1">Data Deduplication</h2>
      <p class="desc">
        Deduplication, as the name indicated means ‘removal of duplicates. It is
        a process of screening a device for any duplicate files available and
        deleting them in order to provide more space. This space can then, be
        used for additional data files. Its main purpose is to increase capacity
        and to prevent the requirement of spending on additional storage space.
        This is a measure that should be taken to increase work efficiency.
      </p>
    </div>
    <div class="info-img col-lg-4 text-center">
      <img
        class="w-100"
        src="../../../../assets/networking/wan/data-deduplication.png"
        alt="Wan Accelerator"
      />
    </div>
  </info-section-right>
</template>

<script>
import InfoSectionRight from "../../../shared/InfoSectionRight.vue";

export default {
  name: "fourth-wan-section",
  components: { InfoSectionRight },
};
</script>
