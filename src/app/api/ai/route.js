import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { prompt, type } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const fullPrompt = `
    Identity: AURA AI - Supreme Soul of SNEHALATA Hub.
    Infrastructure: Next.js 14, Supabase, Prisma.
    Current Task: ${type === 'vendor_onboarding' ? 'New Brand Deployment Analysis' : 'Fashion Consulting'}
    
    Response DNA:
    1. Always start with "আসসালামু আলাইকুম।".
    2. Style: Mix of Royal Bengali & Elite English.
    3. Maximum 3 impactful sentences.
    User Input: "${prompt}"`;

    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    return NextResponse.json({ text: response.text() });
  } catch (error) {
    console.error("Aura API Error:", error);
    return NextResponse.json({ error: "Aura system is initializing. Please wait." }, { status: 500 });
  }
}
