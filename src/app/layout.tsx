import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Hot Cheese | Perros y Hamburguesas",
  description: "Las mejores hamburguesas y perros calientes en Sabaneta, Envigado y Medellín. Ganadores del Festival del Perro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${outfit.variable} font-sans antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
