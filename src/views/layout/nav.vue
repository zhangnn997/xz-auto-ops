<template>
  <div>
    <h5 class="mb-2">服务监测平台</h5>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
    >
      <el-menu-item index="1">
        <el-icon><files /></el-icon>
        <router-link to="/engineManager">主机管理</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><operation /></el-icon>
        <router-link to="/envDeployment">环境部署</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><monitor /></el-icon>
        <router-link to="/serverMonitor">服务监控</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><position /></el-icon>
        <router-link to="/serverDeployment">服务发布</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Nav'
})
</script>
