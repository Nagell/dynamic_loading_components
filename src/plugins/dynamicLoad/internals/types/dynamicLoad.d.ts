import { dynamicLoadList } from '../../dynamicLoadList'
import DynamicLoad from '../DynamicLoad.vue'

import type { DOMAIN } from 'localStorage'

declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        DynamicLoad: typeof DynamicLoad
    }
}

declare global {
    type DynamicLoadList = typeof dynamicLoadList
    type DynamicLoadDomains = typeof DOMAIN
}

export { }
