<template>
  <section class="intro text-center w-75 mt-5">
    <h2 class="text-capitalize mb-4">ejaf technology</h2>
    <h3 class="mb-5">is your trusted source in IT services and support</h3>
    <description-component :desc="desc" />
  </section>
</template>

<script>
import DescriptionComponent from "../../shared/Description.vue";
export default {
  name: "introduction-component",
  components: { DescriptionComponent },

  setup() {
    const desc =
      "Don’t let technology weigh you down. Take the operational burdens off your IT teams with our Managed IT Services so they can focus on driving your business forward.";
    return { desc };
  },
};
</script>
