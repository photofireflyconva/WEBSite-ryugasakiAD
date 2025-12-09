import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { getConciergeResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'いらっしゃいませ。龍ヶ崎ディテーリングショップのAIコンシェルジュです。お車の悩みやメニュー選びについて、お気軽にご相談ください。（例：「初めてなのですが、おすすめは？」「黒い車で小傷が気になります」）' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await getConciergeResponse(userMsg);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setLoading(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-brand-accent hover:bg-sky-400 text-brand-dark p-4 rounded-full shadow-lg shadow-sky-500/20 transition-all duration-300 transform hover:scale-105 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <div className="relative">
          <MessageCircle size={28} />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-slate-900 p-4 flex justify-between items-center border-b border-slate-700">
            <div className="flex items-center gap-3">
              <div className="bg-brand-accent p-1.5 rounded-lg text-brand-dark">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">AI Diagnosis</h3>
                <p className="text-[10px] text-brand-accent">Powered by Gemini</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-800/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-accent text-brand-dark rounded-tr-none' 
                      : 'bg-slate-700 text-gray-200 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-700 p-3 rounded-2xl rounded-tl-none flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-slate-900 border-t border-slate-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="例：水垢がひどいのですが..."
                className="flex-1 bg-slate-800 text-white text-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-brand-accent border border-slate-700"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className="bg-brand-accent text-brand-dark p-2 rounded-lg hover:bg-sky-400 disabled:opacity-50 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiConsultant;