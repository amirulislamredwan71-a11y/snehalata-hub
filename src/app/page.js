"use client";
import React, { useState } from "react";
import { Search, Home, LayoutDashboard, Cpu } from "lucide-react";

export default function HomePage() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-sans">
      
      {/* ১. রাজকীয় ন্যাভিগেশন বার */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-white/5 bg-black/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(147,51,234,0.45)]">
            <Cpu size={28} strokeWidth={2.5} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-[1000] tracking-tighter leading-none uppercase">SNEHALATA-স্নেহলতা</h1>
            <p className="text-[10px] text-purple-500 font-black tracking-[0.3em] uppercase mt-1">Aura Ecosystem</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white/5 rounded-full border border-white/10 hover:border-purple-500/50 hover:bg-purple-600/10 transition-all group">
            <Search size={18} className="text-purple-500 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest text-gray-300">HUB (নীড়)</span>
          </button>
          
          <div className="hidden lg:flex items-center gap-8 text-[12px] font-bold uppercase tracking-widest text-gray-400">
            <button className="flex items-center gap-2 hover:text-white transition-colors italic border-b border-transparent hover:border-white pb-1">
               <Home size={16} /> HUB (নীড়)
            </button>
            <button className="flex items-center gap-2 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
               <LayoutDashboard size={16} /> Vendor Console
            </button>
          </div>
        </div>
      </nav>

      {/* ২. মেইন হিরো সেকশন (যেখানে বড় লেখা থাকবে) */}
      <main className="relative flex flex-col items-center justify-start pt-32 pb-40 px-4">
        
        {/* উপরের ব্যাজ */}
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 mb-16 shadow-2xl backdrop-blur-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_12px_#10b981]"></span>
          <span className="text-[11px] font-black text-gray-200 uppercase tracking-[0.3em]">
            ECOSYSTEM ভলিউম: ৳১৫৪,৩৭১
          </span>
        </div>

        {/* ৩. ব্র্যান্ড নেম - এটিই আপনার ছবির মতো বড় হবে */}
        <h2 className="text-[90px] md:text-[130px] lg:text-[170px] font-[1000] tracking-[-0.06em] text-center leading-[0.8] mb-10 uppercase drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
          SNEHALATA-স্নেহলতা
        </h2>

        {/* সাব-টাইটেল */}
        <p className="text-gray-400 text-sm md:text-xl tracking-[0.25em] text-center font-bold uppercase mb-28 italic max-w-4xl opacity-70">
          Direct-to-Vendor ইকোসিস্টেম — AURA GOVERNANCE দ্বারা পরিচালিত
        </p>

        {/* ৪. Aura AI ইন্টারফেস (কার্ড স্টাইল) */}
        <div className="w-full max-w-4xl bg-gradient-to-br from-[#0a0a0a] to-black border border-white/10 rounded-[45px] p-12 shadow-[0_-30px_120px_rgba(147,51,234,0.15)] relative overflow-hidden group">
           <div className="relative z-10 space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-black text-purple-500 uppercase tracking-[0.5em] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping"></span>
                  Aura AI
                </h3>
              </div>
              
              <p className="text-gray-200 text-2xl md:text-3xl font-bold leading-[1.4] tracking-tight">
                Snehalata-স্নেহলতা ইকোসিস্টেমে স্বাগতম! আমি Aura। আজ আপনার স্টাইল যাত্রায় কীভাবে সাহায্য করতে পারি?
              </p>
              
              <div className="relative mt-12 flex flex-col md:flex-row gap-5">
                <input 
                  type="text"
                  placeholder="আপনার ব্র্যান্ডের নাম বা জিজ্ঞাসা লিখুন..."
                  className="flex-1 bg-white/[0.03] border border-white/10 rounded-[25px] px-8 py-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-600 focus:bg-white/[0.06] transition-all text-xl shadow-inner font-medium"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="bg-purple-600 px-12 py-6 rounded-[25px] font-[1000] text-sm tracking-[0.3em] hover:bg-purple-500 active:scale-95 transition-all shadow-[0_15px_40px_rgba(147,51,234,0.4)] uppercase">
                  SEARCH
                </button>
              </div>
           </div>
           {/* কার্ডের ভেতরের হালকা গ্লো */}
           <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full group-hover:bg-purple-600/20 transition-all duration-700"></div>
        </div>
      </main>

      {/* ৫. নিচের বেগুনি আভা (Background Glow) */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[1400px] h-[500px] bg-purple-900/20 blur-[160px] rounded-[100%] -z-10 pointer-events-none"></div>
      <div className="fixed top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
    </div>
  );
}
