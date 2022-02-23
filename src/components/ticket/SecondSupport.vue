<template>
  <div
    class="support form-check w-50 d-flex flex-column justify-content-center align-items-start py-4 px-2"
  >
    <h4 class="text-start">{{ support.q }}</h4>
    <div class="answers">
      <template v-for="(answer, index) in support.answers" :key="index">
        <div class="answer mb-3">
          <input
            class="form-check-input"
            type="radio"
            name="choose"
            :id="answer"
          />
          <label class="form-check-label text-white text-label" :for="answer">
            {{ answer }}
          </label>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "second-support",
  props: ["support"],
};
</script>

<style scoped>
input {
  margin-left: 0 !important;
  margin-right: 10px;
}
</style>
