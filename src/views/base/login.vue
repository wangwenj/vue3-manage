<template>
  <div class="login">
    <h2>Login</h2>
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
    const username = ref('admin')
    const password = ref('admin')

    const handleLogin = async () => {
      await userStore.login({ a: 12 })
      router.push('/')
    }

    return {
      username,
      password,
      handleLogin
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
</style>
