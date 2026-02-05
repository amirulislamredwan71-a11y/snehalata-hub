"use client";
import React, { useState, useEffect } from 'react';
import { Loader2, ExternalLink, Zap, ShieldCheck, Cpu } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function SnehalataSupreme() {
  const [vendorName, setVendorName] = useState('');
  const [response, setResponse] = useState('');
  const [siteUrl, setSiteUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [salesCount, setSalesCount] = useState(260683);

  useEffect(() => {
    const interval = setInterval(() => {
      setSalesCount(prev => prev + Math.floor(Math.random() * 50));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const deployEmpire = async () => {
    if (!vendorName) return;
    setLoading(true);
    try {
      const res = await fetch('/api/ai', { method: 'POST', body: JSON.stringify({ prompt: vendorName }) });
      const data = await res.json();
      setResponse(data.text);
      const url = `https://${vendorName.toLowerCase().trim().replace(/\s+/g, '-')}.snehalata.com`;
      setSiteUrl(url);
      if (supabase) await supabase.from('vendors').upsert([{ name: vendorName, website_url: url }]);
    } catch (e) { console.error(e); }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-gray-900 font-sans">
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm px-8 py-4 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center border-2 border-yellow-600 overflow-hidden shadow-xl">
            <img src="/designarena_image_ix3uagc5.jpg" alt="Logo" className="w-full h-full object-cover" onError={(e) => e.target.style.display='none'} />
            <span className="text-yellow-500 font-black text-2xl italic">S</span>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter leading-none">SNEHALATA</h1>
            <p className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest">Supreme Ecosystem</p>
          </div>
        </div>
        <div className="bg-black text-white px-5 py-2 rounded-xl text-xs font-black">
           SALES: ৳{salesCount.toLocaleString()}
        </div>
      </nav>

      <main className="pt-48 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full border border-gray-100 mb-8 shadow-sm text-[10px] font-black text-gray-400 uppercase tracking-widest">
           <Zap size={12} className="text-yellow-500 fill-yellow-500" /> Next-Gen Business Deployment
        </div>

        <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase mb-6 leading-none">
          DEPLOY YOUR <br/> <span className="text-gray-300">EMPIRE</span>
        </h1>
        <p className="text-gray-500 italic mb-12 text-lg">এক ক্লিকেই তৈরি করুন আপনার প্রফেশনাল ফ্যাশন ব্র্যান্ড।</p>

        <div className="max-w-2xl mx-auto bg-white rounded-[50px] p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-50">
          <div className="flex items-center justify-center gap-2 mb-10 opacity-30">
            <ShieldCheck size={14} /> <span className="text-[10px] font-black uppercase tracking-widest">Aura Deployment Secure</span>
          </div>
          <input 
            type="text"
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
            className="w-full bg-transparent border-b-4 border-gray-100 py-4 text-4xl font-bold text-center focus:outline-none focus:border-yellow-600 mb-10"
            placeholder="ব্র্যান্ডের নাম..."
          />
          <button onClick={deployEmpire} className="w-full bg-black text-white py-6 rounded-3xl font-black uppercase tracking-[0.4em] text-[10px] hover:bg-yellow-600 transition-all shadow-2xl active:scale-95">
            {loading ? <Loader2 className="animate-spin mx-auto" /> : "Initiate Deployment ✨"}
          </button>
        </div>

        {(response || siteUrl) && (
          <div className="mt-16 space-y-6 max-w-2xl mx-auto text-left animate-in slide-in-from-bottom-10">
            {response && (
              <div className="bg-black text-white p-10 rounded-[40px] border-l-[12px] border-yellow-600 shadow-2xl">
                <p className="text-[10px] font-black text-yellow-600 uppercase mb-4 flex items-center gap-2"><Cpu size={14} /> Aura Analysis</p>
                <p className="text-2xl italic font-light leading-relaxed">"{response}"</p>
              </div>
            )}
            {siteUrl && (
              <div className="bg-white p-8 rounded-[40px] border border-gray-100 flex justify-between items-center shadow-lg">
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase mb-1 tracking-widest">Live Gateway Link</p>
                  <p className="text-2xl font-black">{siteUrl}</p>
                </div>
                <a href={siteUrl} target="_blank" className="p-4 bg-gray-50 rounded-2xl hover:bg-yellow-600 hover:text-white transition-all">
                  <ExternalLink size={24} />
                </a>
              </div>
            )}
          </div>
        )}
      </main>
      <footer className="py-20 text-center opacity-30 text-[10px] font-bold tracking-[0.5em] uppercase">© 2026 SNEHALATA AURA</footer>
    </div>
  );
}
