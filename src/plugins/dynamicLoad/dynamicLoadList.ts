/*
 *  COMPONENTS
 *  add new components here
 */
const DomainTestGroup_1_domain_A = () => import('@/components/domain/partials/DomainTestGroup_1_domain_A.vue')
const DomainTestGroup_1_domain_B = () => import('@/components/domain/partials/DomainTestGroup_1_domain_B.vue')
const DomainTestGroup_2_domain_B = () => import('@/components/domain/partials/DomainTestGroup_2_domain_B.vue')

// Helpers
import { defineAsyncComponent } from 'vue'

import type { DynamicLoadListShape } from './internals/types/dynamicLoadList'

/*
 *  LIST OF INJECTIONS
 *  add new components to the list
 */
export const dynamicLoadList = {
    DomainTestGroup_1: {
        DOMAIN_A: defineAsyncComponent(DomainTestGroup_1_domain_A),
        DOMAIN_B: defineAsyncComponent(DomainTestGroup_1_domain_B)
    },
    DomainTestGroup_2: {
        DOMAIN_B: defineAsyncComponent(DomainTestGroup_2_domain_B)
    },
} satisfies DynamicLoadListShape
