<template>
  <div class="contact-details text-center">
    <div class="adress mb-2">
      <p><strong>Email</strong></p>
      <p>sales-eg@it-tp.com</p>
    </div>
    <div class="adress mb-2">
      <h3 class="country">Egypt</h3>
      <p><strong>Adress</strong></p>
      <p>Villa 155, Banafseg 2 , First settlement</p>
    </div>
    <div class="adress mb-2">
      <h3 class="country">Saudi Arabia</h3>
      <p><strong>Phone</strong></p>
      <p>+96614020770 -4037128</p>
      <p><strong>Fax</strong></p>
      <p class="my-2">+96614020660</p>
      <p><strong>Adress</strong></p>
      <p>Riyadh, 11454, KSA Saudi Arabia</p>
    </div>
    <a
      href="https://goo.gl/maps/sYHpGz6txLvRLbBr9"
      class="py-2 px-4 mt-3 btn location"
      target="_blank"
    >
      <i class="fa-solid fa-location-pin text-white mx-1"></i>
      Head office location</a
    >
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
p {
  margin-bottom: 0;
}
.location {
  background-color: var(--red-color);
  color: #fff;
  border-color: var(--red-color);
  outline-color: var(--red-color);
  font-weight: bold;
  font-size: 18px;
}
.location:hover {
  color: #fff;
}
</style>
