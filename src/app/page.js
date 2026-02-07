"use client";
import React, { useState } from "react";
import { Search, Home, LayoutDashboard, Cpu } from "lucide-react";

export default function HomePage() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30 overflow-hidden">
      
      {/* Navigation Header - ছবির মতো মার্জিত লেআউট */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-white/5 bg-black/50 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="bg-[#7c3aed] p-2 rounded-lg shadow-[0_0_15px_rgba(124,58,237,0.4)]">
            <Cpu size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter leading-none">SNEHALATA-স্নেহলতা</h1>
            <p className="text-[10px] text-purple-500 font-bold tracking-[0.2em] uppercase mt-0.5">Aura Ecosystem</p>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <button className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
            <Search size={14} className="text-purple-500" /> HUB (নীড়)
          </button>
          <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-400">
            <button className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Home size={14} /> HUB (নীড়)
            </button>
            <button className="flex items-center gap-1.5 hover:text-white transition-colors">
              <LayoutDashboard size={14} /> Vendor Console
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content - ছবির হুবহু টাইপোগ্রাফি এবং গ্যাপ */}
      <main className="flex flex-col items-center justify-center pt-32 px-4 relative z-10 text-center">
        
        {/* Ecosystem Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-12">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em]">
            ECOSYSTEM ভলিউম: ৳১৫৪,৩৭১
          </span>
        </div>

        {/* Brand Name - বড় এবং স্পষ্ট সাদা ফন্ট */}
        <h2 className="text-[80px] md:text-[110px] font-black tracking-[-0.03em] leading-none mb-6 uppercase">
          SNEHALATA-স্নেহলতা
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm md:text-lg tracking-[0.15em] font-medium uppercase mb-20 italic">
          Direct-to-Vendor ইকোসিস্টেম — AURA GOVERNANCE দ্বারা পরিচালিত
        </p>

        {/* Aura AI Interface Box - ছবির ডার্ক কার্ড স্টাইল */}
        <div className="w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[32px] p-8 shadow-[0_0_50px_rgba(147,51,234,0.1)] relative overflow-hidden text-left">
           <div className="relative z-10 space-y-4">
              <h3 className="text-[10px] font-bold text-purple-500 uppercase tracking-[0.3em]">Aura AI</h3>
              <p className="text-gray-200 text-lg font-medium leading-relaxed">
                Snehalata-স্নেহলতা ইকোসিস্টেমে স্বাগতম! আমি Aura। আজ আপনার স্টাইল যাত্রায় কীভাবে সাহায্য করতে পারি?
              </p>
              
              <div className="mt-8 flex gap-3">
                <input 
                  type="text"
                  placeholder="আপনার ব্র্যান্ডের নাম বা জিজ্ঞাসা লিখুন..."
                  className="flex-1 bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-600 transition-all text-sm"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="bg-purple-600 px-8 rounded-2xl font-bold text-sm tracking-widest hover:bg-purple-500 transition-all shadow-lg shadow-purple-600/20">
                  SEARCH
                </button>
              </div>
           </div>
           {/* Subtle Inner Glow */}
           <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600/10 blur-[50px] rounded-full"></div>
        </div>
      </main>

      {/* Background Glow - নিচের সেই বেগুনি আভা */}
      <div className="fixed bottom-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-900/10 blur-[150px] rounded-[100%] -z-0 pointer-events-none"></div>
    </div>
  );
}
