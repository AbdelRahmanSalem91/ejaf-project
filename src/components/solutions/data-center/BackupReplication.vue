<template>
  <div class="backup-and-replication-page">
    <div class="land">
      <landing-component>
        Data Centers in Iraq <br />
        Goodbye to Conventional Data Centers <br />
      </landing-component>
    </div>
    <div class="container">
      <info-section-left>
        <div class="info-desc col-lg-8">
          <h2 class="title-orange h1 mb-3 mt-5 pt-5">
            Backup Specialist Ejaf Technology
          </h2>
          <h4 class="my-3">
            Disaster doesn’t follow a schedule, it can happen anywhere, anytime.
          </h4>
          <p class="desc my-3">
            This is why our team analyzes the IT environment you are currently
            operating, in order to assess the Scooping maintenance and
            implementation of your business continuity and disaster recovery
            plan.
          </p>
        </div>
        <div class="info-img col-lg-4">
          <img
            class="w-100"
            src="../../../assets/data-center/backup-and-replication/recovery-computer.png"
            alt="Explain Storage?"
          />
        </div>
      </info-section-left>
      <div class="modifying mt-5 pt-5 text-center">
        <h2 class="h1">What if the company loses all of its information?</h2>
        <p class="my-5">
          Information, numbers and statistics these are indeed the most
          important and crucial assets to your company. Loss of this information
          can lead to various negative impacts such as disappointed customers,
          decreased sales, enhanced expenditure, and inefficient workers.
        </p>
      </div>
      <div class="modifying mt-5 text-center">
        <ul class="row">
          <li class="col-lg-4 mt-5">
            <i class="fa-regular fa-clock fs-1 icon"></i>
            <p class="mt-3">
              Companies <strong>lose about 300 hours annually</strong> through
              unplanned downtimes.
            </p>
          </li>
          <li class="col-lg-4 mt-5">
            <i class="fa-solid fa-gears fs-1 icon"></i>
            <p class="mt-3">
              <strong>48 percent</strong> of businesses (tech-related)
              experience performance issues daily.
            </p>
          </li>
          <li class="col-lg-4 mt-5">
            <i class="fa-solid fa-exclamation fs-1 icon"></i>
            <p class="mt-3">
              <strong>60 percent</strong> of companies said human error is the
              most common cause of downtime incidents.
            </p>
          </li>
        </ul>
      </div>
      <info-section-right>
        <div class="info-desc col-lg-8 pt-3">
          <h2 class="title-yellow h1">Recovery & Backup Solutions</h2>
          <p><strong>Are you ready to risk it all?</strong></p>
          <p class="desc">
            The answer is of course not!!! No business would want a downfall. It
            already takes a lot to establish a business and get it running, so
            no one would want to ruin it all.
          </p>
          <p class="desc">
            But don’t worry we won’t let that happen. Here at Ejaf, we offer you
            multiple services such as Network Attached Storage (NAS) to Storage
            Area Networks(SAN) that allows radical backups, disaster recovery
            and storage solutions. Our incredible IT infrastructure lends aid to
            both visual and physical environments and allows you to recover from
            any natural or technical dilemma.
          </p>
        </div>
        <div class="info-img col-lg-4 mb-0 mb-sm-3 text-center">
          <img
            class="w-100"
            src="../../../assets/data-center/backup-and-replication/backup-archive.png"
            alt="Recovery & Backup Solutions"
          />
        </div>
      </info-section-right>
      <info-section-left>
        <div class="info-desc col-lg-8 pt-3">
          <h2 class="title-green h1">Benefits of Backup Solutions</h2>
          <p>The main services include and not limitd to:</p>
          <ul>
            <li>
              <p class="desc">Automatic protection and backup system.</p>
            </li>
            <li>
              <p class="desc">Decrease human-related risk factors.</p>
            </li>
            <li>
              <p class="desc">Enable quicker recovery of the data.</p>
            </li>
            <li>
              <p class="desc">
                Mitigate economical losses as a result of the loss of crucial
                commercial restoration.
              </p>
            </li>
            <li>
              <p class="desc">
                Simpler restoration of data in case of any system breakdown.
              </p>
            </li>
            <li>
              <p class="desc">Storage of data in real-time.</p>
            </li>
          </ul>
        </div>
        <div class="info-img col-lg-4 mb-0 mb-sm-3 text-center">
          <img
            class="w-100"
            src="../../../assets/data-center/backup-and-replication/backup-recovery-ejaf-tech-canada.jpg"
            alt="Recovery & Backup Solutions"
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
  name: "backup-and-replication",
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
    background-image: url("../../../assets/data-center/backup-and-replication/backup.jpg");
  }
}
</style>
