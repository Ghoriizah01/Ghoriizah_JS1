// Meminta Input Pengguna dengan Do-While
let angka;
do {
  angka = parseInt(prompt("Masukkan angka positif: "));
} while (isNaN(angka) || angka <= 0);

console.log("Anda memasukkan angka positif: " + angka);
