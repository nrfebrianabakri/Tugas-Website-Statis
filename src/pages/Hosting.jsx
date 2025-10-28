import React from "react";
import "../App.css";

export default function Hosting() {
  return (
    <div className="page">
      <h1 className="page-title">Mengenal Hosting</h1>

      {/* Definisi Hosting */}
      <section className="page-section">
        <h2>Definisi Hosting</h2>
        <p>
          <strong>Hosting</strong> adalah pusat penyimpanan segala file dan data yang dapat diakses oleh seluruh
          pengguna internet, mulai dari video, gambar, surel, skrip, aplikasi, hingga basis data.
          Semua informasi ini tersedia melalui hosting.
        </p>
        <p>
          Hosting memberikan landasan bagi perkembangan internet dan disediakan oleh penyedia
          layanan untuk membangun dasar komputasi di belakang layar. Tanpa hosting, membuat website
          tidak mungkin dilakukan.
        </p>
        <p>
          Saat membangun website dengan kapasitas besar dan performa tinggi, keberadaan hosting
          dengan sumber daya memadai sangatlah penting.
        </p>
      </section>

      {/* Cara Kerja Hosting */}
      <section className="page-section">
        <h2>Cara Kerja Web Hosting</h2>
        <ol>
          <li>Pengunggahan data ke server dilakukan dengan memindahkan file dan data website dari komputer lokal ke server web melalui layanan hosting.</li>
          <li>Server hosting menyediakan sumber daya seperti RAM, ruang penyimpanan, dan bandwidth untuk menjalankan website agar tetap stabil dan cepat diakses.</li>
          <li>Paket hosting yang dipilih menentukan kapasitas dan performa server, sehingga perlu disesuaikan dengan kebutuhan website.</li>
          <li>Nama domain dihubungkan ke server hosting agar website dapat diakses melalui browser menggunakan alamat domain yang terdaftar.</li>
          <li>Ketika domain diakses, server mengirimkan data website ke browser, dan halaman web ditampilkan sesuai permintaan pengguna.</li>
        </ol>

        <div className="image-container">
          <img
            src="/Tugas-Website-Statis/caraKerjaHosting.png"
            alt="Cara Kerja Hosting"
          />
          <p className="image-caption">Gambar: Ilustrasi Cara Kerja Hosting</p>
        </div>
      </section>

      {/* Referensi */}
      <section className="page-section">
        <h2>Referensi</h2>
        <ul>
          <li>
            <a
              href="https://www.exabytes.co.id/blog/apa-yang-dimaksud-dengan-hosting-pengertian-dan-penjelasan/#Apa-Yang-Dimaksud-Dengan-Hosting"
              target="_blank"
              rel="noopener noreferrer"
            >
              Exabytes – Apa Itu Hosting
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
