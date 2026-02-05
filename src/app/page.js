"use client";
import React, { useState, useEffect } from 'react';
import { Loader2, ExternalLink, Zap, ShieldCheck, Cpu } from 'lucide-react';

export default function SnehalataSupreme() {
  const [vendorName, setVendorName] = useState('');
  const [response, setResponse] = useState('');
  const [siteUrl, setSiteUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [salesCount, setSalesCount] = useState(260469);

  // লাইভ সেলস কাউন্টার আপডেট
  useEffect(() => {
    const interval = setInterval(() => {
      setSalesCount(prev => prev + Math.floor(Math.random() * 50));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const deployEmpire = async () => {
    if (!vendorName) return;
    setLoading(true);
    setResponse('');
    setSiteUrl('');

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: vendorName }),
      });
      const data = await res.json();
      
      // এআই উত্তর সেট করা
      if (data.text) {
        setResponse(data.text);
      }

      // সাবডোমেইন ইউআরএল জেনারেশন
      const formattedName = vendorName.toLowerCase().trim().replace(/\s+/g, '-');
      setSiteUrl(`https://${formattedName}.snehalata.com`);
      
    } catch (e) {
      setResponse("আসসালামু আলাইকুম। Aura AI সংযোগ স্থাপন করছে, দয়া করে পুনরায় চেষ্টা করুন।");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#1A1A1B] font-sans">
      {/* ১. রাজকীয় নেভিগেশন বার */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-8 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center border-2 border-[#D4AF37] overflow-hidden shadow-lg">
             {/* লোগো ফিক্স: public ফোল্ডারে ইমেজ থাকলে এটি কাজ করবে */}
             <img 
               src="/designarena_image_ix3uagc5.jpg" 
               alt="Logo" 
               className="w-full h-full object-cover"
               onError={(e) => { e.target.style.display = 'none'; }} 
             />
             <span className="text-[#D4AF37] font-black text-2xl italic">S</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-black tracking-tighter leading-none uppercase">SNEHALATA</h1>
            <p className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-widest">Supreme Ecosystem</p>
          </div>
        </div>
        <div className="bg-[#1A1A1B] text-[#D4AF37] px-5 py-2 rounded-xl text-xs font-black shadow-lg">
           SALES: ৳{salesCount.toLocaleString()}
        </div>
      </nav>

      {/* ২. মেইন হিরো সেকশন */}
      <main className="pt-48 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full border border-gray-100 mb-8 shadow-sm">
           <Zap size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
           <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Elite Business Deployment Engine</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.85]">
          DEPLOY YOUR <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-gray-400 font-black">EMPIRE</span>
        </h1>
        
        <p className="text-gray-500 text-lg md:text-xl mb-12 italic font-medium">
          এক ক্লিকেই তৈরি করুন আপনার প্রফেশনাল ফ্যাশন ব্র্যান্ড।
        </p>

        {/* ৩. ব্র্যান্ড ইনপুট কার্ড */}
        <div className="max-w-2xl mx-auto bg-white rounded-[50px] p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-50">
          <div className="flex items-center justify-center gap-2 mb-10 opacity-30">
             <ShieldCheck size={18} />
             <span className="text-[10px] font-black uppercase tracking-[0.3em]">Aura Deployment Secure</span>
          </div>

          <input 
            type="text"
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
            className="w-full bg-transparent border-b-4 border-gray-100 py-6 text-4xl font-bold text-center focus:outline-none focus:border-[#D4AF37] mb-12 transition-all placeholder-gray-200"
            placeholder="ব্র্যান্ডের নাম..."
          />
          
          <button 
            onClick={deployEmpire}
            disabled={loading}
            className="w-full bg-black text-white py-7 rounded-3xl font-black uppercase tracking-[0.4em] text-[11px] hover:bg-[#D4AF37] hover:text-black transition-all shadow-2xl flex items-center justify-center gap-4 active:scale-95"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Initiate Deployment ✨"}
          </button>
        </div>

        {/* ৪. এআই রেজাল্ট এবং সাবডোমেইন ডিসপ্লে */}
        {(response || siteUrl) && (
          <div className="mt-16 space-y-6 max-w-2xl mx-auto text-left animate-in slide-in-from-bottom-10 duration-700">
            {response && (
              <div className="bg-[#1A1A1B] text-white p-10 rounded-[40px] border-l-[12px] border-[#D4AF37] shadow-2xl">
                <div className="flex items-center gap-2 mb-4 text-[#D4AF37]">
                   <Cpu size={16} />
                   <span className="text-[10px] font-black uppercase tracking-widest">Aura Analysis Complete</span>
                </div>
                <p className="text-2xl italic font-light leading-relaxed">"{response}"</p>
              </div>
            )}
            
            {siteUrl && (
              <div className="bg-white p-10 rounded-[40px] border border-gray-100 flex justify-between items-center shadow-xl">
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Live Gateway Allocated</p>
                  <p className="text-3xl font-black text-[#0F3D3E] tracking-tighter italic uppercase">{siteUrl}</p>
                </div>
                <a 
                  href={siteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-5 bg-gray-50 rounded-3xl text-black hover:bg-[#D4AF37] transition-all shadow-sm"
                >
                  <ExternalLink size={28} />
                </a>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="py-20 text-center opacity-30">
        <p className="text-[10px] font-black tracking-[0.5em] uppercase">
          © 2026 SNEHALATA AURA INTELLIGENCE ✨
        </p>
      </footer>
    </div>
  );
}
