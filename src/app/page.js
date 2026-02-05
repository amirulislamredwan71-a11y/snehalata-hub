"use client";
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Globe, Loader2, Cpu, ShoppingBag, Search } from 'lucide-react';
import { supabase } from './lib/supabase';

export default function SnehalataSupreme() {
  const [activePage, setActivePage] = useState('home');
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [liveSales, setLiveSales] = useState(255188);

  // লাইভ সেলস সিমুলেশন
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveSales(prev => prev + Math.floor(Math.random() * 500));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleAuraAnalysis = async () => {
    if (!userInput) return;
    setLoading(true);
    setAiResponse('');
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userInput, type: 'fashion_consultant' }),
      });
      const data = await res.json();
      setAiResponse(data.text);
    } catch (e) {
      setAiResponse("আসসালামু আলাইকুম। আউরা সিস্টেমে সংযোগ করতে সমস্যা হচ্ছে।");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#1A1A1B] font-sans">
      {/* FIXED NAVIGATION */}
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActivePage('home')}>
            <div className="bg-[#1A1A1B] text-[#D4AF37] w-10 h-10 flex items-center justify-center rounded-lg font-black text-xl border border-[#D4AF37]">স্</div>
            <span className="text-2xl font-black italic tracking-tighter uppercase bg-gradient-to-r from-[#1A1A1B] to-[#D4AF37] bg-clip-text text-transparent">SNEHALATA</span>
          </div>
          <div className="hidden md:flex gap-8 text-[10px] font-black tracking-[0.3em] uppercase">
            <button onClick={() => setActivePage('home')} className={activePage === 'home' ? 'text-rose-600 border-b-2 border-[#D4AF37]' : ''}>হোম</button>
            <button onClick={() => setActivePage('collections')} className={activePage === 'collections' ? 'text-rose-600 border-b-2 border-[#D4AF37]' : ''}>সংগ্ৰহ</button>
            <button onClick={() => setActivePage('tracking')} className={activePage === 'tracking' ? 'text-rose-600 border-b-2 border-[#D4AF37]' : ''}>ট্র্যাকিং</button>
          </div>
          <div className="text-[9px] font-bold text-rose-700 bg-rose-50 px-4 py-2 rounded-full border border-rose-200 uppercase tracking-widest">
            Sales: ৳{liveSales.toLocaleString()}
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {activePage === 'home' && (
          <div className="animate-in fade-in duration-700">
            <div className="text-center mb-16">
              <p className="text-[11px] font-black tracking-[1em] text-[#D4AF37] uppercase mb-4">Professional Fashion Ecosystem</p>
              <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-none mb-6">
                SNEHALATA <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1B] via-[#D4AF37] to-rose-600">SUPREME</span>
              </h1>
              <p className="text-xl italic text-gray-600 max-w-2xl mx-auto">বাংলার ঐতিহ্য এবং বিশ্বমানের AI লজিকের এক আধুনিক রাজকীয় ডিজিটাল হাব।</p>
            </div>

            {/* AI TERMINAL */}
            <div className="max-w-4xl mx-auto bg-white rounded-[50px] p-10 shadow-2xl border border-[#D4AF37]/20">
              <div className="flex items-center gap-2 mb-6 text-rose-600 font-black text-[10px] tracking-widest">
                <Cpu size={14} className="animate-pulse" /> AURA EXECUTIVE AI ✨
              </div>
              <textarea 
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="w-full bg-transparent border-none text-2xl md:text-4xl font-light focus:outline-none h-40 resize-none"
                placeholder="পোশাকের পরামর্শ বা ব্র্যান্ড গাইডেন্সের জন্য লিখুন..."
              />
              <button 
                onClick={handleAuraAnalysis}
                disabled={loading}
                className="w-full bg-[#1A1A1B] text-white py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-[10px] hover:bg-rose-600 transition-all flex items-center justify-center gap-3"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Initiate Aura Analysis ✨"}
              </button>

              {aiResponse && (
                <div className="mt-10 p-8 bg-rose-50 rounded-[30px] border border-rose-100 animate-in zoom-in">
                  <p className="text-lg italic leading-relaxed">"{aiResponse}"</p>
                </div>
              )}
            </div>
          </div>
        )}

        {activePage === 'collections' && (
          <div className="grid md:grid-cols-4 gap-8 animate-in slide-in-from-bottom-10">
            {[
              { name: 'এলিট জামদানি', cat: 'Heritage Women', font: 'serif' },
              { name: 'LUXE MENS', cat: 'Premium Men', font: 'sans' },
              { name: 'Little Wings', cat: 'Kids Universe', font: 'cursive' },
              { name: 'ঐতিহ্য ডায়েরি', cat: 'Senior Comfort', font: 'serif' }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] border border-[#D4AF37]/10 shadow-lg hover:border-[#D4AF37] transition-all">
                <p className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-widest mb-4">{v.cat}</p>
                <h3 className={`text-3xl font-bold mb-4 ${v.font === 'serif' ? 'font-serif' : v.font === 'cursive' ? 'italic' : ''}`}>{v.name}</h3>
                <button className="w-full py-3 rounded-full bg-[#1A1A1B] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-rose-600">Visit Store</button>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#D4AF37]/20 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-[#1A1A1B] text-[#D4AF37] px-3 py-1 rounded font-bold">স্</div>
            <span className="text-2xl font-black tracking-tighter italic uppercase">SNEHALATA</span>
          </div>
          <p className="text-gray-400 text-xs tracking-[0.5em] uppercase">© 2026 SNEHALATA AURA INTELLIGENCE ✨</p>
        </div>
      </footer>
    </div>
  );
}
