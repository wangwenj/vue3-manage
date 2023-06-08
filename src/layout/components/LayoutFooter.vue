<template>
  <footer v-show="footerShow" class="layout-footer" :style="footerStyle">版权归属：唐玉森：202250915129</footer>
</template>
<script setup lang="ts">
import { useLayoutStore } from '@/store'
const { footerStyle, footerShow } = useLayoutStore()
</script>
<style scoped lang="scss">
.layout-footer {
  background: #ffffff;
  width: 100%;
  z-index: 10;
}
</style>
