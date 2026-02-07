"use client";
import React, { useState } from "react";
import { Search, Home, LayoutDashboard, Globe } from "lucide-react";

export default function HomePage() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 overflow-hidden">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.5)]">
            <Globe size={24} strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight leading-none uppercase">SNEHALATA-স্নেহলতা</h1>
            <p className="text-[10px] text-purple-500 font-black tracking-[0.2em] uppercase mt-0.5">Aura Ecosystem</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
           <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">ECOSYSTEM ভলিউম: ৳১৫৪,৩৭১</span>
           </div>
           <div className="flex items-center gap-5">
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all italic">
                <Search size={18} className="bg-purple-600 p-1 rounded-full text-white" /> HUB (নীড়)
              </button>
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all">
                <Home size={16} /> HUB (নীড়)
              </button>
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-all">
                <LayoutDashboard size={16} /> Vendor Console
              </button>
           </div>
        </div>
      </nav>

      {/* Main Hero Content */}
      <main className="relative flex flex-col items-center justify-center pt-40 px-4 z-10">
        
        {/* Sub Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 mb-14">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span className="text-[10px] font-bold text-gray-200 uppercase tracking-widest">ECOSYSTEM ভলিউম: ৳১৫৪,৩৭১</span>
        </div>

        {/* Brand Name */}
        <h2 className="text-7xl md:text-8xl font-black tracking-tight text-white mb-6 uppercase text-center">
          SNEHALATA-স্নেহলতা
        </h2>

        {/* Tagline */}
        <p className="text-gray-400 text-sm md:text-lg tracking-[0.15em] font-medium uppercase text-center mb-24">
          Direct-to-Vendor ইকোসিস্টেম — AURA GOVERNANCE দ্বারা পরিচালিত
        </p>

        {/* Aura AI Box */}
        <div className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[32px] p-10 shadow-[0_0_60px_rgba(147,51,234,0.15)] relative">
           <div className="space-y-4">
              <h3 className="text-[11px] font-bold text-purple-500 uppercase tracking-[0.3em]">Aura AI</h3>
              <p className="text-gray-300 text-[17px] font-medium leading-relaxed">
                Snehalata-স্নেহলতা ইকোসিস্টেমে স্বাগতম! আমি Aura। আজ আপনার স্টাইল যাত্রায় কীভাবে সাহায্য করতে পারি?
              </p>
              <div className="mt-8">
                <input 
                  type="text"
                  placeholder="আপনার ব্র্যান্ডের নাম বা জিজ্ঞাসা লিখুন..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-600 transition-all shadow-inner"
                />
              </div>
           </div>
        </div>
      </main>

      {/* Background Glow Effect - হুবহু ছবির মতো */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-900/20 blur-[120px] rounded-[100%] -z-0 pointer-events-none"></div>
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full -z-0 pointer-events-none"></div>
    </div>
  );
}
