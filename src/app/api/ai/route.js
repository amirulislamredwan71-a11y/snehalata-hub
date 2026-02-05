import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const fullPrompt = `
      Identity: AURA AI - Supreme Soul of SNEHALATA.
      Context: User is launching a fashion brand named "${prompt}".
      Task: Give a very royal, elite, and professional welcome in Bengali.
      Constraint: Max 2 sentences. Always start with "আসসালামু আলাইকুম।".
    `;

    const result = await model.generateContent(fullPrompt);
    const text = result.response.text();
    return NextResponse.json({ text });
  } catch (error) {
    return NextResponse.json({ text: "আসসালামু আলাইকুম। আপনার রাজকীয় ব্র্যান্ডের যাত্রা শুরু হোক।" });
  }
}
