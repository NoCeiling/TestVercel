export default function VarietiesPage() {
  const varieties = [
    {
      id: 'lion-head',
      name: '狮子头',
      origin: '河北涞水',
      difficulty: '简单',
      price: '100-500元',
      description: '经典品种，纹路清晰，包浆快，新手推荐',
      features: ['纹路清晰', '包浆快', '适合新手', '性价比高'],
      emoji: '🦁'
    },
    {
      id: 'si-zuo-lou',
      name: '四座楼',
      origin: '北京门头沟',
      difficulty: '中等',
      price: '300-1000元',
      description: '四棱分明，皮质厚实，收藏价值高',
      features: ['四棱分明', '皮质厚实', '收藏价值高', '适合进阶'],
      emoji: '🏛️'
    },
    {
      id: 'man-tian-xing',
      name: '满天星',
      origin: '山西吕梁',
      difficulty: '困难',
      price: '500-2000元',
      description: '纹路密集如满天繁星，观赏性强，高端品种',
      features: ['纹路密集', '观赏性强', '高端品种', '收藏首选'],
      emoji: '⭐'
    },
    {
      id: 'guan-gong',
      name: '官帽',
      origin: '河北承德',
      difficulty: '中等',
      price: '200-800元',
      description: '形状如古代官帽，纹路规整，盘玩手感好',
      features: ['形状独特', '纹路规整', '手感好', '中端选择'],
      emoji: '👑'
    },
    {
      id: 'ji-xing',
      name: '鸡心',
      origin: '山西吕梁',
      difficulty: '简单',
      price: '80-300元',
      description: '形状如鸡心，纹路简单，适合新手练习',
      features: ['形状可爱', '纹路简单', '价格便宜', '新手友好'],
      emoji: '❤️'
    },
    {
      id: 'bai-lin',
      name: '白狮子',
      origin: '河北涞水',
      difficulty: '困难',
      price: '800-3000元',
      description: '皮质白皙，纹路精美，高端收藏品种',
      features: ['皮质白皙', '纹路精美', '高端收藏', '稀有品种'],
      emoji: '🦁'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            核桃品种图鉴
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            探索各种核桃品种的特点、产地、难度和价格，找到最适合你的那一对
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {varieties.map((variety) => (
            <div key={variety.id} className="card">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <span className="text-6xl">{variety.emoji}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">{variety.name}</h3>
                <p className="text-gray-600 mb-3">📍 {variety.origin}</p>
                <p className="text-gray-700 mb-4">{variety.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-amber-700 mb-2">特点：</h4>
                  <div className="flex flex-wrap gap-2">
                    {variety.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">难度: {variety.difficulty}</span>
                  <span className="text-sm text-amber-600 font-semibold">{variety.price}</span>
                </div>

                <a
                  href={`/varieties/${variety.id}`}
                  className="block mt-4 text-center bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  查看详情
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">更多品种即将上线</h2>
          <p className="text-amber-700">
            我们正在持续更新更多核桃品种信息，敬请期待！
          </p>
        </div>
      </div>
    </div>
  )
}
