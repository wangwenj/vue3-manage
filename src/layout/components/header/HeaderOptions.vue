<template>
  <div class="header-operations">
    <el-dropdown class="ml-12">
      唐玉森：202250915129
      <el-avatar class="cursor-pointer" :size="32" :src="circleUrl" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item divided @click="logout()">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
const logout = () => {
  router.push('/login')
}
</script>
<style lang="scss" scoped>
.header-operations {
  .ml-12 {
    margin-left: 12px;
  }
}
</style>
