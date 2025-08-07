const slugify = (text: string): string => {
  return text
    .toString() // Ensure it's a string
    .normalize('NFD') // Normalize to decompose combined characters (e.g., é to e + ´)
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics (the accents and marks)
    .toLowerCase() // Convert to lowercase
    .trim() // Trim whitespace from both ends
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '') // Remove all non-word chars (except hyphens)
    .replace(/--+/g, '-'); // Replace multiple hyphens with a single hyphen
};

export { slugify };
