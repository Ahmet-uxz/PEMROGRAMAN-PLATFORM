let motoGP = [
  {
    circuit: "Losail",
    location: "Qatar",
    winner: { firstName: "Andrea", lastName: "Dovizioso", country: "Italy" },
  },
  {
    circuit: "Autodromo",
    location: "Argentine",
    winner: { firstName: "Cal", lastName: "Crutchlow", country: "UK" },
  },
  {
    circuit: "De Jerez",
    location: "Spain",
    winner: { firstName: "Valentino", lastName: "Rossi", country: "Italy" },
  },
  {
    circuit: "Mugello",
    location: "Italy",
    winner: { firstName: "Andrea", lastName: "Dovizioso", country: "Italy" },
  },
];

let groupedByCountry = {};

for (let event of motoGP) {
  let country = event.winner.country;
  let fullName = `${event.winner.firstName} ${event.winner.lastName}`;
  let winLocation = `${event.circuit}, ${event.location}`;

  if (!groupedByCountry[country]) {
    groupedByCountry[country] = {
      winningCircuits: [],
      totalWin: 0,
    };
  }

  groupedByCountry[country].winningCircuits.push({
    name: fullName,
    winLocation: winLocation,
  });

  groupedByCountry[country].totalWin++;
}

for (let country in groupedByCountry) {
  console.log(`Negara: ${country}`);
  console.log(`Total menang: ${groupedByCountry[country].totalWin}`);
  console.log("Daftar kemenangan:");

  groupedByCountry[country].winningCircuits.forEach((race, index) => {
    console.log(`${index + 1}. ${race.name} menang di ${race.winLocation}`);
  });

  console.log("-----------------------------");
}
