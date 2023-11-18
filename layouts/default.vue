<template>
    <VApp>
        <Header />
        <SideMenu />
        <NuxtPage />
    </VApp>
</template>

<script lang="ts" setup>
import Header from '~/components/organisms/Header.vue';
import SideMenu from '~/components/organisms/SideMenu.vue';
</script>