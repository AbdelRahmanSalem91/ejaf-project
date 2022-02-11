<template>
  <div class="enterprise-network">
    <div class="land">
      <landing-component>
        Enterprise Network Solutions <br />
        EJAF provides an enterprise <br />
        network solution in Iraq
      </landing-component>
    </div>
    <div class="container">
      <info-section-left>
        <div class="info-desc col-lg-8">
          <h2 class="title-orange h1">Data Center Networks</h2>
          <p class="desc">
            When it comes to data center networks, they are the most crucial
            part of the networking to a data center. These networks act as a
            connection between all the constituents of data resources.
            Datacenter networks must be logical, systematic, climbable and sharp
            enough to manage the increasing demand for computing. High optimum
            power by enterprises can be acquired easily by increasing the use of
            data center networks. EJAF provides an enterprise network solution
            by designing and executing many systems, including data centers and
            local area networks and the sites quickly recovered from any mishap.
          </p>
        </div>
        <div class="info-img col-lg-4">
          <img
            class="w-100"
            src="../../../assets/networking/enterprise-network/enterprise-network-solutionsimg-1.png"
            alt="Data Center Networks"
          />
        </div>
      </info-section-left>
      <info-section-right>
        <div class="info-desc col-lg-8 pt-3">
          <h2 class="title-yellow h1">Campus Area Network</h2>
          <p class="desc">
            It is a network used to create a link amid different buildings. It
            has many components, but mainly it consists of two [LAN] within a
            specific location. Used in many different places. For instance, at
            schools and college campuses, at industrial areas, at army and
            military campuses, at various organizational campuses and many more
            locations. EJAF is very beneficial as it provides enterprise network
            solutions and ways to design and execute huge campus area networks,
            which in return upgrades, secures the system. Also, it makes sure
            that this network has high availability.
          </p>
        </div>
        <div class="info-img col-lg-4 mb-0 mb-sm-3 text-center">
          <img
            class="w-100"
            src="../../../assets/networking/enterprise-network/enterprise-network-solutionsimg-2.png"
            alt="Campus Area Network"
          />
        </div>
      </info-section-right>
      <info-section-left>
        <div class="info-desc col-lg-8">
          <h2 class="title-green h1">Wi-Fi and Its Potency</h2>
          <p class="desc">
            Wi-Fi can be defined as the modern technique and an enterprise
            network solution that connects a massive number of devices at
            several locations. It is mainly used in homes, offices and
            organizations. Moreover, Wireless connections lower the costs of
            expenditure and remove the difficulties one has to face when using
            cables for connectivity. EJAF enables the configuration, sending a
            safe remote system for information and voice traffic that flawlessly
            coordinates with center system empowering portability to clients.
          </p>
        </div>
        <div class="info-img col-lg-4">
          <img
            class="w-100"
            src="../../../assets/networking/enterprise-network/enterprise-network-solutionsimg-3.png"
            alt="Wi-Fi and Its Potency"
          />
        </div>
      </info-section-left>
      <info-section-right>
        <div class="info-desc col-lg-8 pt-3">
          <h2 class="title-yellow h1">Network and Its Supervision</h2>
          <p class="desc">
            Network supervision means the scheme that is required to handle
            different computer networks. EJAF, by working with its partners,
            provides an enterprise network solution and an opportunity to
            oversee the functioning networks and control it from centralized
            configurations.
          </p>
        </div>
        <div class="info-img col-lg-4 text-center">
          <img
            class="w-100"
            src="../../../assets/networking/enterprise-network/enterprise-network-solutionsimg-4.png"
            alt="Network and Its Supervision"
          />
        </div>
      </info-section-right>
      <info-section-left>
        <div class="info-desc col-lg-8">
          <h2 class="title-green h1">Software Defined Networks</h2>
          <p class="desc">
            It is a modern technique extracted by administrators of a network,
            which helps manage all the network services through a reflection of
            more elevated level usefulness. EJAF is the system integrator that
            provides beneficial enterprise network solutions by allowing the
            complete execution of software-defined networks spanning the
            structure and its practice.
          </p>
        </div>
        <div class="info-img col-lg-4">
          <img
            class="w-100"
            src="../../../assets/networking/enterprise-network/enterprise-network-solutionsimg-5.png"
            alt="Software Defined Networks"
          />
        </div>
      </info-section-left>
      <info-section-right>
        <div class="info-desc col-lg-8 pt-3">
          <h2 class="title-yellow h1">Unified Communication Solutions</h2>
          <p class="desc">
            A unified communication solution embeds deeply into the basic and
            advanced organization functions. For instance, present information,
            chats and internal protocols of communication. It also highlights
            the firm’s capability of augmentation of portability like web
            conferencing through video and audio. Instant sharing of work data
            and information, whiteboards and controlled call. Not to mention,
            incorporated phone messages, email and tele-copying. We at Ejaf have
            a wide range of abilities to coordinate various methods of
            communications into different system stages that will help in
            empowering the clients to accomplish unified communications.
          </p>
        </div>
        <div class="info-img col-lg-4 text-center">
          <img
            class="w-100"
            src="../../../assets/networking/enterprise-network/enterprise-network-solutionsimg-6.png"
            alt="Wan Accelerator"
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
  name: "enterprise-network",
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
    background-image: url("../../../assets/networking/enterprise-network/enterprise-network-solutions.jpg");
  }
}
</style>
