<template>
    <section class="p-4 border-2 border-surface-400 border-dotted rounded flex flex-col bg-surface-100">
        <h3 class="font-bold">
            Parent component
        </h3>
        <p class="font-semibold pt-4">
            Props:
        </p>
        <div class="font-mono w-full grid grid-cols-2 gap-y-1 items-center">
            <p>countGeneral: {{ countGeneral }}</p>
            <span class="flex gap-4">
                <ButtonItem @click="countGeneral++">
                    +
                </ButtonItem>
                <ButtonItem @click="countGeneral--">
                    -
                </ButtonItem>
            </span>
            <p>countDomainA: {{ countDomainA }}</p>
            <span class="flex gap-4">
                <ButtonItem @click="countDomainA++">
                    +
                </ButtonItem>
                <ButtonItem @click="countDomainA--">
                    -
                </ButtonItem>
            </span>
            <p>countDomainB: {{ countDomainB }}</p>
            <span class="flex gap-4">
                <ButtonItem @click="countDomainB++">
                    +
                </ButtonItem>
                <ButtonItem @click="countDomainB--">
                    -
                </ButtonItem>
            </span>
        </div>
        <h4 class="font-bold mt-12">
            Child component
        </h4>
        <p class="italic">
            Properties from the parent remain reactive
        </p>
        <p class="italic mb-4">
            Check console to see the emitted values
        </p>
        <div class="w-full p-4 border-2 border-surface-400 border-dotted rounded bg-white">
            <DynamicLoad
                group-name="DomainTestGroup_1"
                :internal-props="{
                    countDomainA: countDomainA,
                    countDomainB: countDomainB,
                    countGeneral: countGeneral,
                    onEmitDomainA: (e) => logToConsole(e.message + ' - onEmitDomainA'),
                    onEmitDomainB: (e) => logToConsole(e.message + ' - onEmitDomainB'),
                    onEmitGeneral: (e) => logToConsole(e.message + ' - onEmitGeneral'),
                }"
            />
        </div>
        <h4 class="font-bold mt-12 mb-4">
            Child component 2 (if exists)
        </h4>
        <div class="w-full p-4 border-2 border-surface-400 border-dotted rounded bg-white">
            <DynamicLoad
                group-name="DomainTestGroup_2"
                :internal-props="{
                    someText: $t('home.subtitle')
                }"
            />
        </div>
    </section>
</template>
<script setup lang="ts">
    import { ref } from 'vue'

    import { ButtonItem } from '@/components/common'

    const countGeneral = ref(999)
    const countDomainA = ref(100)
    const countDomainB = ref(200)

    const logToConsole = (value: any) => {
        console.log(value)
    }
</script>
