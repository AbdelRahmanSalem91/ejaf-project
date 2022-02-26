<template>
  <div class="container mt-5 pt-5">
    <h2 class="text-center h1">{{ title }}</h2>
    <LeftSection>
      <div class="info-desc col-lg-8">
        <h2 class="title-orange h1 mb-3">Cloud Applications</h2>
        <p class="desc my-3">
          Missing security refreshes is one of the main danger vectors misused
          by malware. Patch management provides the enterprise security solution
          by fixing the board arrangement examines associated endpoints and
          servers to discover missing patches on OS and outsider applications.
          This will also help diminish conveyance time for basic and highly
          risked patches. Moreover, it gives you a perceived ability on the
          status of current consistency levels against driving industry
          benchmarks. It gives you broad reports on the most helpless frameworks
          and in general perspective on the earth.
        </p>
      </div>
      <div class="info-img col-lg-4">
        <img
          class="w-100"
          src="../../../assets/cloud-solutions/cloud-applications/patch.png"
          alt="Cloud Applications"
        />
      </div>
    </LeftSection>

    <RightSection>
      <div class="info-desc col-lg-8">
        <h2 class="title-orange h1 mb-3">Cloud Applications</h2>
        <p class="desc my-3">
          Missing security refreshes is one of the main danger vectors misused
          by malware. Patch management provides the enterprise security solution
          by fixing the board arrangement examines associated endpoints and
          servers to discover missing patches on OS and outsider applications.
          This will also help diminish conveyance time for basic and highly
          risked patches. Moreover, it gives you a perceived ability on the
          status of current consistency levels against driving industry
          benchmarks. It gives you broad reports on the most helpless frameworks
          and in general perspective on the earth.
        </p>
      </div>
      <div class="info-img col-lg-4">
        <img
          class="w-100"
          src="../../../assets/cloud-solutions/cloud-applications/patch.png"
          alt="Cloud Applications"
        />
      </div>
    </RightSection>
  </div>
</template>

<script>
export default {
  name: "partner-details",
  data() {
    return {
      title: "",
    };
  },
  mounted() {
    this.title = this.$router.currentRoute._value.path;
    this.title = this.title.substring(this.title.indexOf("/") + 1);
  },
};
</script>

<style></style>
