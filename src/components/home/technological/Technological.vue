<template>
  <section class="technological mt-5 pt-3">
    <heading-component title="technology success" class="text-center" />
    <description-component :desc="desc" class="technological__desc mt-5 pt-4" />
  </section>
</template>

<script>
import DescriptionComponent from "../../shared/Description.vue";
import HeadingComponent from "../../shared/Heading.vue";
export default {
  name: "TechnologicalSection",
  components: { HeadingComponent, DescriptionComponent },

  setup() {
    const desc =
      "When it comes to our customers, everything becomes secondary for us. Our foremost prerogatives include income-friendly quick deliveries and yanking appreciation by meeting your expectations. The secret of our accomplishment lies in our skilled approach and clearness. Our goal is nothing other than guaranteeing that the needed deliveries go to our happy customers and we are far more committed to achieving that.";
    return { desc };
  },
};
</script>

<style scoped>
.technological__desc {
  text-align: start !important;
}
</style>
