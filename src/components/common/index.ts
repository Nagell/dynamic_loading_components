// components
import ButtonItem from './atoms/Button/ButtonItem.vue'

import type { App } from 'vue'

export const install = (app: App) => {
    // components
    app.component('ButtonItem', ButtonItem)
}

export {
    // components
    ButtonItem,
}
