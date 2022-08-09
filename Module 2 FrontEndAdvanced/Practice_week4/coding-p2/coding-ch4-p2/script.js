var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var tips = [];
var totals = [];

var tip = 0;
var total = 0;

function calcTip(num) {
  num >= 50 && num <= 300 ? (tip = num * 0.15) : (tip = num * 0.2);
  return tip;
}

for (var i = 0; i < 10; i++) {
  tip = calcTip(bills[i]);
  tips.push(tip);
  total = bills[i] + tip;
  totals.push(total);
}
console.log(tips, totals);
