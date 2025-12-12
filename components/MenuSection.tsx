import React, { useState } from 'react';
import { SectionId, MenuItem } from '../types';
import { Check } from 'lucide-react';

const MENU_ITEMS: MenuItem[] = [
  // First Time / Reset
  {
    id: 'reset',
    name: 'リセット洗車',
    price: 'S14,300、M16,500、L18,700、LL22,000',
    description: 'ご新規様はここから。蓄積した汚れを全てリセットし、すっぴん状態へ。',
    category: 'new',
    duration: '120min',
    tag: '必須',
    features: ['アルカリプレウォッシュ', '酸性クリーナー(No.4/A06)', '油分除去', 'Poi-Shield仕上げ', '純水すすぎ']
  },
  {
    id: 'std-new',
    name: 'スタンダード純水洗車',
    price: 'S4,800、M5,800、L6,800、LL7,800',
    description: '基本のメンテナンス洗車。',
    category: 'new',
    duration: '60min',
    features: ['アルカリ洗浄', '酸性シャンプー', '純水仕上げ', 'FSEトップコート']
  },
  // Repeater
  {
    id: 'std-repeat',
    name: 'リピーター純水洗車',
    price: 'S3,500、M4,500、L5,500、LL6,500',
    description: '会員様限定プライス。定期的な維持管理に。',
    category: 'repeater',
    duration: '30-40min',
    tag: '会員限定',
    features: ['中性シャンプー', '純水仕上げ', 'FSEトップコート', 'タイヤワックス']
  },
  {
    id: 'repair',
    name: 'リペア (Repare)',
    price: 'S8,800、M9,900、L11,300、LL12,700',
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
    price: 'S19,800、M22,000、L25,300、LL29,700',
    description: '黒い車に深みを。より高度な充填技術。',
    category: 'premium',
    features: ['FZERO (黒ウレタン)', 'BP-MIX仕上げ', '圧倒的な黒味']
  },
  {
    id: 'flagship',
    name: 'フラグシップ・リペア',
    price: 'S29,800、M32,000、L35,300、LL39,700',
    description: '究極の艶と保護。',
    category: 'premium',
    features: ['Essence施工', 'N°999F施工', '最高峰の艶']
  }
];

const PriceDisplay = ({ price }: { price: string }) => {
  // サイズ表記を含まない単純な価格の場合
  if (!price.includes('S') && !price.includes('、')) {
    return <div className="text-2xl font-serif text-brand-accent">{price}</div>;
  }

  // サイズ表記がある場合 (例: "S14,300、M16,500...")
  const prices = price.split('、').map(p => {
    const match = p.trim().match(/^([A-Z]+)(.*)$/);
    return match ? { size: match[1], value: match[2] } : { size: '', value: p };
  });

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2 w-full">
      {prices.map((p, idx) => (
        <div key={idx} className="bg-slate-800/80 border border-slate-700/50 rounded p-2 flex flex-col items-center justify-center">
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{p.size}</span>
          <span className="text-sm font-serif text-brand-accent">{p.value}</span>
        </div>
      ))}
    </div>
  );
};

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
            <div key={item.id} className="glass-panel rounded-xl p-8 hover:border-brand-accent/30 transition-all group flex flex-col h-full">
              
              {/* Header: Name & Tag */}
              <div className="flex justify-between items-start mb-2">
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
                {item.duration && <div className="text-xs text-gray-500 pt-1 whitespace-nowrap">{item.duration}</div>}
              </div>

              {/* Price Grid */}
              <div className="mb-6">
                 <PriceDisplay price={item.price} />
              </div>
              
              {/* Description */}
              <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">{item.description}</p>
              
              {/* Features */}
              <ul className="space-y-2 mt-auto">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <Check size={16} className="text-brand-accent mr-2 flex-shrink-0" />
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