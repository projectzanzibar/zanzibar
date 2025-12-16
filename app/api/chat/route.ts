import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message } = body as { message?: string };
    if (!message || !message.trim()) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Server is not configured with GEMINI_API_KEY' }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: `You are "ZanziBot", a friendly and knowledgeable AI travel assistant for a company called "Go Zanzibar Transfers".
        Your goal is to help tourists with information about Zanzibar, Tanzania.

        Key Information to know:
        - Currency: Tanzanian Shilling (TZS) and US Dollars are widely accepted.
        - Weather: Tropical, hot all year round. Best time is June-Oct and Jan-Feb.
        - Services we offer: Airport transfers, Taxi service, Blue Safari, Spice Tour, Stone Town Tour, Jozani Forest.
        - Pricing examples (estimates): Airport to Stone Town ($15), Airport to North ($45), Airport to East ($40).

        Tone: Welcoming, professional, tropical, helpful.
        Keep responses concise (under 100 words usually) as this is a chat widget.
        If asked to book, tell them to use the "Book Now" form on the main page.`,
      },
    });

    return NextResponse.json({ text: response.text || "I'm sorry, I couldn't process that request right now." });
  } catch (err) {
    console.error('Gemini API Error:', err);
    return NextResponse.json({ text: "I'm having trouble connecting to the island network right now. Please try again later!" }, { status: 200 });
  }
}
