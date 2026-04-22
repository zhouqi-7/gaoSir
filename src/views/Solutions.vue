<template>
  <div class="solutions-page">
    <!-- Banner -->
    <section class="banner">
      <div class="banner-image">
        <div class="banner-placeholder">
          <h1>解决方案</h1>
          <p>专业场景化安防解决方案</p>
        </div>
      </div>
    </section>

    <!-- 面包屑 -->
    <Breadcrumb :items="[{ name: '解决方案' }]" />

    <!-- 主内容区 -->
    <section class="main-content">
      <div class="container">
        <div class="row">
          <!-- 左侧内容 -->
          <div class="content-area">
            <div class="solutions-content">
              <h1 class="page-title">解决方案</h1>
              <p class="page-desc">针对不同应用场景，提供专业的定制化安全防护解决方案，确保客户场所安全。</p>

              <div class="solutions-grid">
                <div class="solution-card" v-for="solution in solutions" :key="solution.id">
                  <div class="solution-icon">
                    <el-icon :size="40"><component :is="solution.icon" /></el-icon>
                  </div>
                  <h3>{{ solution.title }}</h3>
                  <p>{{ solution.description }}</p>
                  <ul class="solution-features">
                    <li v-for="(feature, index) in solution.features" :key="index">
                      <el-icon><Check /></el-icon> {{ feature }}
                    </li>
                  </ul>
                  <router-link to="/contact" class="solution-link">
                    了解详情 <el-icon><ArrowRight /></el-icon>
                  </router-link>
                </div>
              </div>

              <div class="solution-process">
                <h2>服务流程</h2>
                <div class="process-steps">
                  <div class="step-item" v-for="(step, index) in processSteps" :key="index">
                    <div class="step-number">{{ index + 1 }}</div>
                    <h4>{{ step.title }}</h4>
                    <p>{{ step.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧边栏 -->
          <Sidebar current-category="解决方案" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Check, ArrowRight, School, OfficeBuilding, VideoCamera, Lock, Warning, Connection } from '@element-plus/icons-vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Sidebar from '@/components/Sidebar.vue'

const solutions = [
  {
    id: 1,
    title: '考场信号屏蔽方案',
    icon: 'School',
    description: '针对学校考场环境，提供全方位手机信号屏蔽解决方案，确保考试公平公正。',
    features: ['覆盖2G/3G/4G/5G全频段', '屏蔽范围可调节', '安装简便，不影响正常教学', '绿色环保，无电磁污染'],
  },
  {
    id: 2,
    title: '会议保密方案',
    icon: 'OfficeBuilding',
    description: '为重要会议提供手机信号屏蔽和录音屏蔽服务，防止信息泄露。',
    features: ['精准屏蔽，不影响外部通信', '定时开关机，操作简便', '低噪音设计，不影响会议', '支持多会场独立控制'],
  },
  {
    id: 3,
    title: '监狱安防方案',
    icon: 'Lock',
    description: '为监狱、看守所等场所提供全天候手机信号屏蔽，防止违规通信。',
    features: ['7×24小时不间断工作', '远程集中管理', '故障自动报警', '覆盖监舍、放风区等全区域'],
  },
  {
    id: 4,
    title: '无人机反制方案',
    icon: 'VideoCamera',
    description: '针对重要场所低空安全，提供无人机侦测与反制一体化解决方案。',
    features: ['雷达+光电+无线电综合探测', '自动识别跟踪目标', '多种反制模式可选', '组网部署，覆盖范围广'],
  },
  {
    id: 5,
    title: '加油站防爆方案',
    icon: 'Warning',
    description: '在加油站、化工厂等易燃易爆场所，防止手机信号引发安全事故。',
    features: ['防爆认证，安全可靠', '本安型设计', '覆盖加油区、储油区', '符合国家安全标准'],
  },
  {
    id: 6,
    title: '通信基站干扰方案',
    icon: 'Connection',
    description: '针对特殊区域周边通信基站干扰问题，提供定向屏蔽解决方案。',
    features: ['定向天线精准屏蔽', '不影响正常通信', '智能功率调节', '远程监控管理'],
  },
]

const processSteps = [
  { title: '需求沟通', description: '了解客户具体需求和现场环境' },
  { title: '方案设计', description: '根据需求定制专属解决方案' },
  { title: '产品选型', description: '推荐最适合的产品配置' },
  { title: '现场施工', description: '专业团队上门安装调试' },
  { title: '培训交付', description: '操作培训及技术交底' },
  { title: '售后保障', description: '7×24小时技术支持服务' },
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

.solutions-content {
  background: #fff;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.page-title {
  font-size: 28px;
  color: #333;
  margin: 0 0 12px 0;
  padding-bottom: 15px;
  border-bottom: 2px solid #1565c0;
}

.page-desc {
  color: #666;
  line-height: 1.8;
  margin-bottom: 30px;
}

.solutions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 50px;
}

.solution-card {
  padding: 30px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
    border-color: #1565c0;
  }

  h3 {
    font-size: 18px;
    color: #333;
    margin: 16px 0 12px 0;
  }

  p {
    color: #666;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 16px;
  }
}

.solution-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #1565c0 0%, #1e88e5 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.solution-features {
  li {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #666;
    font-size: 13px;
    margin-bottom: 8px;

    .el-icon {
      color: #1565c0;
      flex-shrink: 0;
    }
  }
}

.solution-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #1565c0;
  font-size: 14px;
  font-weight: 500;
  margin-top: 16px;
  text-decoration: none;
  transition: gap 0.3s;

  &:hover {
    gap: 8px;
    color: #1565c0;
  }
}

.solution-process {
  h2 {
    font-size: 22px;
    color: #333;
    margin: 0 0 30px 0;
    text-align: center;
  }
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}

.step-item {
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 25px;
    right: -10px;
    width: 20px;
    height: 2px;
    background: #e0e0e0;
  }

  &:last-child::after {
    display: none;
  }

  .step-number {
    width: 50px;
    height: 50px;
    background: #1565c0;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    margin: 0 auto 12px;
  }

  h4 {
    font-size: 14px;
    color: #333;
    margin: 0 0 8px 0;
  }

  p {
    font-size: 12px;
    color: #666;
    margin: 0;
    line-height: 1.4;
  }
}

@media (max-width: 1200px) {
  .process-steps {
    grid-template-columns: repeat(3, 1fr);
  }

  .step-item:nth-child(3)::after {
    display: none;
  }
}

@media (max-width: 1024px) {
  .solutions-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  .process-steps {
    grid-template-columns: repeat(2, 1fr);
  }

  .step-item::after {
    display: none !important;
  }
}
</style>
