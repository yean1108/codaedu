# CodaEdu - 澳洲留学移民服务网站

一个现代化的澳洲留学移民服务网站，使用 React 框架构建。

## 技术栈

- React 18
- React Router DOM
- Vite
- CSS3

## 配色方案

参考配色图，使用以下颜色：
- Cream (#EAE1CB)
- Rose (#D18E97)
- Mustard (#D2A432)
- Sage (#979E6C)
- Brown (#5B3B1E)
- Orange (#BC5727)

## 功能特性

- 响应式设计，支持移动端和桌面端
- 多页面导航（首页、服务、院校、课程、关于我们、联系我们）
- 服务分类展示
- 客户评价展示
- 在线咨询表单
- 下拉菜单导航

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 构建生产版本：
```bash
npm run build
```

4. 预览生产版本：
```bash
npm run preview
```

## 项目结构

```
src/
├── components/     # 可复用组件
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── ServiceCards.jsx
│   ├── Testimonials.jsx
│   └── CTA.jsx
├── pages/          # 页面组件
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── Institutions.jsx
│   ├── Courses.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── App.jsx         # 主应用组件
├── App.css         # 全局样式
├── main.jsx        # 入口文件
└── index.css       # 基础样式
```

## 参考网站

网站设计参考了 [ACIC](https://www.acic.com.au/) 的结构和布局。
