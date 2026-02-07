"use client";
import React, { useState } from "react";
import { Home, LayoutDashboard, Search } from "lucide-react";

export default function HomePage() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      {/* Navigation Header */}
      <nav className="flex items-center justify-between px-6 py-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          {/* Logo Icon */}
          <div className="w-10 h-10 bg-[#7c3aed] flex items-center justify-center rounded-lg shadow-[0_0_20px_rgba(124,58,237,0.4)]">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 9h6v6H9z" />
              <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tight leading-none uppercase">
              SNEHALATA-স্নেহলতা
            </h1>
            <p className="text-[10px] text-purple-500 font-bold tracking-[0.25em] uppercase mt-0.5">
              Aura Ecosystem
            </p>
          </div>
        </div>

        {/* Top Nav Buttons */}
        <div className="flex items-center gap-8 text-[12px] font-bold uppercase tracking-widest text-gray-300">
          <button className="flex items-center gap-2 hover:text-white transition-all">
            <Home size={16} /> HUB (নীড়)
          </button>
          <button className="flex items-center gap-2 hover:text-white transition-all">
            <LayoutDashboard size={16} /> Vendor Console
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto flex flex-col items-center justify-start pt-28 px-4">
        
        {/* Ecosystem Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-white/20 bg-white/5 mb-12">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-200">
            ECOSYSTEM ভলিউম: ৳১৫৪,৩৭১
          </span>
        </div>

        {/* Massive Brand Name */}
        <h2 className="text-[100px] md:text-[160px] font-black tracking-[-0.05em] text-center leading-[0.85] mb-8 uppercase">
          SNEHALATA-স্নেহলতা
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm md:text-xl tracking-[0.1em] text-center font-medium uppercase mb-20">
          Direct-to-Vendor ইকোসিস্টেম — AURA GOVERNANCE দ্বারা পরিচালিত
        </p>

        {/* Aura AI Interface Box */}
        <div className="w-full max-w-3xl border border-white/20 rounded-3xl p-10 bg-gradient-to-b from-[#0a0a0a] to-black shadow-2xl">
          <div className="space-y-4">
            <h3 className="text-[11px] font-bold text-purple-500 uppercase tracking-[0.3em]">
              Aura AI
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed font-medium">
              Snehalata-স্নেহলতা ইকোসিস্টেমে স্বাগতম! আমি Aura। আজ আপনার স্টাইল যাত্রায় কীভাবে সাহায্য করতে পারি?
            </p>
            
            <div className="relative mt-8 group">
              <input
                type="text"
                placeholder="আপনার ব্র্যান্ডের নাম বা জিজ্ঞাসা লিখুন..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-lg focus:outline-none focus:border-purple-600 transition-all text-white placeholder:text-gray-600 pr-16"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-purple-600 rounded-xl hover:bg-purple-500 transition-colors shadow-lg">
                <Search size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Subtle Background Glow */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-900/5 blur-[150px] rounded-full -z-10"></div>
    </div>
  );
}
