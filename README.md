# 🛵 Dokumentasi Proyek: Indomobil eMotor Undaan (Company Profile)

## Deskripsi Proyek

Ini adalah repositori untuk situs web resmi Indomobil eMotor cabang Undaan, Surabaya. Situs ini berfungsi sebagai profil perusahaan dan katalog produk digital, menampilkan solusi transportasi sepeda motor listrik terbesar di wilayah Surabaya dan sekitarnya.

Misi utama proyek ini adalah menyediakan platform yang informatif dan menarik untuk memamerkan model-model motor listrik unggulan, yaitu **Adora** dan **Tyrano**.

## Fitur Utama

Situs web ini mencakup fitur-fitur utama berikut:

* **Integrasi Peta Interaktif:** Menampilkan lokasi kantor cabang Indomobil Undaan di Surabaya menggunakan React Leaflet.
* **Tampilan Produk Interaktif 360°:** Pengunjung dapat melihat model motor listrik Adora dan Tyrano dari berbagai sudut menggunakan fitur *interactive 360 viewer*.
* **Daftar Produk Lengkap:** Menampilkan berbagai varian warna dan harga jual, seperti model Adora mulai dari Rp 26.350.000 dan Tyrano mulai dari Rp 27.500.000.
* **Testimoni Pelanggan:** Bagian ulasan untuk membangun kepercayaan dengan menampilkan pengalaman pelanggan sebelumnya.
* **Animasi Scroll Reveal:** Menggunakan *Intersection Observer Hook* khusus (`useIntersectionObserver.js`) untuk memicu animasi saat pengguna menggulir ke berbagai bagian halaman.

## Teknologi yang Digunakan

Proyek ini dibangun menggunakan *stack* teknologi modern berikut:

* **Framework:** React v19.1.1
* **Build Tool:** Vite
* **Routing:** `react-router-dom` v7.8.2
* **Mapping:** `leaflet` dan `react-leaflet` untuk menampilkan peta lokasi
* **Styling:** CSS Murni dengan variabel CSS
* **Ikon:** Feather Icons (dimuat via CDN)

## Instalasi dan Setup Lokal

Untuk menjalankan proyek ini di lingkungan lokal Anda, ikuti langkah-langkah berikut:

### Prasyarat

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi yang direkomendasikan adalah `^20.19.0` atau yang lebih baru, sesuai konfigurasi `vite`).

### 1. Kloning Repositori

```bash
git clone <URL_REPOSITORI_ANDA>
cd malvin1108/company_profile
