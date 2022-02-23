<template>
  <div
    class="support form-check w-25 d-flex flex-column justify-content-center align-items-center py-5 px-2"
    v-for="(supp, index) in support"
    :key="index"
  >
    <label
      class="form-check-label text-center mb-4 img-label"
      :for="supp.label"
    >
      <img
        :src="require('../../assets/ticket/' + supp.img + '.png')"
        alt=""
        class="w-100"
      />
    </label>
    <div class="mx-auto w-25">
      <input
        class="form-check-input"
        type="radio"
        name="choose"
        :id="supp.label"
      />
      <label class="form-check-label text-white text-label" :for="supp.label">
        {{ supp.label }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "first-support",
  props: ["support"],
  data() {
    return {
      supportClass: false,
      orderClass: false,
    };
  },
};
</script>

<style scoped>
.support {
  border: 1px solid #ccc;
  cursor: pointer;
}
.support:hover {
  outline: 3px solid var(--red-color);
  border: 0;
}
.support:hover,
.new_order:hover {
  outline: 3px solid var(--red-color);
  border: 0;
}
.img-label {
  width: 225px;
  height: 225px;
  cursor: pointer;
}
input {
  width: 20px;
  height: 20px;
  background-color: #ccc;
}
.text-label {
  cursor: pointer;
}
</style>
