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