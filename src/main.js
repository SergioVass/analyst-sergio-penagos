import { createApp } from "vue";
import App from "./App.vue";
import { i18n } from "./i18n";
import { TroisJSVuePlugin } from "troisjs";

require("@/styles/custom.scss");
const app = createApp(App);

app.use(i18n);
app.use(TroisJSVuePlugin);
app.mount("#personalwbesite");
