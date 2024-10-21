import { type RemovableRef, useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed } from 'vue'

import { useLogger } from '@/composables/useLogger'

import {
    DOMAIN,
    type DomainValue
} from '../types/localStorage'

const logger = useLogger()

// localStorage keys
const DOMAIN_KEY = 'domain'

const defaultState = {
    [DOMAIN_KEY]: null as DomainValue | null,
}

export const useLocalStorageStore = defineStore('localStorageDomain', () => {
    const storage = <RemovableRef<typeof defaultState>>useStorage(
        'dynamic_loading_components_domain',
        defaultState,
        localStorage,
        { mergeDefaults: true }
    )

    /**
     * DOMAIN
     */
    const getIsDomainA = computed(() => {
        return storage.value[DOMAIN_KEY] === DOMAIN.DOMAIN_A
    })

    const getIsDomainB = computed(() => {
        return storage.value[DOMAIN_KEY] === DOMAIN.DOMAIN_B
    })

    const getDomain = computed(() => {
        const domain = storage.value[DOMAIN_KEY] as DomainValue
        if (!domain)
            logger.info(DOMAIN_KEY, 'not set')

        return domain
    })

    const getDomainKey = computed(() => {
        return Object.keys(DOMAIN)
            .find(key =>
                DOMAIN[key as keyof typeof DOMAIN] === storage.value[DOMAIN_KEY]) as keyof typeof DOMAIN | undefined
    })

    function setDomain(domain: DomainValue) {
        storage.value[DOMAIN_KEY] = domain
        logger.info(DOMAIN_KEY, 'set to:', domain)
    }

    return {
        storage,
        getIsDomainA,
        getIsDomainB,
        getDomain,
        getDomainKey,
        setDomain,
    }
})
