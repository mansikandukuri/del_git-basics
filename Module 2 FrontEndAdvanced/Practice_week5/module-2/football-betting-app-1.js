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
//TASK 1
const { players } = game;
const [players1, players2] = players;
console.log(players1, players2);

//TASK 2
const [gk1] = players1;
console.log(gk1);
const [gk2] = players2;
console.log(gk2);

//TASK 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//TASK4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

//TASK5
const { team1, draw, team2 } = game.odds;
console.log(game.odds);

// console.log(team1, draw, team2);

//TASK7

if (team1 < team2) {
  console.log("Team 1 is most likely to win.");
} else {
  console.log("Team 2 is most likely to win.");
}
