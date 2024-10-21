<template>
    <DefaultLayout>
        <div class="min-h-[70vh] flex flex-col items-center">
            <h1 class="text-6xl text-center">
                {{ $t('home.title') }}
            </h1>
            <hr class="w-10 mt-4 mb-2">

            <div class="mt-6 w-full md:w-1/2 max-w-[50rem] flex flex-col gap-8">
                <DomainSwitcher />
                <DomainTestParent />
            </div>
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
    import DomainSwitcher from '@/components/domain/DomainSwitcher.vue'
    import DomainTestParent from '@/components/domain/DomainTestParent.vue'
    import DefaultLayout from '@/layouts/DefaultLayout.vue'
</script>
