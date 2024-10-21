<template>
    <component
        :is="_componentToRender"
        v-bind="props.internalProps"
    />
</template>

<script setup lang="ts" generic="G extends DynamicLoadGroups">
    import { storeToRefs } from 'pinia'
    import { shallowRef, watchEffect } from 'vue'

    import { useLogger } from '@/composables/useLogger'

    import { dynamicLoadList } from '../dynamicLoadList'
    import { useLocalStorageStore } from './stores/localStorageDomain.store'

    import type { CombinedComponentsProps, DynamicLoadGroups, FilterComponents } from './types/dynamicLoadFilters'

    const props = defineProps<{
        groupName: G
        internalProps: CombinedComponentsProps<G>
    }>()

    const { getDomainKey } = storeToRefs(useLocalStorageStore())

    const _componentToRender = shallowRef()

    watchEffect(async () => {
        const dynamicLoadGroup = dynamicLoadList[props.groupName]

        try {
            if (!dynamicLoadGroup)
                throw new Error('Dynamic load: Component group not found: ' + props.groupName)
            if (!getDomainKey.value)
                throw new Error('Dynamic load: Domain not found: ' + getDomainKey.value)
        }
        catch (error) {
            console.error(error)
        }

        const domainSpecificComponent = getDomainKey.value
            ? (dynamicLoadGroup as FilterComponents<G>)[getDomainKey.value]
            : null

        if (!domainSpecificComponent)
            useLogger().info(`Dynamic load: Domain specific component not found: ${props.groupName}[${getDomainKey.value}]`)

        _componentToRender.value = (await domainSpecificComponent)
    })
</script>
