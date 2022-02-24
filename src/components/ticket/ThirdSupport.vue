<template>
  <div
    class="support form-check d-flex flex-column justify-content-center align-items-start pb-5 px-2"
  >
    <h4 class="text-start">{{ support.q }}</h4>
    <textarea
      name="additional"
      placeholder="Please write additional info if any"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "third-support",
  props: ["support"],
};
</script>

<style scoped>
.support {
  width: 50%;
}
@media (max-width: 650px) {
  .support {
    width: 100% !important;
  }
}
textarea {
  min-height: 150px;
  resize: both;
  background-color: rgba(153, 153, 153, 1);
  color: rgba(255, 255, 255, 1);
  width: 100%;
  border-radius: 50px;
  padding: 15px 20px;
  border: none;
  outline: 0;
  font-size: 20px;
}
::placeholder {
  color: rgba(255, 255, 255, 0.7);
}
</style>
