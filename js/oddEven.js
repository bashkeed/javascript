var numberCheck = 0;

function oddEven(numberCheck) {
    let i = 0;
    let sum = 0;
  while (i <= numberCheck) {
    if (numberCheck % 2 !== 0) {
      console.log("not an even number");
    } else {
      sum += i ;
      i += 2
    }
    }
return sum;
}
console.log(oddEven(5))
console.log(sum)

