<template>
  <info-section-right>
    <div class="info-desc col-lg-8 pt-3">
      <h2 class="title-yellow h1">Network-Attached Storage (NAS)</h2>
      <h4>Sharing Unified Data Between Web Servers.</h4>
      <p class="desc">
        A NAS architecture permits you to form a centralized storage server and
        attach multiple app servers to it by having a copy of your data.
        Resulting in the same data across each of the app servers.
      </p>
    </div>
    <div class="info-img col-lg-4 mb-0 mb-sm-3 text-center">
      <img
        class="w-100"
        src="../../../../assets/data-center/storage/nas.jpg"
        alt="Network-Attached Storage (NAS)"
      />
    </div>
  </info-section-right>
</template>

<script>
import InfoSectionRight from "../../../shared/InfoSectionRight.vue";

export default {
  name: "third-stor-section",
  components: { InfoSectionRight },
};
</script>
