<template>
  <div class="home">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <nav-container></nav-container>
      </el-aside>
      <!-- 内容区域 -->
      <el-container>
        <el-header>
          <header-container></header-container>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import nav from './layout/nav.vue'
import header from './layout/header.vue'

export default defineComponent({
  name: 'Home',
  components: {
    'nav-container': nav,
    'header-container': header
  }
})
</script>
