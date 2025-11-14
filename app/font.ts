import { Nunito } from "next/font/google";
import localFont from "next/font/local";

export const heritageSans = localFont({
  src: [
    {
      path: "../public/fonts/HeritageSans.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/HeritageSans.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-heritage-sans",
  display: "swap",
});

// export Nunito (Google Font)
export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});
