<template>
  <p class="info-page h4 mt-5 pt-5 text-center">
    Technology Partners Trading Establishment (TP) founded in 2007. We set out
    as a Systems integrator and IT solutions providers and reseller in the
    kingdom of Saudi Arabia and Egypt Countries, focusing on IT infrastructure
    solutions, Web Design & Development , Application Development & Integration
    , HW& Storage solutions ,Networking solutions , IT Consultancy services , IT
    Outsourcing , Service Management and IT Asset Management.
  </p>
  <div class="info-page_values text-center">
    <h2 class="title mt-5 pt-5">Our culture and values</h2>
    <div class="row">
      <div class="value col-lg-6" v-for="value in values" :key="value">
        <h4 class="value-title mt-5 mb-3">{{ value.name }}</h4>
        <div class="img-container w-50 mx-auto">
          <img
            :src="require('../../assets/about-us/' + value.img)"
            :alt="value.name"
          />
        </div>
        <p class="desc my-3">{{ value.desc }}</p>
      </div>
    </div>
  </div>
  <ContactsSection />
  <BlogSection />
</template>

<script>
import BlogSection from "../shared/blog/Blog.vue";
import ContactsSection from "../shared/contacts/Contacts.vue";
export default {
  components: {
    ContactsSection,
    BlogSection,
  },
  data() {
    return {
      values: [
        {
          name: "Passion",
          img: "passion.png",
          desc: "Everything we do at TP we do with passion—for our Customers, our communities and our organization.",
        },
        {
          name: "Empowerment",
          img: "empowerment.png",
          desc: "We deﬁne ourselves by our ability to deliver results. That means taking the initiative to ﬁnd new ways to get the job done. We encourage end-to-end ownership, responsibility, accountability and recognition.",
        },
        {
          name: "Transparency",
          img: "transparency.jpg",
          desc: "TP is built on a foundation of open and honest communication. We believe the only way to ensure success for our Customers and ourselves is to operate in a fully transparent manner. We encourage associates to listen to ideas and share feedbacks.",
        },
        {
          name: "Collaboration",
          img: "collaboration.png",
          desc: "A cornerstone of Cognizant's success is the interconnectivity of our associates and teams across business units. We believe that the better we share knowledge and work together, the more we can achieve for our Customers and ourselves.",
        },
        {
          name: "Customer focus",
          img: "cfocus.jpeg",
          desc: "Our customers’ delight powers our success, and exceeding customer expectations is our belief. No matter how big or small a project is, it will be delivered with the highest quality.",
        },
        {
          name: "Integrity",
          img: "integrity.jpg",
          desc: "We never compromise on integrity, and we take every decision accordingly. Integrity means always doing the right things,so that we treat our colleagues and Customers with respect and value their opinions.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.value-title {
  color: var(--red-color);
}
.img-container img {
  width: 250px;
  height: 250px;
  transition: all 0.3s;
}
.img-container img:hover {
  transform: scale(1.1, 1.1);
}
</style>
