# MySQL AI Query Generator

## 📌 Deskripsi
Proyek ini adalah **generator query otomatis berbasis AI** yang menghubungkan **database MySQL** dengan **OpenAI GPT-4**. Sistem ini dapat mengambil struktur database, mengirimkannya ke OpenAI, dan mendapatkan **50 query relasi dengan keterangan singkat**.

## ✨ Fitur Utama
- 🛠 **Koneksi ke MySQL** menggunakan `mysql2`
- 📊 **Mengambil Struktur Database** untuk memahami tabel & kolom
- 🧠 **Menggunakan OpenAI GPT-4** untuk menghasilkan query SQL otomatis
- 📄 **Menampilkan Output Terstruktur** dalam format JSON atau teks

## 📂 Struktur Proyek
```plaintext
📁 mySQL-AI
├── 📄 main.js              # File utama untuk menjalankan program
├── 📄 db.js                # Konfigurasi koneksi database
├── 📄 openaiService.js     # Integrasi dengan OpenAI API
├── 📄 queryService.js      # Mengambil struktur database dari MySQL
├── 📄 package.json         # Metadata dan dependencies proyek
├── 📄 .env                 # File konfigurasi API Keys dan Database Credentials
```

## 🚀 Instalasi dan Penggunaan

### 1️⃣ **Kloning Repository**
```bash
git clone https://github.com/username/mysql-ai-query-generator.git
cd mysql-ai-query-generator
```

### 2️⃣ **Instal Dependensi**
```bash
npm install
```

### 3️⃣ **Konfigurasi API & Database**
Buat file `.env` dengan isi berikut:
```ini
OPENAI_API_KEY=your_openai_api_key
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_DATABASE=your_database_name
```

### 4️⃣ **Menjalankan Program**
```bash
npm start
```
Atau untuk mode pengembangan:
```bash
npm run dev
```

## 📌 Cara Kerja
1. **Mengambil Struktur Database**  
   - `queryService.js` membaca tabel & kolom dari **INFORMATION_SCHEMA** MySQL.
2. **Menyusun Prompt AI**  
   - Data struktur database dikirim ke OpenAI dengan instruksi untuk membuat 50 query relasi.
3. **Mendapatkan Jawaban dari OpenAI**  
   - OpenAI membalas dengan daftar query SQL beserta penjelasannya.
4. **Menampilkan Output**  
   - Hasilnya dicetak di console atau dapat disimpan dalam file.

## ⚠️ Disclaimer
> **Gunakan dengan bijak!** Proyek ini dirancang untuk membantu analisis database, tetapi **tidak menjamin semua query yang dihasilkan benar**. Periksa dan validasi query sebelum mengeksekusinya di database produksi.

📜 **Lisensi**: MIT | **Kontribusi** dipersilakan! 🚀
