<script setup>
import PageHeader from '@/components/PageHeader.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { auth } from '@/utils/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
const route = useRoute()

const user = ref(null)
onAuthStateChanged(auth, (firebaseUser) => {
  if (firebaseUser) {
    // 使用不同的变量名来避免冲突
    user.value = {
      uid: firebaseUser.uid,
      displayName: firebaseUser.displayName,
      email: firebaseUser.email,
      photoURL: firebaseUser.photoURL
    }
    console.log('Logged in:', user.value)
  } else {
    user.value = null
    console.log('Not logged in')
  }
})
</script>

<template>
  <div id="app">
    <PageHeader v-if="!route.meta.hideHeader" />
  </div>
  <router-view></router-view>
</template>

<style scoped></style>
