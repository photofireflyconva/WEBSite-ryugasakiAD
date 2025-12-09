import React from 'react';
import { SectionId } from '../types';
import { ShieldCheck, Droplets, Sparkles } from 'lucide-react';

const Concept: React.FC = () => {
  return (
    <section id={SectionId.CONCEPT} className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Paint Preservation
          </h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            従来の「研磨して傷を消す」方法では、限りある塗装（クリア層）は薄くなり、強度が落ちてしまいます。
            当店は「削らない」ことに特化。特殊ケミカルによる洗浄と、傷を埋めるフィリング技術で、
            愛車の塗装を守りながら美観を復元します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="glass-panel p-8 rounded-lg hover:border-brand-accent/50 transition-colors duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-brand-accent/10 rounded-full text-brand-accent">
                <ShieldCheck size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">No Cutting</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              研磨は最小限、またはゼロへ。<br/>
              塗装の厚みを残すことが、<br/>
              将来の輝きを守る最大の防御です。
            </p>
          </div>

          <div className="glass-panel p-8 rounded-lg hover:border-brand-accent/50 transition-colors duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-brand-accent/10 rounded-full text-brand-accent">
                <Droplets size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Pure Water</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              全ての工程で純水を使用。<br/>
              不純物を含まない水で洗うことで、<br/>
              シミの原因を根本から断ちます。
            </p>
          </div>

          <div className="glass-panel p-8 rounded-lg hover:border-brand-accent/50 transition-colors duration-300">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-brand-accent/10 rounded-full text-brand-accent">
                <Sparkles size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Filling Tech</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              傷を「削る」のではなく「埋める」。<br/>
              特殊樹脂により、深みのある<br/>
              濡れたような艶（ヌルテカ）を実現。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;