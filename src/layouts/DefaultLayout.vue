<template>
    <TheHeader />
    <div class="max-w-screen-xl m-auto p-4">
        <slot />
    </div>
    <TheFooter />
</template>
<script setup lang="ts">
    import TheFooter from '@/components/layout/TheFooter.vue'
    import TheHeader from '@/components/layout/TheHeader.vue'
</script>
