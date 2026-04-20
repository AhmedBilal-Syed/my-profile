import type { Metadata } from "next";
import "./globals.css";
import portfolioData from "@/data/portfolio.json";

export const metadata: Metadata = {
  title: portfolioData.meta.siteTitle,
  description: portfolioData.meta.siteDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="mesh-bg" />
        {children}
      </body>
    </html>
  );
}
