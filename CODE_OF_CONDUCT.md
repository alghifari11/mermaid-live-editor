graph LR
  A[Gudang] --> B{Input Stok}
  B --> C{Approve Stok}
  C --> D{Tambah Stok} [disetujui]
  C --> E{Tolak Stok} [ditolak]
  F[Pengguna] --> G{Pesan Pulpen}
  G --> H{Kurangi Stok}
  I[Supervisor] --> J{Lihat Laporan}
  J --> B
  J --> G
  A --> K{Registrasi Akun}
  F --> K
  I --> K
