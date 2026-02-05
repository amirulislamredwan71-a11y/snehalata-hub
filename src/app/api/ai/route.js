import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const fullPrompt = `
      Identity: AURA AI - Supreme Soul of SNEHALATA Hub.
      Task: Analyze the brand name "${prompt}" and give a royal business welcome.
      Language: Bengali and English mix.
      Style: Professional, Elite, Fashion-focused.
      Rule: Max 2 sentences. Always start with "আসসালামু আলাইকুম।".
    `;

    const result = await model.generateContent(fullPrompt);
    const text = result.response.text();
    return NextResponse.json({ text });
  } catch (error) {
    return NextResponse.json({ error: "System is warming up..." }, { status: 500 });
  }
}
