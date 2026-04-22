<template>
  <aside class="sidebar">
    <!-- 分类导航 -->
    <div class="widget widget-nav">
      <div class="widget-title">
        <h3>{{ currentCategory }}</h3>
      </div>
      <ul class="category-list">
        <li v-for="cat in categories" :key="cat" :class="{ active: cat === currentCategory }">
          <router-link to="/products">{{ cat }}</router-link>
        </li>
      </ul>
    </div>

    <!-- 热门新闻 -->
    <div class="widget widget-news">
      <div class="widget-title">
        <h3>热门新闻</h3>
      </div>
      <ul class="news-list">
        <li v-for="(news, index) in hotNews" :key="index">
          <router-link to="/news">
            <span class="news-index">{{ index + 1 }}</span>
            {{ news }}
          </router-link>
        </li>
      </ul>
    </div>

    <!-- 热门产品 -->
    <div class="widget widget-products">
      <div class="widget-title">
        <h3>热门产品</h3>
      </div>
      <ul class="hot-products">
        <li v-for="product in hotProducts" :key="product.id">
          <router-link :to="`/product/${product.id}`">
            <img :src="product.image" :alt="product.name" />
            <p>{{ product.name }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { hotNews, hotProducts } from '@/data/products'

defineProps({
  currentCategory: {
    type: String,
    default: '无人机干扰系列',
  },
})

const categories = [
  '无人机干扰系列',
  '手机信号屏蔽器系列',
  '安检设备系列',
  '排爆干扰系列',
  '会议保密系列',
  '手机智能管控系列',
  '其他产品',
]
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.widget {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

.widget-title {
  background: #1565c0;
  padding: 12px 16px;

  h3 {
    color: #fff;
    font-size: 15px;
    margin: 0;
  }
}

.category-list {
  li {
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
    }

    a {
      display: block;
      padding: 12px 16px;
      color: #333;
      transition: all 0.3s;

      &:hover,
      &.active {
        color: #1565c0;
        background: #f5f9ff;
        padding-left: 20px;
      }
    }
  }
}

.news-list {
  padding: 12px;

  li {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #666;
      font-size: 13px;
      transition: color 0.3s;

      &:hover {
        color: #1565c0;
      }
    }
  }
}

.news-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: #e0e0e0;
  color: #fff;
  font-size: 12px;
  border-radius: 3px;
  flex-shrink: 0;

  &:nth-child(-n+3) {
    background: #1565c0;
  }
}

.hot-products {
  padding: 12px;

  li {
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }

    a {
      display: flex;
      gap: 12px;
      align-items: center;

      img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 4px;
        flex-shrink: 0;
      }

      p {
        font-size: 13px;
        color: #333;
        line-height: 1.4;
        transition: color 0.3s;
      }

      &:hover p {
        color: #1565c0;
      }
    }
  }
}
</style>
