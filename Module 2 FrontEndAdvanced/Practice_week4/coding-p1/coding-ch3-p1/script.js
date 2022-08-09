const dolphin = [97, 112, 101];
const koala = [109, 95, 106];

var sumd = 0;
var avgd = 0;

var sumk = 0;
var avgk = 0;

for (var i = 0; i < dolphin.length; i++) {
  sumd += dolphin[i];
}

for (var i = 0; i < koala.length; i++) {
  sumk += koala[i];
}

avgd = sumd / 3;
avgk = sumk / 3;

if (avgd > avgk && avgd > 100) {
  console.log("DOLPHINS win!");
} else if (avgk > avgd && avgk > 100) {
  console.log("KOALAS win!");
} else if (avgd == avgk && avgd > 100) {
  console.log("It is a draw!");
} else {
  console.log("Both teams scored below 100");
}
