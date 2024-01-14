<script setup>
import PageHeader from '@/components/PageHeader.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { auth } from '@/utils/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
const route = useRoute()
const user = ref(null)
const isUserLoggedIn = ref(false)
onMounted(() => {
  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      user.value = firebaseUser.displayName
      isUserLoggedIn.value = true
    } else {
      user.value = null
      isUserLoggedIn.value = false
    }
  })
})
</script>

<template>
  <div id="app">
    <PageHeader v-if="!route.meta.hideHeader" />
  </div>
  <router-view></router-view>
</template>

<style scoped></style>
