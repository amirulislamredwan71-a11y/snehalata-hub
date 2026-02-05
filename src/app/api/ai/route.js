import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const fullPrompt = `
    Identity: AURA AI - Soul of SNEHALATA.
    Role: High-end Fashion Expert.
    Rule: Always start with "আসসালামু আলাইকুম।". 
    Language: Bengali (if user asks in Bengali) or English.
    Prompt: ${prompt}`;

    const result = await model.generateContent(fullPrompt);
    return NextResponse.json({ text: result.response.text() });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
