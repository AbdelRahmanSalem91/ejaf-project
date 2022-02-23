<template>
  <div
    class="support w-50 d-flex flex-column justify-content-center align-items-center pb-5 px-2"
  >
    <div class="row">
      <input
        type="text"
        class="col-6 mb-3 d-block mx-auto"
        v-for="(supp, index) in support"
        :key="index"
        :placeholder="supp"
      />
    </div>
    <button class="btn">Submit</button>
  </div>
</template>

<script>
export default {
  name: "fourth-support",
  props: ["support"],
};
</script>

<style scoped>
input {
  width: 48%;
  border-radius: 50px;
  border: none;
  outline: 0;
  padding: 7px 12px;
}
button {
  background-color: #007df7;
  color: #fff;
  padding: 10px 60px;
  border-radius: 50px;
  font-weight: bold;
}
button:hover {
  background-color: #212121 !important;
  color: #fff;
  border-color: #212121 !important;
}
</style>
