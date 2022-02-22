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
    /* webpackChunkName: "ValmailDefendPage" */ "@/views/cyber-security/ValmailDefendPage.vue"
  );
const EnterpriseSecurityPage = () =>
  import(
    /* webpackChunkName: "EnterpriseSecurityPage" */ "@/views/cyber-security/EnterpriseSecurityPage.vue"
  );
const AccessControlPage = () =>
  import(
    /* webpackChunkName: "AccessControlPage" */ "@/views/intelligent-security/AccessControlPage.vue"
  );
const FireAlarmPage = () =>
  import(
    /* webpackChunkName: "FireAlarmPage" */ "@/views/intelligent-security/FireAlarmPage.vue"
  );
const IntrusionDetectionPage = () =>
  import(
    /* webpackChunkName: "IntrusionDetectionPage" */ "@/views/intelligent-security/IntrusionDetectionPage.vue"
  );
const IpCctvPage = () =>
  import(
    /* webpackChunkName: "IpCctvPage" */ "@/views/intelligent-security/IpCctvPage.vue"
  );
const EjaferpPage = () =>
  import(
    /* webpackChunkName: "IpCctvPage" */ "@/views/software-management/EjafErpPage.vue"
  );
const OdooErpPage = () =>
  import(
    /* webpackChunkName: "OdooErpPage" */ "@/views/software-management/OdooErpPage.vue"
  );
const OracleFusionErpPage = () =>
  import(
    /* webpackChunkName: "OracleFusionErpPage" */ "@/views/software-management/OracleFusionErpPage.vue"
  );
const ItServicesPage = () =>
  import(
    /* webpackChunkName: "ItServicesPage" */ "@/views/services/ItServicesPage.vue"
  );
const NetworkPenetrationPage = () =>
  import(
    /* webpackChunkName: "NetworkPenetrationPage" */ "@/views/services/NetworkPenetrationPage.vue"
  );
const HostingSolutionsPage = () =>
  import(
    /* webpackChunkName: "HostingSolutionsPage" */ "@/views/services/HostingSolutionsPage.vue"
  );
const OracleErpBusinessPage = () =>
  import(
    /* webpackChunkName: "OracleErpBusinessPage" */ "@/views/erp/OracleErpBusinessPage.vue"
  );
const OracleCloudPage = () =>
  import(
    /* webpackChunkName: "OracleCloudPage" */ "@/views/erp/OracleCloudPage.vue"
  );
const MicrosoftProductsPage = () =>
  import(
    /* webpackChunkName: "MicrosoftProductsPage" */ "@/views/volume-licensing/MicrosoftProductsPage.vue"
  );
const MicrosoftCloudPage = () =>
  import(
    /* webpackChunkName: "MicrosoftCloudPage" */ "@/views/volume-licensing/MicrosoftCloudPage.vue"
  );
const MicrosoftCspPage = () =>
  import(
    /* webpackChunkName: "MicrosoftCspPage" */ "@/views/volume-licensing/MicrosoftCspPage.vue"
  );
const MicrosoftAzurePage = () =>
  import(
    /* webpackChunkName: "MicrosoftAzurePage" */ "@/views/volume-licensing/MicrosoftAzurePage.vue"
  );
const PrivPublCloudPage = () =>
  import(
    /* webpackChunkName: "PrivPublCloudPage" */ "@/views/cloud-solutions/PrivPublCloudPage.vue"
  );
const ManagedServicesPage = () =>
  import(
    /* webpackChunkName: "ManagedServicesPage" */ "@/views/cloud-solutions/ManagedServicesPage.vue"
  );
const CloudApplicationsPage = () =>
  import(
    /* webpackChunkName: "CloudApplicationsPage" */ "@/views/cloud-solutions/CloudApplicationsPage.vue"
  );
const NetCloudSecPage = () =>
  import(
    /* webpackChunkName: "NetCloudSecPage" */ "@/views/security-solutions/NetCloudSecPage.vue"
  );
const ApplicationSecPage = () =>
  import(
    /* webpackChunkName: "ApplicationSecPage" */ "@/views/security-solutions/ApplicationSecPage.vue"
  );
const DataSecPage = () =>
  import(
    /* webpackChunkName: "DataSecPage" */ "@/views/security-solutions/DataSecPage.vue"
  );
const EndpointSecPage = () =>
  import(
    /* webpackChunkName: "EndpointSecPage" */ "@/views/security-solutions/EndpointSecPage.vue"
  );
const IndustrialSecPage = () =>
  import(
    /* webpackChunkName: "IndustrialSecPage" */ "@/views/security-solutions/IndustrialSecPage.vue"
  );
const SecOperationsPage = () =>
  import(
    /* webpackChunkName: "SecOperationsPage" */ "@/views/security-solutions/SecOperationsPage.vue"
  );
const BlogPage = () =>
  import(/* webpackChunkName: "BlogPage" */ "@/views/Blog.vue");
const BlogPost = () =>
  import(/* webpackChunkName: "BlogPost" */ "@/views/BlogPost.vue");

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
    path: "/enterprise-security",
    name: "enterprise-security",
    component: EnterpriseSecurityPage,
  },
  {
    path: "/access-control",
    name: "access-control",
    component: AccessControlPage,
  },
  {
    path: "/fire-alarm",
    name: "fire-alarm",
    component: FireAlarmPage,
  },
  {
    path: "/intrusion-detection",
    name: "intrusion-detection",
    component: IntrusionDetectionPage,
  },
  {
    path: "/ip-cctv",
    name: "ip-cctv",
    component: IpCctvPage,
  },
  {
    path: "/ejaf-erp",
    name: "ejaf-erp",
    component: EjaferpPage,
  },
  {
    path: "/odoo-erp",
    name: "odoo-erp",
    component: OdooErpPage,
  },
  {
    path: "/oracle-fusion-erp",
    name: "oracle-fusion-erp",
    component: OracleFusionErpPage,
  },
  {
    path: "/it-services",
    name: "it-services",
    component: ItServicesPage,
  },
  {
    path: "/network-penetration-testing",
    name: "network-penetration-testing",
    component: NetworkPenetrationPage,
  },
  {
    path: "/hosting-solutions",
    name: "hosting-solutions",
    component: HostingSolutionsPage,
  },
  {
    path: "/oracle-erp-business",
    name: "oracle-erp-business",
    component: OracleErpBusinessPage,
  },
  {
    path: "/oracle-cloud",
    name: "oracle-cloud",
    component: OracleCloudPage,
  },
  {
    path: "/microsoft-products",
    name: "microsoft-products",
    component: MicrosoftProductsPage,
  },
  {
    path: "/microsoft-cloud",
    name: "microsoft-cloud",
    component: MicrosoftCloudPage,
  },
  {
    path: "/microsoft-csp",
    name: "microsoft-csp",
    component: MicrosoftCspPage,
  },
  {
    path: "/microsoft-azure",
    name: "microsoft-azure",
    component: MicrosoftAzurePage,
  },
  {
    path: "/private-public-cloud",
    name: "private-public-cloud",
    component: PrivPublCloudPage,
  },
  {
    path: "/managed-services",
    name: "managed-services",
    component: ManagedServicesPage,
  },
  {
    path: "/cloud-applications",
    name: "cloud-applications",
    component: CloudApplicationsPage,
  },
  {
    path: "/network-cloud-security",
    name: "network-cloud-security",
    component: NetCloudSecPage,
  },
  {
    path: "/application-security",
    name: "application-security",
    component: ApplicationSecPage,
  },
  {
    path: "/data-security",
    name: "data-security",
    component: DataSecPage,
  },
  {
    path: "/endpoint-security",
    name: "endpoint-security",
    component: EndpointSecPage,
  },
  {
    path: "/industrial-security",
    name: "industrial-security",
    component: IndustrialSecPage,
  },
  {
    path: "/security-operations",
    name: "security-operations",
    component: SecOperationsPage,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogPage,
    children: [
      {
        path: ":title",
        component: BlogPost,
        props: true
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "Home" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
