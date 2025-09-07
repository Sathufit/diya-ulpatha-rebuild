export interface Treatment {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
}

export interface Room {
  id: string;
  name: string;
  features: string[];
  maxOccupancy: number;
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  phone?: string;
  message: string;
}