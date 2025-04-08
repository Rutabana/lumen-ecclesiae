// app/layout.tsx
import './globals.css'; // import your styles
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Lumen Ecclesiae',
  description: 'Explore the beauty of the liturgy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo-transparent.png" />
      </head>
      <body className="bg-[#030509] text-white">
        {children}
      </body>
    </html>
  );
}