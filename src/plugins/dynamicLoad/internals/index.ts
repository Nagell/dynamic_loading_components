import { type App } from 'vue'

import DynamicLoad from './DynamicLoad.vue'

export default {
    install: (app: App) => {
        app.component('DynamicLoad', DynamicLoad)
    }
}
