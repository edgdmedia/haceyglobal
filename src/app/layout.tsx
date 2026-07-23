import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HACEY LLC — Solutions for a Sustainable Future",
  description: "A social impact consultancy with over 17 years of experience transforming complex challenges into impactful solutions.",
  icons: {
    icon: "/assets/hacey-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

