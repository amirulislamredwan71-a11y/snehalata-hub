import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <nav className="p-6 flex justify-between items-center border-b">
        <h1 className="text-2xl font-black italic tracking-tighter">SNEHALATA.</h1>
        <div className="space-x-6 text-sm font-bold uppercase">
          <a href="/join" className="bg-black text-white px-6 py-2 rounded-full">Join Hub</a>
        </div>
      </nav>
      <main className="max-w-4xl mx-auto text-center mt-20">
        <h2 className="text-6xl font-black leading-tight">THE FUTURE OF <br/> LUXURY FASHION.</h2>
        <p className="mt-6 text-gray-500 tracking-widest uppercase text-xs">AI-Powered Autonomous Ecosystem</p>
      </main>
    </div>
  );
}