<template>
  <div class="about-page">
    <!-- Banner -->
    <section class="banner">
      <div class="banner-image">
        <div class="banner-placeholder">
          <h1>关于我们</h1>
          <p>专业无人机反制解决方案提供商</p>
        </div>
      </div>
    </section>

    <!-- 面包屑 -->
    <Breadcrumb :items="[{ name: '关于我们' }]" />

    <!-- 主内容区 -->
    <section class="main-content">
      <div class="container">
        <div class="row">
          <!-- 左侧内容 -->
          <div class="content-area">
            <div class="about-content">
              <h1 class="page-title">深圳立思杰科技有限公司</h1>
              
              <div class="about-section">
                <h3>公司简介</h3>
                <p>深圳立思杰科技有限公司是一家专注于无线电干扰设备、手机信号屏蔽器、无人机反制系统等安防产品研发、生产和销售的高新技术企业。公司拥有一支专业的研发团队，致力于为客户提供高品质的安全防护解决方案。</p>
                <p>公司自成立以来，始终坚持"科技创新、质量第一"的经营理念，产品广泛应用于公安、司法、教育、考试、会议保密等领域，深受客户好评。</p>
              </div>

              <div class="about-section">
                <h3>企业文化</h3>
                <div class="culture-grid">
                  <div class="culture-item">
                    <h4>企业使命</h4>
                    <p>用科技守护安全，以创新引领未来</p>
                  </div>
                  <div class="culture-item">
                    <h4>企业愿景</h4>
                    <p>成为全球领先的安防解决方案提供商</p>
                  </div>
                  <div class="culture-item">
                    <h4>核心价值观</h4>
                    <p>诚信、创新、专业、共赢</p>
                  </div>
                  <div class="culture-item">
                    <h4>经营理念</h4>
                    <p>科技创新、质量第一、客户至上</p>
                  </div>
                </div>
              </div>

              <div class="about-section">
                <h3>核心优势</h3>
                <ul class="advantage-list">
                  <li>
                    <el-icon><Check /></el-icon>
                    <div>
                      <h4>技术领先</h4>
                      <p>拥有自主知识产权的核心技术，产品性能行业领先</p>
                    </div>
                  </li>
                  <li>
                    <el-icon><Check /></el-icon>
                    <div>
                      <h4>品质保障</h4>
                      <p>通过ISO9001质量管理体系认证，产品质量稳定可靠</p>
                    </div>
                  </li>
                  <li>
                    <el-icon><Check /></el-icon>
                    <div>
                      <h4>服务完善</h4>
                      <p>提供7×24小时技术支持，快速响应客户需求</p>
                    </div>
                  </li>
                  <li>
                    <el-icon><Check /></el-icon>
                    <div>
                      <h4>定制开发</h4>
                      <p>可根据客户需求提供个性化定制解决方案</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="about-section">
                <h3>发展历程</h3>
                <div class="timeline">
                  <div class="timeline-item" v-for="item in timeline" :key="item.year">
                    <div class="timeline-year">{{ item.year }}</div>
                    <div class="timeline-content">{{ item.event }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧边栏 -->
          <Sidebar current-category="关于我们" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Check } from '@element-plus/icons-vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Sidebar from '@/components/Sidebar.vue'

const timeline = [
  { year: '2017', event: '公司成立，开始研发生产手机信号屏蔽器' },
  { year: '2019', event: '产品线扩展至无人机反制系统领域' },
  { year: '2021', event: '获得多项国家专利，产品出口海外市场' },
  { year: '2023', event: '推出5G信号屏蔽器系列产品' },
  { year: '2025', event: '成为行业领先的安防解决方案提供商' },
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

.about-content {
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

.about-section {
  margin-bottom: 40px;

  h3 {
    font-size: 20px;
    color: #333;
    margin: 0 0 20px 0;
    padding-left: 12px;
    border-left: 4px solid #1565c0;
  }

  p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 12px;
  }
}

.culture-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.culture-item {
  background: #f5f9ff;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #1565c0;

  h4 {
    font-size: 16px;
    color: #1565c0;
    margin: 0 0 8px 0;
  }

  p {
    margin: 0;
    font-size: 14px;
  }
}

.advantage-list {
  li {
    display: flex;
    gap: 16px;
    margin-bottom: 20px;
    padding: 16px;
    background: #f9f9f9;
    border-radius: 8px;

    .el-icon {
      font-size: 24px;
      color: #1565c0;
      flex-shrink: 0;
      margin-top: 4px;
    }

    h4 {
      font-size: 16px;
      color: #333;
      margin: 0 0 8px 0;
    }

    p {
      margin: 0;
      font-size: 14px;
    }
  }
}

.timeline {
  position: relative;
  padding-left: 30px;

  &::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e0e0e0;
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 24px;
  display: flex;
  gap: 20px;

  &::before {
    content: '';
    position: absolute;
    left: -26px;
    top: 6px;
    width: 12px;
    height: 12px;
    background: #1565c0;
    border-radius: 50%;
    border: 3px solid #fff;
    box-shadow: 0 0 0 2px #1565c0;
  }
}

.timeline-year {
  font-size: 16px;
  font-weight: bold;
  color: #1565c0;
  min-width: 50px;
}

.timeline-content {
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  .culture-grid {
    grid-template-columns: 1fr;
  }
}
</style>
