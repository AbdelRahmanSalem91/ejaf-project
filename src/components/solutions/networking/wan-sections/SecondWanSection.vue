<template>
  <RightSection>
    <div class="info-desc col-lg-8 pt-3">
      <h2 class="title-yellow h1">The concept of WAN accelerator</h2>
      <p class="desc">
        A WAN accelerator uses data compression and caching processes to
        decrease the quantity of data streaming across WAN. A WAN accelerator,
        instead of sending files across WAN, again and again, works by caching
        the copied files and storing them in universal caches. WAN accelerator
        is of particular significance in cases where the bandwidth is the
        primary restriction by effectively exchanging the network I/O for the
        disc I/O, thereby increasing the efficacy of data transfer across the
        network.
      </p>
    </div>
    <div class="info-img col-lg-4 mb-0 mb-sm-3 text-center">
      <img
        class="w-100"
        src="../../../../assets/networking/wan/wan-concept.png"
        alt="Wan Accelerator"
      />
    </div>
  </RightSection>
</template>

<script>
export default {
  name: "second-wan-section",
};
</script>
