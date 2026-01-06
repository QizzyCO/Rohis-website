
import { GoogleGenAI } from "@google/genai";

/**
 * Menghasilkan respon spiritual menggunakan model Gemini 3 Flash.
 * Mengikuti pedoman inisialisasi API Key yang ketat.
 */
export const getSpiritualResponse = async (prompt: string) => {
  try {
    // Inisialisasi sesuai pedoman: Gunakan process.env.API_KEY secara langsung.
    // Platform akan menangani injeksi variabel ini ke dalam konteks eksekusi.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `Anda adalah "Noor", asisten spiritual yang cerdas dan futuristik untuk ROHIS SMAN Colomadu (SMANC). 
        Tujuan Anda adalah memberikan jawaban Islami yang menyejukkan, moderat, dan relevan dengan gaya hidup pemuda masa kini. 
        Gunakan Bahasa Indonesia yang santun namun modern. Jangan memberikan fatwa hukum yang berat, melainkan berikan perspektif hikmah. 
        Jika ada pertanyaan yang sangat sensitif, arahkan untuk berdiskusi dengan guru agama di SMANC.`,
        temperature: 0.8,
      },
    });

    const result = response.text;
    if (!result) throw new Error("Respon teks tidak ditemukan.");
    return result;

  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // Memberikan pesan error yang lebih spesifik jika terjadi kegagalan teknis
    if (error?.message?.includes("API_KEY") || error?.message?.includes("403") || error?.message?.includes("key")) {
      return "Sistem 'Noor' mendeteksi masalah pada konfigurasi Kunci API. Mohon pastikan API_KEY di Vercel sudah aktif dan dideploy ulang.";
    }
    
    if (error?.message?.includes("fetch")) {
      return "Koneksi transmisi terganggu. Silakan periksa jaringan internet Anda.";
    }

    return "Cahaya panduan saya sedang mengalami gangguan teknis sementara. Mohon coba tanyakan kembali beberapa saat lagi.";
  }
};
