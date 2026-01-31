import React from 'react';
import { Cpu, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-black font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-black italic tracking-tighter">SNEHALATA.</h1>
        <div className="flex items-center gap-8">
          <a href="#" className="text-xs font-bold uppercase tracking-widest hover:opacity-50 transition">The Ecosystem</a>
          <a href="/join" className="bg-black text-white px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition shadow-lg">
            Join Hub
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-40 pb-20 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-1 rounded-full mb-8">
            <Cpu size={14} className="text-gray-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Autonomous Fashion Hub v1.0</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-10">
            THE FUTURE OF <br/> 
            <span className="text-gray-300">LUXURY FASHION.</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-500 text-sm md:text-base leading-relaxed mb-12 uppercase tracking-widest">
            Snehalata is an AI-powered ecosystem where the Master AI governs design, quality, and luxury standards autonomously.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="group flex items-center gap-3 bg-black text-white px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:scale-105 transition">
              Explore Collections <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </header>

      {/* Master AI Features */}
      <section className="py-20 bg-black text-white px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <Sparkles size={20} className="text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-4">AI Design Governance</h3>
            <p className="text-gray-400 text-xs leading-loose uppercase tracking-tighter">Master AI analyzes global trends to ensure only elite-tier designs enter the hub.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck size={20} className="text-green-400" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Autonomous Approval</h3>
            <p className="text-gray-400 text-xs leading-loose uppercase tracking-tighter">Vendor applications are reviewed in milliseconds using deep learning vision protocols.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
              <Cpu size={20} className="text-blue-400" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-widest mb-4">Neural Marketplace</h3>
            <p className="text-gray-400 text-xs leading-loose uppercase tracking-tighter">A self-evolving ecosystem that balances supply and demand with zero human error.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100 text-center">
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em]">&copy; 2026 SNEHALATA HUB — ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
