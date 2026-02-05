"use client";
import React, { useState, useEffect } from 'react';
import { Cpu, Loader2, Globe, ExternalLink, Zap, ShieldCheck } from 'lucide-react';
import { supabase } from './lib/supabase';

export default function SnehalataSupreme() {
  const [vendorName, setVendorName] = useState('');
  const [response, setResponse] = useState('');
  const [siteUrl, setSiteUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [salesCount, setSalesCount] = useState(260220);

  useEffect(() => {
    const interval = setInterval(() => {
      setSalesCount(prev => prev + Math.floor(Math.random() * 50));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const executeSupremeLogic = async () => {
    if (!vendorName) return;
    setLoading(true);
    setResponse('');
    setSiteUrl('');

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: vendorName, type: 'vendor_onboarding' }),
      });
      const data = await res.json();
      if (data.text) setResponse(data.text);

      const formattedName = vendorName.toLowerCase().trim().replace(/\s+/g, '-');
      const generatedUrl = `https://${formattedName}.snehalata.com`;
      setSiteUrl(generatedUrl);

      if (supabase) {
        await supabase.from('vendors').upsert([{ name: vendorName, website_url: generatedUrl, status: 'approved' }]);
      }
    } catch (error) {
      setResponse("আসসালামু আলাইকুম। সিস্টেম সংযোগে সমস্যা। আবার চেষ্টা করুন।");
    }
    setLoading(false);
  };

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      
      <div className="min-h-screen bg-[#FDFCF0] text-gray-900 font-sans">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-3">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0F3D3E] flex items-center justify-center border border-[#D4AF37]">
                <span className="text-[#D4AF37] font-black text-xl italic">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter leading-none">SNEHALATA</span>
                <span className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-widest">Supreme Ecosystem</span>
              </div>
            </div>
            <div className="bg-black text-[#D4AF37] px-4 py-2 rounded-lg text-xs font-black">
               SALES: ৳{salesCount.toLocaleString()}
            </div>
          </div>
        </nav>

        {/* Hero */}
        <main className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-[0.9]">
            DEPLOY YOUR <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#0F3D3E]">EMPIRE</span>
          </h1>
          <p className="text-gray-500 text-lg mb-12 italic">আধুনিক এআই লজিক ও আভিজাত্যের মিশেলে আপনার ফ্যাশন হাব।</p>

          {/* Interface */}
          <div className="bg-white rounded-[40px] p-10 shadow-2xl border border-gray-100">
            <input 
              type="text"
              value={vendorName}
              onChange={(e) => setVendorName(e.target.value)}
              className="w-full bg-transparent border-b-2 border-gray-100 py-4 text-3xl font-bold text-center focus:outline-none focus:border-[#D4AF37] mb-10"
              placeholder="ব্র্যান্ডের নাম..."
            />
            <button 
              onClick={executeSupremeLogic}
              className="w-full bg-black text-white py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] hover:bg-[#D4AF37] transition-all shadow-xl"
            >
              {loading ? <Loader2 className="animate-spin mx-auto" /> : "Initiate Deployment ✨"}
            </button>
          </div>

          {/* Result Area */}
          {(response || siteUrl) && (
            <div className="mt-10 space-y-6 text-left">
              {response && (
                <div className="bg-gray-900 text-white p-8 rounded-[30px] border-l-8 border-[#D4AF37]">
                  <p className="text-xl italic font-light leading-relaxed">"{response}"</p>
                </div>
              )}
              {siteUrl && (
                <div className="bg-white p-6 rounded-[30px] border border-gray-100 flex justify-between items-center shadow-lg">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Live Gateway Link</p>
                    <p className="text-2xl font-black text-[#0F3D3E]">{siteUrl}</p>
                  </div>
                  <a href={siteUrl} target="_blank" className="p-4 bg-gray-50 rounded-2xl hover:bg-[#D4AF37] hover:text-white transition-all">
                    <ExternalLink size={24} />
                  </a>
                </div>
              )}
            </div>
          )}
        </main>

        <footer className="py-10 text-center opacity-40">
           <p className="text-[10px] font-black tracking-[0.5em] uppercase">SNEHALATA AURA © 2026</p>
        </footer>
      </div>
    </>
  );
}
