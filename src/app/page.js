"use client";
import React, { useState, useEffect } from 'react';
import { Cpu, Loader2, ExternalLink, Zap, ShieldCheck } from 'lucide-react';
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
      if (data.text) setResponse(data.text);

      const url = `https://${vendorName.toLowerCase().trim().replace(/\s+/g, '-')}.snehalata.com`;
      setSiteUrl(url);

      if (supabase) {
        await supabase.from('vendors').upsert([{ name: vendorName, website_url: url, status: 'approved' }]);
      }
    } catch (e) {
      setResponse("আসসালামু আলাইকুম। কানেকশন রিফ্রেশ করুন।");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-gray-900 font-sans">
      {/* Smart Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center border-2 border-[#D4AF37] shadow-xl overflow-hidden">
             {/* Logo ফিক্স: লোগো ফাইলটি public ফোল্ডারে থাকলে এটি অটো দেখাবে */}
             <img src="/designarena_image_ix3uagc5.jpg" alt="S" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter leading-none">SNEHALATA</span>
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Supreme Ecosystem</span>
          </div>
        </div>
        <div className="bg-[#1A1A1B] text-white px-5 py-2 rounded-xl text-xs font-black shadow-lg">
           SALES: ৳{salesCount.toLocaleString()}
        </div>
      </nav>

      {/* Main UI */}
      <main className="pt-48 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 mb-8 shadow-sm">
           <Zap size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
           <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Next-Gen Business Deployment</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-[0.85]">
          DEPLOY YOUR <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-gray-700">EMPIRE</span>
        </h1>

        <div className="max-w-2xl mx-auto bg-white rounded-[50px] p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-50">
          <input 
            type="text"
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
            className="w-full bg-transparent border-b-4 border-gray-100 py-6 text-4xl font-bold text-center focus:outline-none focus:border-[#D4AF37] mb-12 transition-all"
            placeholder="Brand Name"
          />
          <button 
            onClick={deployEmpire}
            disabled={loading}
            className="w-full bg-black text-white py-7 rounded-3xl font-black uppercase tracking-[0.5em] text-xs hover:bg-[#D4AF37] hover:text-black transition-all shadow-2xl flex items-center justify-center gap-4"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Initiate Deployment ✨"}
          </button>
        </div>

        {/* AI & Subdomain Results */}
        {(response || siteUrl) && (
          <div className="mt-16 space-y-6 max-w-2xl mx-auto text-left animate-in slide-in-from-bottom-10">
            {response && (
              <div className="bg-gray-900 text-white p-10 rounded-[40px] border-l-[12px] border-[#D4AF37] shadow-2xl">
                <p className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest mb-4">Aura Analysis</p>
                <p className="text-2xl italic font-light leading-relaxed">"{response}"</p>
              </div>
            )}
            {siteUrl && (
              <div className="bg-white p-10 rounded-[40px] border border-gray-100 flex justify-between items-center shadow-xl">
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Live Gateway</p>
                  <p className="text-3xl font-black text-gray-900 tracking-tighter">{siteUrl}</p>
                </div>
                <a href={siteUrl} target="_blank" className="p-5 bg-gray-50 rounded-3xl hover:bg-black hover:text-white transition-all">
                  <ExternalLink size={28} />
                </a>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
