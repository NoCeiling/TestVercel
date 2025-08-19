import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '核桃集 - 专业的核桃品种图鉴与盘玩指南',
  description: '专业的核桃品种图鉴与盘玩指南，包含狮子头、四座楼、满天星等热门品种介绍，新手避坑指南，盘玩技巧分享。',
  keywords: '文玩核桃,核桃品种,狮子头,四座楼,满天星,盘玩技巧,核桃图鉴',
  authors: [{ name: '核桃集' }],
  openGraph: {
    title: '核桃集 - 专业的核桃品种图鉴与盘玩指南',
    description: '专业的核桃品种图鉴与盘玩指南，包含狮子头、四座楼、满天星等热门品种介绍。',
    type: 'website',
    locale: 'zh_CN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <header className="bg-white shadow-sm border-b border-amber-100">
          <nav className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold text-amber-800">
                核桃集
              </a>
              <div className="hidden md:flex space-x-8">
                <a href="/varieties" className="text-amber-700 hover:text-amber-900 transition-colors">
                  品种图鉴
                </a>
                <a href="/guides" className="text-amber-700 hover:text-amber-900 transition-colors">
                  新手指南
                </a>
                <a href="/about" className="text-amber-700 hover:text-amber-900 transition-colors">
                  关于我们
                </a>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-amber-800 text-white py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; 2024 核桃集. 专业的核桃品种图鉴与盘玩指南.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
