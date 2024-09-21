# Aplikasi Catatan Pribadi

Aplikasi Catatan Pribadi adalah aplikasi web sederhana yang memungkinkan pengguna untuk menambah, menghapus, mencari, dan mengarsipkan catatan. Aplikasi ini dibuat menggunakan **React** dengan state management sederhana, serta menggunakan **Flexbox** dan **Grid CSS** untuk tata letak responsif.

## Fitur Utama

1. **Menampilkan Daftar Catatan**  
   Aplikasi menampilkan daftar catatan yang tersimpan di dalam state. Jika tidak ada catatan, akan ditampilkan pesan bahwa catatan kosong.
   
2. **Menambah Catatan**  
   Pengguna dapat menambah catatan baru melalui form input. Catatan baru disimpan hanya di memori (tidak tersimpan di localStorage).

3. **Menghapus Catatan**  
   Setiap catatan memiliki tombol hapus yang memungkinkan pengguna untuk menghapus catatan dari daftar.

4. **Fitur Pencarian**  
   Aplikasi menyediakan fitur pencarian yang memungkinkan pengguna mencari catatan berdasarkan judul.

5. **Batas Karakter pada Judul**  
   Judul catatan dibatasi maksimal 50 karakter. Sisa karakter yang bisa digunakan ditampilkan di bawah input.

6. **Mengarsipkan dan Memindahkan Catatan**  
   Pengguna dapat mengarsipkan catatan, yang akan memindahkannya ke daftar arsip. Catatan yang diarsip dapat dipindahkan kembali ke daftar aktif.

## Teknologi yang Digunakan

- **React**: Library JavaScript untuk membangun antarmuka pengguna.
- **CSS Flexbox & Grid**: Digunakan untuk membuat tata letak yang responsif.
- **JavaScript (ES6+)**: Digunakan untuk logika fungsional dan manipulasi state.
  
## Prasyarat

Sebelum memulai proyek ini, pastikan bahwa Anda telah menginstall **Node.js** dan **npm** di komputer Anda.

## Instalasi

1. Clone repositori ini:

    ```bash
    git clone https://github.com/syawqy/personal-note.git
    ```

2. Navigasi ke direktori proyek:

    ```bash
    cd personal-note
    ```

3. Install semua dependensi yang diperlukan:

    ```bash
    npm install
    ```

4. Jalankan aplikasi:

    ```bash
    npm run dev
    ```

5. Akses aplikasi di browser pada `http://localhost:5173`.

## Struktur Proyek

```
src/
  ├── components/
  │   ├── NoteList.jsx        # Komponen untuk menampilkan daftar catatan
  │   ├── NoteForm.jsx        # Komponen untuk form penambahan catatan
  │   └── NoteItem.jsx        # Komponen individu untuk setiap catatan
  ├── styles/
  │   ├── style.css           # Styling utama untuk aplikasi
  ├── utils/
  │   ├── index.js            # Utility
  ├── App.jsx                 # Komponen utama yang memuat semua fitur
  └── index.jsx               # Entry point aplikasi
```

## Cara Menggunakan

1. **Tambah Catatan**: Isi form di bagian atas dengan judul dan isi catatan, kemudian tekan tombol "Tambah Catatan".
2. **Hapus Catatan**: Klik tombol "Hapus" di bagian bawah setiap catatan untuk menghapus catatan tersebut.
3. **Cari Catatan**: Gunakan kolom pencarian untuk mencari catatan berdasarkan judul. Jika kolom pencarian dikosongkan, semua catatan akan ditampilkan.
4. **Arsipkan Catatan**: Klik tombol "Arsipkan" untuk memindahkan catatan ke daftar arsip, atau "Pindahkan" untuk mengembalikan catatan ke daftar aktif.


## Responsivitas

Aplikasi ini didesain untuk responsif dan bekerja baik pada perangkat desktop maupun mobile, menggunakan **CSS Grid** untuk penataan layout catatan dan **Flexbox** untuk komponen UI seperti form dan tombol.

## Pengembangan Lebih Lanjut

- **Penyimpanan Data**: Saat ini, data catatan hanya disimpan di memori, sehingga akan hilang saat halaman di-refresh. Anda bisa menambahkan **localStorage** atau **database** untuk penyimpanan data yang lebih permanen.
- **Fitur Penanda Penting**: Menambahkan fitur untuk menandai catatan sebagai penting agar dapat ditampilkan secara prioritas.
- **Filter Berdasarkan Tanggal**: Menambahkan filter untuk menampilkan catatan berdasarkan tanggal pembuatan atau terakhir diubah.

## Kontribusi

Kontribusi sangat terbuka! Jika Anda ingin berkontribusi, silakan fork repositori ini, buat branch fitur baru, dan kirim pull request. Jangan lupa untuk mendokumentasikan setiap perubahan yang Anda lakukan.

## Lisensi

Proyek ini dilisensikan di bawah **MIT License** - lihat file [LICENSE](LICENSE) untuk informasi lebih lanjut.

---
