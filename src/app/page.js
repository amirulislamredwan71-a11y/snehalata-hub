"use client";
import React, { useState } from "react";
import { Search, Home, LayoutDashboard, Cpu } from "lucide-react";

export default function HomePage() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-600/30 overflow-x-hidden">
      
      {/* 1. Premium Navbar - হুবহু ছবির মতো */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="bg-purple-600 p-2.5 rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.4)]">
            <Cpu size={26} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tighter leading-none uppercase">SNEHALATA-স্নেহলতা</h1>
            <p className="text-[10px] text-purple-500 font-bold tracking-[0.25em] uppercase mt-1">Aura Ecosystem</p>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <button className="flex items-center gap-2 bg-purple-600/10 px-5 py-2.5 rounded-full border border-purple-500/20 text-[11px] font-bold uppercase tracking-widest text-purple-400 hover:bg-purple-600 hover:text-white transition-all">
            <Search size={16} /> HUB (নীড়)
          </button>
          <div className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-gray-400">
            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <Home size={15} /> HUB (নীড়)
            </button>
            <button className="flex items-center gap-2 hover:text-white transition-colors">
              <LayoutDashboard size={15} /> Vendor Console
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Main Hero Section */}
      <main className="relative flex flex-col items-center justify-center pt-32 pb-20 px-4 z-10">
        
        {/* Glow Background - এটিই সেই বেগুনি আভা তৈরি করবে */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-900/10 blur-[160px] rounded-full -z-10"></div>

        {/* Ecosystem Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 mb-14 shadow-xl">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]"></span>
          <span className="text-[11px] font-bold text-gray-200 uppercase tracking-[0.25em]">
            ECOSYSTEM ভলিউম: ৳১৫৪,৩৭১
          </span>
        </div>

        {/* Brand Name - ছবির মতো বিশাল টাইপোগ্রাফি */}
        <h2 className="text-[70px] sm:text-[100px] lg:text-[145px] font-black tracking-[-0.05em] leading-[0.85] mb-10 uppercase text-center text-white drop-shadow-2xl">
          SNEHALATA-স্নেহলতা
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm md:text-xl tracking-[0.2em] font-semibold uppercase text-center mb-24 italic max-w-4xl opacity-80">
          Direct-to-Vendor ইকোসিস্টেম — AURA GOVERNANCE দ্বারা পরিচালিত
        </p>

        {/* 3. Aura AI Search Box - সঠিক ডার্ক ইন্টারফেস */}
        <div className="w-full max-w-3xl bg-[#080808] border border-white/10 rounded-[40px] p-12 shadow-[0_-20px_100px_rgba(147,51,234,0.12)] relative overflow-hidden group">
           <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-[12px] font-bold text-purple-500 uppercase tracking-[0.4em]">Aura AI</h3>
                <div className="w-2 h-2 rounded-full bg-purple-500/50"></div>
              </div>
              
              <p className="text-gray-200 text-xl md:text-2xl font-semibold leading-relaxed">
                Snehalata-স্নেহলতা ইকোসিস্টেমে স্বাগতম! আমি Aura। আজ আপনার স্টাইল যাত্রায় কীভাবে সাহায্য করতে পারি?
              </p>
              
              <div className="mt-10 flex flex-col md:flex-row gap-4">
                <input 
                  type="text"
                  placeholder="আপনার ব্র্যান্ডের নাম বা জিজ্ঞাসা লিখুন..."
                  className="flex-1 bg-white/[0.03] border border-white/10 rounded-[20px] px-8 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-600 focus:bg-white/[0.05] transition-all text-lg shadow-inner"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="bg-purple-600 px-10 py-5 rounded-[20px] font-black text-sm tracking-[0.2em] hover:bg-purple-500 active:scale-95 transition-all shadow-[0_10px_30px_rgba(147,51,234,0.3)] uppercase">
                  SEARCH
                </button>
              </div>
           </div>
           {/* Subtle decorative glow inside card */}
           <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600/5 blur-[80px] rounded-full group-hover:bg-purple-600/10 transition-colors"></div>
        </div>
      </main>

      {/* Footer Glow */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-purple-900/15 blur-[140px] rounded-[100%] -z-0 pointer-events-none"></div>
    </div>
  );
}
