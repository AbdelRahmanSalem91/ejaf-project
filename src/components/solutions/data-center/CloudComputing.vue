<template>
  <div class="cloud-computing-page">
    <div class="land">
      <landing-component>
        Cloud computing <br />
        on-demand availability of <br />
        computer system resources
      </landing-component>
    </div>
    <div class="container">
      <info-section-left>
        <div class="info-desc col-lg-8">
          <h2 class="title-orange h1">Want to shift toward Cloud?</h2>
          <p class="desc">
            We are providers of a vast range of services, including composite
            solutions in either your or our data centers, that consist of
            combining data and cloud storage solutions to your devices.
          </p>
          <p class="desc">
            We allow you to experience the best of all IT environments for which
            we provide you access to all regional, provincial, or national cloud
            carriers along with access to distant offices, regional, provincial
            or national offsite locations or national and international cloud
            servers.
          </p>
        </div>
        <div class="info-img col-lg-4">
          <img
            class="w-100"
            src="../../../assets/data-center/cloud-computing/cloud-computing.png"
            alt="Explain Storage?"
          />
        </div>
      </info-section-left>
      <info-section-right>
        <div class="info-desc col-lg-8 pt-3">
          <h2 class="title-yellow h1">Cloud Computing</h2>
          <p class="desc">
            Now, what exactly is cloud computing? We provide services that
            enable our clients to deal, handle and reserve information to
            improve the manageability and decrease the supervision required
            eventually leading to better performance of applications.
          </p>
          <p class="desc">
            Data security is very crucial as it ensures that you can carry out
            your normal routine as usual even in times of adversity such as a
            natural calamity or a technical fault leading to power break down.
          </p>
        </div>
        <div class="info-img col-lg-4 mb-0 mb-sm-3 text-center">
          <img
            class="w-100"
            src="../../../assets/data-center/cloud-computing/data-centers-and-system-solutionsimg-2.png"
            alt="Network-Attached Storage (NAS)"
          />
        </div>
      </info-section-right>
      <div class="modifying mt-5 pt-5 text-center">
        <h2 class="title-blue h1">Finding Out Your Cloud Policy</h2>
        <p class="my-5">
          We will help you in defining the cloud policy that best serves your
          requirements and make sure you get the most out of this strategy.
        </p>
      </div>
      <div class="modifying mt-5 pt-5 text-center">
        <ul class="row">
          <li class="col-lg-4 mt-5">
            <i class="fa-solid fa-maximize fs-1 icon"></i>
            <h4 class="mt-5 h1 title-yellow">Scalability</h4>
            <p>
              Easily expand your IT capacity and functionality without buying
              hardware and facility space.
            </p>
          </li>
          <li class="col-lg-4 mt-5">
            <i class="fa-solid fa-lock fs-1 icon"></i>
            <h4 class="mt-5 h1 title-yellow">Security</h4>
            <p>
              Your business vital system and data will be protected from loss
              and even theft.
            </p>
          </li>
          <li class="col-lg-4 mt-5">
            <i class="fa-solid fa-shuffle fs-1 icon"></i>
            <h4 class="mt-5 h1 title-yellow">Flexibility and Access</h4>
            <p>
              Give your users greater flexibility to run apps and access data
              whenever and wherever needed.
            </p>
          </li>
          <li class="col-lg-4 mt-5">
            <i class="fa-regular fa-clock fs-1 icon"></i>
            <h4 class="mt-5 h1 title-yellow">Speed</h4>
            <p>Providing new services and functionality in a matter of hours</p>
          </li>
          <li class="col-lg-4 mt-5">
            <i class="fa-solid fa-umbrella fs-1 icon"></i>
            <h4 class="mt-5 h1 title-yellow">Data Protection</h4>
            <p>
              You’ll never have to worry about losing your data in the event of
              any disaster.
            </p>
          </li>
          <li class="col-lg-4 mt-5">
            <i class="fa-solid fa-dollar-sign fs-1 icon"></i>
            <h4 class="mt-5 h1 title-yellow">Cost Management</h4>
            <p>Pay only for the capacity you use.</p>
          </li>
        </ul>
      </div>
      <div class="modifying mt-5 pt-5 text-center">
        <h2 class="advantages h1">Advantages of Cloud Solutions</h2>
        <p class="my-2">
          By using cloud computing solutions, you will spend less and get more.
          Cloud solutions are mainly used because they allow a cut down of the
          expenditure. it also, it increases the effectiveness, coherency,
          dexterity, safety and faster acquisition of services.
        </p>
      </div>
      <contacts-section />
      <blog-section />
    </div>
  </div>
</template>

<script>
import "../solutions.css";
import LandingComponent from "../../shared/LandingComponent.vue";
import InfoSectionLeft from "../../shared/InfoSectionLeft.vue";
import InfoSectionRight from "../../shared/InfoSectionRight.vue";
import ContactsSection from "../../shared/contacts/Contacts.vue";
import BlogSection from "../../shared/blog/Blog.vue";

export default {
  name: "cloud-computing-component",
  components: {
    LandingComponent,
    InfoSectionLeft,
    InfoSectionRight,
    ContactsSection,
    BlogSection,
  },
};
</script>

<style scoped>
@media (min-width: 992px) {
  .land {
    background-image: url("../../../assets/data-center/cloud-computing/cloud.jpg");
  }
}
</style>
