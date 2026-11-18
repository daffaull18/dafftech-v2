// Halaman Kebijakan Privasi & Syarat Ketentuan
import { page } from "./layout.mjs";

export function privasiPage() {
    const body = `
        <section class="page-hero">
            <div class="container">
                <div class="crumb"><a href="index.html">Beranda</a> / Kebijakan Privasi</div>
                <h1>Kebijakan <em>Privasi</em></h1>
                <p class="lead">
                    Ditulis apa adanya: situs ini memang sederhana, dan data yang
                    kami pegang juga sedikit. Tidak ada yang disembunyikan di
                    balik bahasa hukum yang berbelit.
                </p>
                <div class="hero-meta"><span class="tag">Terakhir diperbarui: 17 November 2026</span></div>
            </div>
        </section>

        <section class="inner">
            <div class="container">
                <div class="prose">
                    <h2>Data yang kami terima</h2>
                    <p>
                        Kamu mengirim data hanya saat mengisi form di situs ini:
                        nama, alamat email, subjek, dan isi pesan (form kontak)
                        atau alamat email saja (newsletter). Form tidak bisa
                        dikirim tanpa kamu menekan tombolnya sendiri.
                    </p>

                    <h2>Data yang TIDAK kami kumpulkan</h2>
                    <ul>
                        <li>Tidak ada akun atau pendaftaran pengguna di situs ini.</li>
                        <li>Tidak ada cookie pelacak pihak ketiga (iklan, media sosial) yang aktif saat ini.</li>
                        <li>Kami tidak membeli, menjual, atau menukar data pengunjung dengan pihak mana pun.</li>
                        <li>Tidak ada perekaman keystroke atau pelacak perilaku tersembunyi.</li>
                    </ul>

                    <h2>Pesannya dikirim ke mana</h2>
                    <p>
                        Pesan form dikirim lewat layanan email EmailJS dari
                        peramban kamu langsung ke kotak masuk kami. Bila situs ini
                        dijalankan di atas infrastruktur Vercel, pesan lebih dulu
                        melewati endpoint server kami (/api/contact) yang meneruskannya
                        ke EmailJS. Dalam dua jalur tersebut, isi pesan hanya dibaca
                        oleh DAFFTECH dan penyedia layanan emailnya.
                    </p>
                    <div class="note">
                        Penyedia layanan yang kami pakai punya kebijakan sendiri:
                        EmailJS (pengiriman email) dan Lynk.id (pembayaran). Kami
                        tidak pernah melihat detail kartu atau rekeningmu — itu
                        sepenuhnya ditangani Lynk.id.
                    </div>

                    <h2>Iklan &amp; analitik</h2>
                    <p>
                        Slot iklan Google AdSense dan Google Analytics sudah
                        disiapkan di situs ini, tetapi KEDUANYA belum aktif selama
                        ID pengukurnya belum diisi. Artinya saat ini tidak ada
                        iklan yang tampil dan tidak ada statistik pengunjung yang
                        dikumpulkan Google. Bila suatu saat diaktifkan, kebijakan
                        Google berlaku untuk bagian tersebut.
                    </p>

                    <h2>Berapa lama data disimpan</h2>
                    <p>
                        Pesan kontak disimpan di kotak masuk email kami selama
                        masih diperlukan untuk membalas dan menindaklanjuti.
                        Daftar newsletter disimpan sampai kamu meminta kami
                        menghapusnya.
                    </p>

                    <h2>Hak kamu</h2>
                    <p>
                        Minta salinan, koreksi, atau penghapusan data yang pernah
                        kamu kirim kapan saja lewat
                        <a href="kontak.html">halaman kontak</a> atau ke
                        <a href="mailto:hello@dafftech.id">hello@dafftech.id</a>.
                        Kami proses tanpa bertele-tele.
                    </p>

                    <h2>Perubahan kebijakan</h2>
                    <p>
                        Bila ada perubahan cara situs ini memproses data, tanggal
                        pembaruan di atas akan diganti dan perubahannya ditulis
                        di halaman ini. Versi sebelumnya tidak kami hapus diam-diam.
                    </p>
                </div>
            </div>
        </section>`;

    return {
        path: "privasi.html",
        html: page({
            path: "privasi.html",
            title: "Kebijakan Privasi — DAFFTECH",
            desc: "Bagaimana DAFFTECH menangani data pengunjung: form kontak, newsletter, layanan EmailJS dan Lynk.id, serta hak kamu atas datamu.",
            active: "",
            body,
        }),
    };
}

export function syaratPage() {
    const body = `
        <section class="page-hero">
            <div class="container">
                <div class="crumb"><a href="index.html">Beranda</a> / Syarat &amp; Ketentuan</div>
                <h1>Syarat &amp; <em>Ketentuan</em></h1>
                <p class="lead">
                    Aturan mainnya sederhana dan berlaku dua arah: kami wajib
                    mengirim file sesuai deskripsi, kamu wajib memakainya sesuai
                    lisensi.
                </p>
                <div class="hero-meta"><span class="tag">Terakhir diperbarui: 17 November 2026</span></div>
            </div>
        </section>

        <section class="inner">
            <div class="container">
                <div class="prose">
                    <h2>Pembelian</h2>
                    <p>
                        Seluruh transaksi diproses oleh Lynk.id di
                        <a href="https://lynk.id/dafftech" target="_blank" rel="noopener noreferrer">lynk.id/dafftech</a>.
                        Harga tercantum dalam Rupiah dan berlaku saat ini. Detail
                        pembayaran (kartu, transfer, e-wallet) sepenuhnya ditangani
                        Lynk.id sesuai ketentuan mereka.
                    </p>

                    <h2>Pengiriman produk</h2>
                    <p>
                        Produk berupa file digital. Setelah pembayaran berhasil,
                        file dapat diunduh lewat tautan yang diberikan Lynk.id.
                        Tidak ada barang fisik yang dikirim, tidak ada ongkos kirim.
                    </p>

                    <h2>Lisensi pemakaian</h2>
                    <ul>
                        <li><strong>Boleh:</strong> memakai file untuk website, proyek, atau klien milikmu sendiri; mengubah teks, gambar, dan kode sesuai kebutuhan.</li>
                        <li><strong>Tidak boleh:</strong> menjual ulang, membagikan, atau mengunggah ulang file mentah sebagai produk/template milikmu sendiri — termasuk "diobral" di marketplace lain.</li>
                        <li><strong>Produk gratis</strong> (Portfolio Template) berlisensi sama: bebas dipakai, dilarang dijual ulang.</li>
                    </ul>
                    <p>
                        Lisensi lengkap tiap produk ikut tertulis di dalam paket
                        (README.txt dan halaman lisensi di e-book/panduan).
                    </p>

                    <h2>Kebijakan pengembalian</h2>
                    <p>
                        Karena produknya digital dan langsung bisa diunduh,
                        pengembalian dana tidak dapat dilakukan setelah file
                        diunduh. Sebelum membeli, baca deskripsi produk di halaman
                        <a href="produk.html">katalog</a> — semua isi paket sudah
                        ditulis lengkap di sana. Kalau file yang kamu terima tidak
                        sesuai deskripsi, hubungi kami dalam 7 hari sejak pembayaran;
                        kami perbaiki, kirim ulang, atau kembalikan dananya.
                    </p>

                    <h2>Dukungan &amp; pertanyaan</h2>
                    <p>
                        Ada masalah dengan file yang dibeli? Kirim pesan lewat
                        <a href="kontak.html">halaman kontak</a> sertakan email
                        pembelian. Dukungan mencakup bantuan pemakaian file; kami
                        tidak mencakup pengembangan fitur baru untuk produk yang
                        sudah dibeli (itu bagian jasa, <a href="jasa.html">lihat di sini</a>).
                    </p>

                    <h2>Batasan tanggung jawab</h2>
                    <p>
                        Produk disediakan "sebagaimana adanya". Kami sudah
                        mengujinya sebelum diterbitkan, tetapi kami tidak menjamin
                        hasil tertentu dari pemakaiannya — termasuk pendapatan,
                        peringkat mesin pencari, atau jumlah pengikut. Performa
                        bergantung pada usaha dan situasi masing-masing.
                    </p>

                    <h2>Perubahan ketentuan</h2>
                    <p>
                        Ketentuan bisa diperbarui sewaktu-waktu dengan mengganti
                        tanggal di atas. Pembelian yang sudah dilakukan tunduk pada
                        ketentuan yang berlaku saat pembelian dilakukan.
                    </p>

                    <div class="note">
                        Ada yang masih belum jelas? Tanya dulu sebelum beli —
                        kami lebih suka menjawab pertanyaan daripada menghadapi
                        komplain. <a href="kontak.html">Hubungi kami</a>.
                    </div>
                </div>
            </div>
        </section>`;

    return {
        path: "syarat.html",
        html: page({
            path: "syarat.html",
            title: "Syarat & Ketentuan — DAFFTECH",
            desc: "Syarat pembelian, lisensi pemakaian produk digital DAFFTECH, kebijakan pengembalian, dan batasan tanggung jawab.",
            active: "",
            body,
        }),
    };
}
