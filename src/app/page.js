"use client";
import React, { useState } from "react";
import { Search, Home, LayoutDashboard, Cpu } from "lucide-react";

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
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif', margin: 0, padding: 0, overflowX: 'hidden', position: 'relative' }}>
      
      {/* ১. প্রিমিয়াম ন্যাভিগেশন বার */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 50px', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', sticky: 'top', zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ background: '#7c3aed', padding: '10px', borderRadius: '12px', boxShadow: '0 0 20px rgba(124,58,237,0.5)' }}>
            <Cpu size={28} color="white" />
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '900', letterSpacing: '-1px', textTransform: 'uppercase' }}>SNEHALATA-স্নেহলতা</h1>
            <p style={{ margin: 0, fontSize: '10px', color: '#a855f7', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Aura Ecosystem</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          <button style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)', color: '#a855f7', padding: '10px 20px', borderRadius: '50px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Search size={16} /> HUB (নীড়)
          </button>
          <div style={{ display: 'none', gap: '20px', fontSize: '12px', fontWeight: 'bold', color: '#9ca3af' }} className="md-flex">
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Home size={14} /> HUB (নীড়)</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><LayoutDashboard size={14} /> Vendor Console</span>
          </div>
        </div>
      </nav>

      {/* ২. মেইন কন্টেন্ট */}
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '120px', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        
        {/* ইকোসিস্টেম ব্যাজ */}
        <div style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '8px 25px', borderRadius: '50px', background: 'rgba(255,255,255,0.05)', marginBottom: '50px' }}>
          <span style={{ color: '#10b981', marginRight: '10px' }}>●</span>
          <span style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '3px', textTransform: 'uppercase' }}>ECOSYSTEM ভলিউম: ৳১৫৪,৩৭১</span>
        </div>

        {/* ৩. ব্র্যান্ড নেম - হুবহু ছবির মতো বিশাল */}
        <h2 style={{ fontSize: 'calc(40px + 6vw)', fontWeight: '1000', margin: '0 0 30px 0', letterSpacing: '-5px', lineHeight: '0.85', textTransform: 'uppercase', color: 'white' }}>
          SNEHALATA-স্নেহলতা
        </h2>

        {/* সাব-টাইটেল */}
        <p style={{ color: '#9ca3af', fontSize: '18px', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '100px', fontStyle: 'italic', maxWidth: '800px' }}>
          Direct-to-Vendor ইকোসিস্টেম — AURA GOVERNANCE দ্বারা পরিচালিত
        </p>

        {/* ৪. Aura AI ইন্টারফেস কার্ড */}
        <div style={{ width: '90%', maxWidth: '850px', background: 'linear-gradient(to bottom, #0f0f0f, #000000)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '45px', padding: '50px', textAlign: 'left', boxShadow: '0 -20px 100px rgba(124,58,237,0.15)' }}>
           <h3 style={{ color: '#a855f7', fontSize: '12px', fontWeight: '900', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '25px' }}>Aura AI</h3>
           <p style={{ fontSize: '24px', fontWeight: '600', lineHeight: '1.4', color: '#f3f4f6', marginBottom: '45px' }}>
             {aiResponse || "Snehalata-স্নেহলতা ইকোসিস্টেমে স্বাগতম! আমি Aura। আজ আপনার স্টাইল যাত্রায় কীভাবে সাহায্য করতে পারি?"}
           </p>
           
           <div style={{ display: 'flex', gap: '15px' }}>
             <input 
               type="text" 
               placeholder="আপনার ব্র্যান্ডের নাম বা জিজ্ঞাসা লিখুন..." 
               style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '22px 30px', borderRadius: '25px', color: 'white', fontSize: '18px', outline: 'none' }}
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
             />
             <button 
               onClick={handleAiSearch}
               disabled={loading}
               style={{ background: '#7c3aed', color: 'white', border: 'none', padding: '0 45px', borderRadius: '25px', fontWeight: '900', cursor: 'pointer', fontSize: '16px', transition: 'all 0.3s', opacity: loading ? 0.7 : 1 }}
             >
               {loading ? "..." : "SEARCH"}
             </button>
           </div>
        </div>
      </main>

      {/* ৫. সেই বিখ্যাত বেগুনি আভা (Background Glow) */}
      <div style={{ position: 'fixed', bottom: '-250px', left: '50%', transform: 'translateX(-50%)', width: '1400px', height: '700px', background: 'rgba(124,58,237,0.2)', filter: 'blur(180px)', borderRadius: '100%', zIndex: 0, pointerEvents: 'none' }}></div>
    </div>
  );
}
