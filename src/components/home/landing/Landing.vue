<template>
  <section class="landing mt-5 pt-5">
    <div class="row flex-column">
      <h2 class="h1 landing__title text-center col-lg-12 text-lg-start my-5">
        <span class="auto-type text-uppercase position-relative">{{
          typeValue
        }}</span>
        <span class="fixed-type text-uppercase">solutions</span>
      </h2>
      <data-component />
    </div>
    <introduction-section class="pt-lg-5 col-lg-8" />
  </section>
</template>

<script>
import DataComponent from "../../shared/DataComponent.vue";
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
.landing__title {
  font-size: 45px;
}
.auto-type {
  color: var(--red-color);
  transition: 0.5s ease-in-out;
  padding-right: 8px;
}
.auto-type::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  background-color: #aebcb9;
}
.fixed-type {
  color: #4e5465;
}
</style>
