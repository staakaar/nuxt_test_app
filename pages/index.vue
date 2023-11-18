<template>
    <NuxtLink @click="goArticle">ルーティングテスト</NuxtLink>
    <!-- <div>test</div> -->
</template>

<script setup lang="ts">
const router = useRouter();
const goArticle = () => {
    router.push("/article")
}
</script>

<style scoped>
</style>