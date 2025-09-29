let nama = ["Ahmat", "Reza", "Rizki", "Ardi", "Rasyah"];
console.log(nama);

for (let i = 0; i < nama.length; i++) {
  console.log(nama[i]);
}

nama.push("Latip");
console.log(nama);

nama.shift();
console.log(nama);

console.log("Nama setelah di modifikasi:", nama);
