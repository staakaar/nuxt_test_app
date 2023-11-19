<template>
    <VDataTable :items="items" class="mt-12"></VDataTable>
</template>

<script setup lang="ts">

const items = [
    {
        id: 1,
        name: "test",
        age: 23,
        postCode: "201-4817"
    }
]
</script>