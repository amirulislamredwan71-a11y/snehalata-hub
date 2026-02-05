import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemInstruction = `You are Aura AI, the soul of SNEHALATA. Brand: ${prompt}. Logic: Grok+Gemini. Welcome the user in a royal Bengali tone. Max 2 sentences.`;

    const result = await model.generateContent(systemInstruction);
    return NextResponse.json({ text: result.response.text() });
  } catch (error) {
    return NextResponse.json({ text: "আসসালামু আলাইকুম। আপনার রাজকীয় সাম্রাজ্য প্রস্তুত।" });
  }
}
