import { ApiResponse } from '../../interfaces/api-response';
import { AppImage, DisplayImage } from '../../interfaces/app-image';

export const imageAdapter = (
  response: ApiResponse<AppImage[]>
): DisplayImage[] => {
  if (!response.data) {
    const message = response.message || 'No image data found';
    console.error(message);
    throw new Error(message);
  }
  return response.data.map((image) => ({
    id: image.id,
    title: image.title,
    description: image.description,
    image: image.image,
  }));
};
