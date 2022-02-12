<template>
  <info-section-left>
    <div class="info-desc col-lg-8">
      <h2 class="title-orange h1">
        What do you propose to do when an unexpected disaster happens?
      </h2>
      <p class="desc">
        Once the data is lost, it is very difficult to reproduce it in its
        original form. Hence, it is very important to secure your data as
        quickly as possible. The availability of crucial data and continuous
        uptime has become an urgency rather than an optional requirement.
      </p>
    </div>
    <div class="info-img col-lg-4">
      <img
        class="w-100"
        src="../../../../assets/data-center/disaster-recovery/disaster-recovery-solutionsimg-1.png"
        alt="What do you propose to do when an unexpected disaster happens?"
      />
    </div>
  </info-section-left>
</template>

<script>
import InfoSectionLeft from "../../../shared/InfoSectionLeft.vue";

export default {
  nmae: "first-dis-section",
  components: { InfoSectionLeft },
};
</script>
