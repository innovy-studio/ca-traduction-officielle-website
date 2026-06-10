import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "CA Traduction Officielle | Traduction Officielle Kolea Maître CHELHA Amina",
  description:
    "CA Traduction Officielle est un service de traduction certifiée dirigé par Maître CHELHA Amina, traductrice assermentée à Kolea. Nous offrons des traductions officielles précises et fiables pour tous vos besoins.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${merriweather.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-surface text-on-surface font-body-md overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
