<template>
  <div class="login">
    <h2>登录</h2>
    <form @submit.prevent="handleLogin">
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit" class="submit-button">Login</button>
    </form>
    <el-link :underline="false" class="register" @click="goRouter('/register')">去注册</el-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store'

export default {
  setup() {
    const userStore = useUserStore()
    const router = useRouter()
    const username = ref('tangyusen')
    const password = ref('202250915129')

    const handleLogin = async () => {
      const user = userStore.findUser(username.value, password.value)
      if (user) {
        await userStore.login({ a: 12 })
        router.push('/')
      } else {
        alert('用户名或密码错误')
      }
    }

    const goRouter = path => {
      router.push(path)
    }

    return {
      username,
      password,
      handleLogin,
      goRouter
    }
  }
}
</script>

<style scoped>
.login {
  width: 400px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 150px;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 10px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.submit-button {
  width: 100%;
  padding: 10px;
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.register {
  margin-top: 8px;
  display: flex;
  justify-content: center;
}
</style>
