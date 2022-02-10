<template>
  <section class="services mt-5 pt-3 text-center">
    <heading-component title="our services" class="title" />
    <heading-component title="what we offer for you" />
    <description-component :desc="desc" class="desc" />
    <div
      class="services__container d-flex justify-content-between flex-wrap row text-center"
    >
      <template v-for="(service, index) in services" :key="index">
        <service-component
          :name="service.name"
          :src="service.src"
          class="col-lg-3"
        />
      </template>
    </div>
  </section>
</template>

<script>
import HeadingComponent from "../../shared/Heading.vue";
import DescriptionComponent from "../../shared/Description.vue";
import ServiceComponent from "./Service.vue";

export default {
  name: "services-section",
  components: { HeadingComponent, DescriptionComponent, ServiceComponent },
  setup() {
    const desc =
      "Custom IT services and solutions built specifically for your business.";
    const services = {
      "Data Centers": {
        name: "Data Centers",
        src: "data-center.gif",
      },
      "Cloud Computing": {
        name: "Cloud Computing",
        src: "service-4.gif",
      },
      "Cyber Security": {
        name: "Cyber Security",
        src: "scervice-11.gif",
      },
      "IT Management": {
        name: "IT Management",
        src: "service-12.gif",
      },
      "Intelligent Security": {
        name: "Intelligent Security",
        src: "service-14.gif",
      },
      "Networking Solutions": {
        name: "Networking Solutions",
        src: "service-7.gif",
      },
      "Software Management": {
        name: "Software Management",
        src: "service-6.gif",
      },
      "Automation Management": {
        name: "Automation Management",
        src: "service-2.gif",
      },
      "IT Services": {
        name: "IT Services",
        src: "sevice-1.gif",
      },
      "Network Penetration Testing": {
        name: "Network Penetration Testing",
        src: "service-8.gif",
      },
      "Hosting solutions": {
        name: "Hosting solutions",
        src: "scervice-10.gif",
      },
      "PCI DSS Compliance": {
        name: "PCI DSS Compliance",
        src: "service-9.gif",
      },
    };
    return { desc, services };
  },
};
</script>

<style scoped>
.title {
  color: var(--blue-color) !important;
}
.desc {
  font-size: 18pt;
}
</style>
