
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import { getSpiritualResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const Assistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Assalamu Alaikum. Saya Noor, pemandu spiritual futuristik Anda. Bagaimana saya bisa membantu perjalanan Anda hari ini?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await getSpiritualResponse(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (err) {
      console.error("Chat interaction failed:", err);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "Maaf, terjadi gangguan pada jaringan Noor. Mohon pastikan konfigurasi sistem sudah benar." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="assistant" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 glass rounded-full text-emerald-700 text-xs font-bold uppercase tracking-widest mb-4 border-emerald-100 shadow-sm">
            <Sparkles className="w-3 h-3" /> Didukung oleh Gemini
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-800 mb-4">Kenali <span className="text-emerald-600">Noor</span></h2>
          <p className="text-slate-600 font-medium">Tanyakan apa pun mulai dari panduan spiritual hingga fakta sejarah Islam.</p>
        </div>

        <div className="glass rounded-[40px] overflow-hidden flex flex-col h-[600px] border-emerald-100 shadow-2xl">
          {/* Chat area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 md:p-10 space-y-6 bg-white/40">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex items-start gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 shadow-sm ${m.role === 'user' ? 'bg-emerald-600' : 'bg-emerald-800'}`}>
                  {m.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-white" />}
                </div>
                <div className={`max-w-[80%] p-4 rounded-3xl shadow-sm ${m.role === 'user' ? 'bg-emerald-600 text-white rounded-tr-none' : 'bg-white text-slate-800 rounded-tl-none border border-emerald-50'}`}>
                  <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap font-medium">{m.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-800 flex items-center justify-center animate-pulse">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="p-4 rounded-3xl bg-white rounded-tl-none border border-emerald-50 shadow-sm">
                  <Loader2 className="w-5 h-5 text-emerald-600 animate-spin" />
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <div className="p-6 border-t border-emerald-50 bg-white/60">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ketik pertanyaan Anda di sini..."
                className="w-full bg-white border border-emerald-100 rounded-2xl py-4 pl-6 pr-16 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 transition-colors shadow-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-300 text-white rounded-xl flex items-center justify-center transition-colors shadow-lg shadow-emerald-900/20"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-4 uppercase tracking-widest font-bold">
              AI bisa membuat kesalahan. Selalu verifikasi dengan Al-Quran atau nasihat ulama terpercaya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assistant;
