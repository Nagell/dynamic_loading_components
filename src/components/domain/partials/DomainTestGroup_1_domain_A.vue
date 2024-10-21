<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-col">
            <h4 class="font-bold">
                DomainTestGroup_1_domain_A
            </h4>
            <p class="font-semibold pt-4">
                Props:
            </p>
            <div class="font-mono flex flex-col leading-8">
                <div class="flex justify-between items-center">
                    <p>countGeneral: {{ countGeneral }}</p>
                </div>
                <div class="flex justify-between items-center">
                    <p>countDomainA: {{ countDomainA }}</p>
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
            <ButtonItem @click="emitDomainA">
                Emit: Domain A
            </ButtonItem>
        </div>
        <div>
            <p class="font-semibold pt-4">
                Some content:
            </p>
        </div>
        <div class="w-full flex flex-col gap-8">
            <PostList />
            <ButtonItem @click="fetchMorePosts">
                {{ $t('home.fetchMorePosts') }}
            </ButtonItem>
            <span v-if="isPostsLoading">
                {{ $t('home.fetchingPosts') }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia'

    import { ButtonItem } from '@/components/common'
    import PostList from '@/components/posts/PostList.vue'
    import { usePostStore } from '@/stores/post.store'

    export interface Props {
        countDomainA?: number
        countGeneral: number
    }

    withDefaults(defineProps<Props>(), {
        countDomainA: 0,
    })

    const emit = defineEmits<{
        emitDomainA: [{ message: string }]
        emitGeneral: [{ message: string }]
    }>()

    const emitDomainA = () => {
        emit('emitDomainA', { message: 'DomainTestGroup_1_domain_A' })
    }
    const emitGeneral = () => {
        emit('emitGeneral', { message: 'DomainTestGroup_1_domain_A' })
    }

    const postStore = usePostStore()
    const { isPostsLoading } = storeToRefs(postStore)

    function fetchMorePosts() {
        postStore.fetchPosts()
    }
</script>
