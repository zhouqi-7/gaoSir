<template>
  <div class="home-page">
    <!-- Banner -->
    <section class="banner">
      <div class="banner-image">
        <div class="banner-placeholder">
          <h1>产品中心</h1>
          <p>专业无人机反制解决方案提供商</p>
        </div>
      </div>
    </section>

    <!-- 面包屑 -->
    <Breadcrumb :items="[{ name: '产品展示' }]" />

    <!-- 主内容区 -->
    <section class="main-content">
      <div class="container">
        <div class="row">
          <!-- 左侧产品列表 -->
          <div class="content-area">
            <div class="product-list-header">
              <h1 class="page-title">无人机干扰系列</h1>
              <p class="page-desc"></p>
            </div>

            <div class="product-grid">
              <div 
                v-for="product in products" 
                :key="product.id"
                class="product-card"
              >
                <router-link :to="`/product/${product.id}`">
                  <div class="product-image">
                    <img :src="product.image" :alt="product.name" />
                  </div>
                  <h3 class="product-name">{{ product.name }}</h3>
                </router-link>
              </div>
            </div>
          </div>

          <!-- 右侧边栏 -->
          <Sidebar current-category="无人机干扰系列" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { products } from '@/data/products'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Sidebar from '@/components/Sidebar.vue'
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 280px;
  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 50%, #1e88e5 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
}

.banner-placeholder {
  text-align: center;
  color: #fff;
  z-index: 1;

  h1 {
    font-size: 42px;
    font-weight: bold;
    margin-bottom: 12px;
    letter-spacing: 4px;
  }

  p {
    font-size: 18px;
    opacity: 0.9;
    letter-spacing: 2px;
  }
}

.main-content {
  padding: 40px 0;
  background: #fafafa;
}

.row {
  display: flex;
  gap: 30px;

  .content-area {
    flex: 1;
    min-width: 0;
  }
}

.product-list-header {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e0e0e0;
}

.page-title {
  font-size: 24px;
  color: #333;
  margin: 0 0 10px 0;
  font-weight: 600;
}

.page-desc {
  color: #666;
  font-size: 14px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.product-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);

    .product-name {
      color: #1565c0;
    }
  }

  a {
    display: block;
    text-decoration: none;
  }
}

.product-image {
  width: 100%;
  height: 220px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 20px;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.3s;
  }

  &:hover img {
    transform: scale(1.05);
  }
}

.product-name {
  padding: 16px;
  font-size: 15px;
  color: #333;
  text-align: center;
  margin: 0;
  transition: color 0.3s;
  border-top: 1px solid #f0f0f0;
}

// 响应式
@media (max-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }

  .banner-placeholder h1 {
    font-size: 28px;
  }
}
</style>
