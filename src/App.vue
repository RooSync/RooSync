<script setup>
import PageHeader from '@/components/PageHeader.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div id="app">
    <PageHeader v-if="!route.meta.hideHeader" />
  </div>
  <router-view></router-view>
</template>

<style scoped></style>
