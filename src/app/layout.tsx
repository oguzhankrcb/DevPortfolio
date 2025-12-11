import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Developer Portfolio | Professional Web Developer",
  description: "A professional developer portfolio showcasing skills, projects, and experience in web development and software engineering.",
  keywords: ["developer", "portfolio", "web developer", "software engineer", "frontend", "backend", "fullstack", "react", "next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {metadata.title && <meta name="title" content={metadata.title.toString()} />}
        {metadata.description && <meta name="description" content={metadata.description.toString()} />}
        {metadata.keywords && Array.isArray(metadata.keywords) && (
          <meta name="keywords" content={metadata.keywords.join(", ")} />
        )}
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        {/* Subtle Background */}
        <div className="bg-mesh" />
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
        </div>
        
        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
