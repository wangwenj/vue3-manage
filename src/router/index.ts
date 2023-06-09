import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import constantRoutes from './constantRoutes'
import { useUserStore, usePermissionStore, useLayoutStore } from '@/store'

const BaseUrl = String(import.meta.env.VITE_BASE_URL)

const router = createRouter({
  history: createWebHistory(BaseUrl), // createWebHistory
  routes: constantRoutes as RouteRecordRaw[],
  scrollBehavior: () => ({ top: 0, left: 0 })
})
const whiteRoutes = ['login', 'register']
router.beforeEach(async to => {
  if (whiteRoutes.includes(to.name as string)) {
    return true
  }
  const { isLogin } = useUserStore()
  const { hasMenu, generateRoutes } = usePermissionStore()
  const { addTagsList } = useLayoutStore()
  if (isLogin) {
    if (hasMenu) {
      addTagsList(to.path, to.meta.title as string, to.meta.hideTab as boolean)
      return true
    } else {
      await generateRoutes()
      return to.redirectedFrom?.fullPath
    }
  } else {
    return '/login'
  }
})
// router.afterEach(() => {
//   console.log('afterEach')
// })

export default router
