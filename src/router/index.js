import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'
import RoadMap from '@/views/RoadMap/index.vue'
import Rooc from '@/views/Rooc/index.vue'
import RooPocket from '@/views/RooPocket/index.vue'
import PageWelcome from '@/components/PageWelcome.vue'
import PageText from '@/components/PageTool.vue'
import Airdrop from '@/components/AirdropUser.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/welcome', component: PageWelcome, meta: { hideHeader: true } },
    { path: '/', component: Home },
    { path: '/roadmap', component: RoadMap },
    { path: '/rooc', component: Rooc },
    { path: '/roopocket', component: RooPocket },
    { path: '/tool', component: PageText },
    { path: '/airdrop', component: Airdrop }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.path !== '/welcome' && from.matched.length === 0) {
    next('/welcome')
  } else {
    next()
  }
})
export default router
