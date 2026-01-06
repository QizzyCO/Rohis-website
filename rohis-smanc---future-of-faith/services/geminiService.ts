
import { GoogleGenAI } from "@google/genai";

/**
 * Generates a spiritual response using the Gemini 3 Flash model.
 * Initializes the AI client inside the function to ensure the API key
 * is correctly captured from the environment at the moment of execution.
 */
export const getSpiritualResponse = async (prompt: string) => {
  // Always create a new instance right before use to ensure the most current API key is used.
  // This is the most robust way to handle environment variables in modern frontend architectures.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `You are "Noor", a friendly, knowledgeable, and futuristic spiritual assistant for an Islamic organization called ROHIS SMANC. 
        Your goal is to provide inspiring, accurate, and moderate Islamic guidance. 
        Always be respectful, use modern language, and if asked about complex theological matters, suggest consulting a local scholar while providing general wisdom. 
        Keep responses concise and helpful. You are part of a high-tech, forward-thinking community platform.`,
        temperature: 0.7,
      },
    });

    if (!response || !response.text) {
      throw new Error("Empty response from AI");
    }

    return response.text;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // Check for common initialization errors
    if (error?.message?.includes("Requested entity was not found") || error?.message?.includes("API_KEY")) {
      return "The connection to 'Noor' requires a valid API configuration. If you are the administrator, please ensure the API_KEY environment variable is set correctly.";
    }

    return "The light is currently flickering. Please try again in a moment.";
  }
};
