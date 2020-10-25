import { RouteRecordRaw } from 'vue-router'
import RecommendComponent from '../views/Recommend/index.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: RecommendComponent
  },
  {
    path: '/discovery',
    name: 'discovery',
    component: import(/* webpackChunkName: 'discovery' */ '../views/Discovery/index.vue')
  },
  {
    path: '/community',
    name: 'community',
    component: import(/* webpackChunkName: 'community' */ '../views/Community/index.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: import(/* webpackChunkName: 'my' */ '../views/My/index.vue')
  }
]
