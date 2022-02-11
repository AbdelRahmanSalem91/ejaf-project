<template>
  <div class="storage-page">
    <div class="land">
      <landing-component>
        Storage <br />
        Solutions In Iraq
      </landing-component>
    </div>
    <div class="container">
      <info-section-left>
        <div class="info-desc col-lg-8">
          <h2 class="title-orange h1">Explain Storage?</h2>
          <p class="desc">
            The designing and implementation of storage solutions are also done
            by Ejaf that comprises of software-defined storage, hybrid, FC SAN
            storage, all-flash array, IP Storage, Scale-out NAS, Object Storage
            and Mission-critical storage which can be combined with OS settings.
            We support our clients in their transition from their existing
            storage to modern storage platforms comfortably.
          </p>
        </div>
        <div class="info-img col-lg-4">
          <img
            class="w-100"
            src="../../../assets/data-center/storage/459-4594463_24-7-365-png-transparent-png-recovered.png"
            alt="Explain Storage?"
          />
        </div>
      </info-section-left>
      <div class="modifying mt-5 pt-5 text-center">
        <h2 class="title-yellow h1">Why choose network-based storage?</h2>
        <p class="mt-2 mb-5">
          Networked Data Storage Lets You Consolidate Your Data in One Place.
        </p>
        <ul class="row">
          <li class="col-lg-4 mt-5">
            <i class="fa-solid fa-lock fs-1 icon"></i>
            <h4 class="mt-5">Secure and reliable</h4>
            <p>
              Enterprise-brand hardware securely hosted in our data centers.
            </p>
          </li>
          <li class="col-lg-4 mt-5">
            <i class="fa-solid fa-dollar-sign fs-1 icon"></i>
            <h4 class="mt-5">Cost effective</h4>
            <p>
              A single investment in centralized storage, with unmetered
              bandwidth.
            </p>
          </li>
          <li class="col-lg-4 mt-5">
            <i class="fa-solid fa-sliders fs-1 icon"></i>
            <h4 class="mt-5">Centralized control</h4>
            <p>Centrally manage data security, access and storage hardware.</p>
          </li>
          <li class="col-lg-4 mt-5">
            <i class="fa-solid fa-database fs-1 icon"></i>
            <h4 class="mt-5">Secure data sharing</h4>
            <p>
              The productivity benefits of public cloud storage, with private
              security.
            </p>
          </li>
          <li class="col-lg-4 mt-5">
            <i class="fa-solid fa-share-from-square fs-1 icon"></i>
            <h4 class="mt-5">Consistent data</h4>
            <p>
              Share consolidated data between people, websites and databases
            </p>
          </li>
          <li class="col-lg-4 mt-5">
            <i class="fa-solid fa-sliders fs-1 icon"></i>
            <h4 class="mt-5">Simple management</h4>
            <p>
              That can allow companies to save time and even reduce the number
              of IT workers needed.
            </p>
          </li>
        </ul>
      </div>
      <div class="modifying mt-5 pt-5 text-center">
        <h2 class="title-blue h1">Storage Options</h2>
        <p class="my-5">
          The followings are some of the customized alternatives for you by our
          storage professionals.
        </p>
      </div>
      <info-section-right>
        <div class="info-desc col-lg-8 pt-3">
          <h2 class="title-yellow h1">Network-Attached Storage (NAS)</h2>
          <h4>Sharing Unified Data Between Web Servers.</h4>
          <p class="desc">
            A NAS architecture permits you to form a centralized storage server
            and attach multiple app servers to it by having a copy of your data.
            Resulting in the same data across each of the app servers.
          </p>
        </div>
        <div class="info-img col-lg-4 mb-0 mb-sm-3 text-center">
          <img
            class="w-100"
            src="../../../assets/data-center/storage/nas.jpg"
            alt="Network-Attached Storage (NAS)"
          />
        </div>
      </info-section-right>
      <info-section-left>
        <div class="info-desc col-lg-8 mt-5">
          <h2 class="title-yellow h1">Storage Area Network (SAN)</h2>
          <h4 class="title-green">
            Powerful Centralized Storage With Fast I/O.
          </h4>
          <p class="desc">
            A Storage Area Network (SAN) furnishes a repetitious arrangement of
            disks discerned as a particular volume by the servers connected to
            it for vast accessibility and rapid disk I/O operation than NAS.
            SAN’s are common virtualization clusters used for procuring
            centralized access to I/O intensive databases.
          </p>
        </div>
        <div class="info-img col-lg-4">
          <img
            class="w-100"
            src="../../../assets/data-center/storage/san.png"
            alt="Storage Area Network (SAN)"
          />
        </div>
      </info-section-left>
      <info-section-right>
        <div class="info-desc col-lg-8 pt-3">
          <h2 class="title-yellow h1">High Availability (HA) Cluster</h2>
          <h4 class="title-green">The Ultimate In High Availability</h4>
          <p class="desc">
            An HA Cluster is a combination of two or more of each service, like
            app, ﬁle and database servers. Traffic is disseminated by a load
            balancer that also guarantees failover in the occurrence of hardware
            or application loss.
          </p>
        </div>
        <div class="info-img col-lg-4 text-center">
          <img
            class="w-100"
            src="../../../assets/data-center/storage/ha.jpg"
            alt="High Availability (HA) Cluster"
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
  name: "storage-component",
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
    background-image: url("../../../assets/data-center/storage/storage.jpg");
  }
}
</style>
