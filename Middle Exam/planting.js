const lahan = [
  ["subur", "subur", "subur", "kering"],
  ["subur", "kering", "kering", "kering"],
  ["subur", "subur", "subur", "kering"],
  ["kering", "kering", "kering", "kering"],
];

const cuaca = {
  temperature: 25, // °C
  humidity: 60, // %
  windSpeed: 10, // km/h
};

function cuacaCocok(weather) {
  const tempOk = weather.temperature >= 20 && weather.temperature <= 30;
  const humidityOk = weather.humidity > 50;
  const windOk = weather.windSpeed < 15;
  return tempOk && humidityOk && windOk;
}

function prosesLahan(grid) {
  const hasil = grid.map((row) => row.slice());

  for (let i = 0; i < hasil.length; i++) {
    const row = hasil[i];
    let countSubur = 0;
    for (let j = 0; j < row.length; j++) {
      if (row[j] === "subur") countSubur++;
    }
    const rowLength = row.length;
    const ratio = countSubur / rowLength;
    if (countSubur > 0 && ratio < 0.5) {
      for (let j = 0; j < rowLength; j++) {
        hasil[i][j] = "kering";
      }
    }
  }

  return hasil;
}

function hitungTotalSubur(grid) {
  let total = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "subur") total++;
    }
  }
  return total;
}

const lahanSetelah = prosesLahan(lahan);
const totalSubur = hitungTotalSubur(lahanSetelah);

let totalDitani = 0;
if (cuacaCocok(cuaca)) {
  totalDitani = totalSubur;
} else {
  totalDitani = 0;
}

console.log(`Total petak subur: ${totalSubur}`);
console.log(`Total petak yang ditanami: ${totalDitani}`);
if (!cuacaCocok(cuaca)) {
  console.log("Cuaca tidak cocok untuk bercocok tanam");
}

//Jika humidity diubah menjadi 40 maka outputnya adalah:
//Total petak subur: 6
//Total petak yang ditanami: 0
//Cuaca tidak cocok untuk bercocok tanam
