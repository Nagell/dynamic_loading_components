<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-col">
            <h4 class="font-bold">
                <span class="text-[red] text-2xl">
                    B
                </span>
                DomainTestGroup_1_domain_B
            </h4>
            <p class="font-semibold pt-4">
                Props:
            </p>
            <div class="font-mono flex flex-col leading-8">
                <div class="flex justify-between items-center">
                    <p>countGeneral: {{ countGeneral }}</p>
                </div>
                <div class="flex justify-between items-center">
                    <p>countDomainB: {{ countDomainB }}</p>
                </div>
            </div>
            <p class="font-semibold pt-4">
                Emits:
            </p>
        </div>
        <div class="flex gap-4">
            <ButtonItem @click="emitGeneral">
                Emit: General
            </ButtonItem>
            <ButtonItem @click="emitDomainB">
                Emit: Domain B
            </ButtonItem>
        </div>
        <div>
            <p class="font-semibold pt-4">
                Some content:
            </p>
        </div>
        <div class="w-full h-40 flex flex-col items-center justify-center bg-gradient-to-br from-primary-400 to-primary-600 text-center">
            <h1 class="text-3xl text-white">
                {{ $t('home.noPosts') }}
            </h1>
            <h2 class="text-xl text-white">
                {{ $t('home.noPosts.description') }}
            </h2>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ButtonItem } from '@/components/common'

    export interface Props {
        countDomainB?: number
        countGeneral: number
    }

    withDefaults(defineProps<Props>(), {
        countDomainB: 0,
    })

    const emit = defineEmits<{
        emitDomainB: [{ message: string }]
        emitGeneral: [{ message: string }]
    }>()

    const emitDomainB = () => {
        emit('emitDomainB', { message: 'DomainTestGroup_1_domain_B' })
    }
    const emitGeneral = () => {
        emit('emitGeneral', { message: 'DomainTestGroup_1_domain_B' })
    }
</script>
