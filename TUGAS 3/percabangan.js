let input = prompt("Masukkan nilai (0-100):");
let nilai = parseFloat(input);

if (isNaN(nilai) || nilai < 0 || nilai > 100) {
  alert("Input tidak valid. Masukkan angka antara 0 sampai 100.");
} else {
  let grade;
  if (nilai >= 85) {
    grade = "A";
  } else if (nilai >= 70 && nilai <= 84) {
    grade = "B";
  } else if (nilai >= 55 && nilai <= 69) {
    grade = "C";
  } else if (nilai >= 40 && nilai <= 54) {
    grade = "D";
  } else if (nilai <= 39 && nilai >= 0) {
    grade = "E";
  } else {
    grade = "Tidak ada konversi yang ditentukan untuk nilai ini.";
  }

  alert(`Nilai: ${nilai}\nKonversi huruf: ${grade}`);
}
