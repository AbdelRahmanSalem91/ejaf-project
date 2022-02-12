import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const AboutUs = () =>
  import(/* webpackChunkName: "AboutUs" */ "@/views/AboutUs.vue");
const ContactUs = () =>
  import(/* webpackChunkName: "ContactUs" */ "@/views/ContactUs.vue");
const WanSolutionPage = () =>
  import(
    /* webpackChunkName: "WanSolutionPage" */ "@/views/networking-solutions/WanSolutionPage.vue"
  );
const ItServicesPage = () =>
  import(
    /* webpackChunkName: "ItServicesPage" */ "@/components/ItServsicePage.vue"
  );
const EnterpriseNetwork = () =>
  import(
    /* webpackChunkName: "EnterpriseNetwork" */ "@/views/networking-solutions/EnterpriseNetworkPage.vue"
  );
const CollaborationSolutionsPage = () =>
  import(
    /* webpackChunkName: "CollaborationSolutionsPage" */ "@/views/networking-solutions/CollaborationPage.vue"
  );
const DataCenterPage = () =>
  import(
    /* webpackChunkName: "DataCenterPage" */ "@/views/data-center/DataCenterPage.vue"
  );
const VirtualizationPage = () =>
  import(
    /* webpackChunkName: "VirtualizationPage" */ "@/views/data-center/VirtualizationPage.vue"
  );
const StoragePage = () =>
  import(
    /* webpackChunkName: "StoragePage" */ "@/views/data-center/StoragePage.vue"
  );
const CloudComputingPage = () =>
  import(
    /* webpackChunkName: "CloudComputingPage" */ "@/views/data-center/CloudComputingPage.vue"
  );
const BackupReplication = () =>
  import(
    /* webpackChunkName: "BackupReplication" */ "@/views/data-center/BackupReplication.vue"
  );
const DisasterRecovery = () =>
  import(
    /* webpackChunkName: "DisasterRecovery" */ "@/views/data-center/DisasterRecovery.vue"
  );
const ItSecurityPage = () =>
  import(
    /* webpackChunkName: "ItSecurityPage" */ "@/views/it-software-management/ItSecurityPage.vue"
  );
const NetworkPerformancePage = () =>
  import(
    /* webpackChunkName: "NetworkPerformancePage" */ "@/views/it-software-management/NetworkPerformancePage.vue"
  );
const ValmailDefendPage = () =>
  import(
    /* webpackChunkName: "const ValmailDefendPage = () =>
" */ "@/views/cyber-security/ValmailDefendPage.vue"
  );

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
