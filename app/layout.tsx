import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Younnes Haddouch - Personal Portfolio",
  description: "Personal portfolio website of Younnes Haddouch showcasing experience, skills, and projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
