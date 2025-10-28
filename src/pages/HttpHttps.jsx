import React from "react";
import "../App.css";

export default function HttpHttps() {
  return (
    <div className="page">
      <h1 className="page-title">Mengenal HTTP & HTTPS</h1>

      {/* Definisi HTTP & HTTPS */}
      <section className="page-section">
        <h2>Definisi HTTP dan HTTPS</h2>
        <p>
          <strong>HTTP</strong> (Hypertext Transfer Protocol) adalah protokol jaringan aplikasi
          yang digunakan untuk mendistribusikan informasi antara server dan client. Server adalah
          web server yang memiliki kapasitas penyimpanan besar, sedangkan client biasanya web browser
          yang mengakses, menerima, dan menampilkan konten web.
        </p>
        <p>
          <strong>HTTPS</strong> (Hypertext Transfer Protocol Secure) adalah versi aman dari HTTP
          yang menambahkan lapisan keamanan sehingga client merasa aman saat mengakses konten web.
          HTTPS menggunakan sertifikat SSL dan enkripsi data untuk melindungi transmisi informasi.
        </p>
      </section>

      {/* Perbedaan HTTP dan HTTPS */}
      <section className="page-section">
        <h2>Perbedaan HTTP dan HTTPS</h2>
        <ul>
          <li>
            Keamanan Data: HTTP tidak menjamin keamanan, sedangkan HTTPS mengenkripsi data,
            autentikasi server, dan menjaga integritas data.
          </li>
          <li>
            SSL: HTTPS menggunakan sertifikat SSL untuk mengamankan data, menampilkan ikon gembok pada URL.
          </li>
          <li>
            Port: HTTP menggunakan port 80, sedangkan HTTPS menggunakan port 443.
          </li>
          <li>
            Keuntungan: HTTPS memberikan kenyamanan dan keamanan bagi pengunjung saat mengakses informasi sensitif.
          </li>
        </ul>
      </section>

      {/* Cara Kerja HTTP */}
      <section className="page-section">
        <h2>Cara Kerja HTTP</h2>
        <ol>
          <li>HTTP klien membuat sambungan dan mengirim permintaan dokumen ke web server.</li>
          <li>Klien menunggu server memproses permintaan.</li>
          <li>Server merespon dengan kode status dan data (HTML, CSS, dll), lalu menutup sambungan.</li>
        </ol>
      </section>

      {/* Cara Kerja HTTPS */}
      <section className="page-section">
        <h2>Cara Kerja HTTPS</h2>
        <ol>
          <li>Browser terlebih dahulu menghubungi server untuk memulai koneksi aman melalui proses yang disebut SSL/TLS handshake.</li>
          <li>Server kemudian mengirimkan sertifikat SSL yang digunakan untuk memastikan bahwa koneksi tersebut benar-benar aman dan berasal dari sumber yang tepercaya.</li>
          <li>Setelah sertifikat diverifikasi, browser dan server membuat kunci enkripsi bersama untuk melindungi pertukaran data selama koneksi berlangsung.</li>
          <li>Data yang dikirim antara browser dan server akan dienkripsi, sehingga hanya kedua pihak tersebut yang dapat membaca atau menguraikan isi data tersebut.</li>
        </ol>
      </section>

      <div className="image-container">
        <img
          src="public/ilustrasiHttpHttps.png"
          alt="Ilustrasi HTTP & HTTPS"
        />
        <p className="image-caption">Gambar: Ilustrasi HTTP & HTTPS</p>
      </div>
      

      {/* Referensi */}
      <section className="page-section">
        <h2>Referensi</h2>
        <ul>
          <li>
            <a
              href="https://www.dicoding.com/blog/perbedaan-http-dan-https/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dicoding – Perbedaan HTTP dan HTTPS
            </a>
          </li>
          <li>
            <a
              href="https://www.jagoanhosting.com/blog/http-adalah/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jagoan Hosting – Cara Kerja HTTP
            </a>
          </li>
          <li>
            <a
              href="https://www.sekawanmedia.co.id/blog/https-adalah/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sekawan Media – Cara Kerja HTTPS
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
