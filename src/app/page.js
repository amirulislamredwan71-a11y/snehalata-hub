"use client";
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cpu, Loader2, Globe, ShoppingBag } from 'lucide-react';
import { supabase } from './lib/supabase';

export default function SnehalataSupreme() {
  const [vendorName, setVendorName] = useState('');
  const [response, setResponse] = useState('');
  const [siteUrl, setSiteUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [salesCount, setSalesCount] = useState(255612);

  // লাইভ সেলস কাউন্টার সিমুলেশন
  useEffect(() => {
    const interval = setInterval(() => {
      setSalesCount(prev => prev + Math.floor(Math.random() * 100));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // মেইন লজিক: এআই এবং সাবডোমেইন জেনারেশন
  const executeSupremeLogic = async () => {
    if (!vendorName) return;
    setLoading(true);
    setResponse('');
    setSiteUrl('');

    try {
      // ১. Aura AI কল করা
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          prompt: `Brand Name: ${vendorName}`, 
          type: 'vendor_onboarding' 
        }),
      });
      const data = await res.json();

      // এআই উত্তর সেট করা
      if (data.text) {
        setResponse(data.text);
      }

      // ২. সাবডোমেইন ইউআরএল তৈরি
      const generatedUrl = `https://${vendorName.toLowerCase().replace(/\s+/g, '-')}.snehalata.com`;
      setSiteUrl(generatedUrl);

      // ৩. ডাটাবেসে (Supabase) সেভ করা
      if (supabase) {
        await supabase.from('vendors').insert([
          { name: vendorName, website_url: generatedUrl, status: 'approved' }
        ]);
      }

    } catch (error) {
      console.error("Aura Error:", error);
      setResponse("আসসালামু আলাইকুম। সিস্টেমের সংযোগে কিছুটা সময় লাগছে। দয়া করে আবার চেষ্টা করুন।");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#1A1A1B] font-sans">
      
      {/* ১. ফিক্সড নেভিগেশন (লোগো এখানে) */}
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="bg-[#1A1A1B] text-[#D4AF37] w-10 h-10 flex items-center justify-center rounded-lg font-black text-xl border border-[#D4AF37]">স্</div>
            <span className="text-2xl font-black italic tracking-tighter uppercase bg-gradient-to-r from-[#1A1A1B] to-[#D4AF37] bg-clip-text text-transparent">
              SNEHALATA
            </span>
          </div>
          
          <div className="hidden md:flex gap-8 text-[10px] font-black tracking-[0.2em] uppercase">
            <span className="hover:text-rose-600 cursor-pointer">হোম</span>
            <span className="hover:text-rose-600 cursor-pointer">সংগ্ৰহ</span>
            <span className="hover:text-rose-600 cursor-pointer">ট্র্যাকিং</span>
          </div>

          <div className="text-[10px] font-bold text-rose-700 bg-rose-50 px-4 py-2 rounded-full border border-rose-100">
            Global Sales: ৳{salesCount.toLocaleString()}
          </div>
        </div>
      </nav>

      {/* ২. মেইন কন্টেন্ট */}
      <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase mb-4">
            SNEHALATA <span className="text-rose-600">SUPREME</span>
          </h1>
          <p className="text-gray-500 italic tracking-widest text-xs uppercase">
            1-Click Royal Fashion Ecosystem
          </p>
        </div>

        {/* এআই কার্ড */}
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl border border-[#D4AF37]/10 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-8 text-[#D4AF37] font-bold text-[10px] tracking-[0.3em] uppercase">
            <Cpu size={14} className="animate-pulse" /> Aura AI Active
          </div>

          <input 
            type="text"
            value={vendorName}
            onChange={(e) => setVendorName(e.target.value)}
            className="w-full bg-transparent border-b-2 border-gray-100 py-4 text-2xl md:text-4xl font-light focus:outline-none focus:border-[#D4AF37] transition-all mb-10"
            placeholder="ব্র্যান্ডের নাম লিখুন..."
          />

          <button 
            onClick={executeSupremeLogic}
            disabled={loading}
            className="w-full bg-[#1A1A1B] text-white py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] hover:bg-rose-700 transition-all flex items-center justify-center gap-3 shadow-xl"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Initiate Aura Deployment ✨"}
          </button>

          {/* এআই রেসপন্স এরিয়া */}
          {response && (
            <div className="mt-10 p-8 bg-rose-50 rounded-[30px] border border-rose-100 animate-in zoom-in duration-500">
              <p className="text-lg italic leading-relaxed text-charcoal">"{response}"</p>
              {siteUrl && (
                <div className="mt-6 pt-6 border-t border-rose-200">
                  <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest mb-2">Reserved Subdomain</p>
                  <a href={siteUrl} target="_blank" className="text-rose-600 font-bold underline break-all">{siteUrl}</a>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* ৩. ফুটার */}
      <footer className="py-10 text-center border-t border-gray-100">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-50">
          <div className="bg-black text-white px-2 py-0.5 rounded text-xs">স্</div>
          <span className="text-sm font-bold tracking-tighter uppercase">SNEHALATA</span>
        </div>
        <p className="text-[9px] text-gray-400 tracking-[0.4em] uppercase">
          © 2026 SNEHALATA AURA INTELLIGENCE ✨
        </p>
      </footer>
    </div>
  );
}
