import React from "react";
import "../App.css";

export default function Dns() {
  return (
    <div className="page">
      <h1 className="page-title">Mengenal DNS</h1>

      {/* Definisi DNS */}
      <section className="page-section">
        <h2>Definisi DNS</h2>
        <p>
          <strong>Domain Name System (DNS)</strong> adalah sistem yang berfungsi untuk mengonversi
          nama domain menjadi alamat IP. Server DNS bekerja sebagai jembatan antara nama domain
          dan alamat IP yang digunakan komputer untuk menemukan lokasi situs web.
          Saat mengakses situs web, browser mengirim permintaan ke server DNS untuk menemukan
          alamat IP dari nama domain. Setelah alamat IP ditemukan, browser mengirim permintaan ke
          server web untuk mengambil konten situs.
          DNS memungkinkan kita mengakses website hanya dengan mengetik nama domain, misalnya
          www.google.com, tanpa perlu mengingat alamat IP. DNS dapat diibaratkan
          sebagai buku telepon besar yang mengaitkan nama domain dengan alamat IP.
        </p>
      </section>

      {/* Cara Kerja DNS */}
      <section className="page-section">
        <h2>Cara Kerja DNS</h2>
        <ol>
          <li>User memasukkan nama domain di browser.</li>
          <li>Nama domain diteruskan ke DNS server lokal atau provider internet.</li>
          <li>
            Jika DNS server tidak menemukan informasi, permintaan diteruskan ke DNS server lain
            hingga ditemukan.
          </li>
          <li>DNS server mengirimkan alamat IP ke browser.</li>
          <li>
            Browser mengakses alamat IP tersebut dan menampilkan konten situs web yang diminta.
          </li>
        </ol>

        <div className="image-container">
          <img
            src="/Tugas-Website-Statis/caraKerjaDNS.png"
            alt="Cara Kerja DNS"
          />
          <p className="image-caption">Gambar: Ilustrasi Cara Kerja DNS</p>
        </div>
      </section>

      {/* Referensi */}
      <section className="page-section">
        <h2>Referensi</h2>
        <ul>
          <li>
            <a
              href="https://www.exabytes.co.id/blog/apa-itu-dns-server-adalah/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Exabytes – Apa Itu DNS Server
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
