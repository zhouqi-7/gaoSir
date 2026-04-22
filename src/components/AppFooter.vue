<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="container">
        <div class="footer-grid">
          <!-- 网站导航 -->
          <div class="footer-col">
            <h3>网站导航</h3>
            <ul class="footer-links">
              <li v-for="item in siteNav" :key="item.path">
                <router-link :to="item.path">{{ item.name }}</router-link>
              </li>
            </ul>
          </div>

          <!-- 产品导航 -->
          <div class="footer-col">
            <h3>产品导航</h3>
            <ul class="footer-links">
              <li v-for="item in productNav" :key="item.path">
                <router-link :to="item.path">{{ item.name }}</router-link>
              </li>
            </ul>
          </div>

          <!-- 联系我们 -->
          <div class="footer-col">
            <h3>联系我们</h3>
            <div class="contact-info">
              <p><el-icon><Location /></el-icon> 公司地址：深圳市坪山区坪山街道水岸明珠6号</p>
              <p><el-icon><Phone /></el-icon> 服务热线：15911039553</p>
              <p><el-icon><Phone /></el-icon> 订购热线：17777879381</p>
              <p class="note">购买手机信号屏蔽器等产品请认准本站唯一地址</p>
              <p class="website">www.brhns.com</p>
            </div>
          </div>

          <!-- 关注我们 -->
          <div class="footer-col">
            <h3>关注我们</h3>
            <div class="qr-code">
              <div class="qr-placeholder">
                <el-icon :size="48"><Cellphone /></el-icon>
                <span>扫码关注我们</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 版权信息 -->
    <div class="footer-bottom">
      <div class="container">
        <p>
          &copy;2026 
          <a href="#">深圳立思杰科技有限公司</a>
          <a href="http://beian.miit.gov.cn" target="_blank">粤ICP备17091215号</a>
          <a href="#">网站地图</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Location, Phone, Cellphone } from '@element-plus/icons-vue'

const siteNav = [
  { path: '/about', name: '关于我们' },
  { path: '/products', name: '产品展示' },
  { path: '/certificates', name: '资质证书' },
  { path: '/news', name: '新闻中心' },
  { path: '/solutions', name: '解决方案' },
  { path: '/contact', name: '联系我们' },
]

const productNav = [
  { path: '/products', name: '无人机干扰系列' },
  { path: '/products', name: '手机信号屏蔽器系列' },
  { path: '/products', name: '安检设备系列' },
  { path: '/products', name: '排爆干扰系列' },
  { path: '/products', name: '会议保密系列' },
  { path: '/products', name: '手机智能管控系列' },
  { path: '/products', name: '其他产品' },
]
</script>

<style lang="scss" scoped>
.footer {
  background: #263238;
  color: #b0bec5;
}

.footer-top {
  padding: 50px 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.footer-col {
  h3 {
    color: #fff;
    font-size: 16px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #1565c0;
  }
}

.footer-links {
  li {
    margin-bottom: 10px;

    a {
      color: #b0bec5;
      transition: color 0.3s;

      &:hover {
        color: #fff;
      }
    }
  }
}

.contact-info {
  p {
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
    gap: 8px;

    .el-icon {
      flex-shrink: 0;
      margin-top: 2px;
    }
  }

  .note {
    font-size: 12px;
    color: #78909c;
  }

  .website {
    color: #1e88e5;
    font-weight: 500;
  }
}

.qr-code {
  .qr-placeholder {
    width: 150px;
    height: 150px;
    background: #37474f;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #78909c;

    span {
      font-size: 12px;
    }
  }
}

.footer-bottom {
  background: #1c262b;
  padding: 20px 0;
  text-align: center;

  p {
    a {
      color: #b0bec5;
      margin: 0 8px;

      &:hover {
        color: #fff;
      }
    }
  }
}
</style>
