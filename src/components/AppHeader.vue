<template>
  <header class="header">
    <!-- 顶部区域 -->
    <div class="header-top">
      <div class="container clearfix">
        <div class="header-logo">
          <router-link to="/" class="logo-url">
            <img src="/logo.svg" alt="立思杰科技" class="logo-img" />
          </router-link>
        </div>
        <div class="header-right">
          <div class="header-phone">
            <p><el-icon><Phone /></el-icon> 17777879381</p>
            <p><el-icon><Phone /></el-icon> 15911039553</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 导航菜单 -->
    <div class="header-menu">
      <div class="container">
        <nav class="nav-menu">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="nav-item"
            :class="{ active: isActive(item.path) }"
          >
            {{ item.name }}
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Phone } from '@element-plus/icons-vue'

const route = useRoute()

const navItems = [
  { path: '/', name: '首页' },
  { path: '/about', name: '关于我们' },
  { path: '/products', name: '产品展示' },
  { path: '/certificates', name: '资质证书' },
  { path: '/news', name: '新闻中心' },
  { path: '/solutions', name: '解决方案' },
  { path: '/contact', name: '联系我们' },
]

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<style lang="scss" scoped>
.header {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.header-top {
  padding: 20px 0;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.header-logo {
  .logo-url {
    display: inline-block;
  }
}

.logo-img {
  height: 50px;
  width: auto;
}

.header-right {
  .header-phone {
    p {
      font-size: 16px;
      color: #1565c0;
      font-weight: 500;
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 4px;

      .el-icon {
        font-size: 18px;
      }
    }
  }
}

.header-menu {
  background: #1565c0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-menu {
  display: flex;
  justify-content: center;
}

.nav-item {
  padding: 14px 28px;
  color: #fff;
  font-size: 15px;
  transition: all 0.3s;
  position: relative;

  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
  }

  &.active {
    color: #fff;
    background: rgba(255, 255, 255, 0.15);

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 3px;
      background: #fff;
    }
  }
}
</style>
