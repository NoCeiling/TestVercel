export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* 英雄区域 */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-800 mb-6">
            核桃集
          </h1>
          <p className="text-xl md:text-2xl text-amber-700 mb-8 max-w-3xl mx-auto">
            专业的核桃品种图鉴与盘玩指南 - PlayWalnut.com
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/varieties"
              className="btn-primary"
            >
              探索品种图鉴
            </a>
            <a
              href="/guides"
              className="btn-secondary"
            >
              新手避坑指南
            </a>
          </div>
        </div>
      </section>

      {/* 热门核桃品种 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-amber-800">热门核桃品种</h2>
            <a href="/varieties" className="text-amber-600 hover:text-amber-700 font-semibold flex items-center group">
              查看全部 
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <span className="text-4xl">🌰</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">狮子头</h3>
                <p className="text-gray-600 mb-3">📍 河北涞水</p>
                <p className="text-gray-700 mb-4">经典品种，纹路清晰，包浆快，新手推荐</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">难度: 简单</span>
                  <span className="text-sm text-amber-600 font-semibold">100-500元</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <span className="text-4xl">🌰</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">四座楼</h3>
                <p className="text-gray-600 mb-3">📍 北京门头沟</p>
                <p className="text-gray-700 mb-4">四棱分明，皮质厚实，收藏价值高</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">难度: 中等</span>
                  <span className="text-sm text-amber-600 font-semibold">300-1000元</span>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <span className="text-4xl">🌰</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">满天星</h3>
                <p className="text-gray-600 mb-3">📍 山西吕梁</p>
                <p className="text-gray-700 mb-4">纹路密集，观赏性强，高端品种</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">难度: 困难</span>
                  <span className="text-sm text-amber-600 font-semibold">500-2000元</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 品类展示 */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-amber-800">品类展示</h2>
            <a href="/varieties" className="text-amber-600 hover:text-amber-700 font-semibold flex items-center group">
              浏览全部品类
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-amber-100">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🦁</span>
                <h3 className="text-xl font-semibold text-amber-800">狮子头系列</h3>
              </div>
              <p className="text-gray-700 mb-4">包括老款狮子头、新款狮子头、闷尖狮子头等，纹路清晰，适合新手。</p>
              <a href="/varieties/lion-head" className="text-amber-600 hover:text-amber-700 font-semibold">
                了解更多 →
              </a>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-amber-100">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🏛️</span>
                <h3 className="text-xl font-semibold text-amber-800">四座楼系列</h3>
              </div>
              <p className="text-gray-700 mb-4">四棱分明，皮质厚实，收藏价值高，适合有一定经验的玩家。</p>
              <a href="/varieties/si-zuo-lou" className="text-amber-600 hover:text-amber-700 font-semibold">
                了解更多 →
              </a>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-amber-100">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">⭐</span>
                <h3 className="text-xl font-semibold text-amber-800">满天星系列</h3>
              </div>
              <p className="text-gray-700 mb-4">纹路密集如满天繁星，观赏性强，高端品种，适合收藏。</p>
              <a href="/varieties/man-tian-xing" className="text-amber-600 hover:text-amber-700 font-semibold">
                了解更多 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 新手指南 */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-800 mb-4">新手避坑指南</h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              刚入门文玩核桃？别担心，我们为你准备了详细的入门指南，帮你避开新手常见陷阱。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-amber-800 mb-3">如何挑选第一对核桃</h3>
              <p className="text-gray-700 mb-4">从尺寸、皮质、纹路等多个维度教你挑选适合的核桃。</p>
              <a href="/guides/choosing-first-pair" className="text-amber-600 hover:text-amber-700 font-semibold">
                查看指南 →
              </a>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-amber-800 mb-3">盘玩技巧与注意事项</h3>
              <p className="text-gray-700 mb-4">正确的盘玩方法，避免核桃开裂、变色的常见问题。</p>
              <a href="/guides/playing-techniques" className="text-amber-600 hover:text-amber-700 font-semibold">
                查看指南 →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
