import React, { useState } from 'react';
import { SectionId, MenuItem } from '../types';
import { Check } from 'lucide-react';

const MENU_ITEMS: MenuItem[] = [
  // First Time / Reset
  {
    id: 'reset',
    name: '徹底リセット洗車',
    price: '¥12,000',
    description: 'ご新規様はここから。蓄積した汚れを全てリセットし、すっぴん状態へ。',
    category: 'new',
    duration: '120min',
    tag: '必須',
    features: ['アルカリプレウォッシュ', '酸性クリーナー(No.4/A06)', '油分除去', 'Poi-Shield仕上げ', '純水すすぎ']
  },
  {
    id: 'std-new',
    name: 'スタンダード純水洗車',
    price: '¥5,000',
    description: '基本のメンテナンス洗車。',
    category: 'new',
    duration: '60min',
    features: ['アルカリ洗浄', '酸性シャンプー', '純水仕上げ', 'FSEトップコート']
  },
  // Repeater
  {
    id: 'std-repeat',
    name: 'スタンダード純水洗車',
    price: '¥3,500',
    description: '会員様限定プライス。定期的な維持管理に。',
    category: 'repeater',
    duration: '30-40min',
    tag: '会員限定',
    features: ['中性シャンプー', '純水仕上げ', 'FSEトップコート', 'タイヤワックス']
  },
  {
    id: 'repair',
    name: 'リペア (Repare)',
    price: '¥9,000〜',
    description: '当店の主力メニュー。塗装を削らずに傷を埋め、ヌルテカの艶へ。',
    category: 'repeater',
    duration: '90min+',
    tag: '人気No.1',
    features: ['純水洗車', 'RSE-1250施工', '魔手裏剣 x BASE', 'トップコート仕上げ']
  },
  // Premium
  {
    id: 'premium',
    name: 'プレミアム・リペア',
    price: '¥22,000〜',
    description: '黒い車に深みを。より高度な充填技術。',
    category: 'premium',
    features: ['FZERO (黒ウレタン)', 'BP-MIX仕上げ', '圧倒的な黒味']
  },
  {
    id: 'flagship',
    name: 'フラグシップ・リペア',
    price: '¥32,000〜',
    description: '究極の艶と保護。',
    category: 'premium',
    features: ['Essence施工', 'N°999F施工', '最高峰の艶']
  }
];

const MenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'new' | 'repeater'>('new');

  return (
    <section id={SectionId.MENU} className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Service Menu</h2>
          <p className="text-gray-400">お客様の状態に合わせて最適なプランをご提案します</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800 p-1 rounded-full inline-flex">
            <button
              onClick={() => setActiveTab('new')}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all ${
                activeTab === 'new' 
                  ? 'bg-brand-accent text-brand-dark shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              First Visit / Reset
            </button>
            <button
              onClick={() => setActiveTab('repeater')}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-wide transition-all ${
                activeTab === 'repeater' 
                  ? 'bg-brand-accent text-brand-dark shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Member / Premium
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MENU_ITEMS.filter(item => {
            if (activeTab === 'new') return item.category === 'new';
            return item.category === 'repeater' || item.category === 'premium';
          }).map((item) => (
            <div key={item.id} className="glass-panel rounded-xl p-8 hover:border-brand-accent/30 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div>
                  {item.tag && (
                    <span className="inline-block px-2 py-1 bg-brand-gold text-brand-dark text-[10px] font-bold uppercase rounded mb-2">
                      {item.tag}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-accent transition-colors">
                    {item.name}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-serif text-brand-accent">{item.price}</div>
                  {item.duration && <div className="text-xs text-gray-500">{item.duration}</div>}
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 min-h-[48px]">{item.description}</p>
              
              <ul className="space-y-2">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <Check size={16} className="text-brand-accent mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 mb-2">※ 車種・サイズにより価格が変動する場合がございます。</p>
          <p className="text-xs text-gray-500">※ 重度のクレーター、クリア剥げのお車は施工をお断りする場合がございます。</p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;