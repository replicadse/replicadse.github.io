/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'

// Date Picker
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

import { createVfm } from 'vue-final-modal'
const vfm = createVfm()
import 'vue-final-modal/style.css'

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  loadFonts()

  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(vfm)
    .component('VueDatePicker', VueDatePicker)
}
