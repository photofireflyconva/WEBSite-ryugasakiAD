import React from 'react';
import { SectionId } from '../types';
import { Smartphone, Camera, CalendarCheck, MapPin, Instagram } from 'lucide-react';

const BookingFlow: React.FC = () => {
  return (
    <section id={SectionId.FLOW} className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-dark via-slate-900 to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Flow Column */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-8">
              Booking Flow
              <span className="block text-sm font-sans font-normal text-brand-accent mt-2">ご予約の流れ</span>
            </h2>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex gap-6 relative">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 border border-brand-accent/30 flex items-center justify-center text-brand-accent font-bold text-xl z-10">
                  1
                </div>
                {/* Connector Line */}
                <div className="absolute left-6 top-12 bottom-[-48px] w-px bg-slate-800"></div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <Smartphone size={20} /> Official LINE
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    ご予約・お問い合わせは全て公式LINEにて承ります。
                  </p>
                  <a href="#" className="inline-block bg-[#06C755] hover:bg-[#05b54d] text-white px-6 py-2 rounded font-bold text-sm transition-colors">
                    友だち追加する
                  </a>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-6 relative">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 border border-brand-accent/30 flex items-center justify-center text-brand-accent font-bold text-xl z-10">
                  2
                </div>
                <div className="absolute left-6 top-12 bottom-[-48px] w-px bg-slate-800"></div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <Camera size={20} /> Photo Diagnosis
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    お車の「全体」と「気になる汚れ・傷」の写真をLINEでお送りください。<br/>
                    <span className="text-brand-gold text-xs">※重度の損傷や剥がれがある場合は施工をお断りすることがあります。</span>
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 border border-brand-accent/30 flex items-center justify-center text-brand-accent font-bold text-xl z-10">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <CalendarCheck size={20} /> Reservation
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    写真診断後、最適なメニューをご提案。日程を確定し、ご来店をお待ちしております。<br/>
                    お支払いは現地にてクレジットカード決済(Square)のみとなります。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Column */}
          <div className="glass-panel p-8 rounded-xl h-fit border-t-4 border-t-brand-accent">
            <h3 className="text-xl font-serif font-bold text-white mb-6">Shop Info</h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-start gap-3 text-gray-300 mb-1">
                  <MapPin className="text-brand-accent mt-1" size={18} />
                  <span className="font-bold text-white">Ryugasaki Auto Detailing</span>
                </div>
                <p className="pl-8 text-sm text-gray-400">
                  茨城県龍ケ崎市<br/>
                  (工務店敷地内の隠れ家ガレージ)<br/>
                  ※詳しい住所はご予約確定後にお伝えします。
                </p>
              </div>

              <div>
                <p className="font-bold text-white mb-2 text-sm">営業時間</p>
                <p className="text-sm text-gray-400">
                  10:00 - 20:00 (完全予約制)<br/>
                  ※夜間施工対応可（傷の確認に最適です）
                </p>
              </div>

              <div className="pt-6 border-t border-gray-700">
                <h4 className="text-brand-accent text-sm font-bold mb-3">Follow Us</h4>
                <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                  <Instagram size={20} />
                  <span className="text-sm">@ryugasaki_detailing</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingFlow;