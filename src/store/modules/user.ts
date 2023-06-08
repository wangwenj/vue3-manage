import { defineStore } from 'pinia'
import { loginApi, logoutApi } from '@/apis/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { usePermissionStore } from './permission'

export const useUserStore = defineStore('user-store', {
  state: () => ({
    users: [
      {
        username: 'tangyusen',
        password: '202250915129'
      }
    ],
    userInfo: {},
    token: getToken()
  }),
  getters: {
    /** 是否登录 */
    isLogin(state) {
      return Boolean(state.token)
    }
  },
  actions: {
    async login(data: any) {
      const res = await loginApi(data)
      this.userInfo = res.data
      this.token = res.data.token
      setToken(res.data.token)
    },
    async register(data: any) {
      if (data) {
        this.users.push({
          username: data.username,
          password: data.password
        })
      }
      return '/login'
    },
    async logout(isSelfLogout = false) {
      if (isSelfLogout) {
        await logoutApi()
      }
      removeToken()
      this.$reset()
      const permissionStore = usePermissionStore()
      permissionStore.$reset()
      return '/login'
    },
    findUser(username, password) {
      return this.users.find(user => user.username === username && user.password === password)
    }
  }
})
