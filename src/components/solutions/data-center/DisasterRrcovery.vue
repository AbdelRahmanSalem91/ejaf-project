<template>
  <div class="disaster-recovery">
    <div class="land">
      <landing-component>
        Disaster Recovery Solutions <br />
        Data Backup and Disaster Recovery Solutions
      </landing-component>
    </div>
    <div class="container">
      <info-section-left>
        <div class="info-desc col-lg-8">
          <h2 class="title-orange h1">
            What do you propose to do when an unexpected disaster happens?
          </h2>
          <p class="desc">
            Once the data is lost, it is very difficult to reproduce it in its
            original form. Hence, it is very important to secure your data as
            quickly as possible. The availability of crucial data and continuous
            uptime has become an urgency rather than an optional requirement.
          </p>
        </div>
        <div class="info-img col-lg-4">
          <img
            class="w-100"
            src="../../../assets/data-center/disaster-recovery/disaster-recovery-solutionsimg-1.png"
            alt="What do you propose to do when an unexpected disaster happens?"
          />
        </div>
      </info-section-left>
      <info-section-right>
        <div class="info-desc col-lg-8 pt-3">
          <h2 class="title-yellow h1">
            A better Approach to Disaster Recovery
          </h2>
          <p class="desc">
            Our managed Disaster Recovery services, deliver certified recoveries
            of complete solutions, ready for users to implement in case of a
            disaster. To be able to certify and therefore guarantee recoveries,
            all of our solutions are automatically configured to work flawlessly
            and are tested to application-level on a daily basis to be certain
            they will work if needed.
          </p>
        </div>
        <div class="info-img col-lg-4 mb-0 mb-sm-3 text-center">
          <img
            class="w-100"
            src="../../../assets/data-center/disaster-recovery/dr-bc-body-1.png"
            alt="A better Approach to Disaster Recovery"
          />
        </div>
      </info-section-right>
      <info-section-right>
        <div class="info-desc col-lg-8 pt-3">
          <h2 class="title-green h1">How can we help?</h2>
          <p class="desc">
            Our disaster recovery services enable you to get back to work as
            soon as possible. We authorize and ensure data recoveries because
            all of our solutions are automatically designed to work efficiently
            and have been tested and tried out to get the job done whenever they
            are needed.
          </p>
        </div>
        <div class="info-img col-lg-4 mb-0 mb-sm-3 text-center">
          <img
            class="w-100"
            src="../../../assets/data-center/disaster-recovery/it-business-continuity2x.png"
            alt="How can we help?"
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
  name: "disaster-recovery",
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
    background-image: url("../../../assets/data-center/disaster-recovery/disaster-recovery.jpg");
  }
}
</style>
