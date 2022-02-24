<template>
  <div class="ticket-page mt-5 pt-5 vh-100">
    <div class="container">
      <div class="d-flex justify-content-center py-5">
        <first-support
          v-if="supportNo === 0"
          :support="supportData.firstData"
        />
        <second-support
          v-if="supportNo === 1"
          :support="supportData.secondData"
        />
        <third-support
          v-if="supportNo === 2"
          :support="supportData.thirdData"
        />
        <fourth-support
          v-if="supportNo === 3"
          :support="supportData.fourthData"
        />
      </div>
      <div class="button d-flex justify-content-between mx-auto">
        <button class="btn" @click="decrementSupportNo" v-if="supportNo > 0">
          Back
        </button>
        <button
          class="btn next"
          @click="incrementSupportNo"
          v-if="supportNo < this.supportData.firstData.length + 1"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import FirstSupport from "./FirstSupport.vue";
import SecondSupport from "./SecondSupport.vue";
import ThirdSupport from "./ThirdSupport.vue";
import FourthSupport from "./FourthSupport.vue";

export default {
  name: "ticket-component",
  components: {
    FirstSupport,
    SecondSupport,
    ThirdSupport,
    FourthSupport,
  },
  data() {
    return {
      support: false,
      order: false,
      supportNo: 0,
      supportData: {
        firstData: [
          {
            img: "support",
            label: "Support",
          },
          {
            img: "new_order",
            label: "New Order",
          },
        ],
        secondData: {
          q: "Please choose a support category*",
          answers: ["Physical Security", "Software", "Enterprise Solutions"],
        },
        thirdData: {
          q: "Additonal Info (Optional)",
        },
        fourthData: {
          fName: "Firest Name",
          lName: "Last Name",
          email: "Email Adress",
          phoneNo: "Phone No.",
        },
      },
    };
  },
  methods: {
    incrementSupportNo() {
      if (this.supportNo < this.supportData.firstData.length + 1)
        this.supportNo++;
    },
    decrementSupportNo() {
      if (this.supportNo > -1) this.supportNo--;
    },
  },
};
</script>

<style scoped>
button {
  background-color: var(--red-color);
  color: #fff;
  padding: 15px 60px;
  border-radius: 50px;
  font-weight: bold;
}
button:hover {
  background-color: #212121 !important;
  color: #fff;
  border-color: #212121 !important;
}
button.next {
  margin-left: auto;
}
.button {
  width: 50%;
}
@media (max-width: 650px) {
  .button {
    width: 100% !important;
  }
}
</style>
