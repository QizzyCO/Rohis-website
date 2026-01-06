
export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Pillar {
  name: string;
  arabic: string;
  description: string;
}
