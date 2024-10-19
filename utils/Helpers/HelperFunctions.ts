export function setRandomImage(images: any): string {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }