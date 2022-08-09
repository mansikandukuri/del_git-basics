var dolphin = [44, 23, 71];
var koala = [125, 134, 149];

var sum = 0;

var calcAverage = (num) => {
  sum = 0;
  for (var i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }
  avg = sum / num.length;
  return avg;
};

var avgDolphin = calcAverage(dolphin);
var avgKoala = calcAverage(koala);

var checkWinner = (num1, num2) => {
  if (num1 >= 2 * num2) {
    console.log("Dolphins Win (", +avgDolphin + " vs", +avgKoala + ")");
  } else if (num2 >= 2 * num1) {
    console.log("Koalas Win (", +avgKoala + " vs", +avgDolphin + ")");
  } else {
    console.log("Nobody Wins");
  }
};

checkWinner(avgDolphin, avgKoala);
