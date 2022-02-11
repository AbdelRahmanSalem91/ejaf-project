<template>
  <div class="data-center">
    <div class="land">
      <landing-component>
        Data Centers in Iraq <br />
        Goodbye to Conventional Data Centers
      </landing-component>
    </div>
    <div class="container">
      <info-section-left>
        <div class="info-desc col-lg-8">
          <h2 class="title-orange h1">How to Create a Data Center?</h2>
          <p class="desc">
            After taking into account your company’s needs and setting an
            infrastructure that is suitable for it, we orient toward furnishing
            the best IT framework. Not only will we evaluate your business
            procedure supervision model but also tailor to govern you in
            specifying the best software and hardware preferences while
            supporting you in enforcing the essential IT infrastructure.
            Moreover, we will capitalize on a step to step difficult free
            transition from your previous infrastructure toward the new one.
          </p>
        </div>
        <div class="info-img col-lg-4">
          <img
            class="w-100"
            src="../../../assets/data-center/data-center/data-center.png"
            alt="How to Create a Data Center?"
          />
        </div>
      </info-section-left>
      <info-section-right>
        <div class="info-desc col-lg-8 pt-3">
          <h2 class="title-yellow h1">Data centers in Iraq</h2>
          <p class="desc">
            Today’s competitive world mandates a much more advanced approach
            than the traditional data center. A modular-based data center will
            be the most promising alternative to augment your delivery duties
            from your core data centers. Your service delivery model will be
            well adapted toward amassing the extraordinarily perceptive data,
            cost containment, and a superb level of accommodation.
          </p>
        </div>
        <div class="info-img col-lg-4 mb-0 mb-sm-3 text-center">
          <img
            class="w-100"
            src="../../../assets/data-center/data-center/data.png"
            alt="Data centers in Iraq"
          />
        </div>
      </info-section-right>
      <div class="modifying mt-5 pt-5 text-center">
        <h2 class="title-blue h1">Design and Implement Solutions</h2>
        <p class="my-5">
          However, consenting for a new data center or colocation center can
          damage every sector of the firm. It calls for supervision in the
          migration of hardware, database, client software, networks along with
          network scheduling, execution, and testing for both internal networks
          as well as external WANs, Internet, and telephone.
        </p>
      </div>
      <info-section-right>
        <div class="info-desc col-lg-8 mt-5">
          <h2 class="title-green h1">
            Supervision in the Migration of Hardware
          </h2>
          <p class="desc">
            Practical and profitable migration urges intelligent forethought
            with perfectly consistent implementation. Supervised with reasonable
            effortless and amenable migration that will benefit your vaults data
            center team.
          </p>
        </div>
        <div class="info-img col-lg-4">
          <img
            class="w-100"
            src="../../../assets/data-center/data-center/3-design-and-implement-solutions-2.png"
            alt="Supervision in the Migration of Hardware"
          />
        </div>
      </info-section-right>
      <info-section-left>
        <div class="info-desc col-lg-8 pt-3">
          <h2 class="title-yellow h1">Upgraded to the New Standards</h2>
          <p class="desc">
            It is a major responsibility to keep an eye on the achievements of
            the data center and making sure it is upgraded to the new standards
            of the business world. Modification in automated technology covering
            all the remedial records, directing weathercasts, movies, videos and
            much more are programmed with modern digital technology. IT
            administrators are compelled to contemplate data management
            procedures in order to compose massive amounts of unorganized data.
          </p>
        </div>
        <div class="info-img col-lg-4 text-center">
          <img
            class="w-100"
            src="../../../assets/data-center/data-center/unnamed.png"
            alt="Upgraded to the New Standards"
          />
        </div>
      </info-section-left>
      <info-section-right>
        <div class="info-desc col-lg-8">
          <h2 class="title-orange h1">
            Build Solitary Optimized Computing Batches
          </h2>
          <p class="desc">
            From midsize industries to big investment clients across various
            arenas like Windows, Linux, Unix & VMware, you can benefit from our
            server solutions which are correlated to distinct applications
            workload. We create different hardware and software defined systems
            to build solitary optimized computing batches from numerous
            elements. The SharePoint and Lync provide integrated archiving.
            Also, we also help the System Applications and Products in data
            management the business operations.
          </p>
        </div>
        <div class="info-img col-lg-4">
          <img
            class="w-100"
            src="../../../assets/data-center/data-center/3-design-and-implement-solutions-1.png"
            alt="Build Solitary Optimized Computing Batches"
          />
        </div>
      </info-section-right>
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
  name: "data-center",
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
    background-image: url("../../../assets/data-center/data-center/data-center2.jpg");
  }
}
</style>
