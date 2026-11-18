// Blog: indeks (blog.html) + data artikel
import { page } from "./layout.mjs";

export const POSTS = [
    {
        slug: "belajar-web-dari-nol",
        title: "Belajar web dari nol: urutan yang kami rasa masuk akal",
        date: "2026-11-10",
        dateLabel: "10 November 2026",
        read: "8 menit baca",
        excerpt:
            "HTML, CSS, JavaScript — urutannya bukan karena gaya, tapi karena masing-masing bergantung pada yang sebelumnya. Catatan dari proses menulis e-book programming kami.",
        body: `
            <p>Kalau kamu baru ingin belajar bikin website, layar pertama yang
            muncul biasanya penuh istilah: React, Tailwind, Next.js, build tool,
            paket manager. Semuanya terdengar penting, dan semuanya memang penting
            — nanti. Di awal, urutannya jauh lebih sederhana.</p>

            <h2>1. HTML — kerangka</h2>
            <p>HTML menentukan apa yang ada di halaman: judul, paragraf, gambar,
            tautan, tombol, form. Tidak ada HTML, tidak ada halaman. Mulai dari
            sini karena setiap teknologi web lain pada akhirnya menghasilkan HTML
            juga — browser hanya mengenal itu.</p>
            <p>Yang perlu dikuasai di tahap ini cuma segelintir tag: heading,
            paragraf, daftar, gambar, tautan, dan form. Sisanya menyusul saat
            butuh.</p>

            <h2>2. CSS — tampilan</h2>
            <p>CSS menjawab pertanyaan "bagaimana ini terlihat": warna, ukuran
            huruf, jarak, posisi, responsif di layar kecil. Di tahap inilah
            kebanyakan orang merasa mulai "bisa desain" — dan juga di sinilah
            kebanyakan orang berhenti karena langsung melompat ke framework
            sebelum paham model dasarnya.</p>
            <p>Dua konsep yang paling sering dipakai sehari-hari: flexbox untuk
            satu arah (baris atau kolom), dan grid untuk dua arah. Kuasai dua itu,
            80% tata letak harian selesai.</p>

            <h2>3. JavaScript — perilaku</h2>
            <p>JavaScript membuat halaman bereaksi: menu terbuka, formulir
            memvalidasi diri, tombol mengganti isi. Mulai dari tiga konsep dulu —
            variabel, fungsi, dan event. Selebihnya (array, DOM, fetch) akan
            terasa perlu sendiri saat kamu punya proyek yang menginginkannya.</p>

            <h2>4. Baru kemudian: framework</h2>
            <p>React, Vue, dan kawan-kawan mempermudah proyek besar. Tetapi
            mereka tidak menggantikan ketiga hal di atas — mereka
            <em>membungkusnya</em>. Pernah melihat kode React yang kamu pahami?
            Di dalamnya tetap ada HTML (JSX), CSS, dan JavaScript biasa.</p>

            <div class="note">Aturan praktisnya: kalau kamu belum bisa membuat
            satu halaman lengkap tanpa framework, framework-nya belum waktunya.
            Halaman itu tidak harus cantik — harus jalan dulu.</div>

            <h2>Proyek pertama yang realistis</h2>
            <p>Bukan toko online, bukan aplikasi chat. Satu halaman: profil atau
            landing page sederhana dengan judul, beberapa paragraf, gambar, dan
            kontak. Selesai dalam beberapa hari, bisa dipublikasikan gratis lewat
            GitHub Pages, dan — yang paling penting — <em>ada yang melihatnya</em>.
            Reaksi orang asli lebih berguna daripada seratus tutorial.</p>

            <p>Urutan inilah yang kami pakai saat menyusun <a
            href="produk/ebook-programming.html">e-book programming</a> kami:
            pengenalan, HTML, CSS, JavaScript, proyek praktik, lalu cara
            menerbitkannya. Delapan bab, tanpa lompatan.</p>

            <h2>Berapa lama waktunya — jawaban jujur</h2>
            <p>Tidak ada angka pasti, karena itu tergantung berapa jam yang
            benar-benar kamu habiskan per minggu. Yang bisa kami sampaikan
            berdasarkan pengalaman menyusun materi: kalau kamu latihan
            <em>nyata</em> sekitar satu jam sehari, halaman pertama yang jalan
            biasanya muncul di minggu kedua atau ketiga. Kalau cuma membaca
            tanpa mengetik kode, bisa berbulan-bulan tanpa kemajuan.</p>
            <p>Perbedaannya bukan bakat — tapi <em>rasio mengetik versus
            membaca</em>. Teori yang masuk ke kepala justru lebih banyak saat
            kamu sedang kebingungan mengetik, bukan saat kamu membaca tutorial
            dengan santai.</p>

            <h2>Cara belajar yang tidak bikin berhenti</h2>
            <p>Kebanyakan orang berhenti bukan karena materinya sulit, tapi
            karena urutannya tidak pernah selesai. Tiga kebiasaan ini yang
            paling membantu:</p>
            <ul>
                <li><strong>Satu konsep, satu contoh.</strong> Jangan menghafal
                seluruh daftar tag. Pelajari <code>&lt;p&gt;</code>,
                <code>&lt;h1&gt;</code>, dan <code>&lt;a&gt;</code>, langsung
                buat halaman berisi tiga elemen itu. Selesai. Besok lanjut.</li>
                <li><strong>Simpan semua yang gagal.</strong> Folder "latihan"
                yang berisi dua puluh versi gagal jauh lebih berharga daripada
                satu folder berisi satu file sempurna yang tidak kamu ingat
                cara membuatnya.</li>
                <li><strong>Ulangi dari nol.</strong> Setelah satu bab selesai,
                tutup materinya dan buat ulang dari awal tanpa melihat. Bagian
                yang kamu lupa itulah yang perlu dipelajari lagi.</li>
            </ul>

            <h2>Kesalahan pemula yang paling sering kami lihat</h2>
            <p><strong>1. Langsung memakai framework.</strong> React, Tailwind,
            dan kawan-kawan menyembunyikan HTML dan CSS dari pandanganmu. Hasilnya:
            kamu bisa mengikuti tutorial selama dua minggu, lalu berhenti total
            saat diminta membuat sesuatu sendiri.</p>
            <p><strong>2. Mencari tema yang terlalu ambisius.</strong> Toko
            online lengkap dengan keranjang, pembayaran, dan panel admin bukan
            proyek pertama. Itu proyek bulan ketiga. Proyek pertama yang selesai
            selalu lebih berguna daripada proyek besar yang menggantung.</p>
            <p><strong>3. Tidak menyimpan progres.</strong> Kalau belum memakai
            Git, minimal salin foldernya tiap kali selesai satu tahap. Kehilangan
            tiga hari kerja karena salah hapus satu file adalah pengalaman yang
            tidak perlu kamu ulang.</p>
            <p><strong>4. Menunggu sempurna sebelum mempublikasikan.</strong>
            Tidak ada halaman yang sempurna pada percobaan pertama. Yang penting
            tayang, lalu diperbaiki. Perbaikan ke-10 selalu lebih mudah daripada
            perbaikan ke-1.</p>

            <h2>Tanda kamu sudah siap ke tahap berikutnya</h2>
            <p>Bukan saat kamu "merasa paham" — tapi saat kamu bisa
            mengerjakan ini tanpa membuka tutorial:</p>
            <ul>
                <li>Membuat halaman dengan judul, paragraf, gambar, daftar, dan
                tautan dari kosong.</li>
                <li>Memindahkan tiga blok menjadi tata letak dua kolom yang
                tidak berantakan di layar HP.</li>
                <li>Membuat tombol yang mengubah isi halaman saat diklik.</li>
                <li>Membaca kode orang lain dan menebak apa yang dilakukannya.</li>
            </ul>
            <p>Kalau keempatnya sudah bisa, HTML/CSS/JavaScript dasar sudah
            cukup. Saatnya pilih jalur: mendalami JavaScript, mulai framework,
            atau langsung mengerjakan proyek nyata. Pilihan ketiga yang paling
            sering membuahkan hasil.</p>

            <h2>Setelah halaman jadi, terbitkan</h2>
            <p>Jangan biarkan hasil belajarmu berhenti di folder lokal.
            Menerbitkannya gratis dan tidak sesulit yang dibayangkan: unggah
            folder ke GitHub, aktifkan GitHub Pages, dan alamatnya langsung bisa
            dibuka siapa pun. Proses itulah yang dijelaskan di bab 6 e-book kami
            — dari folder di HP sampai ada tautan yang bisa kamu bagikan.</p>
            <p>Ada yang berbeda rasanya ketika ternyata orang lain bisa membuka
            halaman buatanmu. Itu umpan balik paling jujur yang bisa kamu dapat
            di tahap ini.</p>

            <p>Urutan lengkapnya ada di <a
            href="produk/ebook-programming.html">e-book programming</a> kami:
            pengenalan, HTML, CSS, JavaScript, proyek praktik, lalu cara
            menerbitkannya. Delapan bab, tanpa lompatan.</p>
        `,
    },
    {
        slug: "memilih-template-website",
        title: "Memilih template website untuk usaha kecil (tanpa jadi developer)",
        date: "2026-11-06",
        dateLabel: "6 November 2026",
        read: "8 menit baca",
        excerpt:
            "Lima template di paket kami dibedakan gayanya, tapi yang menentukan cocok atau tidak justru hal-hal di luar tampilan. Ini cara memilihnya.",
        body: `
            <p>Pertanyaan yang paling sering kami terima sebelum seseorang membeli
            paket template: <em>"yang mana yang paling bagus?"</em> Jawaban
            jujurnya: pertanyaannya sedikit meleset. Yang paling bagus adalah yang
            paling cocok dengan isi situsnya — dan isi situsnya belum tentu sama
            dengan milik orang lain.</p>

            <h2>Mulai dari isi, bukan dari warna</h2>
            <p>Tulis dulu tiga hal: siapa pengunjungnya, apa yang mereka cari,
            dan apa yang harus mereka lakukan setelah membaca. Usaha jasa
            butuh kepercayaan (portofolio, cara kerja, testimoni). Toko butuh
            katalog dan harga. Startup butuh penjelasan produk dan paket biaya.
            Tiga kebutuhan itu berbeda bentuk halamannya.</p>

            <h2>Cocokkan dengan kebutuhan nyata</h2>
            <ul>
                <li><strong>Company profile / jasa profesional</strong> — pilih
                yang tenang dan formal: AURELIA. Kontras lembut, cocok untuk
                dokter, kantor, konsultan.</li>
                <li><strong>Agency kreatif</strong> — NEXORA atau ORION. Keduanya
                berani dengan tipografi besar; NEXORA lebih korporat, ORION lebih
                berani (aksen lime di latar gelap).</li>
                <li><strong>Startup / produk digital</strong> — NOVA. Sudah punya
                bagian tabel harga paket, jadi tidak perlu menyusun dari nol.</li>
                <li><strong>Bisnis umum / brand lokal</strong> — YOURBRAND.
                Strukturnya paling umum dan mudah disesuaikan.</li>
            </ul>

            <h2>Tiga hal teknis yang sering terlewat</h2>
            <p><strong>1. Form kontak.</strong> Di paket kami, NEXORA dan
            YOURBRAND formnya langsung membuka WhatsApp dengan pesan yang sudah
            terisi — nomornya masih contoh, tinggal ganti satu baris di
            <code>js/script.js</code>. Untuk bisnis lokal di Indonesia, ini
            justru paling efektif: orang lebih suka chat daripada mengisi email.</p>
            <p><strong>2. Gambar contoh.</strong> Semua foto di dalam template
            adalah contoh. Ganti sebelum tayang — foto asli usahamu adalah
            pembeda tercepat antara "template" dan "situs betulan".</p>
            <p><strong>3. Kecepatan di HP.</strong> Buka template di ponsel sebelum
            memilih. Yang harus dicek: menu bisa dibuka, teks tidak perlu
            memperkecil layar, dan tombol utama terjangkau dengan satu jempol.</p>

            <div class="note">Semua template di paket kami bisa dicoba dulu —
            buka filenya di browser sebelum bayar. Tidak ada yang tersembunyi di
            balik screenshot.</div>

            <h2>Cara mencoba template sebelum membeli</h2>
            <p>Kebanyakan orang memilih dari screenshot. Padahal ada cara yang
            jauh lebih jujur: buka filenya. Di paket kami kamu bisa melakukan
            ini sebelum membayar:</p>
            <ul>
                <li><strong>Buka <code>index.html</code> langsung.</strong>
                Tidak perlu server, tidak perlu install apa pun — cukup
                gandakan dua kali file itu. Kalau halamannya langsung muncul
                berarti strukturnya bersih.</li>
                <li><strong>Kecilkan jendela browser</strong> sampai setengah
                lebar layar. Ini ujiannya: tata letak yang rapi di desktop
                sering berantakan di HP. Perhatikan apakah teks masih terbaca
                tanpa harus zoom.</li>
                <li><strong>Klik semua menu dan tombol.</strong> Menu harus
                terbuka, tautan tidak boleh mati, dan tombol harus memberi
                reaksi. Template yang kelihatan bagus tapi menunya rusak akan
                jadi masalah setelah kamu pakai.</li>
                <li><strong>Buka bagian yang paling kamu butuhkan</strong> —
                kalau kamu butuh daftar harga, langsung cari tabel harganya.
                Jangan memilih berdasarkan bagian yang justru tidak kamu
                pakai.</li>
            </ul>
            <p>Proses ini lima menit, dan menyelamatkanmu dari membeli template
            yang ternyata tidak cocok dengan isi yang akan kamu tulis.</p>

            <h2>Biaya yang sering tidak disadari</h2>
            <p>Harga template bukan satu-satunya biaya. Sebelum memutuskan,
            hitung juga ini:</p>
            <ul>
                <li><strong>Domain</strong> — alamat situsmu, dibayar per
                tahun. Harganya bervariasi tergantung ekstensi (.com, .id,
                .my.id).</li>
                <li><strong>Hosting</strong> — tempat filenya disimpan. Untuk
                situs sederhana, GitHub Pages atau Netlify bisa dipakai tanpa
                biaya, jadi ini sering nol.</li>
                <li><strong>Email profesional</strong> — opsional, tapi
                direkomendasikan kalau situsnya untuk usaha.</li>
                <li><strong>Waktu kamu sendiri</strong> — bagian yang paling
                sering dilupakan. Mengganti semua foto contoh dan menulis ulang
                teks itu pekerjaan nyata, bukan hal yang selesai dalam sepuluh
                menit.</li>
            </ul>
            <p>Karena itu kami menuliskan dengan jujur di deskripsi produk bahwa
            foto di dalamnya adalah contoh — supaya kamu bisa menghitung
            waktunya dari awal, bukan kaget di tengah jalan.</p>

            <h2>Checklist sebelum menekan tombol beli</h2>
            <ul>
                <li>☐ Sudah membuka <code>index.html</code>-nya di browser,
                bukan cuma melihat screenshot.</li>
                <li>☐ Struktur halamannya memuat bagian yang kamu butuhkan.</li>
                <li>☐ Tampilannya masih rapi saat jendela diperkecil.</li>
                <li>☐ Kamu tahu file mana yang harus diganti (minimal:
                gambar dan teks).</li>
                <li>☐ Sudah membaca lisensinya — boleh dipakai untuk situs
                kamu atau klien, tetapi tidak boleh dijual ulang.</li>
                <li>☐ Sudah menghitung biaya tambahan (domain, dsb).</li>
            </ul>
            <p>Kalau ada satu saja yang belum dicentang, tunda pembeliannya
            sebentar. Lebih baik kehilangan lima menit daripada membayar untuk
            sesuatu yang tidak akan dipakai.</p>

            <h2>Setelah membeli: urutan pemasangan yang kami sarankan</h2>
            <p><strong>1. Baca README.txt dulu</strong> — di sana sudah tertulis
            urutan langkah dan file mana yang boleh diubah. Lima menit membaca
            di awal menghemat satu jam kebingungan.</p>
            <p><strong>2. Ganti gambar sebelum teks.</strong> Foto adalah
            identitas paling cepat terlihat. Selama foto masih contoh, situsnya
            akan terasa "template" — seberapa pun bagusnya teksnya.</p>
            <p><strong>3. Ganti nomor dan email.</strong> Bagian ini paling
            sering terlewat dan paling berbahaya kalau telanjur tayang: pengunjung
            menghubungi nomor orang lain.</p>
            <p><strong>4. Periksa di HP asli</strong>, bukan hanya mode
            responsive di browser. Buka dari ponsel kamu, buka menunya, dan
            coba tombol kontaknya.</p>
            <p><strong>5. Baru tayangkan.</strong> Setelah empat langkah di atas
            selesai, unggah ke hosting. Jangan sebaliknya — menayangkan dulu
            lalu memperbaiki, karena pengunjung pertama adalah kesan pertama
            kamu.</p>

            <p>Lihat kelima gayanya di halaman <a
            href="produk/website-template.html">Website Template</a>, atau mulai
            dari <a href="produk/portfolio-template.html">Portfolio Template yang
            gratis</a> kalau yang dibutuhkan baru sebatas halaman pribadi.</p>
        `,
    },
    {
        slug: "prompt-ai-yang-benar-benar-dipakai",
        title: "Prompt AI yang benar-benar dipakai untuk kerja harian",
        date: "2026-11-02",
        dateLabel: "2 November 2026",
        read: "8 menit baca",
        excerpt:
            "Prompt bukan mantra. Yang membedakan hasil buruk dan hasil layak pakai cuma empat komponen: peran, konteks, tugas, dan ekspektasi.",
        body: `
            <p>Banyak orang mencoba AI sekali, hasilnya generik, lalu
            menyimpulkan "AI-nya jelek". Padahal yang hampir selalu bermasalah
            bukan AI-nya, melainkan perintahnya. Menulis prompt yang baik bukan
            ilmu — cuma kebiasaan empat bagian.</p>

            <h2>Empat komponen: R-C-T-X</h2>
            <p>Pola yang kami pakai di <a
            href="produk/ai-productivity-tools.html">panduan AI</a> kami dan
            terus terbukti berguna:</p>
            <ul>
                <li><strong>Role (peran)</strong> — siapa yang diminta bertindak.
                "Kamu editor majalah bisnis" menghasilkan kalimat berbeda dari
                "kamu asisten".</li>
                <li><strong>Context (konteks)</strong> — situasinya. Untuk siapa,
                di mana akan dipakai, apa yang sudah diketahui.</li>
                <li><strong>Task (tugas)</strong> — apa yang harus dikerjakan,
                dalam bentuk apa, berapa panjang.</li>
                <li><strong>eXpectation (ekspektasi)</strong> — standar hasilnya:
                bahasa, struktur, nada, dan yang paling penting — apa yang
                <em>tidak</em> boleh muncul.</li>
            </ul>

            <p>Contoh nyata. Buruk: <em>"buat caption jualan"</em>. Baik:
            <em>"Kamu penulis konten UMKM makanan. Buat caption Instagram untuk
            sambal botol harga 35 ribu. Struktur: 1 kalimat masalah pembaca, 4
            poin manfaat konkret, ajakan lemah-lemah 'cek link bio'. Maks 90 kata,
            tanpa kata 'dijamin', tutup dengan 3 hashtag spesifik."</em></p>
            <p>Perbedaannya bukan panjang semata — tapi <em>spesifisitas</em>.
            Prompt kedua punya batasan yang bisa dicek satu per satu.</p>

            <h2>Yang sebaiknya TIDAK dilempar ke AI</h2>
            <p>Ini bagian yang paling sering dilanggar: data pribadi pelanggan,
            dokumen internal, dan angka yang belum diverifikasi. AI bisa salah
            menyebut nama dan angka dengan sangat meyakinkan — jadi semua keluaran
            yang memuat fakta wajib dibaca ulang sebelum dipakai.</p>

            <div class="note">Aturan main kami: AI menulis kerangka, manusia
            mempertanggungjawabkan isi. Kalau kamu tidak bisa mempertahankan
            kalimatnya di depan klien, jangan kirim.</div>

            <h2>Cara menguji prompt (bukan menebak)</h2>
            <p>Prompt yang baik jarang muncul langsung pada percobaan pertama.
            Yang kami lakukan sederhana: kirim, baca hasilnya, lalu catat
            <em>satu</em> hal yang meleset, lalu perbaiki hanya bagian itu.</p>
            <ul>
                <li>Hasilnya terlalu panjang? Tambahkan batas kata dan struktur
                yang diminta.</li>
                <li>Nadanya terlalu formal? Sebutkan contoh kalimat yang
                diinginkan, bukan sekadar "lebih santai".</li>
                <li>Isinya generik? Tambahkan konteks: siapa pembacanya, di
                mana dipakai, apa masalahnya.</li>
                <li>Ada fakta yang diragukan? Minta AI menandai bagian yang
                perlu kamu verifikasi, jangan langsung mempercayainya.</li>
            </ul>
            <p>Prinsipnya: <em>jangan menulis ulang prompt dari nol</em>. Perbaiki
            satu variabel setiap kali. Kalau kamu mengganti semuanya sekaligus,
            kamu tidak akan tahu perubahan mana yang memperbaiki hasilnya.</p>

            <h2>Tiga contoh yang benar-benar dipakai</h2>
            <p><strong>Untuk kerja kantor — merangkum rapat.</strong> Buruk:
            <em>"rangkum catatan rapat ini"</em>. Baik: <em>"Kamu asisten
            sekretaris. Rangkum catatan rapat di bawah menjadi: (1) keputusan
            yang diambil, (2) siapa pemilik tugas, (3) tenggat, (4) hal yang
            masih terbuka. Tabel untuk bagian 2 dan 3. Jangan menambahkan
            keputusan yang tidak tertulis. Maks 200 kata."</em></p>
            <p><strong>Untuk kuliah — menjelaskan konsep sulit.</strong> Buruk:
            <em>"jelaskan rekursi"</em>. Baik: <em>"Kamu dosen pemrograman yang
            sabar. Jelaskan rekursi untuk mahasiswa semester satu yang baru
            belajar fungsi. Mulai dari analogi sehari-hari, lalu satu contoh
            kode pendek, lalu satu kesalahan paham yang sering terjadi. Maks 250
            kata, tanpa istilah teknis yang belum dijelaskan."</em></p>
            <p><strong>Untuk konten — caption produk.</strong> Sudah kami
            contohkan di atas. Bedanya kini kamu tahu <em>mengapa</em> bentuknya
            begitu: ada peran, konteks, tugas, dan batasan yang bisa dicek.</p>

            <h2>Simpan prompt yang sudah terbukti</h2>
            <p>Kebiasaan paling murah dan paling menghemat waktu: simpan setiap
            prompt yang hasilnya layak pakai. Cukup satu berkas teks berisi
            judul dan prompt-nya. Dalam dua bulan kamu akan punya pustaka kecil
            yang jauh lebih berharga daripada seratus tutorial tentang AI —
            karena isinya sudah pernah kamu buktikan sendiri.</p>
            <p>Di <a href="produk/ai-productivity-tools.html">panduan AI</a>
            kami, 19 prompt sudah tersusun dalam format ini: siap tempel, tinggal
            mengganti bagian dalam tanda kurung siku.</p>

            <h2>Kapan hasil AI layak dipakai, kapan harus ditulis ulang</h2>
            <p><strong>Layak dipakai langsung:</strong> kerangka draf, daftar
            ide, alternatif judul, struktur outline, penyuntingan tata bahasa,
            dan merapikan teks yang sudah kamu tulis sendiri.</p>
            <p><strong>Wajib ditulis ulang:</strong> klaim tentang angka, harga,
            jadwal, atau kutipan orang; pesan yang akan dikirim ke klien; dan
            apa pun yang menyebut nama spesifik — nama orang, nama produk,
            nama tempat.</p>
            <p><strong>Jangan dipakai sama sekali:</strong> data pribadi
            pelanggan, dokumen internal, sandi atau kredensial, serta hal yang
            kamu tidak punya hak untuk membagikannya.</p>

            <div class="note">Pertanyaan cepat sebelum memakai hasilnya:
            <em>"Kalau ada yang menanyakan bagian ini, bisakah saya
 menjelaskannya sendiri?"</em> Kalau jawabannya tidak, hasilnya belum
            selesai — bukan AI-nya yang kurang, tapi verifikasi kamu yang
            belum.</div>

            <h2>Rutinitas yang masuk akal</h2>
            <p>Kami menulis panduan ini setelah melihat pola yang sama berulang:
            semangat memakai AI bertahan sekitar seminggu lalu hilang. Solusinya
            bukan "pakai AI lebih rajin", tapi memakainya untuk satu jenis pekerjaan
            yang sama setiap hari selama minggu pertama. Minggu kedua, tambah satu
            lagi. Setelah itu biasanya sudah jadi kebiasaan — bukan proyek baru.</p>
            <p>Tanda kebiasaannya sudah terbentuk: kamu membuka AI karena
            <em>butuh</em>, bukan karena ingin mencoba. Dua kondisi itu terlihat
            sama dari luar, tapi hasilnya sangat berbeda.</p>

            <p>19 prompt siap tempel untuk kantor, kuliah, dan konten ada di <a
            href="produk/ai-productivity-tools.html">panduan lengkapnya</a>.</p>
        `,
    },
    {
        slug: "lisensi-aset-konten",
        title: "Aset bebas pakai bukan berarti bebas semuanya",
        date: "2026-10-28",
        dateLabel: "28 Oktober 2026",
        read: "8 menit baca",
        excerpt:
            "Font, foto, musik, dan ikon yang 'gratis' punya aturan masing-masing. Ini ringkasan yang kami tulis untuk pembeli bundle — dan berlaku juga untuk konten jualanmu.",
        body: `
            <p>Satu kesalahan yang mahal: memakai foto atau font orang lain untuk
            konten jualan, lalu ditagih atau diminta menghapus. Kabar baiknya,
            menghindarinya cuma butuh lima menit paham — dan aturannya sudah kami
            ringkas untuk pembeli <a
            href="produk/digital-creator-bundle.html">Digital Creator Bundle</a>
            dalam berkas <code>panduan-lisensi-aset.md</code>.</p>

            <h2>Empat kategori yang paling sering dipakai</h2>
            <ul>
                <li><strong>Font</strong> — Google Fonts umumnya aman dipakai
                komersial. Font dari situs "free font" lain sering hanya bebas
                untuk pemakaian pribadi — baca lisensinya, jangan asal unduh.</li>
                <li><strong>Foto</strong> — Unsplash, Pexels, Pixabay bebas
                dipakai, tetapi tetap ada batasan: tidak boleh dipakai seolah-olah
                produk/tokonya milikmu untuk menyesatkan, dan tidak untuk hal
                ilegal.</li>
                <li><strong>Ikon &amp; ilustrasi</strong> — lisensi per ikon bisa
                berbeda dari lisensi paketnya. Periksa satu per satu.</li>
                <li><strong>Musik &amp; video</strong> — paling rawan. "Bebas
                copyright" di YouTube tidak sama dengan bebas dipakai di konten
                berbayar.</li>
            </ul>

            <h2>Tiga pertanyaan sebelum memakai aset</h2>
            <p><strong>1. Boleh untuk komersial?</strong> Kalau akunmu menjual
            sesuatu, semua kontennya otomatis konten komersial.</p>
            <p><strong>2. Perlu atribusi?</strong> Kalau ya, cantumkan di kolom
            deskripsi — bukan disembunyikan di hashtag.</p>
            <p><strong>3. Boleh dimodifikasi?</strong> Beberapa lisensi melarang
            mengubah warna, memotong, atau menggabungkan aset.</p>

            <div class="note">Kalau tidak yakin dan tidak ada waktu memeriksa:
            pakai aset buatan sendiri. Satu foto produk dengan HP di jendela
            siang hari biasanya lebih dipercaya daripada foto stok paling
            mahal.</div>

            <h2>Cara memeriksa lisensi dalam lima menit</h2>
            <p>Sebagian besar orang langsung mengunduh begitu melihat kata
            "free". Padahal ada lima langkah singkat yang bisa menghematmu dari
            masalah:</p>
            <ul>
                <li><strong>Baca halaman lisensinya, bukan iklannya.</strong>
                Kata "gratis" di halaman unduhan jarang menjelaskan apa pun.
                Cari tautan berlabel <em>License</em>, <em>Terms</em>, atau
                <em>Use</em>.</li>
                <li><strong>Cari kata "commercial".</strong> Kalau muncul
                larangan pemakaian komersial, dan akunmu menjual sesuatu, aset
                itu selesai — cari yang lain.</li>
                <li><strong>Periksa jumlah "bisa dipakai di mana".</strong>
                Beberapa lisensi mengizinkan satu proyek saja, bukan seluruh
                isi toko.</li>
                <li><strong>Perhatikan masa berlaku.</strong> Beberapa situs
                memberi unduhan gratis terbatas waktunya, atau menghapus aset
                kapan saja. Simpan salinannya beserta tautan lisensinya.</li>
                <li><strong>Catat sumbernya.</strong> Cukup satu catatan teks:
                nama aset, situs asal, tanggal unduh. Kalau suatu hari ada
                pertanyaan, jawabanmu sudah siap.</li>
            </ul>

            <h2>Tempat yang biasanya aman (dan yang perlu hati-hati)</h2>
            <p><strong>Cenderung aman:</strong> Google Fonts (lisensi SIL,
            jelas dan seragam), Unsplash/Pexels/Pixabay (foto), serta ikon dari
            proyek sumber terbuka yang mencantumkan lisensinya. Namun "cenderung
            aman" tetap berarti kamu perlu membaca halaman lisensinya sekali —
            syaratnya bisa berubah sewaktu-waktu.</p>
            <p><strong>Perlu hati-hati:</strong> situs agregator yang
            mengumpulkan font atau ikon dari banyak sumber tanpa mencantumkan
            asalnya; komunitas yang hanya mengunggah "kembali unggah"; serta
            apa pun yang kamu unduh dari tautan orang ketiga tanpa tahu asalnya.
            Kalau sumbernya tidak jelas, asetnya juga tidak jelas.</p>

            <h2>Yang sering dilupakan: screenshot dan rekaman layar</h2>
            <p>Ini jarang dibahas, padahal paling sering dipakai. Rekam layar
            aplikasi orang lain, tempelkan ke konten jualanmu, lalu ada pihak
            yang keberatan — itu mungkin. Sebelum memakainya:</p>
            <ul>
                <li>Periksa apakah tampilan aplikasi itu memuat logo, antarmuka,
                atau merek milik orang lain secara menonjol.</li>
                <li>Untuk konten edukasi, potongan pendek dengan keterangan biasanya
                lebih aman daripada cuplikan panjang tanpa konteks.</li>
                <li>Kalau ragu, bingkai ulang: tunjukkan alurnya dengan
                penjelasanmu sendiri, bukan cuplikan mentah.</li>
            </ul>

            <h2>Kalau telah terlanjur dipakai</h2>
            <p>Tenang dulu — hampir semua masalah seperti ini selesai dengan
            menurunkan materinya dan membalas dengan sopan. Langkah paling
            aman:</p>
            <ul>
                <li><strong>Hapus atau ganti asetnya</strong> secepat mungkin.
                Niat baik yang cepat jauh lebih bernilai daripada debat.</li>
                <li><strong>Simpan bukti sumbernya</strong> kalau kamu punya —
                tautan unduhan dan tanggalnya sering menyelesaikan masalah.</li>
                <li><strong>Jangan mengulanginya dengan aset yang sama</strong>
                dari sumber yang sama.</li>
            </ul>

            <div class="note">Aturan yang kami pakai sendiri: satu aset, satu
            catatan sumber. Kalau tidak bisa ditulis sumbernya, asetnya tidak
            dipakai — sekalipun gratisnya meyakinkan.</div>

            <h2>Kenapa ini masuk ke bundle</h2>
            <p>Karena bundle ini berisi template yang jelas akan dipakai untuk
            konten jualan. Sertakan panduan lisensinya supaya pembeli tidak
            perlu menebak-nebak — dan supaya kami tidak menjual sesuatu yang
            berujung masalah bagi mereka.</p>

            <p>Panduan lisensi lengkap ikut di dalam <a
            href="produk/digital-creator-bundle.html">paket creator</a>, ditulis
            khusus untuk aset yang dipakai di template-nya.</p>
        `,
    },
];

export function blogIndex() {
    const body = `
        <section class="page-hero">
            <div class="container">
                <div class="crumb"><a href="index.html">Beranda</a> / Blog</div>
                <h1>Catatan dari <em>yang mengerjakan.</em></h1>
                <p class="lead">
                    Tulisan tentang web, AI, dan konten — bukan hasil ringkasan
                    artikel orang lain, tapi pengalaman menyusun produk yang ada
                    di katalog kami.
                </p>
                <div class="hero-meta">
                    <span class="tag brand">${POSTS.length} artikel</span>
                    <span class="tag">Tanpa clickbait</span>
                </div>
            </div>
        </section>

        <section class="inner">
            <div class="container">
                <div class="grid-2">
                    ${POSTS.map((p) => `
                    <a class="blog-card" href="blog/${p.slug}.html">
                        <span class="b-meta">${p.dateLabel} · ${p.read}</span>
                        <h3>${p.title}</h3>
                        <p>${p.excerpt}</p>
                        <span class="b-more">Baca artikel <i class="fa-solid fa-arrow-right"></i></span>
                    </a>`).join("")}
                </div>

                <div class="cta-band">
                    <div>
                        <h2>Mau praktik langsung?</h2>
                        <p>Artikel-artikel di atas ditulis sambil mengerjakan produk di katalog. Lihat hasilnya.</p>
                    </div>
                    <a class="btn btn-dark" href="produk.html">
                        Lihat katalog <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>`;

    return {
        path: "blog.html",
        html: page({
            path: "blog.html",
            title: "Blog — DAFFTECH",
            desc: "Catatan DAFFTECH tentang belajar web, memilih template website, prompt AI untuk kerja harian, dan lisensi aset konten.",
            active: "blog",
            body,
        }),
    };
}

export function blogPostPages() {
    return POSTS.map((p, i) => {
        const prev = POSTS[i - 1];
        const next = POSTS[i + 1];

        const body = `
        <section class="page-hero">
            <div class="container">
                <div class="crumb">
                    <a href="../index.html">Beranda</a> /
                    <a href="../blog.html">Blog</a> /
                    Artikel
                </div>
                <h1 style="font-size:clamp(30px,4vw,48px)">${p.title}</h1>
                <div class="article-meta" style="border-bottom:none;padding-bottom:0">
                    <span><i class="fa-regular fa-calendar"></i> ${p.dateLabel}</span>
                    <span><i class="fa-regular fa-clock"></i> ${p.read}</span>
                    <span><i class="fa-regular fa-user"></i> Tim DAFFTECH</span>
                </div>
            </div>
        </section>

        <section class="inner">
            <div class="container">
                <article class="prose">
                    ${p.body}
                </article>

                <div class="cta-band">
                    <div>
                        <h2>Produk terkait artikel ini</h2>
                        <p>Semua yang ditulis di atas datang dari mengerjakan produk berikut.</p>
                    </div>
                    <a class="btn btn-dark" href="../produk.html">
                        Lihat katalog <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>

                <nav class="grid-2" style="margin-top:26px" aria-label="Navigasi artikel">
                    ${prev
                        ? `<a class="blog-card" href="${prev.slug}.html"><span class="b-meta">← Sebelumnya</span><h3>${prev.title}</h3></a>`
                        : `<span></span>`}
                    ${next
                        ? `<a class="blog-card" href="${next.slug}.html" style="text-align:right"><span class="b-meta">Berikutnya →</span><h3>${next.title}</h3></a>`
                        : `<span></span>`}
                </nav>
            </div>
        </section>`;

        return {
            path: `blog/${p.slug}.html`,
            html: page({
                path: `blog/${p.slug}.html`,
                title: `${p.title} — Blog DAFFTECH`,
                desc: p.excerpt,
                active: "blog",
                body,
            }),
        };
    });
}
