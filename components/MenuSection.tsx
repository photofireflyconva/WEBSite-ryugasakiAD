import React, { useState } from 'react';
import { SectionId, MenuItem } from '../types';
import { Check } from 'lucide-react';

const MENU_ITEMS: MenuItem[] = [
  // Washing Menus
  {
    id: 'wash-std',
    name: 'スタンダード純水洗車',
    price: 'S4,000、M5,000、L6,000、LL7,000',
    description: '日々のメンテナンスに最適。全ての工程に純水を使用し、シミを作らず優しく洗い上げます。',
    category: 'wash',
    duration: '45min',
    tag: '基本',
    features: ['アルカリプレウォッシュ', '中性シャンプー手洗い', '純水すすぎ', '簡易トップコート', 'タイヤワックス']
  },
  {
    id: 'wash-premium',
    name: 'プレミアムディティール洗車',
    price: 'S6,000、M7,500、L9,000、LL10,500',
    description: '細部まで徹底的に。ホイールの奥やドアヒンジの隙間の汚れまでアプローチするワンランク上の洗車。',
    category: 'wash',
    duration: '90min',
    tag: 'おすすめ',
    features: ['スタンダード洗車の全工程', '細部ブラシ洗浄', 'ホイール奥洗浄', 'ドアヒンジ清掃', '高耐久撥水仕上げ']
  },
  {
    id: 'wash-reset',
    name: 'リセットクレンジング洗車',
    price: 'S12,000、M14,000、L16,000、LL18,000',
    description: '蓄積した水垢や油分を特殊ケミカルで分解除去。コーティング前の下地作りや、汚れがひどい場合に。',
    category: 'wash',
    duration: '150min',
    tag: '徹底',
    features: ['プレミアム洗車の全工程', '酸性ケミカル(スケール除去)', '油分除去(脱脂)', '鉄粉除去', '強撥水トップコート']
  },
  // Coating Menus
  {
    id: 'coat-light',
    name: 'グロスリペア・コーティング',
    price: 'S22,000、M25,000、L28,000、LL32,000',
    description: '「削らない」美観復元。特殊樹脂で微細な傷を埋め、驚異的な艶を復活させます。',
    category: 'coating',
    duration: '180min+',
    tag: '艶復活',
    features: ['リセット洗車込み', '傷埋めフィリング施工', '高光沢ポリマー', '3〜6ヶ月耐久']
  },
  {
    id: 'coat-std',
    name: 'セラミック・エナメルコート',
    price: 'S45,000、M50,000、L55,000、LL60,000',
    description: '本格的な保護を求める方に。犠牲膜として塗装を強力に守り、深い透明感を与えます。',
    category: 'coating',
    duration: '1 day',
    tag: '人気No.1',
    features: ['リセット洗車込み', '下地調整(軽研磨相談)', 'セラミック配合被膜', '硬化型トップコート', '1年耐久']
  },
  {
    id: 'coat-premium',
    name: 'フラグシップ・アーマー',
    price: 'S60,000、M68,000、L76,000、LL85,000',
    description: '究極の保護と艶。当店の技術の粋を集めた、妥協なき最高峰のコーティング。',
    category: 'coating',
    duration: '2 days',
    tag: '最高峰',
    features: ['精密クレンジング', 'マルチレイヤー施工', 'ナノカーボン配合', '超撥水・防汚性能', '2年〜耐久']
  }
];

const PriceDisplay = ({ price }: { price: string }) => {
  if (!price.includes('S') && !price.includes('、')) {
    return <div className="text-2xl font-serif text-brand-accent">{price}</div>;
  }

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
  const [activeTab, setActiveTab] = useState<'wash' | 'coating'>('wash');

  return (
    <section id={SectionId.MENU} className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Service Menu</h2>
          <p className="text-gray-400">お車の状態と目的に合わせた2つのカテゴリー</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800 p-1 rounded-full inline-flex">
            <button
              onClick={() => setActiveTab('wash')}
              className={`px-8 py-2 rounded-full text-sm font-bold tracking-wide transition-all ${
                activeTab === 'wash' 
                  ? 'bg-brand-accent text-brand-dark shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Washing
            </button>
            <button
              onClick={() => setActiveTab('coating')}
              className={`px-8 py-2 rounded-full text-sm font-bold tracking-wide transition-all ${
                activeTab === 'coating' 
                  ? 'bg-brand-accent text-brand-dark shadow-lg' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Coating
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.filter(item => item.category === activeTab).map((item) => (
            <div key={item.id} className="glass-panel rounded-xl p-8 hover:border-brand-accent/30 transition-all group flex flex-col h-full">
              
              <div className="flex justify-between items-start mb-2">
                <div>
                  {item.tag && (
                    <span className="inline-block px-2 py-1 bg-brand-gold text-brand-dark text-[10px] font-bold uppercase rounded mb-2">
                      {item.tag}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors">
                    {item.name}
                  </h3>
                </div>
                {item.duration && <div className="text-[10px] text-gray-500 pt-1 font-mono">{item.duration}</div>}
              </div>

              <div className="mb-6">
                 <PriceDisplay price={item.price} />
              </div>
              
              <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">{item.description}</p>
              
              <ul className="space-y-2 mt-auto">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-xs text-gray-300">
                    <Check size={14} className="text-brand-accent mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 mb-2">※ 表示価格は税込です。Sサイズ（N-BOX等の軽自動車クラス）を基準としています。</p>
          <p className="text-xs text-gray-500">※ 車種サイズ（M/L/LL）により価格が異なります。詳細はお問い合わせください。</p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;