<template>
    <VCard width="200" height="200" class="mt-12">
        <VLayout>
            <VNavigationDrawer
                v-model="drawer"
                :rail="rail"
                @click="rail = false"
            >
                <v-list-item title="メニュー">
                    <template #append>
                        <v-btn
                            variant="text"
                            icon="mdi-chevron-left"
                            @click.stop="rail = !rail"
                        ></v-btn>
                    </template>
                </v-list-item>

                <v-divider />
                <VList density="compact" nav>
                    <VListItem prepend-icon="mdi-home-city" title="Home" value="home">
                    </VListItem>
                    <VDivider />
                    <VListItem prepend-icon="mdi-account" title="My account" value="home">
                    </VListItem>
                    <VDivider />
                    <VListItem prepend-icon="mdi-account-group-outline" title="Users" value="users">
                    </VListItem>
                </VList>
            </VNavigationDrawer>
            <VMain style="height: 210px;"/>
        </VLayout>
    </VCard>
</template>

<script setup lang="ts">
import { ref } from 'vue';
/** Data */
const rail = ref(true)
const drawer = ref(true)
</script>

<style scoped>
.v-card--variant-elevated {
    box-shadow: unset;
}
</style>