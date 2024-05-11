import { 
  createRouter, 
  createWebHistory, 
  createWebHashHistory 
} from 'vue-router'
import DHRView from '../views/DHRView.vue'

import JPKCView from '../views/JPKCView.vue'
import KCDGView from '../views/KCDGView.vue'
import KCJJView from '../views/KCJJView.vue'
import SKJBView from '../views/SKJBView.vue'
import DJBMView from '../views/DJBMView.vue'
import CHJTView from '../views/CHJTView.vue'
import KCDYView from '../views/KCDYView.vue'
import ZPZBView from '../views/ZPZBView.vue'
import WQHGView from '../views/WQHGView.vue'
import SPJJView from '../views/SPJJView.vue'
import MoreView from '../views/MoreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dhr',
      component: DHRView
    },
    {
      path: '/jpkc',
      name: 'jpkc',
      component: JPKCView
    },
    {
      path: '/kcdg',
      name: 'kcdg',
      component: KCDGView
    },
    {
      path: '/kcjj',
      name: 'kcjj',
      component: KCJJView
    },
    {
      path: '/skjb',
      name: 'skjb',
      component: SKJBView
    },
    {
      path: '/djbm',
      name: 'djbm',
      component: DJBMView
    },
    {
      path: '/chjt',
      name: 'chjt',
      component: CHJTView
    },
    {
      path: '/kcdy',
      name: 'kcdy',
      component: KCDYView
    },
    {
      path: '/zpzb',
      name: 'zpzb',
      component: ZPZBView
    },
    {
      path: '/wqhg',
      name: 'wqhg',
      component: WQHGView
    },
    {
      path: '/spjj',
      name: 'spjj',
      component: SPJJView
    },
    {
      path: '/more',
      name: 'more',
      component: MoreView
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
})

export default router
