export default function GuidesPage() {
  const guides = [
    {
      id: 'choosing-first-pair',
      title: '如何挑选第一对核桃',
      description: '从尺寸、皮质、纹路等多个维度教你挑选适合的核桃',
      difficulty: '新手',
      duration: '5分钟',
      tags: ['挑选技巧', '新手必读', '避坑指南'],
      emoji: '🔍'
    },
    {
      id: 'playing-techniques',
      title: '盘玩技巧与注意事项',
      description: '正确的盘玩方法，避免核桃开裂、变色的常见问题',
      difficulty: '新手',
      duration: '8分钟',
      tags: ['盘玩技巧', '保养方法', '常见问题'],
      emoji: '👐'
    },
    {
      id: 'maintenance',
      title: '核桃保养与收藏',
      description: '长期保养核桃的方法，让它们越盘越漂亮',
      difficulty: '进阶',
      duration: '10分钟',
      tags: ['保养方法', '收藏技巧', '长期维护'],
      emoji: '💎'
    },
    {
      id: 'market-guide',
      title: '核桃市场购买指南',
      description: '如何识别真假核桃，避免购买到劣质产品',
      difficulty: '新手',
      duration: '6分钟',
      tags: ['购买指南', '真假识别', '市场行情'],
      emoji: '🛒'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            新手避坑指南
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            刚入门文玩核桃？别担心，我们为你准备了详细的入门指南，帮你避开新手常见陷阱
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {guides.map((guide) => (
            <div key={guide.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-4">{guide.emoji}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-amber-800 mb-2">{guide.title}</h3>
                  <p className="text-gray-700 mb-3">{guide.description}</p>
                  
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full">
                      {guide.difficulty}
                    </span>
                    <span className="text-sm text-gray-500">⏱️ {guide.duration}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {guide.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`/guides/${guide.id}`}
                    className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    阅读指南
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">新手常见问题</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-amber-700 mb-3">❓ 我应该选择什么尺寸的核桃？</h3>
              <p className="text-gray-700 mb-4">
                新手建议选择40-45mm的核桃，这个尺寸适合大多数人的手掌，盘玩起来比较舒适。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-700 mb-3">❓ 核桃开裂了怎么办？</h3>
              <p className="text-gray-700 mb-4">
                轻微开裂可以用核桃油涂抹，严重开裂建议更换。预防开裂的关键是避免温差过大。
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-700 mb-3">❓ 盘玩多久能看到效果？</h3>
              <p className="text-gray-700 mb-4">
                一般3-6个月能看到明显变化，1-2年会有很好的包浆效果。耐心是关键！
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-700 mb-3">❓ 如何判断核桃的真假？</h3>
              <p className="text-gray-700 mb-4">
                真核桃纹路自然，重量适中，敲击有清脆声。假核桃往往纹路过于规整，重量异常。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">更多指南即将上线</h2>
          <p className="text-amber-700">
            我们正在持续更新更多实用指南，敬请期待！
          </p>
        </div>
      </div>
    </div>
  )
}
