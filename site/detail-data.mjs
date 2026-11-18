// Data detail 6 produk — semua isi paket ditulis dari file ASLI
// yang ada di folder produk. Jangan menambah klaim yang tidak dicek.

export const DETAILS = [

    /* =====================================================
       1. PORTFOLIO TEMPLATE (GRATIS)
    ===================================================== */
    {
        slug: "portfolio-template",
        name: "Portfolio Template",
        category: "Template",
        isFree: true,
        badge: "FREE",
        price: "FREE",
        originalPrice: "Rp35.000",
        image: "images/products/portfolio-template.png",
        file: "DAFFTECH-PORTOFOLIO-FREE.zip",

        tagline: "Halaman portfolio yang <em>langsung tayang.</em>",
        lead:
            "Satu halaman berisi profil, karya, dan kontak. " +
            "File mentah HTML, CSS, dan JavaScript tanpa framework, " +
            "jadi kamu tahu persis apa yang dijalankan browser — " +
            "tanpa build tool, tanpa dependensi.",

        pack: [
            ["index.html", "Halaman utama: profil, tiga proyek, kontak"],
            ["css/style.css", "Satu berkas gaya, banyak komentar penjelas"],
            ["js/script.js", "Menu mobile, scroll halus, tahun otomatis"],
            ["images/", "Foto profil dan tiga gambar proyek contoh"],
            ["README.txt", "Langkah memasang dan mengganti isi"],
        ],

        sections: [
            {
                h: "Isi halaman",
                p: [
                    "Ada tiga bagian utama: blok profil singkat dengan " +
                        "foto dan tombol kontak, daftar proyek berisi tiga " +
                        "kartu bergambar, serta bagian akhir berisi email " +
                        "dan tautan media sosial.",
                    "Semua teks di dalamnya adalah contoh. Ganti dengan " +
                        "datamu sendiri: nama, deskripsi singkat, judul " +
                        "proyek, dan tautan hasil kerjamu.",
                ],
            },
            {
                h: "Cara memakai",
                p: [
                    "Unduh filenya, lalu buka index.html di browser — " +
                        "langsung tampil, tidak perlu server.",
                    "Edit teks dan gambar memakai editor teks apa pun " +
                        "(VS Code, Notepad++, bahkan Notepad). Kalau sudah " +
                        "cocok, unggah foldernya ke GitHub Pages, Netlify, " +
                        "atau hosting apa pun yang kamu punya.",
                ],
            },
            {
                h: "Catatan jujur",
                p: [
                    "Gambar proyek di dalam paket adalah foto contoh " +
                        "bukan hasil karyamu. Ganti sebelum dipakai " +
                        "demi kredibilitas — pengunjung bisa mencarinya " +
                        "di internet.",
                    "Template ini gratis selamanya. Tidak ada batas " +
                        "penggunaan untuk situs pribadimu, tetapi file " +
                        "mentahnya tidak boleh dijual ulang.",
                ],
            },
        ],
    },

    /* =====================================================
       2. WEBSITE TEMPLATE (5 TEMPLATE)
    ===================================================== */
    {
        slug: "website-template",
        name: "Website Template",
        category: "Template",
        price: "Rp35.000",
        originalPrice: "Rp79.000",
        image: "images/products/website-template.png",
        file: "WEBSITE-TEMPLATES-BUNDLE.zip",

        tagline: "Lima gaya website, <em>satu paket.</em>",
        lead:
            "AURELIA, NEXORA, NOVA, ORION, dan YOURBRAND — lima " +
            "template lengkap untuk company profile, agency, dan " +
            "startup. Pilih satu yang paling dekat dengan kebutuhanmu, " +
            "ganti teks dan gambar, lalu pakai.",

        pack: [
            ["AURELIA/", "Company profile elegan — kontras lembut, cocok untuk jasa profesional"],
            ["NEXORA/", "Agency modern — form kontak langsung membuka WhatsApp"],
            ["NOVA/", "SaaS gelap — lengkap dengan tabel harga paket"],
            ["ORION/", "Studio digital — aksen lime di atas latar gelap"],
            ["YOURBRAND/", "Bisnis umum — form kontak langsung membuka WhatsApp"],
        ],

        sections: [
            {
                h: "Yang ada di tiap folder",
                p: [
                    "Setiap template punya struktur yang sama: index.html, " +
                        "css/style.css, js/script.js, folder images berisi " +
                        "gambar contoh, dan README.txt berisi panduan " +
                        "pemakaian singkat.",
                    "Tidak ada framework, tidak ada proses build. Buka " +
                        "index.html dan halamannya sudah jalan.",
                ],
            },
            {
                h: "Form kontak: dua perilaku berbeda",
                p: [
                    "NEXORA dan YOURBRAND punya form yang benar-benar " +
                        "mengarahkan pengunjung ke WhatsApp dengan pesan " +
                        "yang sudah terisi. Nomor di dalam kode masih " +
                        "contoh (6280000000000) — ganti dengan nomormu " +
                        "sebelum dipakai, satu baris di js/script.js.",
                    "AURELIA dan NOVA menampilkan pesan konfirmasi di " +
                        "layar sebagai contoh tampilan. Sambungkan ke " +
                        "layanan form pilihanmu bila mau benar-benar " +
                        "mengirim. ORION menyediakan bentuk formnya, " +
                        "tinggal disambungkan.",
                ],
            },
            {
                h: "Catatan jujur",
                p: [
                    "Gambar di folder images adalah foto contoh. " +
                        "Ganti dengan foto produk atau timmu sendiri " +
                        "sebelum situsnya dipublikasikan.",
                    "Lisensi: bebas dipakai untuk situs milikmu atau " +
                        "klienmu, tetapi file mentahnya tidak boleh " +
                        "dijual ulang sebagai template.",
                ],
            },
        ],
    },

    /* =====================================================
       3. E-BOOK PROGRAMMING
    ===================================================== */
    {
        slug: "ebook-programming",
        name: "E-Book Programming",
        category: "E-Book",
        price: "Rp99.000",
        originalPrice: "Rp399.000",
        image: "images/products/ebook-programming.png",
        file: "EBOOK-HTML-CSS-JAVASCRIPT.zip",

        tagline: "HTML, CSS & JavaScript <em>dari nol.</em>",
        lead:
            "Delapan bab berurutan untuk kamu yang belum pernah " +
            "menulis satu baris kode pun. Setiap bab punya penjelasan " +
            "singkat, contoh yang bisa langsung dicoba, latihan, dan " +
            "kunci jawaban di bagian akhir.",

        pack: [
            ["PDF 12 halaman", "EBOOK-HTML-CSS-JAVASCRIPT-UNTUK-PEMULA.pdf — siap dibaca di HP atau dicetak"],
            ["ebook.html + css", "Versi HTML — dibuka di browser, huruf bisa diperbesar"],
            ["README.txt", "Cara baca dan lisensi penggunaan"],
        ],

        sections: [
            {
                h: "Delapan bab, dari pengenalan sampai terbit",
                p: [
                    "Bab 1 menjelaskan cara kerja internet, browser, dan " +
                        "tiga bahasa dasar web beserta domain dan hosting. " +
                        "Bab 2 sampai 4 membahas HTML, CSS (termasuk " +
                        "Flexbox), dan JavaScript dengan contoh tag yang " +
                        "paling sering dipakai.",
                    "Bab 5 adalah proyek praktik: menyusun landing page " +
                        "sederhana dari kerangka HTML sampai sentuhan " +
                        "JavaScript. Bab 6 memandu menerbitkan website " +
                        "gratis lewat GitHub Pages, bab 7 memberi arah " +
                        "belajar selanjutnya, dan bab 8 berisi kunci " +
                        "jawaban seluruh latihan.",
                ],
            },
            {
                h: "Format yang kamu terima",
                p: [
                    "PDF 12 halaman untuk dibaca santai, plus versi " +
                        "HTML lengkap dengan CSS-nya bila kamu lebih suka " +
                        "membaca di browser atau ingin mencari teks " +
                        "tertentu dengan cepat.",
                ],
            },
            {
                h: "Catatan jujur",
                p: [
                    "E-book ini padat dan langsung pada intinya — bukan " +
                        "buku setebal 200 halaman. Kalau kamu mencari " +
                        "teori ilmu komputer lengkap, ini bukan bukunya. " +
                        "Ini untuk yang ingin cepat bisa membuat halaman " +
                        "web pertamanya.",
                    "Latihan di tiap bab tidak otomatis dinilai; kunci " +
                        "jawabannya ada di bab 8 untuk kamu periksa " +
                        "sendiri.",
                ],
            },
        ],
    },

    /* =====================================================
       4. AI PRODUCTIVITY TOOLS
    ===================================================== */
    {
        slug: "ai-productivity-tools",
        name: "AI Productivity Tools",
        category: "AI",
        price: "Rp159.000",
        originalPrice: "Rp500.000",
        image: "images/products/ai-tools.png",
        file: "PANDUAN-AI-PRODUCTIVITY-TOOLS.zip",

        tagline: "Kerja lebih cepat <em>pakai AI.</em>",
        lead:
            "Panduan pemakaian AI untuk kerja harian: mana yang " +
            "benar-benar membantu, mana yang tidak, dan 19 prompt " +
            "siap tempel untuk kantor, kuliah, dan konten — plus " +
            "aturan keamanan datanya.",

        pack: [
            ["PDF 10 halaman", "PANDUAN-AI-PRODUCTIVITY-TOOLS.pdf — seluruh isi panduan"],
            ["ai.html + css", "Versi HTML dengan navigasi bab"],
            ["README.txt", "Cara pakai dan lisensi"],
        ],

        sections: [
            {
                h: "Isi panduan",
                p: [
                    "Bab 1 memisahkan apa yang AI bisa dan tidak boleh " +
                        "dipakai untuk apa. Bab 2 mengulas sembilan alat " +
                        "AI populer beserta fungsinya, kira-kira biaya " +
                        "pakai, dan kapan masuk akal memakainya.",
                    "Bab 3 membongkar anatomi prompt yang bagus dengan " +
                        "pola R-C-T-X. Bab 4 sampai 6 berisi 19 prompt " +
                        "siap tempel: untuk kerja kantor, kuliah, dan " +
                        "konten. Bab 7 membahas keamanan data dan etika, " +
                        "bab 8 menutup dengan rutinitas 30 menit sehari " +
                        "supaya tidak berhenti di semangat minggu pertama.",
                ],
            },
            {
                h: "Cara memakai promptnya",
                p: [
                    "Tiap prompt punya bagian dalam tanda kurung siku " +
                        "seperti [NAMA PRODUK] — ganti dengan situasimu, " +
                        "lalu tempel ke ChatGPT, Claude, atau Gemini. " +
                        "Prompt ditulis dalam bahasa Indonesia, jadi " +
                        "hasilnya langsung bisa dipakai.",
                ],
            },
            {
                h: "Catatan jujur",
                p: [
                    "Harga dan fitur sembilan alat AI berubah cepat. " +
                        "Angka biaya di panduan ditulis per saat ini dan " +
                        "bisa jadi sudah berbeda — selalu cek situs " +
                        "resminya sebelum berlangganan.",
                    "Prompt adalah titik awal, bukan jaminan hasil. " +
                        "Tetap baca ulang keluarannya: AI bisa salah " +
                        "nama, angka, atau fakta.",
                ],
            },
        ],
    },

    /* =====================================================
       5. MODERN UI KIT
    ===================================================== */
    {
        slug: "modern-ui-kit",
        name: "Modern UI Kit",
        category: "UI Design",
        price: "Rp50.000",
        originalPrice: "Rp100.000",
        image: "images/products/ui-kit.png",
        file: "DAFFTECH-UI-KIT.zip",

        tagline: "Satu desain, <em>tiga platform.</em>",
        lead:
            "Set token desain yang sama — warna, huruf, ruang, radius — " +
            "untuk web, iOS, dan Android. Komponennya sudah jadi: tombol, " +
            "kartu, form, badge, hingga switch, lengkap dengan pratinjau " +
            "yang bisa dibuka di browser.",

        pack: [
            ["tokens.css + tokens.json", "Token warna, tipografi, spasi, radius — versi CSS variable dan JSON"],
            ["components.css", "Komponen siap pakai: tombol, kartu, form, badge, chip, baris, switch"],
            ["ios/Components.swift", "Komponen SwiftUI yang memakai token sama"],
            ["android/Components.kt", "Komponen Jetpack Compose dengan token sama"],
            ["index.html + PREVIEW.png", "Pratinjau seluruh komponen di browser"],
        ],

        sections: [
            {
                h: "Apa yang ada di dalamnya",
                p: [
                    "components.css berisi komponen bertanda dt-: " +
                        "dt-btn dengan varian primary, secondary, outline, " +
                        "ghost dan ukuran sm/lg; dt-card dengan efek " +
                        "hover; dt-field untuk input, textarea, select " +
                        "beserta hint error; dt-badge dan dt-chip untuk " +
                        "penanda; dt-row untuk daftar; dan dt-switch " +
                        "untuk pengaturan.",
                    "Mode gelap tersedia lewat atribut [data-theme=\"dark\"] " +
                        "di elemen html — cukup satu baris, seluruh " +
                        "komponen ikut berubah.",
                ],
            },
            {
                h: "Cara memakai",
                p: [
                    "Buka index.html untuk melihat semua komponen, lalu " +
                        "salin blok CSS yang dibutuhkan ke proyekmu. " +
                        "Untuk aplikasi mobile, file Components.swift " +
                        "dan Components.kt bisa langsung ditambahkan ke " +
                        "proyek Xcode atau Android Studio.",
                ],
            },
            {
                h: "Catatan jujur",
                p: [
                    "File Swift dan Kotlin ditulis mengikuti sintaks " +
                        "masing-masing platform, tetapi belum kami uji " +
                        "compile di Xcode maupun Android Studio. Kalau " +
                        "ada nama simbol yang perlu penyesuaian, " +
                        "sesuaikan langsung — struktur komponennya sudah " +
                        "lengkap.",
                    "Seluruh token memakai gradasi merek DAFFTECH " +
                        "(#BF7BF6 ke #913BD0). Ganti nilai di tokens.css " +
                        "untuk menyesuaikan dengan merekmu sendiri.",
                ],
            },
        ],
    },

    /* =====================================================
       6. DIGITAL CREATOR BUNDLE
    ===================================================== */
    {
        slug: "digital-creator-bundle",
        name: "Digital Creator Bundle",
        category: "Bundle",
        price: "Rp100.000",
        originalPrice: "Rp500.000",
        image: "images/products/digital-bundle.png",
        file: "DIGITAL-CREATOR-BUNDLE.zip",

        tagline: "Konten 30 hari, <em>siap posting.</em>",
        lead:
            "Sepuluh template post 1080×1080 beserta file sumbernya, " +
            "kalender konten 30 hari, 12 prompt caption, brand kit " +
            "yang tinggal diisi, dan panduan lisensi aset — satu " +
            "paket untuk creator yang ingin konsisten tanpa " +
            "mulai dari kanvas kosong.",

        pack: [
            ["10 PNG 1080×1080", "Post siap unggah: sampul seri, tips, promo, kutipan, checklist, tutorial, cerita, cara beli, pengumuman, CTA"],
            ["10 file HTML", "Sumber tiap post — ganti teks dan warna, ekspor ulang"],
            ["Kalender 30 hari (.csv + .md)", "Rencana posting sehari satu topik selama sebulan"],
            ["prompt-caption.md", "12 prompt AI untuk caption promosi, edukasi, brand, dan hook"],
            ["brand-kit.html + lisensi", "Kerangka brand isi-sendiri dan panduan aset bebas pakai"],
        ],

        sections: [
            {
                h: "Sepuluh format post",
                p: [
                    "Tiap format punya pasangan PNG dan HTML: sampul " +
                        "seri, tips berdaftar, promo produk, kutipan " +
                        "merek, checklist, tutorial langkah, cerita " +
                        "\"kenapa dibuat\", cara beli, pengumuman event, " +
                        "dan ajakan klik link bio.",
                    "File HTML-nya memakai teks polos tanpa framework " +
                        "— buka di browser, ganti isinya, lalu screenshot " +
                        "atau cetak ke PNG memakai alat apa pun.",
                ],
            },
            {
                h: "Kalender dan prompt",
                p: [
                    "Kalender 30 hari tersedia sebagai .csv (bisa " +
                        "dibuka di Excel atau Google Sheets) dan .md " +
                        "(mudah dibaca di HP). Tiap hari ada satu topik " +
                        "beserta format post yang disarankan.",
                    "Dua belas prompt caption dibagi empat kelompok: " +
                        "promosi, edukasi, brand, dan hook — tinggal " +
                        "ganti bagian dalam tanda kurung siku.",
                ],
            },
            {
                h: "Catatan jujur",
                p: [
                    "Brand kit adalah kerangka kosong berisi slot " +
                        "identitas, warna, huruf, dan aturan konten yang " +
                        "harus kamu isi sendiri — bukan brand jadi.",
                    "Aset font dan gambar di dalam template memakai " +
                        "sumber bebas; panduan-lisensi-aset.md menjelaskan " +
                        "mana yang boleh dipakai untuk konten jualan " +
                        "dan mana yang perlu atribusi.",
                ],
            },
        ],
    },
];
