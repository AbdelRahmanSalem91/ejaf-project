import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import AboutUs from "@/views/AboutUs.vue";
import ContactUs from "@/views/ContactUs.vue";
import WanSolutionPage from "@/views/networking-solutions/WanSolutionPage.vue";
import ItServicesPage from "@/components/ItServsicePage.vue";
import EnterpriseNetwork from "@/views/networking-solutions/EnterpriseNetworkPage.vue";
import CollaborationSolutionsPage from "@/views/networking-solutions/CollaborationPage.vue";
import DataCenterPage from "@/views/data-center/DataCenterPage.vue";
import VirtualizationPage from "@/views/data-center/VirtualizationPage.vue";
import StoragePage from "@/views/data-center/StoragePage.vue";
import CloudComputingPage from "@/views/data-center/CloudComputingPage.vue";
import BackupReplication from "@/views/data-center/BackupReplication.vue";
import DisasterRecovery from "@/views/data-center/DisasterRecovery.vue";
import ItSecurityPage from "@/views/it-software-management/ItSecurityPage.vue";
import NetworkPerformancePage from "@/views/it-software-management/NetworkPerformancePage.vue";
import ValmailDefendPage from "@/views/cyber-security/ValmailDefendPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: AboutUs,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactUs,
  },
  {
    path: "/wan-optimization",
    name: "Wan-Optimization",
    component: WanSolutionPage,
  },
  {
    path: "/enterprise-network",
    name: "Enterprise-Network",
    component: EnterpriseNetwork,
  },
  {
    path: "/collaboration-solutions",
    name: "Collaboration-Solutions",
    component: CollaborationSolutionsPage,
  },
  {
    path: "/data-center",
    name: "Data-Center",
    component: DataCenterPage,
  },
  {
    path: "/virtualization",
    name: "Virtualization",
    component: VirtualizationPage,
  },
  {
    path: "/storage",
    name: "Storage",
    component: StoragePage,
  },
  {
    path: "/cloud-computing",
    name: "Cloud-Computing",
    component: CloudComputingPage,
  },
  {
    path: "/backup-and-replication",
    name: "Backup-And-Replication",
    component: BackupReplication,
  },
  {
    path: "/disaster-recovery",
    name: "Disaster-Recovery",
    component: DisasterRecovery,
  },
  {
    path: "/it-security-management",
    name: "it-security-management",
    component: ItSecurityPage,
  },
  {
    path: "/network-and-server-performance-management",
    name: "network-and-server-performance-management",
    component: NetworkPerformancePage,
  },
  {
    path: "/valimail-defend",
    name: "valimail-defend",
    component: ValmailDefendPage,
  },
  {
    path: "/it-services",
    name: "It-Services",
    component: ItServicesPage,
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "Home" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
