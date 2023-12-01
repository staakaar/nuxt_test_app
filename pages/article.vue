<template>
    <Main class="ml-10" @open-detail-drawer="openDetailDrawer" />
    <!-- ドロワー -->
    <VNavigationDrawer
        :rail="rail"
        rail-width="700"
        v-model="drawer"
        location="right"
        scrim="gray"
        absolute
        temporary
    />
</template>

<script setup lang="ts">
import Main from '~/components/organisms/Main.vue';

const drawer = ref(false);
const rail = ref(false);

/** drawer data object */

/** drawer open */
function openDetailDrawer(item: any) {
    console.log(item)
    console.log("こっち")
}

</script>

<style scoped>

</style>