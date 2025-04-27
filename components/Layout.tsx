import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A portfolio website built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}