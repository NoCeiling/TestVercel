# 核桃集 - 专业的核桃品种图鉴与盘玩指南

一个专业的文玩核桃网站，提供核桃品种介绍、盘玩技巧和新手指南。

## 功能特性

- 🏠 **首页展示** - 热门核桃品种介绍和导航
- 🌰 **品种图鉴** - 详细的核桃品种信息，包括产地、难度、价格等
- 📚 **新手指南** - 入门教程和避坑指南
- 📱 **响应式设计** - 支持各种设备访问
- 🎨 **现代化UI** - 使用Tailwind CSS构建的美观界面

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 部署

项目已配置为可在Vercel上直接部署：

1. 推送代码到GitHub
2. 在Vercel上导入仓库
3. 自动部署完成

## 项目结构

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # 根布局
│   ├── page.tsx        # 首页
│   ├── varieties/      # 品种图鉴页面
│   ├── guides/         # 新手指南页面
│   └── globals.css     # 全局样式
├── components/          # 可复用组件
└── config/             # 配置文件
```

## 贡献

欢迎提交Issue和Pull Request来改进这个项目！

## 许可证

MIT License