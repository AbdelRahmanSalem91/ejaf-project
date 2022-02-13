<template>
  <ul
    class="dropdown-menu drop-menu text-uppercase nested-menu-lvl1"
    aria-labelledby="navbarDropdownMenuLink"
  >
    <erp-solution />
    <volume-licensing />
    <networking-solutions />
    <data-center />
    <it-software-management />
    <cyber-security />
    <intell-security />
    <software-management />
    <cloud-solution />
    <security-solutions />
  </ul>
</template>

<script>
import CloudSolution from "./solutions/Cloud.vue";
import CyberSecurity from "./solutions/CyberSecurity.vue";
import DataCenter from "./solutions/DataCenter.vue";
import ErpSolution from "./solutions/ERP.vue";
import IntellSecurity from "./solutions/IntellSecurity.vue";
import ItSoftwareManagement from "./solutions/itSoftwareManagement.vue";
import NetworkingSolutions from "./solutions/NetworkingSolutions.vue";
import SecuritySolutions from "./solutions/Security.vue";
import SoftwareManagement from "./solutions/SoftwareManagement.vue";
import VolumeLicensing from "./solutions/VolumeLicensing.vue";
export default {
  components: {
    NetworkingSolutions,
    DataCenter,
    ItSoftwareManagement,
    CyberSecurity,
    IntellSecurity,
    SoftwareManagement,
    CloudSolution,
    SecuritySolutions,
    ErpSolution,
    VolumeLicensing,
  },
  name: "solutions-menu",
};
</script>
