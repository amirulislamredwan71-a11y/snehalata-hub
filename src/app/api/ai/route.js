import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Gemini API কানেকশন
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // এআই-এর জন্য প্রফেশনাল ইনস্ট্রাকশন
    const fullPrompt = `
      Identity: AURA AI - Supreme Soul of SNEHALATA Hub.
      Rule 1: Always start with "আসসালামু আলাইকুম।".
      Rule 2: Respond in the language used by the user (Bengali or English).
      Rule 3: Style must be Royal, Professional, and Fashion-focused.
      User Query: "${prompt}"
    `;

    // এআই থেকে উত্তর জেনারেট করা
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text: text });
  } catch (error) {
    console.error("Aura Error:", error);
    return NextResponse.json({ error: "Aura system is temporarily offline." }, { status: 500 });
  }
}
