import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Nama Produk",
  description: "Deskripsi singkat produk",
};

const tautan = [
  { href: "/", label: "Beranda" },
  { href: "/katalog", label: "Katalog" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <a href="#konten" className="sr-only focus:not-sr-only focus:p-2">
          Lewati ke konten utama
        </a>
        <SiteHeader namaProduk="Nama Produk" tautan={tautan} />
        {children}
        <SiteFooter namaProduk="Nama Produk" />
      </body>
    </html>
  );
}