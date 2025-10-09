let studentsScore = [
  { name: "Andi", score: 90 },
  { name: "Rudi", score: 80 },
  { name: "Dira", score: 100 },
];

let highest = studentsScore[0];

for (let i = 1; i < studentsScore.length; i++) {
  if (studentsScore[i].score > highest.score) {
    highest = studentsScore[i];
  }
}

console.log(
  `Siswa dengan nilai tertinggi adalah ${highest.name} dengan nilai ${highest.score}`
);
