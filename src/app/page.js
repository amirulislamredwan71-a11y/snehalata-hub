"use client";
import React, { useState } from "react";
import { Cpu, Home, LayoutDashboard } from "lucide-react";

export default function HomePage() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500/30">
      {/* Navigation Header */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="bg-purple-600 p-1.5 rounded-md shadow-[0_0_15px_rgba(147,51,234,0.5)]">
            <Cpu size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tighter leading-none">
              SNEHALATA-স্নেহলতা
            </h1>
            <p className="text-[10px] text-purple-400 font-bold tracking-[0.2em] uppercase">
              Aura Ecosystem
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-[11px] font-bold uppercase tracking-wider text-gray-400">
          <button className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Home size={14} /> HUB (নীড়)
          </button>
          <button className="flex items-center gap-1.5 hover:text-white transition-colors">
            <LayoutDashboard size={14} /> Vendor Console
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center pt-32 px-4">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">
            Ecosystem ভলিউম: ৳১৫৪,৩৭১
          </span>
        </div>

        <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-center mb-6">
          SNEHALATA-স্নেহলতা
        </h2>

        <p className="text-gray-400 text-sm md:text-lg tracking-wide text-center max-w-2xl uppercase font-medium">
          Direct-to-Vendor ইকোসিস্টেম — AURA GOVERNANCE দ্বারা পরিচালিত
        </p>

        {/* AI Input Box (Aura AI) */}
        <div className="mt-20 w-full max-w-2xl bg-[#0f0f0f] border border-white/5 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="relative">
            <p className="text-[10px] font-bold text-purple-500 uppercase tracking-widest mb-3">
              Aura AI
            </p>
            <p className="text-gray-300 text-sm mb-6">
              Snehalata-স্নেহলতা ইকোসিস্টেমে স্বাগতম! আমি Aura। আজ আপনার স্টাইল যাত্রায় কীভাবে সাহায্য করতে পারি?
            </p>
            
            <input
              type="text"
              placeholder="আপনার ব্র্যান্ডের নাম লিখুন..."
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-all text-white placeholder:text-gray-600"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        </div>
      </main>

      {/* Background Decorative Gradient */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full -z-10"></div>
    </div>
  );
}
