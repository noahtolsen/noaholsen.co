import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Import Google Fonts
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "user@noaholsen:~/home",
  description: "Noah Olsen's Personal Website - Exploring machine learning, IoT, and belly rubs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} bg-bg text-gray-300 font-sans antialiased selection:bg-accent selection:text-bg overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
