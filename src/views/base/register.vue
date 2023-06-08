<template>
  <div class="login">
    <h2>注册</h2>
    <form>
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" />
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
    </form>
    <button type="submit" class="submit-button" @click="handleRegister">注册</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store'

export default {
  setup() {
    const userStore = useUserStore()
    const router = useRouter()
    const username = ref('')
    const password = ref('')
    const errorMessage = ref('')

    const handleRegister = async () => {
      console.log(userStore.users)
      // 检查该用户名是否已经存在
      if (userStore.users.some(user => user.username === username.value)) {
        alert('这个用户名已经被注册了')
      } else {
        // 向 store 添加新用户
        await userStore.register({
          username: username.value,
          password: password.value
        })
        router.push('/login')
      }
    }

    return {
      username,
      password,
      errorMessage,
      handleRegister
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
