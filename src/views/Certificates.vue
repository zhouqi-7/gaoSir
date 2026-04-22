<template>
  <div class="certificates-page">
    <!-- Banner -->
    <section class="banner">
      <div class="banner-image">
        <div class="banner-placeholder">
          <h1>资质证书</h1>
          <p>专业认证 品质保障</p>
        </div>
      </div>
    </section>

    <!-- 面包屑 -->
    <Breadcrumb :items="[{ name: '资质证书' }]" />

    <!-- 主内容区 -->
    <section class="main-content">
      <div class="container">
        <div class="row">
          <!-- 左侧内容 -->
          <div class="content-area">
            <div class="certificates-content">
              <h1 class="page-title">资质证书</h1>
              <p class="page-desc">公司拥有多项国家认证资质，产品质量通过严格检测，确保为客户提供安全可靠的产品。</p>

              <div class="certificate-grid">
                <div class="certificate-card" v-for="cert in certificates" :key="cert.id">
                  <div class="cert-image">
                    <div class="cert-placeholder">
                      <el-icon :size="48"><DocumentChecked /></el-icon>
                      <span>{{ cert.name }}</span>
                    </div>
                  </div>
                  <div class="cert-info">
                    <h3>{{ cert.name }}</h3>
                    <p>{{ cert.description }}</p>
                  </div>
                </div>
              </div>

              <div class="cert-stats">
                <div class="stat-item">
                  <div class="stat-number">50+</div>
                  <div class="stat-label">国家专利</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">20+</div>
                  <div class="stat-label">认证资质</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">1000+</div>
                  <div class="stat-label">合作客户</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">8年</div>
                  <div class="stat-label">行业经验</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧边栏 -->
          <Sidebar current-category="资质证书" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { DocumentChecked } from '@element-plus/icons-vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Sidebar from '@/components/Sidebar.vue'

const certificates = [
  { id: 1, name: 'ISO9001质量管理体系认证', description: '公司通过ISO9001质量管理体系认证，确保产品质量稳定可靠。' },
  { id: 2, name: '国家强制性产品认证（3C）', description: '产品通过国家强制性产品认证，符合国家安全标准。' },
  { id: 3, name: '公安部检测报告', description: '产品经公安部安全与警用电子产品质量检测中心检测合格。' },
  { id: 4, name: '无线电发射设备型号核准证', description: '取得国家无线电管理委员会颁发的型号核准证书。' },
  { id: 5, name: '高新技术企业证书', description: '公司被认定为国家级高新技术企业。' },
  { id: 6, name: '发明专利证书', description: '拥有多项无线电干扰技术发明专利。' },
  { id: 7, name: 'CE认证', description: '产品通过欧盟CE认证，符合欧洲安全标准。' },
  { id: 8, name: 'FCC认证', description: '产品通过美国FCC认证，符合美国电磁兼容标准。' },
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

.certificates-content {
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

.certificate-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}

.certificate-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transform: translateY(-5px);
  }
}

.cert-image {
  height: 200px;
  background: #f5f9ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cert-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: #1565c0;

  span {
    font-size: 14px;
    font-weight: 500;
  }
}

.cert-info {
  padding: 16px;
  border-top: 1px solid #f0f0f0;

  h3 {
    font-size: 15px;
    color: #333;
    margin: 0 0 8px 0;
  }

  p {
    font-size: 13px;
    color: #666;
    margin: 0;
    line-height: 1.6;
  }
}

.cert-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 30px;
  background: linear-gradient(135deg, #1565c0 0%, #1e88e5 100%);
  border-radius: 8px;
}

.stat-item {
  text-align: center;
  color: #fff;

  .stat-number {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .stat-label {
    font-size: 14px;
    opacity: 0.9;
  }
}

@media (max-width: 1024px) {
  .certificate-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  .certificate-grid {
    grid-template-columns: 1fr;
  }

  .cert-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
