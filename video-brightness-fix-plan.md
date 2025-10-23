# Rencana Perbaikan Kecerahan Video di Hero Section

## Masalah
Video di hero section terlihat gelap, kemungkinan disebabkan oleh:
1. Kelas CSS yang tidak cocok antara Home.js dan main.css
2. Background hitam di hero section
3. Kurangnya pengaturan kecerahan video

## Solusi yang Diperlukan

### 1. Perbaiki Kelas CSS di Home.js
- Ubah kelas iframe dari `hero-video` menjadi `youtubePlayer` agar sesuai dengan CSS di main.css
- Pastikan semua parameter YouTube sudah benar untuk kualitas video maksimal

### 2. Hapus Background Hitam
- Hapus background hitam di `.hero` (baris 804 di main.css)
- Hapus background hitam di `.p-hero-top` (baris 904 di main.css)

### 3. Tambahkan CSS untuk Kecerahan Video
- Tambahkan filter brightness untuk video
- Pastikan video mengisi seluruh container tanpa distorsi

## Implementasi

### Perubahan di Home.js
```javascript
// Ubah baris 64
className="hero-video"
// Menjadi
className="youtubePlayer"

// Tambahkan parameter untuk kualitas video di URL
// Tambahkan &vq=hd1080 jika belum ada
```

### Perubahan di main.css
```css
// Hapus background hitam di baris 804
.hero {
  // background: #000; Hapus baris ini
}

// Hapus background hitam di baris 904
.p-hero-top {
  // background: #000; Hapus baris ini
}

// Tambahkan filter brightness untuk video
.p-hero-top__video .youtubePlayer {
  // ... properti yang ada
  filter: brightness(1.1) contrast(1.05);
}
```

## Langkah Implementasi
1. Ubah kelas iframe di Home.js
2. Hapus background hitam di main.css
3. Tambahkan filter brightness untuk video
4. Uji coba perubahan