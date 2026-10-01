# FirstAidAssist v1.3.1

Progressive Web App (PWA) responsif berbasis HTML, CSS, dan JavaScript.

Versi ini menggunakan satu layout responsif tanpa toggle "Mode HP" agar tampilan lebih bersih dan konsisten di HP, tablet, dan desktop.

## Fitur baru
- Mode terang / gelap
- Jam real-time, hari, tanggal, bulan, tahun
- Suhu lokal melalui geolocation + Open-Meteo (tanpa API key)
- 37 panduan kondisi/gejala (baru: tenggelam, gigitan hewan/rabies, demam tinggi anak, DBD, benda menancap, terhirup asap, cedera leher/tulang belakang, anggota tubuh terputus), termasuk stroke, nyeri dada, gula darah rendah, dehidrasi, syok, cedera kepala, sengatan listrik, memar, muntah/diare, dan kram otot
- Panduan kesiapsiagaan bencana: gempa, banjir, kebakaran, longsor, gunung api, angin kencang
- Checklist Kotak P3K 16 item
- Emoji/simbol di seluruh UI
- Background healthcare/emergency yang lebih menarik
- Video penanganan dari sumber eksternal (British Red Cross / American Red Cross)
- Tombol video pada panduan; untuk kondisi tanpa video khusus, tombol mengarah ke pencarian YouTube
- PWA + Service Worker + offline cache

## Menjalankan
Gunakan Live Server di VS Code atau server lokal:

```bash
python -m http.server 5500
```

Lalu buka `http://localhost:5500`.

## Privasi
Versi ini tidak menyediakan akun pengguna. Tema dan checklist dapat disimpan secara lokal di browser. Hindari memasukkan data medis pribadi yang sensitif.

## Catatan medis
Konten panduan adalah konten demo/edukasi dan harus divalidasi oleh tenaga medis atau organisasi pertolongan pertama sebelum digunakan sebagai produk medis produksi.

## Dasar konten medis tambahan
Panduan tambahan adalah ringkasan pertolongan awal berbasis sumber edukasi pertolongan pertama yang ditinjau ulang. Konten tetap perlu divalidasi oleh tenaga medis sebelum dipakai sebagai produk medis produksi.

## Versi dan pengujian cache offline
Service worker menyimpan app shell dengan nama `firstaidassist-cache-vN` di `sw.js`. Setiap perubahan pada file di daftar `ASSETS` harus disertai kenaikan suffix ke nomor baru, misalnya `v16` menjadi `v17`; jangan gunakan ulang nama cache lama. Cache saat ini adalah `v16`.

Prosedur rilis dan verifikasi:
1. Naikkan versi `CACHE` di `sw.js`, lalu deploy `sw.js` dan semua aset yang berubah ke origin yang sama.
2. Buka atau muat ulang aplikasi pada origin tersebut. Di DevTools > Application > Service Workers, tunggu service worker baru berstatus **activated** (gunakan **Update** bila perlu).
3. Di Application > Cache Storage, pastikan cache bernama versi baru berisi app shell dan cache versi lama sudah terhapus.
4. Aktifkan mode offline dan muat ulang halaman. Pastikan halaman utama dan aset inti tetap tampil.

Uji lokal 29 September 2026: migrasi `v10` ke `v11`, `v11` ke `v12`, `v12` ke `v13`, `v13` ke `v14`, `v14` ke `v15`, dan `v15` ke `v16` berhasil; versi terbaru aktif, sepuluh aset ter-precache, dan cache versi sebelumnya terhapus setelah aktivasi.

## Deploy publik (HTTPS wajib)
Unggah semua file (tanpa `settings.json`) ke Netlify Drop, Cloudflare Pages, atau GitHub Pages. Setelah deploy: ganti `og:image` dengan URL absolut dan tes di DevTools (Console + Lighthouse).

## Struktur
- `data.js`: semua konten panduan, kategori, bencana, video (edit di sini).
- `app.js`: logika dan tampilan. `sw.js`: cache offline (lihat prosedur bump versi cache di atas).
