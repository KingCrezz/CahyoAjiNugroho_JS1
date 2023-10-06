// Menggunakan if, else, dan nested if
let nilai = 90;

if (nilai >= 90) {
  console.log("Nilai A");
} else if (nilai >= 80) {
  console.log("Nilai B");
} else if (nilai >= 70) {
  console.log("Nilai C");
} else {
  console.log("Nilai D");
}

// Menggunakan switch case
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah Senin");
    break;
  case "Selasa":
    console.log("Hari ini adalah Selasa");
    break;
  case "Rabu":
    console.log("Hari ini adalah Rabu");
    break;
  default:
    console.log("Hari ini bukan hari kerja");
}

// Menggunakan for statement
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi ke-" + i);
}

// Menggunakan while loop
let count = 0;
while (count < 3) {
  console.log("Perulangan ke-" + (count + 1));
  count++;
}

// Menggunakan do-while loop
let angka = 1;
do {
  console.log("Angka: " + angka);
  angka++;
} while (angka <= 3);

// Menggunakan function
function tambah(a, b) {
  return a + b;
}

let hasil = tambah(5, 3);
console.log("Hasil penambahan: " + hasil);