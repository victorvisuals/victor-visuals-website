import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://victorvisuals.tech"),
  title: {
    default: "Victor Visuals | Creative Media & Technology",
    template: "%s | Victor Visuals",
  },
  description:
    "Website design and maintenance, photography, videography, and practical technology solutions from Victor Visuals.",
  keywords: [
    "Victor Visuals",
    "website design",
    "website maintenance",
    "photography",
    "videography",
    "technology consulting",
    "workstation setup",
  ],
  creator: "Victor Visuals",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Victor Visuals | Creative Media & Technology",
    description:
      "Stories through the lens. Solutions beyond the frame.",
    url: "https://victorvisuals.tech",
    siteName: "Victor Visuals",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
