<template>
  <div class="news-page">
    <!-- Banner -->
    <section class="banner">
      <div class="banner-image">
        <div class="banner-placeholder">
          <h1>新闻中心</h1>
          <p>行业资讯 公司动态</p>
        </div>
      </div>
    </section>

    <!-- 面包屑 -->
    <Breadcrumb :items="[{ name: '新闻中心' }]" />

    <!-- 主内容区 -->
    <section class="main-content">
      <div class="container">
        <div class="row">
          <!-- 左侧内容 -->
          <div class="content-area">
            <div class="news-content">
              <h1 class="page-title">新闻中心</h1>

              <div class="news-list">
                <div class="news-item" v-for="news in newsList" :key="news.id">
                  <div class="news-date">
                    <span class="day">{{ news.day }}</span>
                    <span class="month">{{ news.month }}</span>
                  </div>
                  <div class="news-body">
                    <router-link :to="`/news/${news.id}`" class="news-title">{{ news.title }}</router-link>
                    <p class="news-excerpt">{{ news.excerpt }}</p>
                    <div class="news-meta">
                      <span><el-icon><View /></el-icon> {{ news.views }}</span>
                      <span><el-icon><ChatDotRound /></el-icon> 0</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 分页 -->
              <div class="pagination-wrapper">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="100"
                  :page-size="10"
                />
              </div>
            </div>
          </div>

          <!-- 右侧边栏 -->
          <Sidebar current-category="新闻中心" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { View, ChatDotRound } from '@element-plus/icons-vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Sidebar from '@/components/Sidebar.vue'

const newsList = [
  { id: 1, title: '甄选手机屏蔽器设备的方法与注意事项', excerpt: '在选择手机屏蔽器时，需要考虑屏蔽范围、频段覆盖、功率大小等多个因素。本文将详细介绍如何选择合适的手机屏蔽设备...', day: '15', month: '2025.03', views: 1256 },
  { id: 2, title: '现实生活中哪些地方需要使用手机信号屏蔽器？', excerpt: '学校考场、会议室、监狱、加油站等场所都需要使用手机信号屏蔽器来保障安全和秩序...', day: '12', month: '2025.03', views: 986 },
  { id: 3, title: '专业高端的手机屏蔽设备与普通民用的手机屏蔽器有什么区别呢？', excerpt: '专业级设备在屏蔽效果、稳定性、散热性能等方面都有明显优势，适用于重要场所的长期部署...', day: '08', month: '2025.03', views: 875 },
  { id: 4, title: '信号屏蔽器都是浮云：这里高考全国断网！', excerpt: '高考期间，各地考点周边都会部署信号屏蔽设备，确保考试公平公正...', day: '05', month: '2025.03', views: 1542 },
  { id: 5, title: 'JS-350屏蔽器：如何屏蔽别人的手机信号？', excerpt: 'JS-350是一款高性能手机信号屏蔽器，可有效屏蔽2G/3G/4G/5G信号...', day: '01', month: '2025.03', views: 763 },
  { id: 6, title: '手机信号屏蔽器安装方法', excerpt: '正确的安装方法可以确保屏蔽器发挥最佳效果，本文详细介绍安装步骤和注意事项...', day: '28', month: '2025.02', views: 654 },
  { id: 7, title: '建立手机屏蔽前的三大要素', excerpt: '在部署手机屏蔽系统前，需要考虑屏蔽区域大小、屏蔽频段需求、使用环境等因素...', day: '25', month: '2025.02', views: 542 },
  { id: 8, title: '手机信号屏蔽器工作原理与运行频段', excerpt: '手机屏蔽器通过发射与手机通信频段相同的干扰信号，使手机无法正常接收基站信号...', day: '20', month: '2025.02', views: 892 },
  { id: 9, title: '目前国内所有手机信号频段都有哪些？', excerpt: '中国移动、中国联通、中国电信使用的频段各不相同，5G时代频段更加复杂...', day: '15', month: '2025.02', views: 1123 },
  { id: 10, title: '使用什么方法可以突破手机信号屏蔽器对信号的屏蔽？', excerpt: '从技术角度分析手机信号屏蔽器的工作原理及可能的突破方式...', day: '10', month: '2025.02', views: 2341 },
]
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

.news-content {
  background: #fff;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.page-title {
  font-size: 28px;
  color: #333;
  margin: 0 0 30px 0;
  padding-bottom: 15px;
  border-bottom: 2px solid #1565c0;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.news-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    border-color: #1565c0;

    .news-title {
      color: #1565c0;
    }
  }
}

.news-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 70px;
  padding: 12px;
  background: #1565c0;
  border-radius: 8px;
  color: #fff;

  .day {
    font-size: 28px;
    font-weight: bold;
    line-height: 1;
  }

  .month {
    font-size: 12px;
    opacity: 0.9;
    margin-top: 4px;
  }
}

.news-body {
  flex: 1;
}

.news-title {
  font-size: 18px;
  color: #333;
  font-weight: 500;
  margin-bottom: 10px;
  display: block;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #1565c0;
  }
}

.news-excerpt {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 12px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-meta {
  display: flex;
  gap: 16px;
  color: #999;
  font-size: 13px;

  span {
    display: flex;
    align-items: center;
    gap: 4px;

    .el-icon {
      font-size: 14px;
    }
  }
}

.pagination-wrapper {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  .news-item {
    flex-direction: column;
  }

  .news-date {
    flex-direction: row;
    gap: 8px;
    min-width: auto;
  }
}
</style>
