import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(req) {
  try {
    const { prompt, vendorId } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // ডাটাবেসে লগ সেভ করা (যদি প্রয়োজন হয়)
    if (vendorId) {
      await prisma.vendor.update({
        where: { id: vendorId },
        data: { lastAiPrompt: prompt }
      });
    }

    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error("AI Error:", error);
    return NextResponse.json({ error: "AI response failed" }, { status: 500 });
  }
}
