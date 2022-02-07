<template>
  <section class="landing mt-5 pt-5">
    <div class="container">
      <div class="row flex-column">
        <!-- <heading-component
          title="software management"
          class="landing__title text-center col-lg-6 w-lg-50 text-lg-start"
        /> -->
        <h2 class="h1">
          <span class="auto-type text-uppercase">{{ typeValue }}</span>
          <span class="fixed-type position-relative text-uppercase"
            >solutions</span
          >
        </h2>
        <div
          class="
            data
            text-center
            mx-5
            text-center
            col-lg-6
            w-lg-50
            d-lg-flex
            justify-content-between
            row
          "
        >
          <data-component
            count="800+"
            info="happy clients"
            class="clients col-lg-3 mb-5"
          />
          <data-component
            count="1900+"
            info="projects completed"
            class="projects col-lg-3 mb-5"
          />
          <data-component
            count="30+"
            info="business partners"
            class="partners col-lg-3 mb-5"
          />
          <data-component
            count="6"
            info="countries"
            class="countries col-lg-3 mb-5"
          />
        </div>
      </div>
      <introduction-section class="pt-5 col-lg-6" />
    </div>
  </section>
</template>

<script>
import DataComponent from "./DataComponent.vue";
import IntroductionSection from "./Introduction.vue";

export default {
  name: "landing-section",
  components: { DataComponent, IntroductionSection },
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: [
        "Data Centers",
        "Cloud Computing",
        "Cyber Security",
        "IT Management",
        "Intelligent Security",
        "Networking",
        "Software Management",
        "Automation Management",
        "IT Services",
        "Network Penetration Testing",
        "hosting",
        "PCI DSS Compliance",
      ],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 300,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed);
      }
    },
  },
  created() {
    setTimeout(this.typeText, 200);
  },
};
</script>

<style scoped>
.auto-type {
  color: var(--blue-color);
  transition: 0.5s ease-in-out;
}
.fixed-type {
  color: #4e5465;
  padding-left: 8px;
}
.fixed-type::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background-color: #aebcb9;
}
</style>
