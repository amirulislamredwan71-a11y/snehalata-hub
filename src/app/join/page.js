"use client";
import React, { useState } from 'react';
import { Sparkles, Upload, Loader2, CheckCircle2 } from 'lucide-react';

export default function JoinHub() {
  const [status, setStatus] = useState('idle'); // idle, analyzing, approved, rejected
  const [brandName, setBrandName] = useState('');

  const handleSimulatedAI = () => {
    if(!brandName) return alert("Please enter your brand name");
    setStatus('analyzing');
    
    // মাস্টার AI এখানে আপনার ব্র্যান্ড এনালাইসিস সিমুলেট করছে
    setTimeout(() => {
      setStatus('approved');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-8">
      <div className="max-w-md w-full border border-white/10 p-10 rounded-3xl bg-white/5 backdrop-blur-xl">
        <div className="flex justify-center mb-6 text-yellow-500">
          <Sparkles size={40} />
        </div>
        
        <h2 className="text-2xl font-black text-center mb-2 uppercase tracking-tighter">Master AI Governance</h2>
        <p className="text-center text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-10">Elite Vendor Application</p>

        {status === 'idle' && (
          <div className="space-y-6">
            <div>
              <label className="text-[10px] uppercase tracking-widest text-gray-400 block mb-2">Brand Identity</label>
              <input 
                type="text" 
                placeholder="ENTER BRAND NAME"
                className="w-full bg-transparent border-b border-white/20 py-3 text-sm focus:outline-none focus:border-white transition"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
              />
            </div>
            
            <div className="border-2 border-dashed border-white/10 rounded-2xl p-8 text-center hover:bg-white/5 transition cursor-pointer">
              <Upload size={24} className="mx-auto mb-4 text-gray-500" />
              <p className="text-[10px] uppercase tracking-widest text-gray-400">Upload Signature Design (Image)</p>
            </div>

            <button 
              onClick={handleSimulatedAI}
              className="w-full bg-white text-black font-black text-xs py-4 rounded-full uppercase tracking-[0.2em] hover:bg-gray-200 transition"
            >
              Initiate AI Review
            </button>
          </div>
        )}

        {status === 'analyzing' && (
          <div className="text-center py-10">
            <Loader2 size={40} className="mx-auto mb-6 animate-spin text-white" />
            <p className="text-[10px] uppercase tracking-[0.3em] animate-pulse">Master AI is analyzing your brand DNA...</p>
          </div>
        )}

        {status === 'approved' && (
          <div className="text-center py-10 animate-in fade-in zoom-in">
            <CheckCircle2 size={50} className="mx-auto mb-6 text-green-500" />
            <h3 className="text-xl font-bold mb-4 uppercase">Access Granted</h3>
            <p className="text-xs text-gray-400 leading-relaxed uppercase tracking-widest">
              Master AI has identified your brand as "Elite Category". Welcome to the Snehalata Ecosystem, {brandName}.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="mt-8 text-[10px] font-bold uppercase border-b border-white pb-1"
            >
              Go to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
