import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import vuetyped from 'vue3typed'

import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";

import './assets/font/font.css'
import './assets/css/style.css'

const app = createApp(App)

app.use(router)
app.use(vuetyped)
app.use(Particles, {
    init: async engine => {
        await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
        //await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
    },
});
app.mount('#app')
