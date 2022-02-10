<template>
  <h2 class="h1 text-capitalize my-4 text-white">
    {{ title }}
  </h2>
</template>

<script>
export default {
  name: "heading-component",
  props: ["title"],
};
</script>
