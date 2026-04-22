import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/products',
    name: 'ProductList',
    component: () => import('@/views/ProductList.vue'),
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: () => import('@/views/ProductDetail.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/certificates',
    name: 'Certificates',
    component: () => import('@/views/Certificates.vue'),
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/News.vue'),
  },
  {
    path: '/solutions',
    name: 'Solutions',
    component: () => import('@/views/Solutions.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
