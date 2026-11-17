# PANDUAN CUAN — DAFFTECH

Panduan ini menjelaskan **apa yang sudah berubah**, dan **langkah yang harus kamu lakukan**
agar web ini benar-benar menghasilkan.

---

## 1. Ringkasan yang sudah ditambahkan

| No | Perubahan | Fungsinya |
|----|-----------|-----------|
| 1 | Semua tombol **Buy Now** aktif dan mengarah ke `lynk.id/dafftech` | Dulu 3 produk tombolnya mati → tidak ada yang bisa beli |
| 2 | **Badge diskon** otomatis (`-56%`, `-75%`, dst) | Harga coret jadi kelihatan menguntungkan |
| 3 | Blok **Isi paket** di kartu produk | Pembeli tahu persis apa yang dia bayar |
| 4 | **Cross-sell** di produk gratis → diarahkan ke paket berbayar | Produk gratis jadi pintu jualan |
| 5 | Catatan "Sekali bayar, akses selamanya" + "Diproses Lynk.id" | Mengurangi keraguan bayar |
| 6 | Section **FAQ** (6 pertanyaan) | Menjawab keberatan sebelum bayar + bagus untuk SEO Google |
| 7 | Section **Newsletter** | Mengumpulkan email calon pembeli untuk promo berikutnya |
| 8 | **SEO**: Open Graph, canonical, `robots.txt`, `sitemap.xml`, JSON-LD (produk + harga + FAQ) | Link dibagikan ke WhatsApp/IG tampil menarik, produk muncul di pencarian |
| 9 | Slot **Google AdSense** (2 titik) | Siap dipasang, otomatis tersembunyi selama belum dikonfigurasi |
| 10 | **Google Analytics** (opsional) | Untuk tahu pengunjung & produk mana yang paling diklik |
| 11 | **Sticky CTA** di mobile | Tombol "Lihat produk" selalu terjangkau di HP |
| 12 | Services: rincian layanan + tombol **Minta penawaran** | Proyek jasa lebih mudah di-close |
| 13 | Perbaikan **bug tema gelap/terang** | Dulu pilih mode gelap, pas di-reload balik lagi terang |
| 14 | Ganti `alert()` jadi **toast** | Tidak ada lagi popup bawaan browser yang murahan |

**Semua fitur baru otomatis mati/senyap sampai kamu isi konfigurasinya.**
Tidak ada ID palsu, tidak ada kotak iklan kosong, tidak ada error.

---

## 2. Aktifkan Google AdSense

Buka **`js/config.js`** lalu isi:

```js
adsense: {
    client: "ca-pub-xxxxxxxxxxxxxxxx",
    slot: "1234567890"
},
```

- `client` → dasbor AdSense → **Account information**.
- `slot` → AdSense → **Ads → By ad unit → Display ads**, buat unit, salin nomornya.

Setelah diisi, dua slot iklan akan tampil:

1. Di bawah grid produk (paling sering dilihat).
2. Di atas footer (lebar penuh).

> **Catatan penting:** akun AdSense butuh review dulu. Sambil menunggu, isi
> `meta name="google-adsense-account"` di `index.html` sesuai instruksi Google
> supaya domainmu terverifikasi. Slot tetap tersembunyi selama `client`/`slot` kosong.

---

## 3. Aktifkan Google Analytics (opsional tapi disarankan)

Di `js/config.js`:

```js
analyticsId: "G-XXXXXXXXXX",
```

Tanpa ini kamu tidak tahu produk mana yang paling banyak diklik — padahal itu
informasi paling berharga untuk memutuskan produk mana yang harus dipromosikan.

---

## 4. Link pembelian per produk

Sekarang **semua produk berbayar** memakai toko:

```js
link: SITE_CONFIG.storeUrl,   // https://lynk.id/dafftech
```

Kalau nanti kamu punya **halaman produk khusus** di Lynk (lebih bagus untuk konversi),
ganti per produk di `js/products.js`, misalnya:

```js
{
    id: 3,
    name: "E-Book Programming",
    ...
    link: "https://lynk.id/dafftech/xxxxx",   // <- link produk ini saja
}
```

### ⚠️ Cek dulu sebelum publikasikan

Pastikan **keenam produk benar-benar sudah terbit** di `lynk.id/dafftech`.
Kalau ada yang belum, ubah dulu supaya tombolnya jujur:

```js
available: false,   // -> tombol jadi nonaktif dan muncul pesan "sedang disiapkan"
```

Menampilkan tombol "Buy Now" yang mengarah ke produk yang tidak ada = pembeli kabur.

---

## 5. Isi paket: E-Book Programming (BELUM DIISI)

Kamu meminta **setiap produk punya aneka pilihan**. Untuk **Website Template** sudah jadi —
di kartu muncul 5 pilihan nyata: AURELIA, NEXORA, NOVA, ORION, YOURBRAND
(semuanya sesuai file yang memang ada di repo).

Untuk **E-Book Programming** saya **tidak mengarang judul**, karena tidak ada file
e-book di repo ini. Pembeli akan menagih kalau isi paketnya tidak ada.

Isi sendiri di `js/products.js`, cari blok produk `id: 3` lalu ganti `options: []`:

```js
options: [
    { name: "Judul E-Book 1", note: "Isi singkatnya apa" },
    { name: "Judul E-Book 2", note: "Isi singkatnya apa" },
    { name: "Judul E-Book 3", note: "Isi singkatnya apa" },
],
```

Begitu diisi, otomatis tampil blok **"Isi paket · 3 pilihan"** di kartu produk.
Produk lain (`AI Productivity Tools`, `Modern UI Kit`, `Digital Creator Bundle`)
juga tinggal ditambah `options` dengan cara yang sama.

---

## 6. Newsletter → daftar email

Form newsletter sudah aktif. Saat ini datang ke **inbox EmailJS milikmu** memakai
template yang sudah ada.

Untuk hasil terbaik (subscriber langsung masuk daftar + dapat email balasan otomatis):

1. Buka dashboard **EmailJS** → **Email Templates** → **Create new**.
2. Buat template baru, variabel yang tersedia: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`.
3. Salin **Template ID**-nya.
4. Isi di `js/config.js`:

```js
emailjs: {
    ...
    newsletterTemplateId: "template_xxxxxxx"
},
```

Sampai diisi, form tetap jalan (memakai template kontak) — tidak rusak, tidak error.

---

## 7. Deskripsi produk GRATIS — cek ini

Deskripsi lama menulis **"5 modern portfolio website templates"**, tetapi file yang
benar-benar ada di repo hanya:

```
Download/DAFFTECH-PORTOFOLIO-FREE .zip
├── README.txt
├── index.html
├── css/style.css
├── js/script.js
└── images/ (profile + 3 project)
```

Jadi isinya **1 template portfolio**, bukan 5. Saya ubah deskripsinya agar jujur,
karena produk gratis ini adalah **pintu pertama** orang mengenal DAFFTECH —
kalau tidak sesuai ekspektasi, mereka tidak akan percaya pada produk berbayarnya.

> Kalau kamu memang mau memberi 5 template gratis, kirimkan filnya dulu,
> lalu beri tahu saya agar deskuripsinya disesuaikan.

---

## 8. ✅ File berbayar sudah dikeluarkan dari repo

File-file ini dulu ada di root repo dan **bisa diunduh siapa saja** tanpa bayar:

```
AURELIA-WEBSITE-TEMPLATE-V1.zip
NEXORA-WEBSITE-TEMPLATE-V1.zip
NOVA-WEBSITE-TEMPLATE-V1.zip
ORION-WEBSITE-TEMPLATE-V1.zip
YOURBRAND-WEBSITE-TEMPLATE.zip
DAFFTECH WEBSITE TEMPLATES BUNDLE.zip
+ 5 folder template (AURELIA/NEXORA/NOVA/ORION/YOURBRAND)
```

Padahal isinya **persis** paket yang dijual Rp35.000.

**Yang sudah dilakukan:**

1. Semua folder template + ZIP dipindah (bukan dihapus) ke
   `C:\Users\user\Documents\DAFFTECH produk jualan\`
2. Ditambahkan `.gitignore` supaya file itu tidak pernah masuk repo lagi.
3. `robots.txt` punya baris `Disallow: /*.zip$` (hanya himbauan ke crawler).

**Sisa yang harus diputuskan:** file lama masih ada di **riwayat git GitHub**
(commit lama tetap bisa diunduh selama repo publik). Untuk benar-benar bersih,
riwayat lama harus dihapus (`git filter-repo` + `git push --force`) —
tanyakan dulu sebelum dilakukan karena ini menimpa seluruh riwayat repo.

---

## 9. Cara publikasi (push)

```bash
cd <folder repo>
git add -A
git commit -m "Perkuat monetisasi: link beli aktif, diskon, FAQ, newsletter, SEO, AdSense slot"
git push origin main
```

GitHub Pages biasanya memperbarui situs dalam 1–3 menit setelah push.

---

## 10. Checklist sebelum rilis

- [ ] Enam produk sudah terbit di `lynk.id/dafftech`
- [ ] Link per produk diganti (kalau sudah ada halaman khusus)
- [ ] `options` E-Book Programming diisi judul asli
- [ ] `adsense.client` + `adsense.slot` diisi (setelah akun disetujui)
- [ ] `analyticsId` diisi
- [ ] `newsletterTemplateId` diisi
- [x] File ZIP berbayar dikeluarkan dari repo (tinggal bersihkan riwayat lama di GitHub)
- [ ] Cek tampilan di HP (sticky CTA, grid produk, FAQ)
