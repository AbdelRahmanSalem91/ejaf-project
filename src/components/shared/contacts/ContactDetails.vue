<template>
  <div class="contact-details text-center">
    <img
      src="../../../assets/home/contacts/ejaf-tech-logo-icon.png"
      alt="Ejaf Tech"
    />
    <div class="adress mt-5">
      <p class="my-1">
        # Erbil, Iraq: Villa No.325, 100M Street, Italian Village
      </p>
      <p class="my-1"># Baghdad, Iraq: Al-Amerat Street, Al-Mansur.</p>
      <p class="my-1"># Basrah, Algeria District, near Benghazwan Hospital.</p>
    </div>
    <h4 class="mt-5">
      <a href="#"> +964 (0)750-191-4252 </a>
    </h4>
    <button class="btn text-white text-capitalize mt-5 button fs-3">
      <i class="fas fa-map-marker"></i>
      our location
    </button>
  </div>
</template>

<script>
export default {
  name: "contact-details",
};
</script>

<style scoped>
.button {
  background-color: var(--blue-color);
}
h4 a {
  color: var(--blue-color);
}
</style>
