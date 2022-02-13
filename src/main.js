import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import InfoSectionLeft from "./components/shared/InfoSectionLeft.vue";
import InfoSectionRight from "./components/shared/InfoSectionRight.vue";
import LandingComponent from "./components/shared/LandingComponent.vue";
import ContactsSection from "./components/shared/contacts/Contacts.vue";
import BlogSection from "./components/shared/blog/Blog.vue";

const app = createApp(App);

app.component("LeftSection", InfoSectionLeft);
app.component("RightSection", InfoSectionRight);
app.component("LandingComponent", LandingComponent);
app.component("ContactsSection", ContactsSection);
app.component("BlogSection", BlogSection);

app.use(router);
app.mount("#app");
