"use client";
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Globe, Loader2, Cpu } from 'lucide-react';
// ১. সুপাবেস ইমপোর্ট নিশ্চিত করুন
import { supabase } from '../lib/supabase'; 

export default function SupremeJoin() {
  const [vendorName, setVendorName] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [siteUrl, setSiteUrl] = useState('');
  const [liveSales, setLiveSales] = useState(254900);

  // Live Sales Simulator
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveSales(prev => prev + Math.floor(Math.random() * 300));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // ২. আপনার সুপ্রিম লজিক ফাংশন (আপডেটেড)
  const executeSupremeLogic = async () => {
    if(!vendorName) return;
    setLoading(true);
    setResponse('');
    setSiteUrl('');
    
    try {
      // এআই অ্যানালাইসিস কল
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: vendorName, type: 'vendor_onboarding' }),
      });
      const data = await res.json();
      setResponse(data.text);

      // ডাটাবেসে সেভ করা (ম্যাজিক কানেকশন)
      const generatedUrl = `https://${vendorName.toLowerCase().replace(/\s+/g, '-')}.snehalata.com`;
      
      const { error } = await supabase.from('vendors').insert([
        { 
          name: vendorName, 
          website_url: generatedUrl, 
          status: 'pending',
          dna_score: data.text ? data.text.substring(0, 150) : "Reviewing..." 
        }
      ]);

      if(!error) {
        setSiteUrl(generatedUrl);
      } else {
        console.error("Supabase Error:", error.message);
      }
      
    } catch (e) { 
      console.error("Aura Execution Error:", e); 
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#020202] text-white p-6 md:p-12 font-sans selection:bg-purple-600">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Navigation / Live Stats */}
        <div className="flex justify-between items-center border-b border-white/5 pb-8 opacity-80">
          <div className="flex items-center gap-3 font-black text-xl italic tracking-tighter text-white">
            <Cpu className="text-purple-500 animate-pulse" /> SNEHALATA SUPREME
          </div>
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500">
             Global Sales: <span className="text-green-500">৳{liveSales.toLocaleString()}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-8xl font-black italic tracking-tighter leading-[0.8] mb-8 uppercase">
              1-Click <br/> <span className="text-purple-600">Ecosystem</span>
            </h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-md">
              Aura AI এখন আপনার ব্র্যান্ডের জন্য বিশ্বমানের প্ল্যাটফর্ম তৈরি করতে প্রস্তুত। Grok এবং Gemini-র সম্মিলিত শক্তিতে আপনার ফ্যাশন সাম্রাজ্য শুরু করুন।
            </p>
            <div className="flex gap-4">
               <Badge icon={ShieldCheck} text="SSL Secure" />
               <Badge icon={Globe} text="Global Edge" />
            </div>
          </div>

          {/* Action Box */}
          <div className="bg-white/[0.02] border border-white/10 p-12 rounded-[60px] backdrop-blur-3xl shadow-[0_0_80px_rgba(168,85,247,0.1)]">
            <input 
              type="text" 
              placeholder="Your Brand Identity..."
              className="w-full bg-transparent border-b border-white/10 py-6 text-3xl font-extralight focus:outline-none focus:border-purple-600 mb-10 transition-all text-center text-white"
              value={vendorName}
              onChange={(e) => setVendorName(e.target.value)}
            />
            <button 
              onClick={executeSupremeLogic}
              disabled={loading}
              className="w-full bg-white text-black py-7 rounded-3xl font-black uppercase tracking-[0.4em] text-[10px] hover:bg-purple-600 hover:text-white transition-all transform active:scale-95 disabled:opacity-50"
            >
              {loading ? <Loader2 className="animate-spin mx-auto" /> : "Initiate Aura Deployment"}
            </button>

            {(siteUrl || response) && (
              <div className="mt-12 p-8 bg-purple-600/10 border border-purple-500/20 rounded-[40px] animate-in zoom-in duration-500">
                <p className="text-[10px] font-bold text-purple-400 uppercase tracking-widest mb-4">Aura Analysis Complete</p>
                {response && <p className="text-sm italic text-gray-300 mb-6 leading-relaxed">"{response}"</p>}
                {siteUrl && (
                  <div className="p-4 bg-black/50 rounded-2xl border border-white/5 text-center">
                    <p className="text-[9px] uppercase text-gray-500 mb-1 tracking-widest">Reserved Subdomain</p>
                    <p className="font-mono text-purple-400">{siteUrl}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Badge({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-gray-400">
      <Icon size={12} /> {text}
    </div>
  );
}
