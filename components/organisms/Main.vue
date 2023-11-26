<template>
    <VSheet
        class="mt-12"
        height="700"
        width="inherit"
        rounded
        border
    >
    <h1>test</h1>
    <VBtn>ボタン</VBtn>
        <VDataTable
            :items="items"
            class="mt-12"
            height="600"
        ></VDataTable>
    </VSheet>
</template>

<script setup lang="ts">

const items = [
    {
        id: 1,
        name: "test",
        age: 23,
        postCode: "201-4817"
    },
    {
        id: 1,
        name: "test",
        age: 23,
        postCode: "201-4817"
    },
    {
        id: 1,
        name: "test",
        age: 23,
        postCode: "201-4817"
    },
    {
        id: 1,
        name: "test",
        age: 23,
        postCode: "201-4817"
    },
    {
        id: 1,
        name: "test",
        age: 23,
        postCode: "201-4817"
    },
    {
        id: 1,
        name: "test",
        age: 23,
        postCode: "201-4817"
    }
    ,
    {
        id: 1,
        name: "test",
        age: 23,
        postCode: "201-4817"
    }
    ,
    {
        id: 1,
        name: "test",
        age: 23,
        postCode: "201-4817"
    }
    ,
    {
        id: 1,
        name: "test",
        age: 23,
        postCode: "201-4817"
    }
    ,
    {
        id: 1,
        name: "test",
        age: 23,
        postCode: "201-4817"
    }
    ,
    {
        id: 1,
        name: "test",
        age: 23,
        postCode: "201-4817"
    }
    ,
    {
        id: 1,
        name: "test",
        age: 23,
        postCode: "201-4817"
    }
]
</script>