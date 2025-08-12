export interface AppVideo {
  id: number;
  url: string;
  youtube_id: string;
  title: string;
  description: string;
  is_active: number;
  created_at: string;
  updated_at: string;
}

export interface DisplayVideo {
  id: string;
  title: string;
  description: string;
}
