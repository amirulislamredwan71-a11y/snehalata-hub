const executeSupremeLogic = async () => {
  if(!vendorName) return;
  setLoading(true);
  setResponse(''); // আগের রেসপন্স ক্লিয়ার করা
  
  try {
    // ১. এআই এনালাইসিস কল
    const res = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: vendorName, type: 'vendor_onboarding' }),
    });
    const data = await res.json();
    
    // ২. এআই উত্তর সেট করা
    if(data.text) {
      setResponse(data.text);
    }

    // ৩. সাবডোমেইন সেট করা
    const generatedUrl = `https://${vendorName.toLowerCase().replace(/\s+/g, '-')}.snehalata.com`;
    setSiteUrl(generatedUrl);
    
    // ৪. ডাটাবেসে সেভ করা (সুপাবেস)
    await supabase.from('vendors').insert([
      { name: vendorName, website_url: generatedUrl, status: 'approved' }
    ]);

  } catch (e) { 
    console.error("Deployment Error:", e);
    setResponse("আসসালামু আলাইকুম। সিস্টেমের কনফিগারেশন আপডেট হচ্ছে, দয়া করে আবার চেষ্টা করুন।");
  }
  setLoading(false);
};
