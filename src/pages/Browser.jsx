import React from "react";
import "../App.css";

export default function Browser() {
  return (
    <div className="page">
      <h1 className="page-title">Mengenal Browser</h1>

      {/* Definisi Browser */}
      <section className="page-section">
        <h2>Definisi Browser</h2>
        <p>
          <strong>Browser</strong> adalah salah satu jenis perangkat lunak atau software yang digunakan untuk membuka
          halaman di situs internet. Browser berfungsi sebagai penerima, pengakses, dan penyaji
          berbagai informasi di internet.
          Di dalam web browser terdapat konten berupa gambar, audio, video, dan halaman web.
          Konten-konten tersebut dihubungkan menggunakan hyperlink dan diklasifikasikan dengan URL
          (Uniform Resource Identifiers).
          Web browser pertama hadir dengan nama WorldWideWeb dan ditemukan oleh
          Tim Berners-Lee pada tahun 1990, yang kemudian diubah menjadi Nexus.
          Browser grafis pertama yang populer adalah NCSA Mosaic.
          Dengan web browser, pengguna dapat berselancar dan mencari informasi atau data yang
          dibutuhkan. Browser menjadi dasar pencarian informasi di seluruh dunia.
        </p>
      </section>

      {/* Cara Kerja Browser */}
      <section className="page-section">
        <h2>Cara Kerja Browser</h2>
        <ol>
          <li>Pengguna mengakses sebuah website dengan mengetikkan alamat situs atau URL pada address bar, misalnya youtube.com.</li>
          <li>Selanjutnya, web browser menerima permintaan tersebut dan melakukan proses fetching atau pengambilan data ke DNS server.</li>
          <li>Dari DNS server, browser memperoleh alamat IP yang sesuai dengan domain yang diketik oleh pengguna (contohnya www.youtube.com).</li>
          <li>Setelah mendapatkan alamat IP tersebut, web browser mengirimkan permintaan ke server yang bersangkutan.</li>
          <li>Server kemudian merespons dengan mengirimkan data konten dari situs tersebut, berupa file HTML, CSS, JavaScript, dan file pendukung lainnya.</li>
          <li>Terakhir, web browser menampilkan konten tersebut kepada pengguna sesuai dengan permintaan awal.</li>
        </ol>

        <div className="image-container">
          <img
            src="/Tugas-Website-Statis/caraKerjaBrowser.png"
            alt="Cara Kerja Browser"
          />
          <p className="image-caption">Gambar: Cara Kerja Browser</p>
        </div>
      </section>

      {/* Referensi */}
      <section className="page-section">
        <h2>Referensi</h2>
        <p>
          Sumber:{" "}
          <a
            href="https://www.jagoanhosting.com/blog/apa-itu-browser/#pengertian-browser"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jagoan Hosting – Apa Itu Browser
          </a>
        </p>
      </section>
    </div>
  );
}
