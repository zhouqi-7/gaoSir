# 无人机干扰系列官网

基于 Vue 3 + Vite 的企业官网，展示无人机干扰设备产品。

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器 (端口 3000)
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
src/
├── main.js           # 入口文件
├── App.vue           # 根组件
├── router/index.js   # 路由配置
├── styles/global.scss # 全局样式
├── components/       # 公共组件 (Header, Footer, Sidebar, Breadcrumb)
├── views/            # 页面组件 (Home, Products, About 等)
└── data/products.js  # 产品数据
```

## 技术栈

- Vue 3 (Composition API)
- Vite 5
- Element Plus 2.5
- Vue Router 4
- SCSS

## 注意事项

- 开发服务器默认端口 **3000**（自动打开浏览器）
- 所有 Element Plus 图标已在 main.js 中全局注册
- 站点语言为中文（zh-CN）

## 部署说明

- 方式一：通过vercel方式部署https://vercel.com/zhouqi-7s-projects/gao-sir/settings/domains
- 方式二：通过nginx方式部署
