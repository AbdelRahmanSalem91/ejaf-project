<template>
  <section class="landing mt-5 pt-5">
    <div class="container">
      <heading-component title="software management" class="landing__title" />
      <div
        class="data w-50 d-flex justify-content-between text-center mx-5 mb-5"
      >
        <data-component count="800+" info="happy clients" class="clients" />
        <data-component
          count="1900+"
          info="projects completed"
          class="projects"
        />
        <data-component count="30+" info="business partners" class="partners" />
        <data-component count="6" info="countries" class="countries" />
      </div>
      <introduction-section class="pt-5" />
    </div>
  </section>
</template>

<script>
import DataComponent from "./DataComponent.vue";
import IntroductionSection from "./Introduction.vue";
import HeadingComponent from "../../shared/Heading.vue";

export default {
  name: "landing-section",
  components: { DataComponent, IntroductionSection, HeadingComponent },
};
</script>

<style scoped>
.landing__title {
  text-align: start !important;
  color: var(--blue-color);
}
</style>
