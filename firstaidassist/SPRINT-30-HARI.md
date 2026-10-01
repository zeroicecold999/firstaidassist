# Rencana Sprint 30 Hari - FirstAidAssist

**Periode:** 24 September 2026 - 23 Oktober 2026  
**Durasi:** 30 hari  
**Format:** 5 sprint, masing-masing 6 hari kerja  
**Produk:** PWA panduan pertolongan pertama dan kesiapsiagaan  

## Status Saat Ini

Fitur inti yang sudah terlihat di kode ditandai dengan `[x]`. Task yang belum dikerjakan ditandai dengan `[ ]` dan menjadi target lanjutan.

| Indikator | Kondisi |
|---|---|
| Platform | PWA HTML, CSS, JavaScript |
| Fitur inti | Panduan kondisi, pencarian, SOS, checklist P3K, edukasi, video, bencana |
| Offline | Service Worker dan cache lokal sudah tersedia |
| Penyimpanan lokal | Tema, checklist, dan cache cuaca |
| Risiko utama | Konten medis perlu validasi tenaga medis; belum ada bukti uji lintas perangkat dan audit rilis |

## Aturan Estimasi

- Story point menggunakan skala Fibonacci: 1, 2, 3, 5, 8.
- `FE` = Frontend, `BE` = Backend/integrasi, `QA` = Quality Assurance, `MEDIS` = validasi konten medis, `OPS` = deployment/operasional, `DOC` = dokumentasi.
- `DESIGN` = UI/UX dan desain interaksi, `MOBILE` = tampilan serta perilaku pada perangkat mobile/responsif, `CONTENT` = konten edukasi dan video.
- Karena aplikasi saat ini belum memakai server atau database, label `BE` terutama berarti API, integrasi browser, service worker, atau kebutuhan backend masa depan.
- Task dianggap selesai hanya jika seluruh subtask-nya ditandai `[x]`.

## Pembagian Area Pekerjaan

| Area | Label | Cakupan pekerjaan | Task terkait |
|---|---|---|---|
| Frontend | `FE` | Struktur halaman, komponen UI, navigasi, pencarian, checklist, quiz, tema, dan interaksi aplikasi | 1.1-1.5, 2.2-2.4, 3.2-3.6, 4.2, 4.5, 5.2, 5.4 |
| Backend / Integrasi | `BE` | Service worker, cache offline, geolocation, Open-Meteo, tautan eksternal, dan integrasi browser | 3.1, 3.5, 4.4, 5.3 |
| Design / UX | `DESIGN`, `UX` | Visual interface, hierarki informasi, alur langkah darurat, feedback, dan kemudahan penggunaan | 1.1-1.3, 2.3-2.5, 4.2 |
| Mobile / Responsive | `MOBILE` | Layout mobile, tablet, desktop, touch target, tombol telepon, offline, dan pemasangan PWA | 1.1, 1.5, 2.4, 3.1, 3.6, 4.2-4.3, 5.1 |
| Content / Medis | `CONTENT`, `MEDIS` | Panduan kondisi, bencana, video, sumber referensi, disclaimer, dan review tenaga medis | 2.1, 2.5, 3.3-3.4, 4.1, 5.6 |
| QA / Testing | `QA` | Smoke test, aksesibilitas, keamanan, pengujian browser, regression, dan quality gate | 2.5, 4.2-4.5, 5.1, 5.6 |
| Documentation | `DOC` | README, sumber medis, privacy notice, changelog, prosedur deployment, dan laporan review | 3.6, 4.1, 4.4, 5.4-5.5 |
| Operations / Deployment | `OPS` | Hosting HTTPS, service worker production, cache versioning, monitoring, dan rollback | 1.5, 3.1, 4.4, 5.2-5.6 |

### Ringkasan Berdasarkan Area

- **Frontend:** membangun dan merawat pengalaman aplikasi di browser.
- **Backend/integrasi:** menangani cache, service worker, API cuaca, dan integrasi platform.
- **Design/UX:** memastikan instruksi darurat mudah dipahami dan tindakan penting terlihat jelas.
- **Mobile:** memastikan aplikasi nyaman dipakai pada layar kecil, touch device, dan kondisi offline.
- **Documentation:** mencatat sumber, keputusan review, cara menjalankan, dan cara merilis aplikasi.

## Ringkasan Sprint

| Sprint | Periode | Fokus | Total SP | Status |
|---|---|---|---:|---|
| Sprint 1 | 24-29 Sep | Fondasi aplikasi dan navigasi | 23 | Selesai |
| Sprint 2 | 30 Sep-5 Okt | Konten pertolongan pertama dan kondisi darurat | 25 | Selesai sebagian |
| Sprint 3 | 6-11 Okt | PWA, offline, edukasi, dan kesiapsiagaan | 24 | Selesai sebagian |
| Sprint 4 | 12-17 Okt | Validasi, aksesibilitas, dan pengujian | 29 | Belum mulai |
| Sprint 5 | 18-23 Okt | Hardening, deployment, dan rilis | 29 | Belum mulai |
| **Total** | **30 hari** | **Delivery FirstAidAssist** | **130** | **Berjalan** |

---

## Sprint 1 - Fondasi Produk dan Navigasi

**Periode:** 24-29 September 2026  
**Target:** Aplikasi dapat dibuka, dinavigasi, dan digunakan pada tampilan responsif.

### Task 1.1 - Bangun shell aplikasi responsif

- **Label:** `FE`
- **Story point:** 5
- **Status:** [x] Selesai
- **Deskripsi:** Menyediakan struktur halaman utama FirstAidAssist untuk mobile, tablet, dan desktop.
- **Subtask:**
  - [x] Membuat header, main content, bottom navigation, dan layout halaman.
  - [x] Menambahkan navigasi ke Beranda, Panduan, Cari, Edukasi, dan SOS.
  - [x] Menambahkan skip link dan struktur heading dasar.

### Task 1.2 - Implementasi tema visual dan mode gelap

- **Label:** `FE`
- **Story point:** 5
- **Status:** [x] Selesai
- **Deskripsi:** Membuat sistem warna, komponen tombol, kartu, status, dan mode terang/gelap.
- **Subtask:**
  - [x] Mendefinisikan CSS variable untuk warna, border, radius, dan shadow.
  - [x] Menambahkan toggle tema di header dan pengaturan.
  - [x] Menyimpan preferensi tema di localStorage.

### Task 1.3 - Buat halaman beranda dan aksi cepat

- **Label:** `FE`
- **Story point:** 5
- **Status:** [x] Selesai
- **Deskripsi:** Menyediakan titik masuk utama untuk mencari panduan dan mengakses fitur darurat.
- **Subtask:**
  - [x] Menampilkan status offline, waktu real-time, suhu, dan nomor bantuan.
  - [x] Menambahkan quick action untuk Panduan, Bencana, Video, P3K, Pengaturan, dan SOS.
  - [x] Menampilkan kategori kondisi darurat di beranda.

### Task 1.4 - Implementasi routing berbasis screen dan hash

- **Label:** `FE`
- **Story point:** 3
- **Status:** [x] Selesai
- **Deskripsi:** Membuat perpindahan antar screen tanpa reload dan mendukung tombol Back browser/HP.
- **Subtask:**
  - [x] Membuat fungsi perpindahan screen.
  - [x] Menyinkronkan navigasi dengan URL hash.
  - [x] Menangani `popstate` saat pengguna menekan tombol kembali.

### Task 1.5 - Tambahkan identitas PWA dasar

- **Label:** `FE`, `OPS`
- **Story point:** 5
- **Status:** [x] Selesai
- **Deskripsi:** Menyiapkan manifest, ikon, splash screen, dan registrasi service worker.
- **Subtask:**
  - [x] Menambahkan `manifest.json` dan ikon 192/512 pixel.
  - [x] Menambahkan splash screen saat aplikasi dibuka.
  - [x] Mendaftarkan service worker dari aplikasi.

## Sprint 2 - Panduan dan Kondisi Darurat

**Periode:** 30 September-5 Oktober 2026  
**Target:** Pengguna dapat menemukan panduan yang relevan dan mengikuti langkah awal dengan aman.

### Task 2.1 - Susun data panduan kondisi

- **Label:** `FE`, `MEDIS`
- **Story point:** 8
- **Status:** [x] Selesai
- **Deskripsi:** Menyediakan panduan kondisi umum, kondisi darurat, gejala, langkah tindakan, dan larangan.
- **Subtask:**
  - [x] Menambahkan panduan kondisi ke `data.js`.
  - [x] Menambahkan ringkasan, tingkat keparahan, tindakan yang dianjurkan, dan tindakan yang dilarang.
  - [x] Menambahkan kondisi tambahan seperti stroke, DBD, tenggelam, gigitan hewan, dan anggota tubuh terputus.
  - [x] Menyiapkan permintaan tinjauan tertulis untuk tenaga medis di [REFERENSI-DAN-REVIEW-MEDIS.md](REFERENSI-DAN-REVIEW-MEDIS.md).
  - [x] Mencatat sumber referensi medis untuk setiap kondisi di [REFERENSI-DAN-REVIEW-MEDIS.md](REFERENSI-DAN-REVIEW-MEDIS.md).
  - [ ] Mengirim permintaan dan mendapatkan tinjauan tertulis dari tenaga medis untuk seluruh panduan.

### Task 2.2 - Implementasi pencarian dan kartu hasil

- **Label:** `FE`
- **Story point:** 5
- **Status:** [x] Selesai
- **Deskripsi:** Membantu pengguna menemukan panduan berdasarkan kata kunci gejala atau kejadian.
- **Subtask:**
  - [x] Menambahkan normalisasi kata kunci pencarian.
  - [x] Menambahkan sinonim untuk kondisi umum.
  - [x] Menampilkan hasil dalam kartu dengan tombol Mulai Panduan.
  - [x] Menambahkan suggestion chip untuk pencarian umum.

### Task 2.3 - Buat mode langkah demi langkah

- **Label:** `FE`, `UX`
- **Story point:** 5
- **Status:** [x] Selesai
- **Deskripsi:** Menampilkan satu langkah utama per layar agar instruksi mudah diikuti saat situasi darurat.
- **Subtask:**
  - [x] Menampilkan progres langkah dan visual pendukung.
  - [x] Menambahkan tombol kembali dan langkah berikutnya.
  - [x] Menambahkan tombol SOS pada alur langkah.
  - [x] Menambahkan pembacaan instruksi menggunakan Speech Synthesis.
  - [x] Menambahkan metronom RJP 110/menit pada panduan CPR.

### Task 2.4 - Implementasi pusat panggilan darurat

- **Label:** `FE`, `UX`
- **Story point:** 5
- **Status:** [x] Selesai
- **Deskripsi:** Memudahkan pengguna menghubungi layanan darurat yang relevan.
- **Subtask:**
  - [x] Menambahkan nomor 119, 112, 110, 113, dan 115.
  - [x] Menambahkan modal konfirmasi sebelum panggilan.
  - [x] Menambahkan tautan `tel:` untuk perangkat yang mendukung panggilan.

### Task 2.5 - Tinjauan keselamatan bahasa dan alur darurat

- **Label:** `MEDIS`, `QA`
- **Story point:** 2
- **Status:** [x] Selesai sebagian
- **Deskripsi:** Memastikan bahasa tidak memberi rasa aman palsu dan selalu mengarahkan kondisi berat ke bantuan profesional.
- **Subtask:**
  - [x] Menandai kondisi `DARURAT` langsung dari severity panduan dan menampilkan pesan eskalasi 119/112.
  - [x] Menyeragamkan disclaimer dan pesan eskalasi pada panduan dan langkah interaktif.
  - [x] Menyiapkan checklist skenario review di [REVIEW-SKENARIO-DARURAT.md](REVIEW-SKENARIO-DARURAT.md).
  - [ ] Menjalankan review skenario bersama tenaga medis dan mencatat persetujuan tertulis.

## Sprint 3 - PWA, Edukasi, dan Kesiapsiagaan

**Periode:** 6-11 Oktober 2026  
**Target:** Aplikasi tetap berguna saat offline dan membantu pengguna mempersiapkan diri sebelum keadaan darurat.

### Task 3.1 - Service worker dan cache offline

- **Label:** `BE`, `OPS`
- **Story point:** 5
- **Status:** [x] Selesai
- **Deskripsi:** Menyediakan akses ke aset inti ketika jaringan tidak tersedia.
- **Subtask:**
  - [x] Menambahkan precache untuk HTML, CSS, JavaScript, manifest, dan ikon.
  - [x] Menambahkan strategi stale-while-revalidate untuk aset lokal.
  - [x] Menambahkan fallback halaman utama saat navigasi offline.
  - [x] Menguji update cache setelah perubahan versi aplikasi (`v10` ke `v11`; cache lama terhapus setelah aktivasi).
  - [x] Menyusun prosedur bump versi `CACHE` setiap rilis di [README.md](README.md#versi-dan-pengujian-cache-offline).

### Task 3.2 - Checklist kotak P3K

- **Label:** `FE`
- **Story point:** 3
- **Status:** [x] Selesai
- **Deskripsi:** Menyediakan daftar perlengkapan dasar dengan progres yang tersimpan lokal.
- **Subtask:**
  - [x] Menambahkan 16 item perlengkapan.
  - [x] Menampilkan jumlah dan persentase item tersedia.
  - [x] Menyimpan perubahan checkbox di localStorage.
  - [x] Menampilkan preview checklist di halaman edukasi.

### Task 3.3 - Edukasi mitos, fakta, dan quiz

- **Label:** `FE`, `MEDIS`
- **Story point:** 5
- **Status:** [x] Selesai sebagian
- **Deskripsi:** Membantu pengguna belajar sebelum menghadapi keadaan darurat.
- **Subtask:**
  - [x] Menambahkan kartu mitos dan fakta.
  - [x] Menambahkan quiz tindakan saat tersedak.
  - [x] Menampilkan skor dan feedback jawaban.
  - [x] Meninjau akurasi materi edukasi terhadap rujukan British Red Cross; persetujuan formal tenaga medis lokal tetap menunggu.
  - [x] Menambah enam soal quiz dengan penjelasan dan tautan sumber untuk tiap soal.

### Task 3.4 - Panduan kesiapsiagaan bencana dan video

- **Label:** `FE`, `CONTENT`
- **Story point:** 5
- **Status:** [x] Selesai sebagian
- **Deskripsi:** Menambahkan panduan bencana dan materi video dari sumber eksternal.
- **Subtask:**
  - [x] Menambahkan panduan gempa, banjir, kebakaran, longsor, gunung api, dan angin kencang.
  - [x] Menampilkan video YouTube pada halaman video.
  - [x] Menyediakan fallback pencarian video jika belum ada video khusus.
  - [ ] Memastikan setiap video berasal dari sumber yang dapat dipercaya.
  - [ ] Menyediakan transkrip atau alternatif teks untuk video penting.

### Task 3.5 - Suhu lokal dan status jaringan

- **Label:** `BE`, `FE`
- **Story point:** 3
- **Status:** [x] Selesai
- **Deskripsi:** Menampilkan kondisi jaringan dan suhu lokal tanpa API key.
- **Subtask:**
  - [x] Mengambil suhu melalui geolocation dan Open-Meteo.
  - [x] Menyimpan hasil suhu terakhir secara lokal.
  - [x] Menampilkan status online/offline dan banner offline.
  - [x] Menambahkan pesan khusus untuk izin lokasi, posisi/GPS, timeout, offline, dan kegagalan respons/API Open-Meteo.

### Task 3.6 - Pengaturan, privasi, dan instalasi aplikasi

- **Label:** `FE`, `DOC`
- **Story point:** 3
- **Status:** [x] Selesai
- **Deskripsi:** Menjelaskan batasan privasi dan mendukung pemasangan aplikasi ke perangkat.
- **Subtask:**
  - [x] Menambahkan halaman pengaturan.
  - [x] Menambahkan tombol instalasi PWA dan instruksi fallback iOS/browser.
  - [x] Menjelaskan penyimpanan lokal, geolocation, YouTube, dan Google Fonts.
  - [x] Menambahkan disclaimer bahwa aplikasi bukan pengganti tenaga medis.

## Sprint 4 - Validasi, Aksesibilitas, dan Pengujian

**Periode:** 12-17 Oktober 2026  
**Target:** Mengurangi risiko penggunaan nyata sebelum rilis publik.

### Task 4.1 - Validasi konten medis

- **Label:** `MEDIS`, `CONTENT`
- **Story point:** 8
- **Status:** [ ] Belum mulai
- **Deskripsi:** Memvalidasi instruksi, urutan tindakan, istilah, dan ambang eskalasi dengan tenaga medis atau organisasi pertolongan pertama.
- **Subtask:**
  - [x] Membuat register review untuk seluruh kondisi di [REFERENSI-DAN-REVIEW-MEDIS.md](REFERENSI-DAN-REVIEW-MEDIS.md).
  - [ ] Meminta reviewer medis memberi status approve/revisi.
  - [ ] Memperbaiki instruksi yang tidak sesuai protokol lokal.
  - [x] Menambahkan sumber dan kolom tanggal review pada [REFERENSI-DAN-REVIEW-MEDIS.md](REFERENSI-DAN-REVIEW-MEDIS.md).
  - [ ] Mengisi sumber final dan tanggal review setelah reviewer medis memberikan persetujuan.
  - [ ] Menahan rilis publik sampai item kritis mendapat approval.

### Task 4.2 - Audit aksesibilitas

- **Label:** `FE`, `QA`
- **Story point:** 5
- **Status:** [x] Selesai
- **Deskripsi:** Memastikan aplikasi dapat dipakai dengan keyboard, screen reader, dan ukuran layar kecil.
- **Subtask:**
  - [x] Menguji perpindahan fokus keyboard di seluruh screen dan memastikan fokus dialog terkurung serta dikembalikan saat ditutup.
  - [x] Memastikan modal, toast, status jaringan, suhu, quiz, instruksi langkah, dan progress memiliki announcement/semantik yang jelas.
  - [x] Memeriksa kontras sampel teks dan kontrol pada mode terang/gelap; seluruh sampel lolos 4.5:1.
  - [x] Memastikan kontrol ikon memiliki nama aksesibel.
  - [x] Menguji zoom 200 persen dan ukuran font 200 persen pada viewport ponsel dan desktop tanpa overflow horizontal.

### Task 4.3 - Pengujian lintas perangkat dan browser

- **Label:** `QA`, `FE`
- **Story point:** 5
- **Status:** [x] Selesai sebagian
- **Deskripsi:** Menguji alur kritis pada browser dan viewport yang umum digunakan.
- **Subtask:**
  - [ ] Menguji Chrome Android dan Safari iOS pada perangkat fisik; browser yang tersedia di sesi ini adalah Chromium terintegrasi, sehingga uji perangkat asli belum dapat dilakukan.
  - [x] Menguji viewport 320, 375, 768, dan 1440 pixel pada Chromium; tidak ditemukan horizontal overflow.
  - [x] Menguji navigasi, pencarian, SOS, checklist, tema, dan status/cache offline pada Chromium.
  - [x] Mencatat hasil, batas cakupan, dan bug yang ditemukan di [QA-LINTAS-PERANGKAT.md](QA-LINTAS-PERANGKAT.md).

### Task 4.4 - Pengujian keamanan dan privasi

- **Label:** `BE`, `QA`, `OPS`
- **Story point:** 5
- **Status:** [ ] Belum mulai
- **Deskripsi:** Memastikan data lokal, tautan eksternal, dan integrasi browser tidak menimbulkan risiko yang tidak perlu.
- **Subtask:**
  - [ ] Meninjau penggunaan `localStorage` dan data geolocation.
  - [ ] Memastikan semua tautan eksternal memakai `noopener` dan sumber yang tepat.
  - [ ] Menguji aplikasi tanpa izin lokasi dan tanpa jaringan.
  - [ ] Menyusun privacy notice dan batasan data yang lebih eksplisit.

### Task 4.5 - Perbaiki bug hasil QA

- **Label:** `FE`, `QA`
- **Story point:** 6
- **Status:** [ ] Belum mulai
- **Deskripsi:** Menyelesaikan bug prioritas tinggi dan sedang yang ditemukan pada audit Sprint 4.
- **Subtask:**
  - [ ] Memperbaiki blocker dan bug severity tinggi.
  - [ ] Menambahkan regression checklist untuk alur kritis.
  - [ ] Menjalankan ulang smoke test setelah perbaikan.

## Sprint 5 - Hardening dan Rilis Publik

**Periode:** 18-23 Oktober 2026  
**Target:** Menyiapkan build yang terdokumentasi, dapat di-deploy, dan siap dipantau.

### Task 5.1 - Quality gate dan regression test

- **Label:** `QA`
- **Story point:** 5
- **Status:** [ ] Belum mulai
- **Deskripsi:** Menetapkan pemeriksaan minimum yang wajib lolos sebelum deployment.
- **Subtask:**
  - [ ] Menjalankan smoke test seluruh screen.
  - [ ] Memeriksa tidak ada error Console yang menghambat alur utama.
  - [ ] Menjalankan Lighthouse untuk Performance, Accessibility, Best Practices, dan PWA.
  - [ ] Mendokumentasikan hasil dan issue yang masih diterima sebagai risiko.

### Task 5.2 - Optimasi performa dan aset

- **Label:** `FE`, `OPS`
- **Story point:** 5
- **Status:** [ ] Belum mulai
- **Deskripsi:** Mengurangi waktu muat awal dan menjaga pengalaman pada jaringan lambat.
- **Subtask:**
  - [ ] Mengoptimalkan ukuran logo dan ikon tanpa menurunkan keterbacaan.
  - [ ] Mengevaluasi font eksternal dan fallback saat offline.
  - [ ] Menguji lazy loading video dan dampaknya terhadap performa.
  - [ ] Memastikan aset yang diperlukan sudah masuk cache.

### Task 5.3 - Deployment HTTPS

- **Label:** `OPS`, `BE`
- **Story point:** 5
- **Status:** [ ] Belum mulai
- **Deskripsi:** Mempublikasikan aplikasi melalui hosting statis yang mendukung HTTPS dan service worker.
- **Subtask:**
  - [ ] Memilih Netlify, Cloudflare Pages, atau GitHub Pages.
  - [ ] Deploy seluruh aset tanpa file konfigurasi sensitif.
  - [ ] Menguji service worker setelah deployment HTTPS.
  - [ ] Mengganti `og:image` dengan URL absolut publik.
  - [ ] Mencatat URL production dan prosedur rollback.

### Task 5.4 - Observability dan feedback pengguna

- **Label:** `OPS`, `FE`, `DOC`
- **Story point:** 5
- **Status:** [ ] Belum mulai
- **Deskripsi:** Menyiapkan cara memantau masalah rilis tanpa mengumpulkan data medis sensitif.
- **Subtask:**
  - [ ] Menentukan kanal laporan bug dan masukan pengguna.
  - [ ] Menambahkan template laporan: perangkat, browser, langkah, dan screenshot.
  - [ ] Menentukan metrik non-sensitif seperti error loading dan kegagalan service worker.
  - [ ] Menjelaskan bahwa pengguna tidak boleh mengirim data medis pribadi.

### Task 5.5 - Dokumentasi rilis v1.4.0

- **Label:** `DOC`
- **Story point:** 3
- **Status:** [ ] Belum mulai
- **Deskripsi:** Memperbarui dokumentasi agar proyek dapat dirawat oleh tim berikutnya.
- **Subtask:**
  - [ ] Memperbarui README dengan cara deploy dan cara menjalankan test.
  - [ ] Menambahkan changelog v1.4.0.
  - [ ] Mendokumentasikan prosedur update `CACHE` di `sw.js`.
  - [ ] Mendokumentasikan status validasi konten medis.

### Task 5.6 - Go/no-go review

- **Label:** `QA`, `MEDIS`, `OPS`
- **Story point:** 6
- **Status:** [ ] Belum mulai
- **Deskripsi:** Mengambil keputusan rilis berdasarkan kualitas teknis, validasi medis, dan kesiapan operasional.
- **Subtask:**
  - [ ] Memastikan tidak ada blocker terbuka.
  - [ ] Memastikan panduan darurat telah ditinjau.
  - [ ] Memastikan deployment HTTPS dan offline mode lolos uji.
  - [ ] Menyetujui rilis atau membuat daftar pekerjaan lanjutan.

## Definition of Done

Sebuah task dapat ditandai `[x]` apabila:

- Implementasi atau dokumen sudah ada di repository.
- Semua subtask selesai.
- Tidak ada error Console yang berkaitan dengan task.
- Alur utama sudah diuji pada minimal satu mobile dan satu desktop browser.
- Untuk konten medis, sudah ada status review dan sumber yang tercatat.
- Perubahan yang memengaruhi PWA sudah memperbarui versi cache service worker.

## Prioritas Jika Waktu Terbatas

1. Validasi konten medis dan alur SOS.
2. Pengujian offline, browser mobile, dan aksesibilitas.
3. Perbaikan blocker sebelum deployment.
4. Deployment HTTPS dan dokumentasi rilis.
5. Optimasi non-kritis dan fitur tambahan.