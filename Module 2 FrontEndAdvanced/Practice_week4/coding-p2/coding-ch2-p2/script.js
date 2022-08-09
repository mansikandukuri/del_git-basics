var bill = [125, 555, 44];
var tip = [];
var total = [];

function calcTip(num) {
  for (var i = 0; i < num.length; i++) {
    if (num[i] > 50 && num[i] < 300) {
      tip[i] = (15 / 100) * num[i];
    } else {
      tip[i] = (20 / 100) * num[i];
    }
    total[i] = num[i] + tip[i];
  }
  return total;
}

console.log(calcTip(bill));
