import React from "react";
import "../App.css";

export default function Domain() {
  return (
    <div className="page">
      <h1 className="page-title">Mengenal Domain</h1>

      {/* Definisi Domain */}
      <section className="page-section">
        <h2>Definisi Domain</h2>
        <p>
          <strong>URL</strong>, <strong>alamat website</strong>, atau <strong>domain</strong> adalah nama unik yang diberikan untuk mengidentifikasi
          server komputer seperti web server atau email server di jaringan komputer atau internet.
          Pada awalnya, domain digunakan hanya untuk mengidentifikasi komputer.
          Seiring perkembangan internet dan aktivitas bisnis, domain menjadi bagian dari identitas
          seseorang atau entitas bisnis. Domain memudahkan pengguna mengingat alamat tanpa harus
          mengingat nomor IP.
          Pengelolaan awal domain dilakukan oleh IANA dengan membuat tabel distribusi, namun seiring
          jumlah host meningkat pesat, dibuat sistem DNS untuk mengatur domain secara lebih terstruktur.
        </p>
      </section>

      {/* Cara Kerja Domain */}
      <section className="page-section">
         <section className="page-section">
        <h2>Cara Kerja Domain</h2>
        <ol>
          <li>Pengguna mengetikkan nama domain pada browser, misalnya youtube.com. Browser kemudian mengirimkan permintaan ke server global untuk mencari asal domain tersebut.</li>
          <li>Nama domain tersebut dicek di database Domain Name Server (DNS) untuk mengetahui dari mana domain berasal. Informasi ini diperoleh dari registrar domain seperti Pandi.id, Namecheap, GoDaddy, dan lainnya.</li>
          <li>Setelah DNS asal ditemukan, domain dikonversi menjadi alamat IP yang unik. Setiap domain memiliki IP address yang berbeda, sehingga tidak mungkin terjadi benturan antar domain.</li>
          <li>Alamat IP yang sudah ditemukan akan dihubungkan ke server hosting tempat data website disimpan. Server kemudian menyesuaikan data sesuai permintaan pengguna, misalnya menampilkan halaman utama.</li>
          <li>Data yang diminta dikirim kembali ke browser pengguna. Browser lalu menampilkan website sesuai dengan hasil permintaan tersebut.</li>
          </ol>
      </section>  

        <div className="image-container">
          <img
            src="/Tugas-Website-Statis/caraKerjaDomain.png"
            alt="Cara Kerja Domain"
          />
          <p className="image-caption">Gambar: Ilustrasi Cara Kerja Domain</p>
        </div>
      </section>

      {/* Referensi */}
      <section className="page-section">
        <h2>Referensi</h2>
        <ul>
          <li>
            <a
              href="https://www.sekawanmedia.co.id/blog/domain-adalah/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sekawan Media – Pengertian Domain
            </a>
          </li>
          <li>
            <a
              href="http://qwords.com/blog/cara-kerja-domain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Qwords – Cara Kerja Domain
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
