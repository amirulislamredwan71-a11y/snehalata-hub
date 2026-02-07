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
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white', fontFamily: 'sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      
      {/* Navbar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 50px', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'black' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ background: '#7c3aed', padding: '10px', borderRadius: '12px', boxShadow: '0 0 20px rgba(124,58,237,0.5)' }}>
            <Cpu size={28} color="white" />
          </div>
          <div>
            <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '900', letterSpacing: '-1px' }}>SNEHALATA-স্নেহলতা</h1>
            <p style={{ margin: 0, fontSize: '10px', color: '#a855f7', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Aura Ecosystem</p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
             <button style={{ background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)', color: '#a855f7', padding: '8px 15px', borderRadius: '50px', fontWeight: 'bold' }}>HUB (নীড়)</button>
        </div>
      </nav>

      {/* Main Hero Section */}
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '100px', textAlign: 'center' }}>
        <div style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '8px 20px', borderRadius: '50px', background: 'rgba(255,255,255,0.05)', marginBottom: '50px' }}>
          <span style={{ color: '#10b981', marginRight: '8px' }}>●</span>
          <span style={{ fontSize: '11px', fontWeight: 'bold', letterSpacing: '3px' }}>ECOSYSTEM ভলিউম: ৳১৫৪,৩৭১</span>
        </div>

        <h2 style={{ fontSize: 'min(140px, 12vw)', fontWeight: '1000', margin: '0', letterSpacing: '-5px', lineHeight: '0.9', textTransform: 'uppercase' }}>
          SNEHALATA-স্নেহলতা
        </h2>

        <p style={{ color: '#9ca3af', fontSize: '18px', letterSpacing: '4px', textTransform: 'uppercase', marginTop: '30px', marginBottom: '80px', fontStyle: 'italic' }}>
          Direct-to-Vendor ইকোসিস্টেম — AURA GOVERNANCE দ্বারা পরিচালিত
        </p>

        {/* AI Input Card */}
        <div style={{ width: '90%', maxWidth: '800px', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '40px', padding: '50px', textAlign: 'left', boxShadow: '0 -20px 100px rgba(124,58,237,0.1)' }}>
           <h3 style={{ color: '#a855f7', fontSize: '12px', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '20px' }}>Aura AI</h3>
           <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#e5e7eb', marginBottom: '40px' }}>
             {aiResponse || "Snehalata-স্নেহলতা ইকোসিস্টেমে স্বাগতম! আমি Aura। আজ আপনার স্টাইল যাত্রায় কীভাবে সাহায্য করতে পারি?"}
           </p>
           
           <div style={{ display: 'flex', gap: '15px' }}>
             <input 
               type="text" 
               placeholder="আপনার ব্র্যান্ডের নাম বা জিজ্ঞাসা লিখুন..." 
               style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '20px', borderRadius: '20px', color: 'white', fontSize: '18px', outline: 'none' }}
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
             />
             <button 
               onClick={handleAiSearch}
               disabled={loading}
               style={{ background: '#7c3aed', color: 'white', border: 'none', padding: '0 40px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', opacity: loading ? 0.6 : 1 }}>
               {loading ? "..." : "SEARCH"}
             </button>
           </div>
        </div>
      </main>

      {/* Background Glow */}
      <div style={{ position: 'fixed', bottom: '-200px', left: '50%', transform: 'translateX(-50%)', width: '1200px', height: '600px', background: 'rgba(124,58,237,0.15)', filter: 'blur(150px)', borderRadius: '100%', zIndex: -1 }}></div>
    </div>
  );
}
