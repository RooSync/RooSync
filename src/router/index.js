import { createRouter, createWebHistory } from 'vue-router'
// 导入组件
import Home from '@/views/Home/index.vue'
import RoadMap from '@/views/RoadMap/index.vue'
import Rooc from '@/views/Rooc/index.vue'
import RooPocket from '@/views/RooPocket/index.vue'
import PageWelcome from '@/components/PageWelcome.vue'
import PageText from '@/components/PageTool.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/welcome', component: PageWelcome, meta: { hideHeader: true } },
    { path: '/', component: Home },
    { path: '/roadmap', component: RoadMap },
    { path: '/rooc', component: Rooc },
    { path: '/roopocket', component: RooPocket },
    { path: '/tool', component: PageText }
  ]
})
router.beforeEach((to, from, next) => {
  // 检查是否是首次访问网站（即从无到有的路由跳转）
  if (to.path !== '/welcome' && from.matched.length === 0) {
    next('/welcome') // 重定向到欢迎页面
  } else {
    next() // 继续到下一个钩子
  }
})
export default router
