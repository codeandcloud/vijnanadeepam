import { ApiResponse } from '../../interfaces/api-response.model';
import { AppVideo, DisplayVideo } from '../../interfaces/app-video.model';

export const videoAdapter = (
  response: ApiResponse<AppVideo[]>
): DisplayVideo[] => {
  if (!response.data) {
    const message = response.message || 'No video data found';
    console.error(message);
    throw new Error(message);
  }
  return response.data.map((video) => ({
    id: video.youtube_id,
    title: video.title,
    description: video.description,
  }));
};
