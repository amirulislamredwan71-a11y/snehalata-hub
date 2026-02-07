"use client";
import React, { useState } from "react";
import { Search, Home, LayoutDashboard, Globe } from "lucide-react";

export default function HomePage() {
  const [inputValue, setInputValue] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAiSearch = async () => {
    if (!inputValue) return;
    setLoading(true);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        body: JSON.stringify({ prompt: inputValue }),
      });
      const data = await res.json();
      setAiResponse(data.response);
    } catch (err) {
      setAiResponse("দুঃখিত, এআই এখন কাজ করছে না।");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 overflow-x-hidden font-sans">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6 border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.4)]">
            <Globe size={24} strokeWidth={2.5} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter leading-none uppercase">SNEHALATA-স্নেহলতা</h1>
            <p className="text-[10px] text-purple-500 font-bold tracking-[0.2em] uppercase mt-1">Aura Ecosystem</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[12px] font-bold uppercase tracking-widest text-gray-400">
             <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] text-gray-300">ECOSYSTEM ভলিউম: ৳১৫৪,৩৭১</span>
             </div>
             <button className="flex items-center gap-2 px-4 py-2 bg-purple-600/10 text-purple-400 rounded-full border border-purple-500/20">
               <Search size={16} /> HUB (নীড়)
             </button>
             <button className="flex items-center gap-2 hover:text-white transition-all">
               <Home size={16} /> HUB (নীড়)
             </button>
             <button className="flex items-center gap-2 hover:text-white transition-all">
               <LayoutDashboard size={16} /> Vendor Console
             </button>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="relative flex flex-col items-center justify-center pt-32 px-4 z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 mb-10">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span className="text-[10px] font-bold text-gray-200 uppercase tracking-[0.2em]">ECOSYSTEM ভলিউম: ৳১৫৪,৩৭১</span>
        </div>

        <h2 className="text-[80px] md:text-[140px] font-black tracking-[-0.04em] leading-[0.9] mb-8 uppercase">
          SNEHALATA-স্নেহলতা
        </h2>

        <p className="text-gray-400 text-sm md:text-xl tracking-[0.1em] font-medium uppercase mb-20 italic max-w-3xl">
          Direct-to-Vendor ইকোসিস্টেম — AURA GOVERNANCE দ্বারা পরিচালিত
        </p>

        {/* Aura AI Interface */}
        <div className="w-full max-w-3xl bg-gradient-to-b from-[#0f0f0f] to-black border border-white/10 rounded-[40px] p-10 shadow-[0_-20px_80px_rgba(147,51,234,0.15)] mb-20">
           <div className="text-left space-y-4">
              <h3 className="text-[11px] font-bold text-purple-500 uppercase tracking-[0.3em]">Aura AI</h3>
              <p className="text-gray-200 text-xl font-semibold leading-relaxed">
                {aiResponse || "Snehalata-স্নেহলতা ইকোসিস্টেমে স্বাগতম! আমি Aura। আজ আপনার স্টাইল যাত্রায় কীভাবে সাহায্য করতে পারি?"}
              </p>
              
              <div className="relative mt-8 flex gap-2">
                <input 
                  type="text"
                  placeholder="আপনার ব্র্যান্ডের নাম বা জিজ্ঞাসা লিখুন..."
                  className="flex-1 bg-black/50 border border-white/10 rounded-2xl px-6 py-5 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-600 transition-all text-lg"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button 
                  onClick={handleAiSearch}
                  disabled={loading}
                  className="bg-purple-600 px-8 rounded-2xl font-bold hover:bg-purple-500 transition-all disabled:opacity-50"
                >
                  {loading ? "..." : "SEARCH"}
                </button>
              </div>
           </div>
        </div>
      </main>

      {/* Background Purple Glow */}
      <div className="fixed bottom-[-150px] left-1/2 -translate-x-1/2 w-[1400px] h-[600px] bg-purple-900/20 blur-[180px] rounded-[100%] -z-0"></div>
    </div>
  );
}
