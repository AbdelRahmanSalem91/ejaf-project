<template>
  <info-section-left>
    <div class="info-desc col-lg-8 mt-5">
      <h2 class="title-yellow h1">Storage Area Network (SAN)</h2>
      <h4 class="title-green">Powerful Centralized Storage With Fast I/O.</h4>
      <p class="desc">
        A Storage Area Network (SAN) furnishes a repetitious arrangement of
        disks discerned as a particular volume by the servers connected to it
        for vast accessibility and rapid disk I/O operation than NAS. SAN’s are
        common virtualization clusters used for procuring centralized access to
        I/O intensive databases.
      </p>
    </div>
    <div class="info-img col-lg-4">
      <img
        class="w-100"
        src="../../../../assets/data-center/storage/san.png"
        alt="Storage Area Network (SAN)"
      />
    </div>
  </info-section-left>
</template>

<script>
import InfoSectionLeft from "../../../shared/InfoSectionLeft.vue";

export default {
  name: "fivth-stor-section",
  components: { InfoSectionLeft },
};
</script>

<style></style>
