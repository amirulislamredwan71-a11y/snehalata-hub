"use client";
import React, { useState, useEffect } from 'react';
import { Cpu, Loader2, Globe, ExternalLink, Zap } from 'lucide-react';

export default function SnehalataSupreme() {
  const [vendorName, setVendorName] = useState('');
  const [response, setResponse] = useState('');
  const [siteUrl, setSiteUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [salesCount, setSalesCount] = useState(260129);

  useEffect(() => {
    const interval = setInterval(() => {
      setSalesCount(prev => prev + Math.floor(Math.random() * 50));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const executeSupremeLogic = async () => {
    if (!vendorName) return;
    setLoading(true);
    setResponse('');
    setSiteUrl('');

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: vendorName, type: 'vendor_onboarding' }),
      });
      const data = await res.json();
      if (data.text) setResponse(data.text);

      const formattedName = vendorName.toLowerCase().trim().replace(/\s+/g, '-');
      const generatedUrl = `https://${formattedName}.snehalata.com`;
      setSiteUrl(generatedUrl);
    } catch (error) {
      setResponse("সিস্টেম কানেকশনে সমস্যা হচ্ছে। দয়া করে আবার চেষ্টা করুন।");
    }
    setLoading(false);
  };

  return (
    <>
      {/* Tailwind CSS CDN - এটি নিশ্চিত করবে যে আপনার ডিজাইন ভেঙে যাবে না */}
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        
        {/* --- SMART NAVIGATION --- */}
        <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
            {/* BRAND LOGO */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37]">
                {/* আপনার আপলোড করা লোগো এখানে সেট হবে */}
                <img 
                  src="https://cloud-jx3uagc5.designarena.com/designarena_image_ix3uagc5.jpg" 
                  alt="Snehalata Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter">SNEHALATA</span>
                <span className="text-[8px] font-bold text-[#D4AF37] uppercase tracking-widest">Supreme Ecosystem</span>
              </div>
            </div>
            
            <div className="bg-black text-white px-4 py-2 rounded-full text-xs font-bold">
               Sales: ৳{salesCount.toLocaleString()}
            </div>
          </div>
        </nav>

        {/* --- HERO SECTION --- */}
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 text-black">
              DEPLOY YOUR <br/> <span className="text-yellow-600">EMPIRE</span>
            </h1>
            
            <p className="text-gray-500 text-lg mb-10 italic">
              এক ক্লিকেই তৈরি করুন আপনার প্রফেশনাল ফ্যাশন ব্র্যান্ড।
            </p>

            {/* DEPLOYMENT CARD */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
               <input 
                 type="text"
                 value={vendorName}
                 onChange={(e) => setVendorName(e.target.value)}
                 className="w-full bg-gray-50 border-b-2 border-gray-200 py-4 text-2xl font-bold text-center focus:outline-none focus:border-yellow-600 mb-8 rounded-lg"
                 placeholder="ব্র্যান্ডের নাম লিখুন"
               />

               <button 
                 onClick={executeSupremeLogic}
                 disabled={loading}
                 className="w-full bg-black text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-yellow-600 transition-all shadow-lg flex items-center justify-center gap-3"
               >
                 {loading ? <Loader2 className="animate-spin" /> : "Deploy to Network ✨"}
               </button>
            </div>

            {/* RESULTS */}
            {(response || siteUrl) && (
              <div className="mt-10 space-y-4 text-left max-w-2xl mx-auto">
                 {response && (
                   <div className="bg-gray-900 text-white p-6 rounded-2xl border-l-4 border-yellow-600">
                      <p className="text-xs font-bold text-yellow-500 uppercase mb-2 italic">Aura AI Analysis:</p>
                      <p className="text-lg italic font-light">"{response}"</p>
                   </div>
                 )}

                 {siteUrl && (
                   <div className="bg-white p-6 rounded-2xl border border-gray-200 flex justify-between items-center shadow-md">
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase">Subdomain Allocated:</p>
                        <p className="text-xl font-bold text-yellow-700">{siteUrl}</p>
                      </div>
                      <a href={siteUrl} target="_blank" className="p-3 bg-gray-100 rounded-full text-black hover:bg-yellow-600 hover:text-white transition-all">
                        <ExternalLink size={20} />
                      </a>
                   </div>
                 )}
              </div>
            )}
          </div>
        </main>

        <footer className="py-10 text-center opacity-30">
          <p className="text-xs font-bold uppercase tracking-widest">© 2026 SNEHALATA AURA ✨</p>
        </footer>
      </div>
    </>
  );
}
