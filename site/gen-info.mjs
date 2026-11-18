// Halaman Jasa, Tentang, Kontak, 404
import { SITE, page } from "./layout.mjs";

const SERVICES = [
    {
        n: "01",
        icon: "fa-code",
        title: "Pengembangan Website",
        desc: "Website responsif untuk portofolio, brand, dan bisnis kecil.",
        items: [
            "Landing page & company profile",
            "Nyaman dibuka di desktop & mobile",
            "Kode rapi, mudah diteruskan",
        ],
    },
    {
        n: "02",
        icon: "fa-pen-nib",
        title: "Desain Kreatif",
        desc: "Desain visual bersih untuk produk digital, branding, dan konten.",
        items: [
            "Visual produk & aset konten",
            "Gaya konsisten antar platform",
            "File siap pakai",
        ],
    },
    {
        n: "03",
        icon: "fa-layer-group",
        title: "Resource Digital",
        desc: "Resource dan sistem khusus yang dibangun mengikuti alur kerjamu.",
        items: [
            "Disesuaikan dengan alur kerjamu",
            "Termasuk panduan pemakaian",
            "Bisa digabung dengan koleksi produk",
        ],
    },
];

export function jasaPage() {
    const body = `
        <section class="page-hero">
            <div class="container">
                <div class="crumb"><a href="index.html">Beranda</a> / Jasa</div>
                <h1>Proyek terpilih, <em>dikerjakan sungguhan.</em></h1>
                <p class="lead">
                    Di luar koleksi produk, DAFFTECH menerima beberapa proyek
                    sekaligus. Kami tidak mengambil semua pekerjaan — hanya yang
                    bisa kami kerjakan dengan tenang dan selesai sesuai
                    kesepakatan.
                </p>
                <div class="hero-meta">
                    <span class="tag brand">Website &amp; desain</span>
                    <span class="tag">Lingkup &amp; biaya disepakati di awal</span>
                </div>
            </div>
        </section>

        <section class="inner">
            <div class="container">
                <div class="grid-3">
                    ${SERVICES.map((s) => `
                    <article class="cat-card">
                        <div class="body" style="padding:30px 24px">
                            <span class="kicker">${s.n} · Layanan</span>
                            <h3><i class="fa-solid ${s.icon}" style="color:var(--accent);margin-right:8px"></i>${s.title}</h3>
                            <p>${s.desc}</p>
                            <ul class="mini-list">
                                ${s.items.map((i) => `<li>${i}</li>`).join("")}
                            </ul>
                            <div class="actions">
                                <a class="a-buy" href="kontak.html">Ajukan proyek</a>
                            </div>
                        </div>
                    </article>`).join("")}
                </div>

                <div class="sub-head" style="margin-top:64px">
                    <h2>Bagaimana proyeknya berjalan</h2>
                    <p>Tiga langkah, tanpa drama. Kamu selalu tahu posisi proyeknya di mana.</p>
                </div>
                <div class="grid-3">
                    <article class="cat-card"><div class="body">
                        <span class="kicker">Langkah 01</span>
                        <h3>Ceritakan kebutuhanmu</h3>
                        <p>Kirim pesan lewat halaman kontak atau email. Sebutkan tujuan situsnya, contoh yang kamu suka, dan tenggat kalau ada.</p>
                    </div></article>
                    <article class="cat-card"><div class="body">
                        <span class="kicker">Langkah 02</span>
                        <h3>Kami balas dengan lingkup kerja</h3>
                        <p>Balasan berisi apa yang bisa dikerjakan, perkiraan biaya, dan waktu penyelesaian. Tidak ada biaya untuk penawaran ini.</p>
                    </div></article>
                    <article class="cat-card"><div class="body">
                        <span class="kicker">Langkah 03</span>
                        <h3>Kerjakan, review, selesai</h3>
                        <p>Pengerjaan dilakukan bertahap dengan review di tengah jalan. File serah terima lengkap dengan panduan pemakaian.</p>
                    </div></article>
                </div>

                <div class="cta-band">
                    <div>
                        <h2>Punya proyek yang cocok?</h2>
                        <p>Ceritakan kebutuhanmu — DAFFTECH membalas dengan lingkup kerja dan perkiraan biayanya.</p>
                    </div>
                    <a class="btn btn-dark" href="kontak.html">
                        Minta penawaran <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>`;

    return {
        path: "jasa.html",
        html: page({
            path: "jasa.html",
            title: "Jasa — DAFFTECH",
            desc: "DAFFTECH menerima proyek pengembangan website, desain kreatif, dan pembuatan resource digital. Lingkup dan biaya disepakati di awal.",
            active: "jasa",
            body,
        }),
    };
}

export function tentangPage() {
    const body = `
        <section class="page-hero">
            <div class="container">
                <div class="crumb"><a href="index.html">Beranda</a> / Tentang</div>
                <h1>Dikerjakan sendiri, <em>bukan dijual ulang.</em></h1>
                <p class="lead">
                    DAFFTECH adalah brand kecil yang menjual file digital yang
                    memang kami buat sendiri. Tidak ada template pihak ketiga
                    yang dijual ulang, tidak ada janji yang tidak bisa dicek.
                </p>
            </div>
        </section>

        <section class="inner">
            <div class="container">
                <div class="detail-grid">
                    <div class="prose">
                        <h2>Awal mula</h2>
                        <p>
                            DAFFTECH bermula dari kebiasaan membuat file sendiri
                            setiap kali butuh sesuatu: template portfolio untuk
                            melamar kerja, kerangka website untuk kenalan yang
                            punya usaha, panduan catatan untuk adik kelas yang
                            belajar coding. Lama-lama file-file itu menumpuk, dan
                            kami sadar orang lain membutuhkan hal yang sama.
                        </p>
                        <p>
                            Maka dibukalah toko ini. Enam produk pertama kami
                            pilih karena benar-benar pernah dipakai — bukan
                            sekadar terlihat bagus di halaman penjualan.
                        </p>

                        <h2>Prinsip yang kami pegang</h2>
                        <p>
                            Setiap produk punya struktur folder yang jelas, README
                            cara pakai, dan lisensi tertulis soal apa yang boleh
                            serta apa yang dilarang. Kalau ada yang kurang jelas,
                            tanyakan dulu sebelum beli — lebih baik bertanya
                            daripada menyesal.
                        </p>
                        <div class="note">
                            <strong>Yang tidak kami lakukan:</strong> menjual ulang
                            file orang lain dengan merek sendiri, menampilkan ulasan
                            palsu, atau menjanjikan hasil (penghasilan, peringkat,
                            jumlah pengikut) yang tidak bisa kami jamin.
                        </div>

                        <h2>Di balik nama</h2>
                        <p>
                            Nama DAFFTECH diambil dari nama pemiliknya. Dikerjakan
                            sendiri dari Indonesia, dengan pertanyaan yang sama
                            setiap kali membuat produk baru: <em>apakah ini benar-benar
                            akan saya pakai?</em> Kalau jawabannya tidak, produknya
                            tidak kami terbitkan.
                        </p>
                        <p>
                            Simak <a href="blog.html">blog DAFFTECH</a> untuk catatan
                            seputar web, AI, dan konten — ditulis dari pengalaman
                            mengerjakan produk-produk di katalog ini.
                        </p>
                    </div>

                    <aside class="panel">
                        <ul class="p-pack" style="margin-top:0;padding-top:0;border-top:none">
                            <li><strong>Tanpa framework</strong>HTML, CSS, JavaScript murni. Bisa dibuka langsung di browser.</li>
                            <li><strong>Bisa diedit pemula</strong>Cukup editor teks seperti VS Code. Tidak perlu tools khusus.</li>
                            <li><strong>Lisensi tertulis</strong>Boleh diedit untuk websitemu sendiri, dilarang dijual ulang.</li>
                            <li><strong>Harga sekali bayar</strong>Tidak ada langganan, tidak ada biaya tersembunyi.</li>
                        </ul>
                        <a class="p-buy" href="produk.html" style="margin-top:20px">Lihat katalog produk</a>
                    </aside>
                </div>
            </div>
        </section>`;

    return {
        path: "tentang.html",
        html: page({
            path: "tentang.html",
            title: "Tentang — DAFFTECH",
            desc: "DAFFTECH adalah brand kecil dari Indonesia yang menjual file digital buatan sendiri: template, e-book, UI kit, dan resource creator.",
            active: "tentang",
            body,
        }),
    };
}

export function kontakPage() {
    const body = `
        <section class="page-hero">
            <div class="container">
                <div class="crumb"><a href="index.html">Beranda</a> / Kontak</div>
                <h1>Ngobrol dulu, <em>belakangan.</em></h1>
                <p class="lead">
                    Ada pertanyaan sebelum beli, butuh penawaran jasa, atau ada
                    yang keliru di situs ini? Kirim pesan — dibaca manusia, dibalas
                    secepatnya.
                </p>
                <div class="hero-meta">
                    <span class="tag brand">${SITE.email}</span>
                    <span class="tag">Balasan 1–2 hari kerja</span>
                </div>
            </div>
        </section>

        <section class="inner">
            <div class="container">
                <div class="detail-grid">
                    <div class="form-card">
                        <h2 style="font-size:24px;margin-bottom:6px">Kirim pesan</h2>
                        <p style="color:var(--muted);font-size:14.5px;margin-bottom:22px">
                            Isi form di bawah, atau kirim langsung ke email di samping.
                        </p>

                        <form id="contact-form" novalidate>
                            <div class="form-grid">
                                <div class="field">
                                    <label for="cf-name">Nama</label>
                                    <input type="text" id="cf-name" name="name" autocomplete="name" required placeholder="Nama kamu">
                                </div>
                                <div class="field">
                                    <label for="cf-email">Email</label>
                                    <input type="email" id="cf-email" name="email" autocomplete="email" required placeholder="nama@email.com">
                                </div>
                            </div>
                            <div class="field">
                                <label for="cf-subject">Subjek</label>
                                <select id="cf-subject" name="subject">
                                    <option>Pertanyaan sebelum beli</option>
                                    <option>Penawaran jasa</option>
                                    <option>Masalah dengan produk</option>
                                    <option>Lainnya</option>
                                </select>
                            </div>
                            <div class="field">
                                <label for="cf-message">Pesan</label>
                                <textarea id="cf-message" name="message" required placeholder="Tulis pesanmu di sini..."></textarea>
                            </div>
                            <button class="btn-submit" type="submit">Kirim pesan</button>
                            <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
                        </form>
                    </div>

                    <aside class="panel">
                        <ul class="p-pack" style="margin-top:0;padding-top:0;border-top:none">
                            <li><strong><i class="fa-solid fa-envelope" style="color:var(--accent)"></i> Email</strong>
                                <a href="mailto:${SITE.email}" style="color:var(--accent)">${SITE.email}</a>
                            </li>
                            <li><strong><i class="fa-solid fa-store" style="color:var(--accent)"></i> Toko</strong>
                                <a href="${SITE.store}" target="_blank" rel="noopener noreferrer" style="color:var(--accent)">lynk.id/dafftech</a>
                            </li>
                            <li><strong><i class="fa-solid fa-clock" style="color:var(--accent)"></i> Waktu balas</strong>
                                1–2 hari kerja. Pesan di akhir pekan dibalas Senin.
                            </li>
                            <li><strong><i class="fa-solid fa-circle-question" style="color:var(--accent)"></i> Pertanyaan umum</strong>
                                Cek <a href="index.html#faq" style="color:var(--accent)">FAQ</a> dulu — kemungkinan besar sudah dijawab di sana.
                            </li>
                        </ul>
                        <div class="note" style="margin-top:18px">
                            Untuk masalah produk yang sudah dibela, sertakan email yang
                            dipakai saat membeli supaya kami bisa mengecek lebih cepat.
                        </div>
                    </aside>
                </div>
            </div>
        </section>`;

    return {
        path: "kontak.html",
        html: page({
            path: "kontak.html",
            title: "Kontak — DAFFTECH",
            desc: "Hubungi DAFFTECH: form kontak, email hello@dafftech.id, dan tautan toko Lynk.id. Balasan 1–2 hari kerja.",
            active: "kontak",
            body,
        }),
    };
}

export function notFoundPage() {
    const body = `
        <section class="inner">
            <div class="container">
                <div class="err-box">
                    <span class="code">404</span>
                    <h1>Halaman yang kamu cari tidak ada</h1>
                    <p>
                        Tautannya mungkin salah ketik, atau halamannya sudah kami
                        pindahkan. Coba mulai dari beranda atau lihat katalog produknya.
                    </p>
                    <div class="row">
                        <a class="btn btn-dark" href="index.html">Ke beranda</a>
                        <a class="btn btn-outline" href="produk.html">Lihat katalog</a>
                    </div>
                </div>
            </div>
        </section>`;

    return {
        path: "404.html",
        html: page({
            path: "404.html",
            title: "404 — DAFFTECH",
            desc: "Halaman tidak ditemukan.",
            active: "",
            body,
        }),
    };
}
