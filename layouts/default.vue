<template>
    <v-app>
        <v-app-bar color="primary">
            <template #prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>
            <v-app-bar-title>タイトル</v-app-bar-title>
            <template #append>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>
        </v-app-bar>
        <main>
            <!-- レイアウトファイルでページを読み込む場合 -->
            <slot />
        </main>
        <footer></footer>
    </v-app>
</template>

<script setup lang="ts">
import Vue from 'vue'
</script>