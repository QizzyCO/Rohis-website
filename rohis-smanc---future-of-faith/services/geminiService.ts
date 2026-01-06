
import { GoogleGenAI } from "@google/genai";

/**
 * Menghasilkan respon spiritual menggunakan model Gemini 3 Flash.
 */
export const getSpiritualResponse = async (prompt: string) => {
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : (window as any).API_KEY;

  if (!apiKey) {
    console.error("AI Configuration Error: API_KEY is missing.");
    return "Koneksi ke 'Noor' belum dikonfigurasi. Pastikan API_KEY sudah diatur.";
  }

  const ai = new GoogleGenAI({ apiKey: apiKey as string });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `Anda adalah "Noor", asisten spiritual yang ramah, berpengetahuan luas, dan futuristik untuk organisasi Islam bernama ROHIS SMANC (SMAN Colomadu). 
        Tujuan Anda adalah memberikan panduan Islam yang inspiratif, akurat, dan moderat. 
        Selalu bersikap sopan, gunakan Bahasa Indonesia yang modern dan mudah dimengerti. 
        Jika ditanya tentang masalah teologis yang kompleks, sarankan untuk berkonsultasi dengan ustadz setempat sambil memberikan hikmah umum. 
        Pastikan jawaban singkat dan bermanfaat. Anda adalah bagian dari platform komunitas teknologi tinggi yang berpikiran maju.`,
        temperature: 0.7,
      },
    });

    if (!response || !response.text) {
      throw new Error("Respon kosong dari AI");
    }

    return response.text;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    if (error?.message?.includes("403") || error?.message?.includes("API key")) {
      return "Ada masalah dengan otorisasi API Key. Mohon periksa pengaturan Anda.";
    }

    if (error?.message?.includes("fetch")) {
      return "Saya kesulitan terhubung ke jaringan. Mohon periksa koneksi internet Anda.";
    }

    return "Cahaya sedang berkedip saat ini. Mohon coba lagi sebentar lagi.";
  }
};
