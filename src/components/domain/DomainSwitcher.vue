<template>
    <div class="flex gap-2 items-center">
        <ButtonItem
            @click="changeDomain('domain_A')"
        >
            Set: Domain A
        </ButtonItem>
        <ButtonItem
            @click="changeDomain('domain_B')"
        >
            Set: Domain B
        </ButtonItem>
        <span class="pl-4">
            Current domain: {{ localStorageStore.getDomain }}
        </span>
    </div>
</template>

<script setup lang="ts">
    import { ButtonItem } from '@/components/common'
    import { useLocalStorageStore } from '@/plugins/dynamicLoad/internals/stores/localStorageDomain.store'

    import type { DomainValue } from '@/plugins/dynamicLoad/internals/types/localStorage'

    const localStorageStore = useLocalStorageStore()

    const changeDomain = (domain: DomainValue) => {
        localStorageStore.setDomain(domain)
    }
</script>
