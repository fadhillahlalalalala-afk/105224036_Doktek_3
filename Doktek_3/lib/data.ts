import type { Item } from "./tipe";

export const daftarItem: Item[] = [
  {
    id: 1,
    judul: "Panel surya atap",
    kategori: "energi",
    deskripsi: "Pemantauan produksi listrik harian.",
    tersedia: true,
  },
  {
    id: 2,
    judul: "Sensor kualitas udara",
    kategori: "lingkungan",
    deskripsi: "Pembacaan kadar partikel udara secara berkala.",
    tersedia: true,
  },
  {
    id: 3,
    judul: "Peta ruang kelas",
    kategori: "kampus",
    deskripsi: "Informasi lokasi dan kapasitas ruang kelas.",
    tersedia: true,
  },
  {
    id: 4,
    judul: "Monitor konsumsi listrik gedung",
    kategori: "energi",
    deskripsi: "Grafik penggunaan listrik per lantai.",
    tersedia: false,
  },
  {
    id: 5,
    judul: "Bank sampah digital",
    kategori: "lingkungan",
    deskripsi: "Pencatatan setoran sampah terpilah.",
    tersedia: true,
  },
  {
    id: 6,
    judul: "Jadwal shuttle kampus",
    kategori: "kampus",
    deskripsi: "Jam keberangkatan shuttle antar gedung.",
    tersedia: true,
  },
];
