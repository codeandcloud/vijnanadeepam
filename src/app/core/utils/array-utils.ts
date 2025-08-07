// Utility to create an array for iteration
export const createNumberArray = (start: number, end: number): number[] => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};
