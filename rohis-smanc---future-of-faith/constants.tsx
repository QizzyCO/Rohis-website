
import React from 'react';
import { Shield, BookOpen, Users, Compass, Heart, Zap, MapPin, Calendar, Clock, Globe, Award, Megaphone, Twitter, Instagram, Youtube, MessageSquare } from 'lucide-react';

export const PILLARS = [
  { name: 'Shahada', arabic: 'الشهادة', description: 'The declaration of faith in the oneness of God.' },
  { name: 'Salat', arabic: 'الصلاة', description: 'Five daily prayers connecting the soul to the Creator.' },
  { name: 'Zakat', arabic: 'الزكاة', description: 'Purification of wealth through charitable giving.' },
  { name: 'Sawm', arabic: 'الصوم', description: 'Fasting during Ramadan for self-discipline and empathy.' },
  { name: 'Hajj', arabic: 'الحج', description: 'Pilgrimage to the holy city of Makkah.' }
];

export const FEATURES = [
  {
    id: 'edu',
    title: 'Smart Education',
    description: 'Interactive curriculum bridging traditional values with future sciences.',
    icon: <BookOpen className="w-6 h-6 text-emerald-400" />
  },
  {
    id: 'comm',
    title: 'Global Network',
    description: 'A decentralized community hub for Muslims worldwide.',
    icon: <Users className="w-6 h-6 text-blue-400" />
  },
  {
    id: 'guide',
    title: 'AI Noor',
    description: 'Next-gen spiritual assistant for contemporary guidance.',
    icon: <Zap className="w-6 h-6 text-yellow-400" />
  }
];

export const EVENTS = [
  {
    id: 1,
    title: 'Future Ummah Summit',
    date: '2025-05-12',
    time: '10:00 AM',
    location: 'Meta-Hub, Istanbul',
    type: 'Community',
    image: 'https://images.unsplash.com/photo-1542744095-2ad48e00b216?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Algorithmic Ijtihad Workshop',
    date: '2025-06-15',
    time: '02:00 PM',
    location: 'Digital Madrasah, Online',
    type: 'Education',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Night of Contemplation',
    date: '2025-07-20',
    time: '08:00 PM',
    location: 'The Great Mosque, Dubai',
    type: 'Spiritual',
    image: 'https://images.unsplash.com/photo-1542662565-7e4b66bae529?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'AI Ethics in Islam Seminar',
    date: '2025-08-05',
    time: '09:00 AM',
    location: 'Virtual Hall A',
    type: 'Education',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
  }
];

export const NEWS = [
  {
    id: 1,
    category: 'Innovation',
    title: 'ROHIS SMANC Launches First AI-Powered Tafsir Engine',
    excerpt: 'A groundbreaking step in making Quranic understanding accessible to the digital generation.',
    date: 'Oct 24, 2024',
    icon: <Zap className="w-5 h-5" />
  },
  {
    id: 2,
    category: 'Community',
    title: 'Global Youth Outreach Reaches 50+ Countries',
    excerpt: 'Connecting Muslim students across borders through our decentralized spiritual network.',
    date: 'Oct 20, 2024',
    icon: <Globe className="w-5 h-5" />
  },
  {
    id: 3,
    category: 'Achievement',
    title: 'SMANC Students Win International Halal-Tech Hackathon',
    excerpt: 'Our students pioneered a blockchain-based zakat distribution system.',
    date: 'Oct 15, 2024',
    icon: <Award className="w-5 h-5" />
  },
  {
    id: 4,
    category: 'Announcement',
    title: 'New Virtual Reality Prayer Space Now Open',
    excerpt: 'Experience serene environments for meditation and focus in our new VR hub.',
    date: 'Oct 10, 2024',
    icon: <Megaphone className="w-5 h-5" />
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ahmad Faisal',
    role: 'Student Representative',
    text: 'ROHIS SMANC has transformed my understanding of faith in the digital era. The integration of technology and spirituality is truly visionary.',
    avatar: 'https://i.pravatar.cc/150?u=ahmad'
  },
  {
    id: 2,
    name: 'Sarah Nurul',
    role: 'Tech Lead',
    text: 'Being part of this community taught me that innovation and tradition are not mutually exclusive. They are two wings of the same bird.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 3,
    name: 'Dr. Ibrahim Q.',
    role: 'Visiting Scholar',
    text: 'A refreshing approach to youth engagement. They are building a digital lighthouse for the modern Ummah.',
    avatar: 'https://i.pravatar.cc/150?u=ibrahim'
  }
];

export const SOCIAL_CHANNELS = [
  {
    name: 'Twitter / X',
    handle: '@rohis_smanc',
    icon: <Twitter className="w-6 h-6" />,
    color: 'hover:text-sky-400',
    stats: '12K Followers',
    url: '#'
  },
  {
    name: 'Instagram',
    handle: '@_rohissmanc',
    icon: <Instagram className="w-6 h-6" />,
    color: 'hover:text-pink-500',
    stats: '45K Followers',
    url: 'https://www.instagram.com/_rohissmanc/'
  },
  {
    name: 'Discord',
    handle: 'The Ummah Hub',
    icon: <MessageSquare className="w-6 h-6" />,
    color: 'hover:text-indigo-400',
    stats: '5.2K Active',
    url: '#'
  },
  {
    name: 'YouTube',
    handle: 'ROHIS SMANC TV',
    icon: <Youtube className="w-6 h-6" />,
    color: 'hover:text-red-500',
    stats: '20K Subscribers',
    url: '#'
  }
];

export const GALLERY = [
  {
    id: 1,
    title: 'Cyber-Kufic Synthesis',
    type: 'Calligraphy',
    image: 'https://images.unsplash.com/photo-1502139214982-d0ad755818d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Geometric Singularity',
    type: 'Pattern',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Infinite Tasbih',
    type: 'Digital Art',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  }
];
