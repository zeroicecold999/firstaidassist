/* Data konten FirstAidAssist. Edit di sini; tinjau oleh tenaga medis sebelum rilis. */
const guides = {
  "burns": {
    "title": "Luka Bakar",
    "emoji": "🔥",
    "severity": "PERHATIAN",
    "summary": "Panduan awal untuk luka bakar karena panas, air, atau minyak.",
    "warning": "Jauhkan korban dari sumber panas dan nilai tingkat keparahan.",
    "do": ["Dinginkan area dengan air mengalir selama sekitar 20 menit.", "Lepaskan benda ketat di sekitar area luka jika mudah dilepas.", "Tutup secara longgar dengan bahan bersih."],
    "dont": ["Jangan mengoleskan pasta gigi atau minyak.", "Jangan memecahkan lepuhan.", "Jangan menempelkan es langsung pada luka."],
    "steps": [
      ["Dinginkan luka", "Alirkan air bersih mengalir ke area luka selama sekitar 20 menit.", "💧"],
      ["Lepaskan benda ketat", "Lepaskan cincin, jam, atau benda ketat jika mudah dilepas dan tidak menempel.", "🖐️"],
      ["Tutup dengan bersih", "Lindungi area luka secara longgar dengan bahan yang bersih.", "🩹"],
      ["Nilai tingkat keparahan", "Cari bantuan medis untuk luka yang luas, dalam, atau mengenai area penting.", "🔎"]
    ]
  },
  "choking": {
    "title": "Tersedak",
    "emoji": "🫁",
    "severity": "DARURAT",
    "summary": "Panduan awal untuk dewasa/anak besar yang jalan napasnya tersumbat.",
    "warning": "Bayi, ibu hamil, dan orang sangat gemuk butuh teknik berbeda: ikuti arahan operator.",
    "do": ["Biarkan korban batuk bila batuknya masih kuat.", "Bila tidak bisa batuk, bicara, atau bernapas: lakukan 5 tepukan punggung dan 5 dorongan perut bergantian.", "Hubungi 119/112 bila sumbatan tidak keluar."],
    "dont": ["Jangan memasukkan jari secara membabi buta ke mulut.", "Jangan memberi makanan/minuman saat korban masih tersedak.", "Jangan menepuk punggung bila korban masih dapat batuk kuat."],
    "steps": [
      ["Nilai napas", "Tanyakan “Kamu tersedak?”. Jika masih bisa batuk kuat atau bicara, biarkan ia batuk.", "🫁"],
      ["Tepuk punggung", "Bila tidak bisa bernapas: condongkan korban ke depan, beri 5 tepukan keras di antara tulang belikat.", "✋"],
      ["Dorong perut", "Berdiri di belakang korban, kepalkan tangan di atas pusar, tarik cepat ke arah dalam dan atas sebanyak 5 kali. Ulangi 5 tepukan + 5 dorongan.", "🤜"],
      ["Bila tidak sadar", "Baringkan korban, hubungi 119/112, dan mulai RJP sesuai arahan operator.", "🚑"]
    ]
  },
  "bleeding": {
    "title": "Pendarahan",
    "emoji": "🩸",
    "severity": "DARURAT",
    "summary": "Panduan awal untuk pendarahan yang perlu segera ditangani.",
    "warning": "Pendarahan berat membutuhkan bantuan medis segera.",
    "do": ["Tekan area yang berdarah dengan bahan bersih.", "Pertahankan tekanan yang stabil.", "Hubungi bantuan bila pendarahan berat atau tidak terkendali."],
    "dont": ["Jangan sering membuka balutan hanya untuk memeriksa.", "Jangan menunda pertolongan pada perdarahan berat."],
    "steps": [
      ["Tekan sumber perdarahan", "Tekan langsung area yang berdarah dengan bahan bersih.", "✋"],
      ["Pertahankan tekanan", "Jaga tekanan tetap stabil dan tambahkan bahan bersih bila diperlukan.", "🩹"],
      ["Pantau kondisi", "Amati kesadaran dan kondisi umum korban.", "👀"],
      ["Hubungi bantuan", "Cari pertolongan medis bila perdarahan berat atau berlanjut.", "🚑"]
    ]
  },
  "bites": {
    "title": "Gigitan / Sengatan",
    "emoji": "🐝",
    "severity": "PERHATIAN",
    "summary": "Panduan awal untuk gigitan atau sengatan serangga/hewan.",
    "warning": "Waspadai sesak napas atau pembengkakan cepat pada wajah/bibir.",
    "do": ["Jauhkan korban dari sumber.", "Amati gejala dan perubahan kondisi.", "Cari bantuan segera bila reaksi berat."],
    "dont": ["Jangan menggaruk berlebihan.", "Jangan mengabaikan sesak atau pembengkakan pada wajah/bibir."],
    "steps": [
      ["Jauhkan dari sumber", "Pastikan korban berada di tempat aman.", "🐝"],
      ["Amati reaksi", "Perhatikan nyeri, bengkak, ruam, atau keluhan lain.", "🔎"],
      ["Cari tanda bahaya", "Sesak atau pembengkakan wajah/bibir membutuhkan bantuan segera.", "⚠️"],
      ["Hubungi bantuan", "Gunakan layanan darurat bila gejala berat.", "📞"]
    ]
  },
  "fainting": {
    "title": "Pingsan",
    "emoji": "😵",
    "severity": "PERHATIAN",
    "summary": "Panduan awal saat seseorang kehilangan kesadaran sementara.",
    "warning": "Pastikan area aman dan periksa respons korban.",
    "do": ["Pastikan lingkungan aman.", "Periksa respons dan pernapasan.", "Cari bantuan bila korban tidak segera sadar."],
    "dont": ["Jangan memaksa korban langsung berdiri.", "Jangan memberi minum saat belum sadar penuh."],
    "steps": [
      ["Pastikan aman", "Hilangkan bahaya di sekitar korban.", "🛡️"],
      ["Periksa respons", "Panggil korban dan nilai respons serta pernapasan.", "👋"],
      ["Minta bantuan", "Cari bantuan darurat bila korban tidak merespons atau memburuk.", "📞"],
      ["Pantau", "Tetap bersama korban dan pantau perubahan kondisi.", "👀"]
    ]
  },
  "cpr": {
    "title": "RJP / CPR",
    "emoji": "🫀",
    "severity": "DARURAT",
    "summary": "Panduan awal untuk dewasa yang tidak responsif dan tidak bernapas normal.",
    "warning": "Ini kegawatdaruratan. Untuk anak atau bayi, teknik berbeda: ikuti arahan operator 119/112.",
    "do": ["Panggil 119/112 dan aktifkan pengeras suara.", "Minta orang lain mencari AED.", "Tekan keras dan cepat di tengah dada tanpa henti."],
    "dont": ["Jangan menunda memulai kompresi.", "Jangan berhenti kecuali korban bergerak/bernapas, AED meminta, atau petugas mengambil alih."],
    "steps": [
      ["Pastikan aman", "Periksa bahaya di sekitar, lalu tepuk bahu dan panggil korban dengan keras.", "🛡️"],
      ["Panggil bantuan", "Hubungi 119 atau 112 (pengeras suara) dan minta orang lain membawa AED.", "📞"],
      ["Periksa napas", "Lihat dada maksimal 10 detik. Jika tidak bernapas atau hanya megap-megap, mulai RJP.", "🫁"],
      ["Tekan dada", "Tumit satu tangan di tengah dada, tangan lain di atasnya, lengan lurus. Tekan sedalam 5–6 cm, 100–120 kali/menit, biarkan dada naik penuh. Gunakan metronom di bawah.", "🫀"],
      ["Gunakan AED", "Bila AED tiba, nyalakan dan ikuti perintah suaranya. Lanjutkan sampai bantuan tiba.", "⚡"]
    ]
  },
  "fracture": {
    "title": "Cedera / Patah Tulang",
    "emoji": "🦴",
    "severity": "PERHATIAN",
    "summary": "Panduan awal untuk cedera yang dicurigai melibatkan tulang.",
    "warning": "Minimalkan gerakan dan jangan mencoba meluruskan tulang.",
    "do": ["Jaga bagian cedera tetap stabil.", "Cari bantuan medis bila cedera berat.", "Pantau kondisi umum."],
    "dont": ["Jangan mencoba meluruskan tulang.", "Jangan memaksa korban berjalan jika cedera pada kaki."],
    "steps": [
      ["Minimalkan gerakan", "Biarkan area tetap pada posisi yang nyaman dan stabil.", "🦴"],
      ["Jaga tetap stabil", "Gunakan penopang sederhana bila aman tanpa memaksa posisi.", "🩹"],
      ["Periksa tanda bahaya", "Waspadai perdarahan berat atau penurunan kesadaran.", "⚠️"],
      ["Cari bantuan", "Hubungi bantuan medis untuk cedera yang dicurigai patah.", "📞"]
    ]
  },
  "hypothermia": {
    "title": "Hipotermia",
    "emoji": "❄️",
    "severity": "PERHATIAN",
    "summary": "Panduan awal saat tubuh terlalu dingin.",
    "warning": "Pindahkan korban dari lingkungan dingin dan lindungi dari kehilangan panas.",
    "do": ["Pindahkan ke tempat yang lebih hangat dan aman.", "Lepaskan pakaian yang basah.", "Selimuti korban dan cari bantuan bila berat."],
    "dont": ["Jangan gunakan panas ekstrem langsung ke kulit.", "Jangan membiarkan korban sendirian bila kondisinya menurun."],
    "steps": [
      ["Cari tempat hangat", "Jauhkan dari hujan, angin, dan permukaan dingin.", "🏠"],
      ["Lepaskan pakaian basah", "Ganti atau lepaskan pakaian basah bila aman.", "🧥"],
      ["Selimuti", "Gunakan selimut atau lapisan kering untuk membantu mempertahankan panas.", "🧣"],
      ["Cari bantuan", "Cari bantuan medis bila korban bingung, sangat lemas, atau kondisinya memburuk.", "🚑"]
    ]
  },
  "asthma": {
    "title": "Sesak / Asma",
    "emoji": "🌬️",
    "severity": "PERHATIAN",
    "summary": "Panduan awal saat seseorang mengalami sesak atau gejala asma.",
    "warning": "Sesak berat atau sulit berbicara membutuhkan bantuan darurat.",
    "do": ["Bantu korban duduk nyaman.", "Jauhkan dari pemicu yang jelas bila aman.", "Bantu menggunakan obat yang memang diresepkan untuknya sesuai petunjuk."],
    "dont": ["Jangan memaksa korban berbaring bila membuat napas lebih sulit.", "Jangan menunda bantuan pada sesak berat."],
    "steps": [
      ["Dudukkan dengan nyaman", "Bantu korban berada pada posisi yang membuat napas lebih nyaman.", "🪑"],
      ["Jauhkan pemicu", "Pindahkan dari asap, debu, atau pemicu yang jelas bila aman.", "🚫"],
      ["Bantu obat yang diresepkan", "Jika korban memiliki inhaler/obat yang diresepkan, bantu sesuai petunjuk yang sudah diberikan tenaga medis.", "💊"],
      ["Cari bantuan", "Hubungi bantuan jika sesak berat, memburuk, atau korban sulit berbicara.", "🚑"]
    ]
  },
  "allergy": {
    "title": "Reaksi Alergi Berat",
    "emoji": "🚨",
    "severity": "DARURAT",
    "summary": "Waspadai pembengkakan cepat, sesak, atau tanda reaksi alergi berat.",
    "warning": "Reaksi alergi berat dapat memburuk cepat.",
    "do": ["Hubungi bantuan darurat bila ada kesulitan bernapas atau penurunan kesadaran.", "Jika korban memiliki obat darurat yang diresepkan, bantu sesuai rencana medisnya."],
    "dont": ["Jangan menunggu gejala berat memburuk.", "Jangan memberi obat baru sembarangan."],
    "steps": [
      ["Kenali tanda bahaya", "Perhatikan sesak, pembengkakan wajah/bibir, pingsan, atau penurunan kesadaran.", "⚠️"],
      ["Hubungi bantuan", "Segera cari layanan darurat pada gejala berat.", "📞"],
      ["Bantu rencana medis", "Jika ada obat darurat yang memang diresepkan, bantu sesuai petunjuk medisnya.", "💉"],
      ["Pantau", "Tetap bersama korban dan pantau sampai bantuan tiba.", "👀"]
    ]
  },
  "seizure": {
    "title": "Kejang",
    "emoji": "⚡",
    "severity": "DARURAT",
    "summary": "Panduan awal untuk melindungi seseorang yang sedang kejang.",
    "warning": "Lindungi korban dari benda keras dan jangan memasukkan apa pun ke mulut.",
    "do": ["Jauhkan benda keras atau tajam di sekitar korban.", "Lindungi kepala dengan benda lembut bila memungkinkan.", "Catat durasi dan cari bantuan bila kejang lama/berulang atau kondisi memburuk."],
    "dont": ["Jangan menahan gerakan korban dengan paksa.", "Jangan memasukkan benda atau jari ke mulut.", "Jangan memberikan makan/minum saat belum sadar penuh."],
    "steps": [
      ["Amankan area", "Jauhkan benda yang bisa melukai korban.", "🛡️"],
      ["Lindungi kepala", "Letakkan benda lembut di bawah kepala jika aman.", "🧸"],
      ["Jangan menahan paksa", "Biarkan kejang berlangsung tanpa memasukkan apa pun ke mulut.", "🚫"],
      ["Pantau durasi", "Catat lama kejang dan kondisi korban.", "⏱️"],
      ["Cari bantuan", "Hubungi layanan darurat jika kondisi berat atau tidak pulih seperti biasa.", "📞"]
    ]
  },
  "nosebleed": {
    "title": "Mimisan",
    "emoji": "👃",
    "severity": "PERHATIAN",
    "summary": "Panduan awal untuk perdarahan dari hidung.",
    "warning": "Duduk tegak dan condongkan kepala ke depan.",
    "do": ["Duduk tegak.", "Condongkan kepala sedikit ke depan.", "Tekan bagian lunak hidung secara terus-menerus sesuai panduan."],
    "dont": ["Jangan menengadahkan kepala.", "Jangan memasukkan benda keras ke dalam hidung.", "Cari bantuan bila perdarahan berat atau menetap."],
    "steps": [
      ["Duduk tegak", "Bantu korban duduk dan tetap tenang.", "🪑"],
      ["Condong ke depan", "Arahkan kepala sedikit ke depan agar darah tidak mengalir ke belakang.", "↘️"],
      ["Tekan hidung", "Tekan bagian lunak hidung dengan lembut dan stabil.", "👃"],
      ["Cari bantuan", "Cari bantuan bila perdarahan berat, berulang, atau tidak membaik.", "📞"]
    ]
  },
  "heatstroke": {
    "title": "Paparan Panas",
    "emoji": "☀️",
    "severity": "DARURAT",
    "summary": "Panduan awal saat seseorang mengalami gangguan akibat panas.",
    "warning": "Pindahkan ke tempat sejuk dan anggap serius bila kesadaran berubah.",
    "do": ["Pindahkan ke tempat sejuk.", "Kurangi pakaian berlebih.", "Cari bantuan medis segera bila ada kebingungan atau penurunan kesadaran."],
    "dont": ["Jangan meninggalkan korban sendirian saat kondisi berubah.", "Jangan menunda bantuan untuk gejala berat."],
    "steps": [
      ["Cari tempat sejuk", "Pindahkan korban dari panas langsung.", "🌳"],
      ["Kurangi panas", "Longgarkan pakaian berlebih dan bantu proses pendinginan yang aman.", "💧"],
      ["Pantau kesadaran", "Perhatikan kebingungan, pingsan, atau kondisi yang memburuk.", "👀"],
      ["Hubungi bantuan", "Cari bantuan darurat untuk kondisi berat.", "🚑"]
    ]
  },
  "eyeinjury": {
    "title": "Cedera / Iritasi Mata",
    "emoji": "👁️",
    "severity": "PERHATIAN",
    "summary": "Panduan awal saat mata terkena debu, benda asing, atau cairan iritan.",
    "warning": "Nyeri berat, gangguan penglihatan, atau bahan kimia memerlukan pertolongan segera.",
    "do": ["Hindari mengucek mata.", "Bilas dengan air bersih bila sesuai jenis paparan.", "Cari bantuan untuk nyeri berat atau gangguan penglihatan."],
    "dont": ["Jangan mengucek/menekan bola mata.", "Jangan mencoba menarik benda yang menancap."],
    "steps": [
      ["Jangan mengucek", "Jaga tangan tetap bersih dan hindari menekan mata.", "👁️"],
      ["Kenali paparan", "Perhatikan apakah masalah karena debu, benda asing, atau cairan.", "🔎"],
      ["Bilas bila sesuai", "Untuk paparan yang memerlukan pembilasan, gunakan air bersih mengalir.", "💧"],
      ["Cari bantuan", "Hubungi bantuan untuk nyeri berat, gangguan penglihatan, atau paparan bahan kimia.", "📞"]
    ]
  },
  "poisoning": {
    "title": "Keracunan / Paparan Bahan Berbahaya",
    "emoji": "☣️",
    "severity": "DARURAT",
    "summary": "Panduan awal saat seseorang diduga terpapar atau tertelan bahan berbahaya.",
    "warning": "Jangan membuat korban muntah kecuali diarahkan tenaga profesional.",
    "do": ["Jauhkan korban dari sumber paparan jika aman.", "Simpan kemasan/nama bahan.", "Hubungi bantuan medis untuk arahan."],
    "dont": ["Jangan membuat korban muntah tanpa arahan profesional.", "Jangan memberi makanan/minuman sembarangan.", "Jangan menyentuh bahan berbahaya tanpa perlindungan yang sesuai."],
    "steps": [
      ["Amankan area", "Jauhkan dari sumber paparan tanpa membahayakan penolong.", "🛡️"],
      ["Kenali bahan", "Catat nama bahan atau simpan kemasan jika aman.", "🧴"],
      ["Jangan membuat muntah", "Jangan mencoba memicu muntah tanpa arahan profesional.", "🚫"],
      ["Hubungi bantuan", "Sampaikan bahan dan kondisi korban kepada petugas.", "📞"]
    ]
  },
  "snakebite": {
    "title": "Gigitan Ular",
    "emoji": "🐍",
    "severity": "DARURAT",
    "summary": "Panduan awal setelah dugaan gigitan ular.",
    "warning": "Jauhkan korban dari ular dan cari bantuan medis segera.",
    "do": ["Jaga korban tetap tenang dan minimalkan gerakan.", "Cari pertolongan medis secepat mungkin.", "Catat ciri ular dari jarak aman bila memungkinkan."],
    "dont": ["Jangan mengejar atau menangkap ular.", "Jangan menyayat atau mengisap luka.", "Jangan memasang tindakan ekstrem tanpa arahan profesional."],
    "steps": [
      ["Jauhkan dari ular", "Pindahkan ke tempat aman tanpa mengejar ular.", "🐍"],
      ["Minimalkan gerakan", "Bantu korban tetap tenang dan kurangi aktivitas.", "🧘"],
      ["Cari bantuan medis", "Hubungi layanan darurat atau menuju fasilitas medis secepat mungkin.", "🚑"],
      ["Catat informasi", "Bila aman dari jarak jauh, ingat warna/ciri ular untuk petugas.", "🔎"]
    ]
  },
  "toothache": {
    "title": "Sakit Gigi",
    "emoji": "🦷",
    "severity": "PERHATIAN",
    "summary": "Panduan awal untuk mengurangi keluhan sambil mencari pemeriksaan gigi.",
    "warning": "Pembengkakan wajah, demam tinggi, atau sulit bernapas/menelan membutuhkan bantuan segera.",
    "do": ["Jaga kebersihan mulut dengan lembut.", "Kompres dingin dari luar bila membantu mengurangi bengkak.", "Atur pemeriksaan dokter gigi."],
    "dont": ["Jangan menaruh obat langsung pada gusi tanpa petunjuk.", "Jangan menunda bantuan bila ada pembengkakan berat atau gangguan napas/menelan."],
    "steps": [
      ["Jaga kebersihan", "Bersihkan mulut dengan lembut dan hindari area yang sangat nyeri.", "🪥"],
      ["Kompres dari luar", "Gunakan kompres dingin pada bagian luar pipi bila nyaman.", "🧊"],
      ["Pantau tanda bahaya", "Waspadai demam, bengkak cepat, atau sulit menelan/bernapas.", "⚠️"],
      ["Cari pemeriksaan", "Atur pemeriksaan dokter gigi agar penyebabnya ditangani.", "🦷"]
    ]
  },
  "sprain": {
    "title": "Keseleo / Terkilir",
    "emoji": "🦶",
    "severity": "PERHATIAN",
    "summary": "Panduan awal untuk cedera jaringan lunak seperti keseleo.",
    "warning": "Nyeri hebat, bentuk tidak normal, atau tidak dapat menapak membutuhkan evaluasi medis.",
    "do": ["Hentikan aktivitas yang menyebabkan nyeri.", "Jaga area tetap nyaman dan kurangi beban.", "Cari pemeriksaan bila nyeri berat atau tidak membaik."],
    "dont": ["Jangan memaksa berjalan atau berolahraga.", "Jangan mengabaikan deformitas atau mati rasa."],
    "steps": [
      ["Berhenti beraktivitas", "Hentikan gerakan yang memperparah nyeri.", "🛑"],
      ["Istirahatkan area", "Kurangi beban pada bagian yang cedera.", "🦶"],
      ["Pantau kondisi", "Waspadai bengkak berat, deformitas, atau mati rasa.", "👀"],
      ["Cari pemeriksaan", "Temui tenaga kesehatan bila gejala berat atau menetap.", "🧑‍⚕️"]
    ]
  },
  "cut": {
    "title": "Luka Sayat",
    "emoji": "🔪",
    "severity": "PERHATIAN",
    "summary": "Panduan awal untuk luka sayat atau luka terbuka kecil.",
    "warning": "Pendarahan berat atau luka dalam membutuhkan pertolongan medis.",
    "do": ["Cuci tangan sebelum membantu jika memungkinkan.", "Tekan perdarahan dengan bahan bersih.", "Tutup luka setelah perdarahan terkendali."],
    "dont": ["Jangan menyentuh luka dengan tangan kotor.", "Jangan mengeluarkan benda yang tertancap."],
    "steps": [
      ["Cuci tangan", "Bersihkan tangan sebelum membantu bila memungkinkan.", "🧼"],
      ["Tekan luka", "Gunakan bahan bersih untuk menekan perdarahan.", "✋"],
      ["Tutup luka", "Lindungi luka dengan penutup bersih setelah perdarahan terkendali.", "🩹"],
      ["Cari bantuan", "Cari bantuan bila luka dalam, luas, atau perdarahan tidak berhenti.", "🚑"]
    ]
  },
  "stroke": {
    "title": "Tanda Stroke",
    "emoji": "🧠",
    "severity": "DARURAT",
    "summary": "Kenali tanda mendadak seperti wajah mencong, lengan lemah, atau bicara pelo.",
    "warning": "Stroke membutuhkan bantuan medis segera. Catat kapan gejala mulai.",
    "do": ["Gunakan tanda FAST: wajah, lengan, bicara, waktu.", "Catat waktu mulai gejala atau terakhir kali terlihat normal.", "Hubungi layanan darurat segera dan tetap bersama korban."],
    "dont": ["Jangan menunggu gejala membaik sendiri.", "Jangan memberi makan atau minum bila kesulitan menelan atau kesadaran menurun."],
    "steps": [
      ["Periksa wajah", "Minta tersenyum dan lihat apakah salah satu sisi wajah turun.", "🙂"],
      ["Periksa lengan", "Minta mengangkat kedua lengan dan perhatikan kelemahan di satu sisi.", "💪"],
      ["Periksa bicara", "Minta mengucapkan kalimat sederhana dan perhatikan bicara pelo atau sulit.", "🗣️"],
      ["Catat waktu", "Catat kapan gejala dimulai atau kapan terakhir terlihat normal.", "⏱️"],
      ["Hubungi bantuan", "Cari bantuan darurat segera dan tetap bersama korban.", "🚑"]
    ]
  },
  "chestpain": {
    "title": "Nyeri Dada",
    "emoji": "❤️",
    "severity": "DARURAT",
    "summary": "Nyeri atau tekanan dada dapat merupakan keadaan gawat, terutama bila disertai sesak atau keringat dingin.",
    "warning": "Jangan mengabaikan nyeri dada baru, berat, atau memburuk.",
    "do": ["Hentikan aktivitas dan bantu korban berada pada posisi nyaman.", "Hubungi layanan darurat bila nyeri berat, menetap, atau disertai sesak/pingsan.", "Pantau respons dan pernapasan."],
    "dont": ["Jangan membiarkan korban menyetir sendiri ke fasilitas kesehatan.", "Jangan menunda bantuan hanya karena gejala sempat berkurang."],
    "steps": [
      ["Hentikan aktivitas", "Bantu korban berhenti beraktivitas dan tetap tenang.", "🛑"],
      ["Posisi nyaman", "Biarkan korban duduk atau mengambil posisi yang paling nyaman untuk bernapas.", "🪑"],
      ["Cari tanda bahaya", "Perhatikan sesak, keringat dingin, pingsan, atau nyeri yang menjalar.", "⚠️"],
      ["Hubungi bantuan", "Jika gejala berat atau menetap, hubungi layanan darurat.", "📞"],
      ["Pantau", "Tetap bersama korban dan pantau respons serta pernapasan.", "👀"]
    ]
  },
  "hypoglycemia": {
    "title": "Gula Darah Rendah",
    "emoji": "🍬",
    "severity": "DARURAT",
    "summary": "Waspadai gemetar, berkeringat, lemas, bingung, atau perubahan kesadaran pada penderita diabetes.",
    "warning": "Jika korban sadar dan dapat menelan, gunakan sumber gula cepat sesuai rencana perawatan yang dimilikinya.",
    "do": ["Pastikan korban cukup sadar untuk menelan sebelum memberikan sesuatu melalui mulut.", "Bantu menggunakan sumber gula cepat yang memang biasa digunakan sesuai rencana medis.", "Cari bantuan bila tidak membaik atau kesadaran menurun."],
    "dont": ["Jangan memberikan makanan/minuman melalui mulut kepada orang yang tidak sadar.", "Jangan menunda bantuan pada perubahan kesadaran."],
    "steps": [
      ["Periksa kesadaran", "Pastikan korban dapat merespons dan menelan dengan aman.", "👀"],
      ["Ikuti rencana medis", "Bila korban sadar dan punya rencana diabetes, bantu mengikuti rencana tersebut.", "🩺"],
      ["Pantau perubahan", "Perhatikan apakah gemetar, berkeringat, bingung, atau lemas membaik.", "⏱️"],
      ["Cari bantuan", "Hubungi layanan darurat bila korban tidak responsif atau kondisinya memburuk.", "🚑"]
    ]
  },
  "dehydration": {
    "title": "Dehidrasi",
    "emoji": "💧",
    "severity": "PERHATIAN",
    "summary": "Waspadai haus berat, mulut kering, pusing, lemas, atau urine yang jauh berkurang.",
    "warning": "Dehidrasi berat atau korban tidak mampu minum membutuhkan bantuan medis.",
    "do": ["Pindahkan ke tempat yang nyaman dan tidak terlalu panas.", "Jika sadar dan dapat menelan, berikan cairan sedikit-sedikit dan bertahap.", "Cari bantuan bila ada tanda berat atau kondisi tidak membaik."],
    "dont": ["Jangan memaksa minum pada korban yang muntah terus atau kesadarannya menurun.", "Jangan mengabaikan tanda syok atau penurunan kesadaran."],
    "steps": [
      ["Cari tempat nyaman", "Jauhkan dari panas dan bantu korban beristirahat.", "🏠"],
      ["Berikan cairan bila aman", "Jika sadar dan bisa menelan, tawarkan cairan sedikit-sedikit.", "💧"],
      ["Pantau kondisi", "Perhatikan pusing, lemas, muntah, dan jumlah urine.", "👀"],
      ["Cari bantuan", "Hubungi bantuan bila gejala berat atau korban tidak mampu mempertahankan cairan.", "📞"]
    ]
  },
  "shock": {
    "title": "Tanda Syok",
    "emoji": "🛑",
    "severity": "DARURAT",
    "summary": "Tanda seperti kulit pucat/dingin, napas cepat, nadi lemah, atau perubahan kesadaran dapat menunjukkan syok.",
    "warning": "Syok adalah keadaan yang mengancam nyawa dan membutuhkan pertolongan medis segera.",
    "do": ["Hubungi bantuan darurat segera.", "Atasi penyebab yang aman dilakukan, misalnya menekan perdarahan luar yang terlihat.", "Jaga korban tetap nyaman dan terlindung dari dingin/panas berlebihan."],
    "dont": ["Jangan memberikan makan atau minum kepada korban dengan tanda syok.", "Jangan meninggalkan korban sendirian."],
    "steps": [
      ["Kenali tanda syok", "Perhatikan kulit pucat/dingin, napas cepat, lemah, atau perubahan kesadaran.", "⚠️"],
      ["Cari penyebab yang terlihat", "Bila ada perdarahan luar yang terlihat, bantu kendalikan sesuai panduan.", "🩸"],
      ["Hubungi bantuan", "Cari layanan darurat segera.", "📞"],
      ["Pantau", "Tetap bersama korban dan pantau pernapasan serta respons.", "👀"]
    ]
  },
  "headinjury": {
    "title": "Cedera Kepala",
    "emoji": "🧠",
    "severity": "DARURAT",
    "summary": "Benturan kepala dapat disertai perubahan kesadaran, muntah, kejang, atau gangguan gerak/bicara.",
    "warning": "Jangan meminta korban bergerak bila ada kecurigaan cedera leher atau tulang belakang.",
    "do": ["Biarkan korban tetap pada posisi ditemukan bila aman.", "Pantau kesadaran, pernapasan, dan perubahan perilaku.", "Cari bantuan segera bila ada tanda bahaya."],
    "dont": ["Jangan mengangkat atau memindahkan korban tanpa kebutuhan keselamatan, CPR, atau pengendalian perdarahan.", "Jangan mengabaikan muntah berulang, kejang, atau penurunan kesadaran."],
    "steps": [
      ["Jangan paksa bergerak", "Biarkan korban tetap pada posisi ditemukan bila lokasi aman.", "🛑"],
      ["Pantau respons", "Perhatikan kesadaran, bicara, gerak, dan pernapasan.", "👀"],
      ["Kenali tanda bahaya", "Waspadai kejang, muntah berulang, kebingungan, atau kelemahan.", "⚠️"],
      ["Hubungi bantuan", "Cari pertolongan medis segera pada tanda bahaya.", "🚑"]
    ]
  },
  "electric": {
    "title": "Sengatan Listrik",
    "emoji": "⚡",
    "severity": "DARURAT",
    "summary": "Sengatan listrik dapat menyebabkan luka bakar atau gangguan irama jantung.",
    "warning": "Jangan menyentuh korban sebelum sumber listrik diputus dan area aman.",
    "do": ["Putuskan sumber listrik bila dapat dilakukan tanpa risiko.", "Setelah area aman, periksa respons dan pernapasan.", "Cari bantuan medis untuk sengatan listrik, terutama bila korban pingsan atau mengalami luka bakar."],
    "dont": ["Jangan menyentuh korban yang masih terhubung dengan sumber listrik.", "Jangan mendekati kabel atau area basah yang masih berbahaya."],
    "steps": [
      ["Amankan sumber listrik", "Putuskan listrik dari sumber yang aman bila memungkinkan.", "🔌"],
      ["Pastikan area aman", "Jangan mendekati kabel hidup atau permukaan basah berbahaya.", "⚠️"],
      ["Periksa respons dan napas", "Setelah aman, nilai respons dan pernapasan korban.", "🫁"],
      ["Hubungi bantuan", "Cari bantuan medis segera sesuai kondisi korban.", "🚑"]
    ]
  },
  "bruise": {
    "title": "Memar / Benturan Ringan",
    "emoji": "🟣",
    "severity": "PERHATIAN",
    "summary": "Panduan awal untuk memar atau benturan ringan tanpa tanda bahaya.",
    "warning": "Cari bantuan bila nyeri hebat, bengkak besar, deformitas, atau kondisi memburuk.",
    "do": ["Hentikan aktivitas yang memperparah nyeri.", "Istirahatkan area yang terkena dan gunakan kompres dingin yang dibungkus kain secara berkala.", "Pantau perubahan nyeri, bengkak, dan fungsi anggota tubuh."],
    "dont": ["Jangan menekan es langsung ke kulit.", "Jangan memaksa bagian tubuh yang cedera digunakan bila sangat nyeri."],
    "steps": [
      ["Hentikan aktivitas", "Kurangi gerakan yang menambah nyeri.", "🛑"],
      ["Kompres dingin dengan aman", "Gunakan kompres dingin yang dibungkus kain pada area memar.", "🧊"],
      ["Pantau", "Perhatikan nyeri, bengkak, dan kemampuan bergerak.", "👀"],
      ["Cari bantuan", "Periksa bila gejala berat, tidak membaik, atau ada deformitas.", "🧑‍⚕️"]
    ]
  },
  "vomiting": {
    "title": "Muntah / Diare",
    "emoji": "🤢",
    "severity": "PERHATIAN",
    "summary": "Keluhan muntah atau diare dapat menyebabkan dehidrasi, terutama pada anak dan lansia.",
    "warning": "Cari bantuan bila tidak dapat mempertahankan cairan, ada darah, penurunan kesadaran, atau tanda dehidrasi berat.",
    "do": ["Berikan cairan sedikit-sedikit bila korban sadar dan dapat menelan.", "Pantau tanda dehidrasi seperti pusing, lemas, atau urine berkurang.", "Cari bantuan bila gejala berat atau berkepanjangan."],
    "dont": ["Jangan memaksa minum dalam jumlah besar sekaligus.", "Jangan mengabaikan darah dalam muntah/tinja atau penurunan kesadaran."],
    "steps": [
      ["Istirahat", "Bantu korban beristirahat dan tetap nyaman.", "🛋️"],
      ["Berikan cairan sedikit-sedikit", "Tawarkan air atau larutan rehidrasi oral bila sadar dan mampu menelan.", "💧"],
      ["Pantau hidrasi", "Perhatikan pusing, mulut kering, dan frekuensi buang air kecil.", "👀"],
      ["Cari bantuan", "Hubungi tenaga kesehatan bila ada tanda bahaya atau tidak membaik.", "📞"]
    ]
  },
  "cramp": {
    "title": "Kram Otot",
    "emoji": "🦵",
    "severity": "PERHATIAN",
    "summary": "Kram otot sering muncul saat aktivitas fisik atau kehilangan cairan.",
    "warning": "Hentikan aktivitas bila kram berat atau disertai gejala lain.",
    "do": ["Hentikan aktivitas dan istirahatkan otot yang kram.", "Lakukan peregangan lembut bila dapat dilakukan tanpa memperparah nyeri.", "Jaga hidrasi jika korban sadar dan dapat minum."],
    "dont": ["Jangan memaksa gerakan yang menambah nyeri.", "Jangan mengabaikan pusing berat, pingsan, atau kebingungan."],
    "steps": [
      ["Hentikan aktivitas", "Berhenti dari aktivitas yang memicu kram.", "🛑"],
      ["Peregangan lembut", "Regangkan otot perlahan bila nyaman.", "🦵"],
      ["Istirahat dan hidrasi", "Beristirahat dan minum sedikit demi sedikit bila aman.", "💧"],
      ["Pantau", "Cari bantuan bila gejala berat, berulang, atau disertai tanda bahaya.", "👀"]
    ]
  },
  "drowning": {
    "title": "Tenggelam",
    "emoji": "🌊",
    "severity": "DARURAT",
    "summary": "Korban diangkat dari air dan tidak bernapas normal atau tampak lemah.",
    "warning": "Jangan terjun ke air bila tidak terlatih: jangkau dari tepi agar penolong tidak ikut menjadi korban.",
    "do": ["Panggil 115/119/112 dan minta orang lain mencari pelampung, tali, atau kayu panjang.", "Setelah di darat, periksa respons dan napas.", "Bila tidak bernapas normal, mulai RJP sesuai arahan operator."],
    "dont": ["Jangan menekan perut untuk mengeluarkan air.", "Jangan menganggap aman bila korban tampak pulih: tetap periksa ke fasilitas kesehatan."],
    "steps": [
      ["Jangkau dari tepi", "Julurkan tali, kayu, atau pelampung. Jangan terjun bila tidak terlatih.", "🛟"],
      ["Angkat dari air", "Bawa korban ke tempat datar dan aman, jaga kepala dan leher tetap sejajar.", "🏊"],
      ["Periksa napas", "Panggil korban, lihat dada maksimal 10 detik. Bila tidak bernapas normal, hubungi 119/112 dan mulai RJP.", "🫁"],
      ["Hangatkan dan periksakan", "Ganti pakaian basah, selimuti, dan bawa ke IGD walau tampak sudah pulih.", "🚑"]
    ]
  },
  "animalbite": {
    "title": "Gigitan Anjing / Kucing / Monyet",
    "emoji": "🐕",
    "severity": "DARURAT",
    "summary": "Gigitan atau cakaran hewan berisiko infeksi dan rabies.",
    "warning": "Segera ke fasilitas kesehatan untuk penilaian vaksin anti-rabies (VAR) dan serum bila perlu, walau luka tampak kecil.",
    "do": ["Cuci luka dengan sabun dan air mengalir minimal 15 menit.", "Beri antiseptik (misalnya povidone iodine) setelah dicuci.", "Segera ke puskesmas/rumah sakit; catat ciri dan kondisi hewan."],
    "dont": ["Jangan menutup rapat atau menjahit luka sendiri.", "Jangan memakai ramuan atau obat tradisional pada luka.", "Jangan menunda karena hewan tampak sehat."],
    "steps": [
      ["Cuci dengan sabun", "Alirkan air bersih dan sabun pada luka minimal 15 menit.", "🧼"],
      ["Beri antiseptik", "Oleskan antiseptik, lalu tutup longgar dengan kasa bersih.", "🩹"],
      ["Segera ke faskes", "Minta penilaian VAR/SAR dan pencegahan tetanus.", "🏥"],
      ["Amati hewan", "Bila aman, catat pemilik dan kondisi hewan untuk petugas kesehatan.", "🔎"]
    ]
  },
  "fever": {
    "title": "Demam Tinggi pada Anak",
    "emoji": "🌡️",
    "severity": "PERHATIAN",
    "summary": "Demam pada anak sering menandai infeksi; nilai kondisi umum, bukan hanya angka suhu.",
    "warning": "Bayi di bawah 3 bulan yang demam, atau demam disertai kejang, kaku kuduk, sesak, atau sangat lemas: segera ke IGD.",
    "do": ["Beri cairan sedikit-sedikit tetapi sering.", "Kenakan pakaian tipis dan jaga ruangan sejuk.", "Beri parasetamol sesuai dosis pada kemasan atau anjuran tenaga kesehatan."],
    "dont": ["Jangan mengompres dengan alkohol.", "Jangan menyelimuti tebal.", "Jangan memberi aspirin pada anak."],
    "steps": [
      ["Ukur suhu", "Gunakan termometer dan catat suhu serta jamnya.", "🌡️"],
      ["Buat nyaman", "Pakaian tipis, ruangan sejuk, kompres hangat bila anak nyaman.", "👕"],
      ["Beri cairan", "Air putih, ASI, atau oralit sedikit-sedikit tetapi sering.", "💧"],
      ["Waspadai tanda bahaya", "Kejang, sangat lemas, ruam, sesak, tidak mau minum, atau demam lebih dari 3 hari: ke IGD.", "⚠️"]
    ]
  },
  "dengue": {
    "title": "Waspada Demam Berdarah (DBD)",
    "emoji": "🦟",
    "severity": "DARURAT",
    "summary": "Demam 2–7 hari disertai nyeri kepala, pegal, mual, atau ruam dapat menandai demam berdarah.",
    "warning": "Fase kritis biasanya saat demam mulai turun: waspadai tanda bahaya dan segera ke IGD bila muncul.",
    "do": ["Banyak minum (air putih, oralit) dan istirahat.", "Periksakan ke fasilitas kesehatan sejak dini untuk pemeriksaan darah.", "Beri parasetamol sesuai anjuran untuk demam."],
    "dont": ["Jangan memberi aspirin atau ibuprofen (risiko perdarahan).", "Jangan merasa aman hanya karena demam turun."],
    "steps": [
      ["Kenali gejala", "Demam mendadak tinggi, nyeri kepala, nyeri belakang mata, pegal, mual, atau ruam.", "🌡️"],
      ["Cairan dan istirahat", "Perbanyak minum, istirahat, dan pantau kondisi setiap hari.", "💧"],
      ["Kenali tanda bahaya", "Nyeri perut hebat, muntah terus, perdarahan gusi/mimisan/BAB hitam, sangat lemas atau gelisah, tangan-kaki dingin.", "🚨"],
      ["Segera ke IGD", "Bila ada tanda bahaya, jangan menunggu. Cegah nyamuk dengan 3M.", "🚑"]
    ]
  },
  "impaled": {
    "title": "Benda Menancap / Luka Tusuk",
    "emoji": "🔪",
    "severity": "DARURAT",
    "summary": "Benda tajam menancap di tubuh dapat menutup sekaligus merusak pembuluh darah dan organ.",
    "warning": "Jangan mencabut benda yang menancap. Stabilkan dan panggil bantuan.",
    "do": ["Panggil 119/112.", "Stabilkan benda dengan kain atau kasa tebal di sekelilingnya.", "Tekan di sekitar benda (bukan pada benda) bila berdarah."],
    "dont": ["Jangan mencabut, menggoyang, atau memendekkan benda.", "Jangan menekan langsung pada benda."],
    "steps": [
      ["Jangan dicabut", "Biarkan benda tetap di tempat; mencabut dapat memperparah perdarahan.", "🚫"],
      ["Stabilkan", "Tumpuk kasa atau kain di kedua sisi lalu balut longgar agar benda tidak bergerak.", "🩹"],
      ["Kendalikan perdarahan", "Tekan di sekitar benda, bukan pada benda.", "✋"],
      ["Pantau dan tunggu bantuan", "Waspadai pucat, dingin, lemas, atau pingsan (tanda syok).", "🚑"]
    ]
  },
  "smoke": {
    "title": "Terhirup Asap",
    "emoji": "💨",
    "severity": "DARURAT",
    "summary": "Asap kebakaran dapat merusak saluran napas dan mengurangi oksigen, bahkan tanpa luka bakar.",
    "warning": "Batuk, suara serak, sesak, pusing, bingung, atau wajah berjelaga: butuh pemeriksaan segera.",
    "do": ["Pindahkan korban ke udara segar dan panggil 113/119.", "Bantu korban duduk tegak agar lebih mudah bernapas.", "Bila tidak bernapas normal, mulai RJP."],
    "dont": ["Jangan kembali ke dalam bangunan.", "Jangan menunggu gejala memburuk untuk mencari bantuan."],
    "steps": [
      ["Keluar dengan aman", "Merunduk rendah, tutup hidung dan mulut dengan kain basah, ikuti jalur evakuasi.", "🚪"],
      ["Udara segar", "Bawa korban jauh dari asap, longgarkan pakaian ketat.", "🌬️"],
      ["Nilai napas dan kesadaran", "Perhatikan sesak, batuk, dan kebingungan.", "🫁"],
      ["Periksa ke IGD", "Walau tampak ringan, asap dapat menimbulkan keluhan tertunda.", "🚑"]
    ]
  },
  "spine": {
    "title": "Dugaan Cedera Leher / Tulang Belakang",
    "emoji": "🦴",
    "severity": "DARURAT",
    "summary": "Curigai bila korban jatuh dari ketinggian, kecelakaan lalu lintas, atau terjun ke air dangkal.",
    "warning": "Jangan menggerakkan korban kecuali ada bahaya langsung (api, tenggelam).",
    "do": ["Minta korban tetap diam dan tidak menoleh.", "Topang kepala dan leher dalam posisi seperti ditemukan.", "Hubungi 119/112."],
    "dont": ["Jangan menarik atau mengangkat korban.", "Jangan melepas helm kecuali menghalangi napas."],
    "steps": [
      ["Jangan gerakkan", "Minta korban tetap diam dan tenang.", "🛑"],
      ["Topang kepala", "Letakkan tangan di kedua sisi kepala agar tidak bergerak.", "🙌"],
      ["Pantau napas dan kesadaran", "Bila muntah atau tidak bernapas, ikuti arahan operator.", "👀"],
      ["Tunggu tenaga medis", "Jangan memberi makan atau minum.", "🚑"]
    ]
  },
  "amputation": {
    "title": "Anggota Tubuh Terputus",
    "emoji": "✂️",
    "severity": "DARURAT",
    "summary": "Perdarahan berat dan syok adalah bahaya utama; bagian yang terputus bisa disambung bila dirawat benar.",
    "warning": "Prioritaskan menghentikan perdarahan dan memanggil 119/112 sebelum mengurus bagian yang terputus.",
    "do": ["Tekan luka dengan kain bersih tanpa melepasnya.", "Bungkus bagian terputus dengan kasa bersih yang lembap, masukkan kantong plastik tertutup, lalu taruh dalam wadah berisi es.", "Baringkan korban dan pantau tanda syok."],
    "dont": ["Jangan menempelkan bagian terputus langsung pada es.", "Jangan mencuci dengan cairan keras.", "Jangan menunda bantuan demi mencari bagian yang terputus."],
    "steps": [
      ["Tekan luka", "Tekan kuat dengan kain bersih. Bila darah tidak berhenti dan kamu terlatih, gunakan tourniquet pada lengan/tungkai.", "✋"],
      ["Panggil bantuan", "Hubungi 119/112.", "📞"],
      ["Rawat bagian terputus", "Bungkus kasa lembap, masukkan kantong plastik tertutup, letakkan di atas es.", "🧊"],
      ["Baringkan dan hangatkan", "Selimuti korban, pantau kesadaran, lalu bawa bagian terputus bersama korban.", "🚑"]
    ]
  }
};

const categories = [
  ["burns", "Luka Bakar", "Dinginkan area dan jauhkan dari panas.", "🔥", true],
  ["choking", "Tersedak", "Nilai napas dan minta bantuan.", "⚠", true],
  ["bleeding", "Pendarahan", "Tekan sumber perdarahan.", "●", true],
  ["bites", "Gigitan / Sengatan", "Waspadai reaksi berat.", "✦", false],
  ["fainting", "Pingsan", "Periksa respons dan pernapasan.", "!", false],
  ["cpr", "RJP / CPR", "Kegawatdaruratan napas abnormal.", "♥", true],
  ["fracture", "Patah Tulang", "Stabilkan area yang cedera.", "✚", false],
  ["hypothermia", "Hipotermia", "Lindungi dari kehilangan panas.", "❄", false],
  ["asthma", "Sesak / Asma", "Bantu korban bernapas lebih nyaman.", "≋", true],
  ["allergy", "Alergi Berat", "Waspadai sesak dan pembengkakan.", "!", true],
  ["seizure", "Kejang", "Lindungi korban dari cedera.", "⚡", true],
  ["nosebleed", "Mimisan", "Bantu hentikan perdarahan hidung.", "◇", false],
  ["heatstroke", "Paparan Panas", "Pindahkan ke tempat sejuk.", "☀", true],
  ["eyeinjury", "Cedera Mata", "Hindari mengucek dan nilai paparan.", "⊙", false],
  ["poisoning", "Keracunan", "Amankan paparan dan cari bantuan.", "☣", true],
  ["snakebite", "Gigitan Ular", "Cari bantuan medis segera.", "≈", true],
  ["toothache", "Sakit Gigi", "Kurangi keluhan dan jadwalkan pemeriksaan.", "✦", false],
  ["sprain", "Keseleo / Terkilir", "Istirahatkan bagian yang cedera.", "↗", false],
  ["cut", "Luka Sayat", "Tekan luka dan lindungi dengan bersih.", "✂", false],
  ["stroke", "Tanda Stroke", "Kenali FAST dan cari bantuan segera.", "🧠", true],
  ["chestpain", "Nyeri Dada", "Anggap serius bila baru, berat, atau disertai sesak.", "❤️", true],
  ["hypoglycemia", "Gula Darah Rendah", "Kenali gemetar, berkeringat, lemas, atau bingung.", "🍬", true],
  ["dehydration", "Dehidrasi", "Jaga cairan dan waspadai tanda berat.", "💧", false],
  ["shock", "Tanda Syok", "Pucat, dingin, lemah, atau perubahan kesadaran.", "🛑", true],
  ["headinjury", "Cedera Kepala", "Minimalkan gerak dan pantau tanda bahaya.", "🧠", true],
  ["electric", "Sengatan Listrik", "Putuskan sumber listrik sebelum menyentuh korban.", "⚡", true],
  ["bruise", "Memar / Benturan", "Istirahatkan dan kompres dingin dengan aman.", "🟣", false],
  ["vomiting", "Muntah / Diare", "Cegah dehidrasi dan pantau tanda bahaya.", "🤢", false],
  ["cramp", "Kram Otot", "Hentikan aktivitas, regangkan perlahan, dan istirahat.", "🦵", false],
  ["drowning", "Tenggelam", "Jangkau dari tepi dan periksa napas.", "🌊", true],
  ["animalbite", "Gigitan Hewan (Rabies)", "Cuci sabun 15 menit, segera ke faskes.", "🐕", true],
  ["fever", "Demam Tinggi Anak", "Cairan, pakaian tipis, waspadai tanda bahaya.", "🌡️", false],
  ["dengue", "Waspada DBD", "Kenali tanda bahaya saat demam turun.", "🦟", true],
  ["impaled", "Benda Menancap", "Jangan dicabut, stabilkan.", "🔪", true],
  ["smoke", "Terhirup Asap", "Udara segar dan periksa napas.", "💨", true],
  ["spine", "Cedera Leher / Tulang Belakang", "Jangan gerakkan korban.", "🦴", true],
  ["amputation", "Anggota Tubuh Terputus", "Tekan luka, rawat bagian terputus.", "✂️", true]
];

const disasters = [
  {
    "title": "Gempa Bumi",
    "emoji": "🌎",
    "tag": "Saat guncangan",
    "steps": ["Merunduk, lindungi kepala/leher, dan berlindung di tempat yang kokoh.", "Jauh dari kaca, lemari, dan benda yang dapat jatuh.", "Setelah guncangan berhenti, evakuasi melalui jalur aman bila diarahkan."]
  },
  {
    "title": "Banjir",
    "emoji": "🌊",
    "tag": "Air naik cepat",
    "steps": ["Pindah ke tempat yang lebih tinggi dan aman.", "Jangan berjalan atau berkendara menerobos arus deras.", "Matikan sumber listrik jika aman dan diarahkan petugas."]
  },
  {
    "title": "Kebakaran",
    "emoji": "🔥",
    "tag": "Asap / api",
    "steps": ["Berteriak meminta bantuan dan segera keluar melalui jalur evakuasi.", "Jangan menggunakan lift.", "Jika pakaian terbakar, berhenti, jatuhkan diri, dan berguling."]
  },
  {
    "title": "Tanah Longsor",
    "emoji": "⛰️",
    "tag": "Pergerakan tanah",
    "steps": ["Jauhkan diri dari lereng atau area yang bergerak.", "Ikuti jalur evakuasi resmi dan jangan kembali sebelum dinyatakan aman.", "Waspadai longsor susulan."]
  },
  {
    "title": "Gunung Api / Abu",
    "emoji": "🌋",
    "tag": "Erupsi",
    "steps": ["Ikuti zona evakuasi resmi dan arahan petugas.", "Gunakan perlindungan pernapasan/mata yang sesuai terhadap abu.", "Hindari sungai atau lembah yang berpotensi dilalui lahar."]
  },
  {
    "title": "Angin Kencang / Puting Beliung",
    "emoji": "🌪️",
    "tag": "Benda beterbangan",
    "steps": ["Masuk ke bangunan kokoh dan jauh dari jendela.", "Lindungi kepala dan berlindung di area bagian dalam bangunan.", "Setelah aman, periksa lingkungan sebelum keluar."]
  }
];

const videos = [
  {
    "tag": "🔥 LUKA BAKAR",
    "title": "Pertolongan pertama luka bakar",
    "desc": "British Red Cross — burn or scald first aid.",
    "id": "dQozahCH8IE",
    "url": "https://www.youtube.com/watch?v=dQozahCH8IE",
    "source": "British Red Cross",
    "sourceUrl": "https://www.redcross.org.uk/first-aid/learn-first-aid/burns-and-scalds",
    "transcript": "Jauhkan korban dari sumber panas. Dinginkan luka dengan air mengalir selama sekitar 20 menit. Lepaskan benda ketat jika mudah dilepas dan tidak menempel. Tutup longgar dengan bahan bersih. Jangan gunakan es, pasta gigi, minyak, atau pecahkan lepuhan. Cari bantuan medis untuk luka luas, dalam, atau mengenai area penting."
  },
  {
    "tag": "🫁 TERSEDAK",
    "title": "Membantu seseorang yang tersedak",
    "desc": "British Red Cross — choking first aid.",
    "id": "WeY4KJUnfMc",
    "url": "https://www.youtube.com/watch?v=WeY4KJUnfMc",
    "source": "British Red Cross",
    "sourceUrl": "https://www.redcross.org.uk/first-aid/learn-first-aid/choking",
    "transcript": "Nilai apakah korban masih dapat berbicara atau batuk. Jika batuk kuat, biarkan korban batuk. Jika tidak dapat bernapas atau berbicara, condongkan korban ke depan dan berikan hingga 5 tepukan punggung, lalu hingga 5 dorongan perut. Ulangi dan hubungi bantuan darurat. Jika tidak sadar, hubungi 119 atau 112 dan mulai RJP sesuai arahan operator."
  },
  {
    "tag": "🫀 RJP / CPR",
    "title": "Hands-Only CPR",
    "desc": "American Red Cross — compression-only CPR.",
    "id": "6eRwgM2Pa4o",
    "url": "https://www.youtube.com/watch?v=6eRwgM2Pa4o",
    "source": "American Red Cross",
    "sourceUrl": "https://www.redcross.org/take-a-class/cpr/performing-cpr/hands-only-cpr",
    "transcript": "Pastikan lokasi aman dan periksa respons korban. Hubungi layanan darurat dan minta AED. Jika korban tidak responsif dan tidak bernapas normal, letakkan tumit tangan di tengah dada. Tekan keras dan cepat dengan kecepatan 100 hingga 120 kali per menit. Ikuti instruksi AED saat tersedia dan lanjutkan sampai bantuan mengambil alih."
  },
  {
    "tag": "👃 MIMISAN",
    "title": "Nosebleed first aid steps",
    "desc": "British Red Cross — langkah penting menangani mimisan.",
    "id": "_d-Q76BoXJg",
    "url": "https://www.youtube.com/watch?v=_d-Q76BoXJg",
    "source": "British Red Cross",
    "sourceUrl": "https://www.redcross.org.uk/first-aid/learn-first-aid/nosebleed",
    "transcript": "Bantu korban duduk tegak dan sedikit condong ke depan. Jepit bagian lunak hidung dengan stabil. Minta korban bernapas melalui mulut dan tidak menelan darah. Cari bantuan jika perdarahan berat, berulang, atau tidak berhenti."
  },
  {
    "tag": "⚡ KEJANG",
    "title": "Seizure first aid steps",
    "desc": "British Red Cross — melindungi korban saat kejang.",
    "id": "YWPhudRkTxM",
    "url": "https://www.youtube.com/watch?v=YWPhudRkTxM",
    "source": "British Red Cross",
    "sourceUrl": "https://www.redcross.org.uk/first-aid/learn-first-aid/seizures",
    "transcript": "Jauhkan benda keras atau tajam dari korban dan lindungi kepalanya dengan benda lembut. Jangan menahan gerakan dan jangan memasukkan apa pun ke mulut. Catat durasi kejang. Setelah kejang berhenti, periksa napas dan tetap bersama korban. Hubungi bantuan jika kejang berlangsung lama, berulang, atau korban tidak pulih."
  }
];

const videoMap = {
  "burns": 0,
  "choking": 1,
  "cpr": 2,
  "nosebleed": 3,
  "seizure": 4
};
