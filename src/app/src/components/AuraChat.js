"use client";
import React, { useState } from 'react';
import { Bot, X, Send, Zap } from 'lucide-react';

export default function AuraChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ role: 'ai', text: 'স্বাগতম! আমি Aura। আপনাকে আজ কীভাবে সাহায্য করতে পারি?' }]);

  const chat = async () => {
    if(!input) return;
    const newMsgs = [...messages, { role: 'user', text: input }];
    setMessages(newMsgs);
    setInput('');
    const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input, type: 'customer_support' }),
    });
    const data = await res.json();
    setMessages([...newMsgs, { role: 'ai', text: data.text }]);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[1000]">
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)} className="bg-white text-black p-5 rounded-full shadow-2xl hover:scale-110 transition-all">
          <Bot size={28} />
        </button>
      ) : (
        <div className="w-80 h-[450px] bg-[#0A0A0A] border border-white/10 rounded-[30px] flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom-5">
          <div className="p-5 border-b border-white/5 flex justify-between bg-white/5">
            <span className="text-[10px] font-black uppercase tracking-widest text-purple-500">Aura Live Support</span>
            <X size={16} className="cursor-pointer" onClick={() => setIsOpen(false)} />
          </div>
          <div className="flex-1 p-5 overflow-y-auto space-y-4 text-xs">
            {messages.map((m, i) => (
              <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left italic text-gray-400'}>{m.text}</div>
            ))}
          </div>
          <div className="p-4 border-t border-white/5 flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && chat()} className="flex-1 bg-white/5 rounded-xl px-4 py-2 text-xs focus:outline-none" placeholder="Ask Aura..." />
            <button onClick={chat} className="p-2 bg-white text-black rounded-xl"><Send size={14}/></button>
          </div>
        </div>
      )}
    </div>
  );
}
