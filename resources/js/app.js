import Vue from 'vue';
import VueGoogleCharts from 'vue-google-charts';
import vuetify from "./Plugins/vuetify";
import {csrf} from "./bootstrap";
import {App, plugin} from '@inertiajs/inertia-vue'
import {InertiaProgress} from '@inertiajs/progress'
import {InertiaForm} from 'laravel-jetstream';
import PortalVue from 'portal-vue';
Vue.use(plugin);

Vue.use(PortalVue);
Vue.use(InertiaForm);
Vue.use(VueGoogleCharts);
Vue.prototype.$csrf = csrf;
Vue.prototype.$route = (...args) => route(...args).url()

InertiaProgress.init({
  // The delay after which the progress bar will
  // appear during navigation, in milliseconds.
  delay: 250,

  // The color of the progress bar.
  color: '#29d',

  // Whether to include the default NProgress styles.
  includeCSS: true,

  // Whether the NProgress spinner will be shown.
  showSpinner: false,
})

const app = document.getElementById('app');

new Vue({
  vuetify,
  render: (h) => h(App, {
    props: {
      initialPage: JSON.parse(app.dataset.page),
      resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
    },
  }),
}).$mount(app);
