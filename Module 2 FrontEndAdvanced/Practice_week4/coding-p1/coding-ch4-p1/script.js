var bill = 430;
var tip = 0;

bill > 50 && bill < 300 ? between(bill) : not(bill);

function between(bill) {
  tip = (15 / 100) * bill;
  return tip;
}
function not(bill) {
  tip = (20 / 100) * bill;
  return tip;
}
var total = bill + tip;

console.log(
  "The bill was",
  +bill + ", the tip was",
  +tip + ", and the total value is",
  +total
);
