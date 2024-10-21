<template>
    <div class="flex flex-col gap-4">
        <h4 class="font-bold">
            DomainTestGroup_2_domain_B
        </h4>
        <div class="w-full h-40 flex flex-col items-center justify-center bg-gradient-to-br from-primary-400 to-primary-600 text-center">
            <h1 class="text-3xl text-white">
                {{ someText }}
            </h1>
        </div>
    </div>
</template>

<script setup lang="ts">
    export interface Props {
        someText?: string
    }

    withDefaults(defineProps<Props>(), {
        someText: 'Some text',
    })
</script>
