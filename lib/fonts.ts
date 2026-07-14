import localFont from "next/font/local";

export const josefinSans = localFont({
  src: [
    {
      path: "../public/fonts/josefin-sans/JosefinSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/josefin-sans/JosefinSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-josefin",
  display: "swap",
});

export const tajawal = localFont({
  src: [
    {
      path: "../public/fonts/Tajawal/Tajawal-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Tajawal/Tajawal-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-tajawal",
  display: "swap",
});
