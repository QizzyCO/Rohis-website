
import { GoogleGenAI } from "@google/genai";

/**
 * Menghasilkan respon spiritual menggunakan model Gemini 3 Flash.
 * Menggunakan pengecekan aman untuk environment variables di browser.
 */
export const getSpiritualResponse = async (prompt: string) => {
  // Pengecekan aman untuk API_KEY agar tidak menyebabkan crash jika 'process' tidak didefinisikan
  const apiKey = typeof process !== 'undefined' && process.env ? process.env.API_KEY : (window as any).API_KEY;

  if (!apiKey) {
    console.error("AI Configuration Error: API_KEY tidak ditemukan.");
    return "Koneksi ke 'Noor' belum siap. Pastikan kunci API telah dikonfigurasi dengan benar.";
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
        Pastikan jawaban singkat, padat, dan bermanfaat. Anda adalah bagian dari platform komunitas teknologi tinggi yang berpikiran maju.`,
        temperature: 0.7,
      },
    });

    const textOutput = response.text;

    if (!textOutput) {
      throw new Error("Respon teks tidak ditemukan.");
    }

    return textOutput;
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    if (error?.message?.includes("API_KEY") || error?.message?.includes("403")) {
      return "Maaf, sistem 'Noor' sedang mengalami kendala otorisasi. Mohon hubungi administrator.";
    }

    return "Maaf, sepertinya ada sedikit gangguan pada transmisi cahaya saya. Bisakah Anda mengulangi pertanyaannya?";
  }
};
