import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import engineManager from '../views/engineManager/index.vue'
import envDeployment from '../views/envDeployment/index.vue'
import serverMonitor from '../views/serverMonitor/index.vue'
import serverDeployment from '../views/serverDeployment/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        name: '主机管理',
        component: engineManager,
        path: '/engineManager'
      },
      {
        name: '环境部署',
        component: envDeployment,
        path: '/envDeployment'
      },
      {
        name: '服务监控',
        component: serverMonitor,
        path: '/serverMonitor'
      },
      {
        name: '服务发布',
        component: serverDeployment,
        path: '/serverDeployment'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
