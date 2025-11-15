// Global type declarations for CSS files
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// Specifically for the globals.css file
declare module "./globals.css" {
  const content: { [className: string]: string };
  export default content;
}

// Declare Swiper CSS modules as they are side-effect imports
declare module "swiper/css" {
  export {};
}

declare module "swiper/css/navigation" {
  export {};
}

declare module "swiper/css/pagination" {
  export {};
}
