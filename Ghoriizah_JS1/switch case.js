// Meminta pengguna untuk memasukkan angka
var angka = parseInt(prompt("Masukkan angka (1, 2, atau 3):"));

// Menjalankan switch-case berdasarkan nilai yang dimasukkan pengguna
switch (angka) {
  case 1:
    console.log("Anda memilih angka satu.");
    break;
  case 2:
    console.log("Anda memilih angka dua.");
    break;
  case 3:
    console.log("Anda memilih angka tiga.");
    break;
  default:
    console.log("Anda memasukkan angka yang tidak valid.");
}
