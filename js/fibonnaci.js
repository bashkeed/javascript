let num1 = 0;
let num2 = 1;

for (let i = 1; i <= 18; i++){
  var fib = num1 + num2;
  num1 = num2;
  num2 = fib;
  console.log(fib);
}
