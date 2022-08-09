const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    draw: 3.25,
    team2: 6.5,
  },
  printGoals: function (arr) {},
};
//1
const { scored } = game;
console.log(scored);

for (const [goal, player] of scored.entries()) {
  console.log(`Goal ${goal + 1} : ${player}`);
}
//2
let sum = 0,
  avg;
const value = Object.values(game.odds);
for (const values of value) {
  sum = sum + values;
  avg = sum / value.length;
}
console.log(`Average odd is ${avg}`);
//3
for (const [team, odd] of Object.entries(game.odds)) {
  const strTeam = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${strTeam} : ${odd}`);
}
