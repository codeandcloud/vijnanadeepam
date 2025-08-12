import { Testimonial } from '../../interfaces/testimonial';
import { DisplayImage } from '../../interfaces/app-image';

export const testimonialToImageAdapter = (data: Testimonial): DisplayImage => {
  if (!data) {
    const message = 'No testimonial data found';
    console.error(message);
    throw new Error(message);
  }
  return {
    id: data.id,
    image: data.image,
    title: data.name,
    subTitle: data.role,
    description: data.quote,
  };
};

export const testimonialsToImagesAdapter = (
  data: Testimonial[]
): DisplayImage[] => {
  if (!data || data.length === 0) {
    const message = 'No testimonial data found';
    console.error(message);
    throw new Error(message);
  }
  return data.map((item) => ({
    id: item.id,
    image: item.image,
    title: item.name,
    subTitle: item.role,
    description: item.quote,
  }));
};
