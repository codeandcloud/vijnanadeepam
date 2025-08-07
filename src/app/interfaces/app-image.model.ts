export interface AppImage {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string | null;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export interface DisplayImage {
  id: number;
  description: string;
  image: string;
  title: string;
}
