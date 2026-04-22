<template>
  <div class="contact-page">
    <!-- Banner -->
    <section class="banner">
      <div class="banner-image">
        <div class="banner-placeholder">
          <h1>联系我们</h1>
          <p>期待与您的合作</p>
        </div>
      </div>
    </section>

    <!-- 面包屑 -->
    <Breadcrumb :items="[{ name: '联系我们' }]" />

    <!-- 主内容区 -->
    <section class="main-content">
      <div class="container">
        <div class="row">
          <!-- 左侧内容 -->
          <div class="content-area">
            <div class="contact-content">
              <h1 class="page-title">联系我们</h1>

              <div class="contact-info-section">
                <div class="info-cards">
                  <div class="info-card">
                    <el-icon :size="32"><Location /></el-icon>
                    <h3>公司地址</h3>
                    <p>深圳市坪山区坪山街道水岸明珠6号</p>
                  </div>
                  <div class="info-card">
                    <el-icon :size="32"><Phone /></el-icon>
                    <h3>服务热线</h3>
                    <p>15911039553</p>
                  </div>
                  <div class="info-card">
                    <el-icon :size="32"><PhoneFilled /></el-icon>
                    <h3>订购热线</h3>
                    <p>17777879381</p>
                  </div>
                  <div class="info-card">
                    <el-icon :size="32"><Message /></el-icon>
                    <h3>官方网站</h3>
                    <p>www.brhns.com</p>
                  </div>
                </div>
              </div>

              <div class="contact-form-section">
                <h2>在线留言</h2>
                <el-form :model="form" label-position="top" class="contact-form">
                  <el-row :gutter="20">
                    <el-col :span="12">
                      <el-form-item label="您的姓名">
                        <el-input v-model="form.name" placeholder="请输入您的姓名" />
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="联系电话">
                        <el-input v-model="form.phone" placeholder="请输入您的联系电话" />
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-form-item label="电子邮箱">
                    <el-input v-model="form.email" placeholder="请输入您的邮箱地址" />
                  </el-form-item>
                  <el-form-item label="留言主题">
                    <el-input v-model="form.subject" placeholder="请输入留言主题" />
                  </el-form-item>
                  <el-form-item label="留言内容">
                    <el-input
                      v-model="form.content"
                      type="textarea"
                      :rows="5"
                      placeholder="请输入您的留言内容"
                    />
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" size="large" @click="handleSubmit">
                      提交留言
                    </el-button>
                  </el-form-item>
                </el-form>
              </div>

              <div class="map-section">
                <h2>位置导航</h2>
                <div class="map-placeholder">
                  <el-icon :size="48"><LocationFilled /></el-icon>
                  <p>深圳市坪山区坪山街道水岸明珠6号</p>
                  <p class="map-note">（地图加载需要网络支持）</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧边栏 -->
          <Sidebar current-category="联系我们" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { Location, Phone, PhoneFilled, Message, LocationFilled } from '@element-plus/icons-vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Sidebar from '@/components/Sidebar.vue'

const form = reactive({
  name: '',
  phone: '',
  email: '',
  subject: '',
  content: '',
})

const handleSubmit = () => {
  if (!form.name || !form.phone || !form.content) {
    ElMessage.warning('请填写必填项')
    return
  }
  ElMessage.success('留言提交成功，我们会尽快与您联系！')
  form.name = ''
  form.phone = ''
  form.email = ''
  form.subject = ''
  form.content = ''
}
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

.contact-content {
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

.contact-info-section {
  margin-bottom: 40px;
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.info-card {
  text-align: center;
  padding: 24px 16px;
  background: #f5f9ff;
  border-radius: 8px;
  border: 1px solid #e0e8f0;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(21, 101, 192, 0.15);
    border-color: #1565c0;
  }

  .el-icon {
    color: #1565c0;
    margin-bottom: 12px;
  }

  h3 {
    font-size: 14px;
    color: #666;
    margin: 0 0 8px 0;
    font-weight: normal;
  }

  p {
    font-size: 15px;
    color: #333;
    margin: 0;
    font-weight: 500;
  }
}

.contact-form-section {
  margin-bottom: 40px;
  padding: 30px;
  background: #fafafa;
  border-radius: 8px;

  h2 {
    font-size: 20px;
    color: #333;
    margin: 0 0 24px 0;
    padding-left: 12px;
    border-left: 4px solid #1565c0;
  }
}

.contact-form {
  max-width: 800px;
}

.map-section {
  h2 {
    font-size: 20px;
    color: #333;
    margin: 0 0 24px 0;
    padding-left: 12px;
    border-left: 4px solid #1565c0;
  }
}

.map-placeholder {
  height: 300px;
  background: #f5f5f5;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  gap: 12px;

  p {
    margin: 0;
  }

  .map-note {
    font-size: 12px;
    color: #999;
  }
}

@media (max-width: 1024px) {
  .info-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
  }

  .info-cards {
    grid-template-columns: 1fr;
  }
}
</style>
