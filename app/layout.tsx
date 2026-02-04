import type { Metadata } from "next";
import { headers } from "next/headers";
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

export async function generateMetadata(): Promise<Metadata> {
  const host = headers().get("host") ?? "";
  const variant = host.startsWith("dog.")
    ? "dog"
    : host.startsWith("lab.")
      ? "lab"
      : "main";

  return {
    title: "Noah Olsen",
    description: "Noah Olsen's personal website.",
    icons: {
      icon: `/favicons/${variant}/icon-32.png`,
      apple: `/favicons/${variant}/apple-icon-180.png`,
      shortcut: `/favicons/${variant}/favicon.ico`,
    },
  };
}

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
