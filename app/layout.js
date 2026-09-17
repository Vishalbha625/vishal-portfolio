import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Vishal Bhardwaj — Support lead, designer, builder",
  description:
    "Customer-support leader and UI/UX designer who builds the tools his team runs on. Gurugram, India.",
  openGraph: {
    title: "Vishal Bhardwaj — Support lead, designer, builder",
    description:
      "Customer-support leader and UI/UX designer who builds the tools his team runs on.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
