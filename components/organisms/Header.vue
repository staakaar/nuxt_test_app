<template>
    <VAppBar color="gray" height="60" style="position: unset;">
        <template #prepend>
            <VAppBarNavIcon></VAppBarNavIcon>
        </template>
        <VAppBarTitle>タイトル</VAppBarTitle>
        <template #append>
            <VAppBarNavIcon>
                <VSelect
                    :items="items"
                    density="comfortable"
                    label="Comfortable"
                    v-model="locale"
                >
                </VSelect>
            </VAppBarNavIcon>
        </template>
    </VAppBar>
</template>
<script setup lang="ts">
const { locale } = useI18n()
const items = ["jp", "en"]
</script>