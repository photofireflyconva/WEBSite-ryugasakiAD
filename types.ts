export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  category: 'wash' | 'coating';
  features: string[];
  duration?: string;
  tag?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SectionId {
  HOME = 'home',
  CONCEPT = 'concept',
  MENU = 'menu',
  GALLERY = 'gallery',
  FLOW = 'flow',
}