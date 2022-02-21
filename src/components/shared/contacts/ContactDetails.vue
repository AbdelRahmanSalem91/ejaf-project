<template>
  <div class="contact-details text-center">
    <div class="adress mt-3">
      <p><strong>Email</strong></p>
      <p class="my-3">sales-eg@it-tp.com</p>
    </div>
    <div class="adress mt-3">
      <h3 class="country">Egypt</h3>
      <p><strong>Adress</strong></p>
      <p class="my-3">Villa 155, Banafseg 2 , First settlement</p>
    </div>
    <div class="adress mt-3">
      <h3 class="country">Saudi Arabia</h3>
      <p><strong>Phone</strong></p>
      <p class="my-3">+96614020770 -4037128</p>
      <p><strong>Fax</strong></p>
      <p class="my-3">+96614020660</p>
      <p><strong>Adress</strong></p>
      <p class="my-3">Riyadh, 11454, KSA Saudi Arabia</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact-details",
};
</script>

<style scoped>
.country {
  color: var(--red-color);
}
.button {
  background-color: var(--red-color);
}
h4 a {
  color: var(--red-color);
}
</style>
