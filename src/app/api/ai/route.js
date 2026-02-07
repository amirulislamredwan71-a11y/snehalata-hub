import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const aiPrompt = `Identity: Aura AI. Task: Welcome the fashion brand "${prompt}" to Snehalata Supreme Ecosystem. Tone: Royal, elite, Bengali. Max 2 sentences.`;
    const result = await model.generateContent(aiPrompt);
    const text = result.response.text();

    return NextResponse.json({ text });
  } catch (error) {
    return NextResponse.json({ text: "আসসালামু আলাইকুম। আপনার রাজকীয় ব্র্যান্ডের যাত্রা শুরু হোক।" });
  }
}
