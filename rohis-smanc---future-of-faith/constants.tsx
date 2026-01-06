
import React from 'react';
import { Shield, BookOpen, Users, Compass, Heart, Zap, MapPin, Calendar, Clock, Globe, Award, Megaphone, Twitter, Instagram, Youtube, MessageSquare } from 'lucide-react';

export const PILLARS = [
  { name: 'Syahadat', arabic: 'الشهادة', description: 'Pernyataan iman akan keesaan Allah dan kerasulan Muhammad.' },
  { name: 'Shalat', arabic: 'الصلاة', description: 'Ibadah lima waktu yang menghubungkan jiwa dengan Sang Pencipta.' },
  { name: 'Zakat', arabic: 'الزكاة', description: 'Pensucian harta melalui pemberian amal kepada yang berhak.' },
  { name: 'Puasa', arabic: 'الصوم', description: 'Menahan diri di bulan Ramadhan untuk disiplin diri dan empati.' },
  { name: 'Haji', arabic: 'الحج', description: 'Perjalanan suci ke kota Makkah bagi yang mampu.' }
];

export const FEATURES = [
  {
    id: 'edu',
    title: 'Edukasi Cerdas',
    description: 'Kurikulum interaktif yang menjembatani nilai tradisional dengan sains masa depan.',
    icon: <BookOpen className="w-6 h-6 text-emerald-400" />
  },
  {
    id: 'comm',
    title: 'Jaringan Global',
    description: 'Pusat komunitas terdesentralisasi untuk Muslim di seluruh dunia.',
    icon: <Users className="w-6 h-6 text-blue-400" />
  },
  {
    id: 'guide',
    title: 'AI Noor',
    description: 'Asisten spiritual generasi baru untuk bimbingan kontemporer.',
    icon: <Zap className="w-6 h-6 text-yellow-400" />
  }
];

export const EVENTS = [
  {
    id: 1,
    title: 'KTT Ummah Masa Depan',
    date: '2025-05-12',
    time: '10:00 AM',
    location: 'Meta-Hub, Istanbul',
    type: 'Komunitas',
    image: 'https://images.unsplash.com/photo-1542744095-2ad48e00b216?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Workshop Ijtihad Algoritmik',
    date: '2025-06-15',
    time: '02:00 PM',
    location: 'Madrasah Digital, Online',
    type: 'Edukasi',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Malam Kontemplasi',
    date: '2025-07-20',
    time: '08:00 PM',
    location: 'Masjid Raya, Dubai',
    type: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1542662565-7e4b66bae529?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Seminar Etika AI dalam Islam',
    date: '2025-08-05',
    time: '09:00 AM',
    location: 'Virtual Hall A',
    type: 'Edukasi',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  }
];

export const NEWS = [
  {
    id: 1,
    category: 'Inovasi',
    title: 'ROHIS SMANC Luncurkan Mesin Tafsir Berbasis AI Pertama',
    excerpt: 'Langkah terobosan dalam membuat pemahaman Al-Quran lebih mudah diakses oleh generasi digital.',
    date: '24 Okt 2024',
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: 2,
    category: 'Komunitas',
    title: 'Jangkauan Pemuda Global Mencapai 50+ Negara',
    excerpt: 'Menghubungkan pelajar Muslim lintas batas melalui jaringan spiritual terdesentralisasi kami.',
    date: '20 Okt 2024',
    icon: <Globe className="w-5 h-5" />
  },
  {
    id: 3,
    category: 'Prestasi',
    title: 'Siswa SMANC Menangkan Hackathon Halal-Tech Internasional',
    excerpt: 'Siswa kami mempelopori sistem distribusi zakat berbasis blockchain.',
    date: '15 Okt 2024',
    icon: <Award className="w-5 h-5" />
  },
  {
    id: 4,
    category: 'Pengumuman',
    title: 'Ruang Shalat Virtual Reality Kini Dibuka',
    excerpt: 'Rasakan lingkungan tenang untuk meditasi dan fokus di hub VR baru kami.',
    date: '10 Okt 2024',
    icon: <Megaphone className="w-5 h-5" />
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ahmad Faisal',
    role: 'Perwakilan Siswa',
    text: 'ROHIS SMANC telah mengubah pemahaman saya tentang iman di era digital. Integrasi teknologi dan spiritualitas sungguh visioner.',
    avatar: 'https://i.pravatar.cc/150?u=ahmad'
  },
  {
    id: 2,
    name: 'Sarah Nurul',
    role: 'Ketua Teknologi',
    text: 'Menjadi bagian dari komunitas ini mengajarkan saya bahwa inovasi dan tradisi tidak saling eksklusif. Keduanya adalah dua sayap dari burung yang sama.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 3,
    name: 'Dr. Ibrahim Q.',
    role: 'Cendekiawan Tamu',
    text: 'Pendekatan yang menyegarkan untuk keterlibatan pemuda. Mereka membangun mercusuar digital untuk Ummah modern.',
    avatar: 'https://i.pravatar.cc/150?u=ibrahim'
  }
];

export const SOCIAL_CHANNELS = [
  {
    name: 'Twitter / X',
    handle: '@rohis_smanc',
    icon: <Twitter className="w-6 h-6" />,
    color: 'hover:text-sky-400',
    stats: '12K Pengikut',
    url: '#'
  },
  {
    name: 'Instagram',
    handle: '@_rohissmanc',
    icon: <Instagram className="w-6 h-6" />,
    color: 'hover:text-pink-500',
    stats: '45K Pengikut',
    url: 'https://www.instagram.com/_rohissmanc/'
  },
  {
    name: 'Discord',
    handle: 'The Ummah Hub',
    icon: <MessageSquare className="w-6 h-6" />,
    color: 'hover:text-indigo-400',
    stats: '5.2K Aktif',
    url: '#'
  },
  {
    name: 'YouTube',
    handle: 'ROHIS SMANC TV',
    icon: <Youtube className="w-6 h-6" />,
    color: 'hover:text-red-500',
    stats: '20K Subscriber',
    url: '#'
  }
];

export const GALLERY = [
  {
    id: 1,
    title: 'Cyber-Kufic Synthesis',
    type: 'Kaligrafi',
    image: 'https://images.unsplash.com/photo-1502139214982-d0ad755818d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Geometric Singularity',
    type: 'Pola',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Infinite Tasbih',
    type: 'Seni Digital',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  }
];
