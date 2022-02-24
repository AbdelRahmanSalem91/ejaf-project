<template>
  <div
    class="support d-flex flex-column justify-content-center align-items-center pb-5 px-2"
  >
    <form>
      <div class="inputs w-75 mx-auto">
        <div class="row">
          <div
            class="col-md-6 mb-3"
            v-for="(supp, index) in support"
            :key="index"
          >
            <input
              type="text"
              class="d-block w-100 mx-auto"
              :placeholder="supp"
            />
          </div>
        </div>
        <div class="button d-flex justify-content-center mt-3">
          <button class="btn">Submit</button>
        </div>
      </div>
    </form>
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
@media (max-width: 650px) {
  .inputs {
    width: 100% !important;
  }
}
</style>
