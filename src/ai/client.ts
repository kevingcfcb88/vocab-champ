import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Missing Google AI API key in environment variables")
}

const ai = new GoogleGenAI({apiKey});

export async function callAI(prompt: string): Promise<string | undefined> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });

  console.warn("AI response:", response)

  if (!response) {
    throw new Error("AI request failed")
  }

  const data = await response.text;
  return data;
}
