<template>
  <div class="virtualization-page">
    <div class="land">
      <landing-component>
        Virtualization <br />
        Business Renovation
      </landing-component>
    </div>
    <div class="container">
      <info-section-left>
        <div class="info-desc col-lg-8">
          <h2 class="title-orange h1">Define Virtualization?</h2>
          <p class="desc">
            Virtualization is not new to organizations as it is a very
            fundamental technology. Running and cooling the server have become
            exceptionally expensive these days. Companies look up to centralize
            many server applications on to a single physical server which
            apparently seems to be quite difficult for them, considering the
            capabilities of intel / Risc. However, using Oracle, Exchange and
            the domain-specific language SQL has proven to be a solution.
          </p>
        </div>
        <div class="info-img col-lg-4">
          <img
            class="w-100"
            src="../../../assets/data-center/virtualization/unnamedjj.png"
            alt="Define Virtualization?"
          />
        </div>
      </info-section-left>
      <info-section-right>
        <div class="info-desc col-lg-8 pt-3">
          <h2 class="title-yellow h1">
            Business Renovation using Virtualization
          </h2>
          <p class="desc">
            Virtualization enhances the proficiency and accessibility of IT
            reserves and applications. You can now operate multiple virtual
            machines on each physical machine and skillfully eradicate the old
            “one server, one application” standard.
          </p>
        </div>
        <div class="info-img col-lg-4 mb-0 mb-sm-3 text-center">
          <img
            class="w-100"
            src="../../../assets/data-center/virtualization/data-center--.png"
            alt="Business Renovation using Virtualization"
          />
        </div>
      </info-section-right>
      <div class="modifying mt-5 pt-5 text-center">
        <h2 class="title-blue h1">
          Benefits of Server Virtualization in Business
        </h2>
        <ul class="my-5">
          <li>
            <p>
              Facilitates management and employs less hardware which turns out
              to be less costly.
            </p>
          </li>
          <li>
            <p>Ensures the matchless utilization of your IT enterprises</p>
          </li>
          <li>
            <p>
              Provides infrastructure administration with limited service admin
              aids
            </p>
          </li>
          <li>
            <p>
              Guarantees data safety by strong tie-ups and tragedy comeback
              solutions for virtualization.
            </p>
          </li>
          <li>
            <p>
              Assemble Geo-Redundancy, high availability and fault tolerance for
              higher uptime.
            </p>
          </li>
        </ul>
      </div>
      <info-section-right>
        <div class="info-desc col-lg-8 mt-5">
          <h2 class="title-green h1">
            Desktop Virtualization will help your business To
          </h2>
          <ul class="desc">
            <li>
              <p>
                Enforce a productive work environment where employees can be
                reached from anywhere at any time in any device
              </p>
            </li>
            <li>
              <p>Allow you to reach your common desktop from any appliance</p>
            </li>
            <li>
              <p>
                Facilitate centralized supervision and captivity of desktops
              </p>
            </li>
            <li>
              <p>
                Allow distant employees to access applications and data quickly
              </p>
            </li>
            <li>
              <p>
                Be more affordable as any device can be used instead of
                exorbitant desktop hardware
              </p>
            </li>
            <li>
              <p>
                Establishing recent applications and authorizing the users to
                access them while conserving high service levels
              </p>
            </li>
          </ul>
        </div>
        <div class="info-img col-lg-4">
          <img
            class="w-100"
            src="../../../assets/data-center/virtualization/desktop-virtualization.png"
            alt="Desktop Virtualization will help your business To"
          />
        </div>
      </info-section-right>
      <info-section-left>
        <div class="info-desc col-lg-8 pt-3">
          <h2 class="title-yellow h1">Advantages of Virtualization</h2>
          <ul class="desc">
            <li>
              <p>Abolish downtimes.</p>
            </li>
            <li>
              <p>Provide immediate resources and applications.</p>
            </li>
            <li>
              <p>Assemble a Software-Defined Data Center.</p>
            </li>
            <li>
              <p>
                Uplift IT practicality, efficiency, skillfulness, and
                responsiveness.
              </p>
            </li>
            <li>
              <p>Ease the data center direction.</p>
            </li>
            <li>
              <p>Curtail capital and operating expenses.</p>
            </li>
            <li>
              <p>
                Provide contingency plans and solutions for disaster recovery.
              </p>
            </li>
          </ul>
        </div>
        <div class="info-img col-lg-4 text-center">
          <img
            class="w-100"
            src="../../../assets/data-center/virtualization/virtualizationimg-3.png"
            alt="Advantages of Virtualization"
          />
        </div>
      </info-section-left>
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
  name: "virtualization-component",
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
    background-image: url("../../../assets/data-center/virtualization/virtualization.jpg");
  }
}
</style>
