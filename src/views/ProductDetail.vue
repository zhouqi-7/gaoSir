<template>
  <div class="product-detail-page">
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
    <Breadcrumb :items="[
      { name: '产品展示', path: '/products' },
      { name: '无人机干扰系列', path: '/products' },
      { name: product?.name },
    ]" />

    <!-- 主内容区 -->
    <section class="main-content">
      <div class="container">
        <div class="row">
          <!-- 左侧产品详情 -->
          <div class="content-area">
            <!-- 产品基本信息 -->
            <div class="product-info">
              <div class="info-grid">
                <div class="product-image-section">
                  <div class="main-image">
                    <img :src="product?.image" :alt="product?.name" />
                  </div>
                </div>
                <div class="product-text-section">
                  <h1 class="product-title">{{ product?.name }}</h1>
                  <div class="product-description">
                    <h3>产品简介：</h3>
                    <p>{{ product?.description }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 产品详情内容 -->
            <div class="product-detail-content">
              <h3 class="section-title">产品图片</h3>
              <div class="detail-image">
                <img :src="product?.image" :alt="product?.name" />
              </div>

              <h3 class="section-title">产品详情</h3>
              <div class="detail-text">
                <pre>{{ product?.detail }}</pre>
              </div>

              <!-- 产品参数图 -->
              <div v-if="product?.specs" class="detail-image">
                <img :src="product.specs" alt="产品参数" />
              </div>

              <!-- 产品清单图 -->
              <div v-if="product?.packingList" class="detail-image">
                <img :src="product.packingList" alt="产品清单" />
              </div>

              <h3 class="section-title">产品下载</h3>
              <div class="download-section">
                <el-button type="primary" :icon="Download">
                  下载 {{ product?.name }} 产品手册
                </el-button>
              </div>
            </div>

            <!-- 推荐产品 -->
            <div class="related-products">
              <h3 class="section-title">推荐产品</h3>
              <div class="related-grid">
                <div 
                  v-for="item in relatedProducts" 
                  :key="item.id"
                  class="related-card"
                >
                  <router-link :to="`/product/${item.id}`">
                    <img :src="item.image" :alt="item.name" />
                    <p>{{ item.name }}</p>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧边栏 -->
          <Sidebar :current-category="product?.name" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Download } from '@element-plus/icons-vue'
import { products, hotProducts } from '@/data/products'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Sidebar from '@/components/Sidebar.vue'

const route = useRoute()
const productId = parseInt(route.params.id)

const product = computed(() => {
  return products.find(p => p.id === productId) || products[0]
})

const relatedProducts = computed(() => {
  return products
    .filter(p => p.id !== productId)
    .slice(0, 4)
})
</script>

<style lang="scss" scoped>
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

.product-info {
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.product-image-section {
  .main-image {
    background: #f5f5f5;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 350px;
      object-fit: contain;
    }
  }
}

.product-text-section {
  .product-title {
    font-size: 24px;
    color: #333;
    margin: 0 0 20px 0;
    padding-bottom: 15px;
    border-bottom: 2px solid #1565c0;
  }

  .product-description {
    h3 {
      font-size: 16px;
      color: #1565c0;
      margin: 0 0 12px 0;
    }

    p {
      color: #666;
      line-height: 1.8;
      font-size: 14px;
    }
  }
}

.product-detail-content {
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.section-title {
  font-size: 18px;
  color: #333;
  margin: 30px 0 20px 0;
  padding-bottom: 10px;
  border-bottom: 2px solid #1565c0;

  &:first-child {
    margin-top: 0;
  }
}

.detail-image {
  margin-bottom: 20px;

  img {
    max-width: 100%;
    border-radius: 4px;
  }
}

.detail-text {
  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: "Microsoft YaHei", sans-serif;
    font-size: 14px;
    line-height: 1.8;
    color: #666;
    margin: 0;
    padding: 0;
    background: none;
  }
}

.download-section {
  padding: 20px 0;
}

.related-products {
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.related-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);

    p {
      color: #1565c0;
    }
  }

  a {
    display: block;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 120px;
    object-fit: contain;
    padding: 15px;
    background: #f5f5f5;
  }

  p {
    padding: 12px;
    font-size: 13px;
    color: #333;
    margin: 0;
    text-align: center;
    transition: color 0.3s;
    border-top: 1px solid #f0f0f0;
  }
}

@media (max-width: 1024px) {
  .info-grid {
    grid-template-columns: 1fr;
  }

  .related-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  .related-grid {
    grid-template-columns: 1fr;
  }
}
</style>
