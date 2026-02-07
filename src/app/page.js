"use client";
import React, { useState, useEffect } from 'react';
import { Cpu, Zap, ShieldCheck, ExternalLink, Loader2 } from 'lucide-react';

export default function SnehalataHome() {
  const [vendorName, setVendorName] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [siteUrl, setSiteUrl] = useState('');

  const deployBrand = async () => {
    if (!vendorName) return;
    setLoading(true);
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        body: JSON.stringify({ prompt: vendorName }),
      });
      const data = await res.json();
      setResponse(data.text);
      setSiteUrl(`https://${vendorName.toLowerCase().trim().replace(/\s+/g, '-')}.snehalata.com`);
    } catch (e) { console.error(e); }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Navigation (Based on your Navigation.tsx) */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/70 border-b border-white/10 px-8 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <Cpu className="text-purple-500 animate-pulse" size={32} />
          <div className="flex flex-col">
            <span className="font-bold text-2xl tracking-widest uppercase font-serif">SNEHALATA-স্নেহলতা</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-purple-500 font-bold">Aura Ecosystem</span>
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-[11px] font-bold uppercase tracking-widest text-gray-400">
           <span className="text-white">Hub (নীড়)</span>
           <span>Market (বাজার)</span>
           <span>Governance (শাসন)</span>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-48 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 px-4 py-1 rounded-full border border-purple-500/20 mb-8">
           <Zap size={14} className="text-purple-500 fill-purple-500" />
           <span className="text-[9px] font-black uppercase tracking-widest text-purple-300">Aura AI Deployment Engine</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none italic">
          DEPLOY YOUR <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-800">EMPIRE</span>
        </h1>

        <div className="max-w-2xl mx-auto bg-white/5 rounded-[40px] p-12 border border-white/10 backdrop-blur-md mt-12 shadow-2xl">
          <input 
            type="text"
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
            className="w-full bg-transparent border-b-2 border-white/10 py-4 text-3xl font-bold text-center focus:outline-none focus:border-purple-500 mb-10 transition-all placeholder:text-gray-800"
            placeholder="bonolata fashion"
          />
          <button 
            onClick={deployBrand}
            className="w-full bg-white text-black py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] hover:bg-purple-600 hover:text-white transition-all active:scale-95"
          >
            {loading ? <Loader2 className="animate-spin mx-auto" /> : "Initiate Deployment ✨"}
          </button>
        </div>

        {/* Results */}
        {(response || siteUrl) && (
          <div className="mt-12 space-y-4 max-w-2xl mx-auto text-left animate-in fade-in slide-in-from-bottom-5">
            <div className="bg-purple-900/20 border border-purple-500/30 p-8 rounded-[30px]">
               <p className="text-[10px] font-bold text-purple-400 uppercase mb-2 tracking-widest">Aura Feedback</p>
               <p className="text-xl italic font-light leading-relaxed">"{response}"</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-[30px] flex justify-between items-center">
               <span className="text-lg font-bold tracking-tight text-gray-300">{siteUrl}</span>
               <ExternalLink className="text-purple-500" />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
