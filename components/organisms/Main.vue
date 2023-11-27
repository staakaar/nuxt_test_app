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
            @click:row="openDrawer"
        ></VDataTable>
    </VSheet>
</template>

<script setup lang="ts">
const route = useRoute()

const emit = defineEmits(["openDetailDrawer"])

/**
    ドロワーを開く
    @param event
    @param row
*/
function openDrawer(event: Event, row: any): void {
    console.log('test', row.item)
    emit("openDetailDrawer", row.item)
}

// const { data, pending, error, refresh } = await useFetch(``, {})
/** useFetchでデータ取得 */
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