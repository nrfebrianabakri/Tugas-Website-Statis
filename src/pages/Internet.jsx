import "../App.css"; // pastikan App.css sudah include styling global

export default function Internet() {
  return (
    <div className="page">
      <h1 className="page-title">Cara Kerja Internet</h1>

      {/* Definisi Internet */}
      <section className="page-section">
        <h2>Definisi Internet</h2>
        <p>
          <strong>Internet</strong> merupakan kepanjangan dari <em>Interconnection Networking</em>, yakni jaringan komputer
          yang saling terhubung satu sama lain. Seluruh komputer di dunia tersambung menggunakan
          sistem protokol bernama TCP/IP alias <em>Transmission Control Protocol/Internet Protocol</em>.
          Tidak hanya komputer, perangkat lainnya seperti tablet, smartphone, laptop, dan sebagainya
          juga terhubung dengan jaringan Internet untuk menyelesaikan pekerjaannya.
        </p>
        <p>
          Peran Internet saat ini sangat penting bagi kehidupan kita. Internet menyimpan banyak
          fungsi dalam keseharian, seperti mencari dan mengakses informasi, berkomunikasi dengan
          orang dari belahan dunia lain, mengakses hiburan, dan memudahkan pekerjaan kantor
          seperti berkirim e-mail atau menyimpan database perusahaan secara online dengan teknologi
          cloud computing.
        </p>
        <p>
          Internet merupakan jaringan global kabel fisik yang terdiri dari kabel telepon tembaga,
          kabel serat optik, dan kabel TV. Internet juga tersedia dalam bentuk koneksi nirkabel,
          contohnya Wi-Fi dan jaringan 3G/4G. Meski disebut nirkabel, jaringan ini tetap membutuhkan
          kabel fisik agar perangkat dapat terhubung dengan Internet.
        </p>
      </section>

      {/* Cara Kerja Internet */}
      <section className="page-section">
        <h2>Cara Kerja Internet</h2>
        <p>
          Prinsip kerja Internet adalah mentransmisikan data dan informasi kepada komputer yang
          saling terhubung menggunakan protokol TCP dan alamat IP. Sebelum dapat menikmati layanan
          internet, pengguna harus membeli paket internet dari ISP (Internet Service Provider) 
          yang akan memberikan alamat IP pada perangkat dan koneksi ke server ISP.
        </p>
        <p>
          Data dikirim dalam bentuk pesan dan paket. Data terbagi menjadi paket-paket kecil
          (packets) yang kemudian terkumpul menjadi satu pesan (message) untuk dikirim melalui
          Internet. Paket-paket ini berpindah dari satu komputer ke komputer lain menggunakan
          TCP/IP.
        </p>
        <p>
          TCP dan IP address bekerja sama dalam transmisi data, memastikan paket tidak hilang,
          tersusun dengan urutan tepat, dan tidak ada keterlambatan yang memengaruhi kualitas
          data.
        </p>

        <div className="image-container">
          <img
            src="/Tugas-Website-Statis/caraKerjaInternet.png" 
            alt="Cara Kerja Internet"
          />
          <p className="image-caption">Gambar: Cara Kerja Internet</p>
        </div>
      </section>

      {/* Referensi */}
      <section className="page-section">
        <h2>Referensi</h2>
        <p>
          Sumber:{" "}
          <a
            href="https://www.cloudeka.id/id/berita/tips-trik/cara-kerja-internet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cloudeka – Cara Kerja Internet
          </a>
        </p>
      </section>
    </div>
  );
}
