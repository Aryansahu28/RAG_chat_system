import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: "AIzaSyB-FiCLv9asdLBefePKV4_RT2i1FC9z-Ag",
});

const model = 'gemini-2.5-pro';

const config = {
  responseMimeType: 'text/plain',
};

export async function getGeminiResponse(userInput) {
  const contents = [
    {
      role: 'user',
      parts: [{ text: userInput }],
    },
  ];

  const result = await ai.models.generateContent({
    model,
    config,
    contents,
  });

  // Safely extract the text from the first candidate
  const text = result.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
  return text;
}