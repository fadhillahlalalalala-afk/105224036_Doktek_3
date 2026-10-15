// CONTOH: gabungkan ke app/page.tsx milikmu.
// Header & footer sudah dipindah ke layout, jadi hapus dari sini.
// Ganti isi section fitur & kontak dengan konten Modul 2 milikmu.
import Bagian from "@/components/Bagian";
import ItemTerbaru from "@/components/ItemTerbaru";

export default function Beranda() {
  return (
    <main id="konten" className="mx-auto max-w-6xl p-4">
      <h1 className="text-3xl font-bold">Nama Produk</h1>
      <p className="mt-2 text-gray-700">Tagline singkat produk.</p>

      <Bagian id="fitur" judul="Fitur">
        <p>[ISI: konten fitur dari Modul 2]</p>
      </Bagian>

      <Bagian id="terbaru" judul="Item Terbaru">
        <ItemTerbaru />
      </Bagian>

      <Bagian id="kontak" judul="Kontak">
        <p>[ISI: konten kontak dari Modul 2]</p>
      </Bagian>
    </main>
  );
}
